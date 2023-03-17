from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy import update
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.middleware.cors import CORSMiddleware

import logging

from app.sql_app.db import get_session
from app.sql_app.models import Users, UsersCreate, User4Login, Websites
from app.sql_app.user_password import Hasher
from app.sql_app.db import init_db
from app.jwt.auth import AuthHandler
from app.shell.azure import add_new_user, add_new_website, launch_command_into_skycloud

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

logger = logging.getLogger(__name__)

auth_handler = AuthHandler()


@app.on_event("startup")
async def on_startup():
    await init_db()


@app.get("/ping")
async def pong():
    return {"ping": "pong!"}


@app.get("/users", status_code=200)
async def get_users(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Users))
    users = result.scalars().all()
    return users


@app.post("/register", status_code=201)
async def register(users: UsersCreate, session: AsyncSession = Depends(get_session)):
    query_email = await session.execute(select(Users).where(Users.email == users.email))
    search_email = query_email.scalars().all()
    if search_email:
        raise HTTPException(status_code=409, detail="User already exist")
    if add_new_user(skycloud_username=users.fullname, skycloud_password=users.password):
        encrypted_password = Hasher.get_password_hash(users.password)
        user = Users(fullname=users.fullname, email=users.email, password=encrypted_password)
        session.add(user)
        await session.commit()
        await session.refresh(user)
        return user


@app.post("/login", status_code=200)
async def login(users: User4Login, session: AsyncSession = Depends(get_session)):
    query_email = await session.execute(select(Users).where(Users.email == users.email))
    search_email = query_email.scalars().all()
    if not search_email:
        raise HTTPException(status_code=404, detail="User not found")

    user_password = search_email[0].password
    verify_password = Hasher.verify_password(plain_password=users.password, hashed_password=user_password)
    if verify_password:
        token = auth_handler.encode_token(users.email)
        return f'Token : {token} . Successfully login'
    else:
        raise HTTPException(status_code=401, detail="Wrong password")


@app.get("/websites", status_code=200)
async def get_websites(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Websites))
    websites = result.scalars().all()
    return websites


@app.get("/user_websites", status_code=200)
async def get_websites_from_user(user_id: int, session: AsyncSession = Depends(get_session)):
    query_websites = await session.execute(select(Websites).where(Websites.user_id == user_id))
    search_websites = query_websites.scalars().all()
    return search_websites


@app.post("/user_websites", status_code=200)
async def post_websites_from_user(name: str, user_name: str,  session: AsyncSession = Depends(get_session)):

    # 1. Verify if website already exist (by user_id and name)
    #query_websites = await session.fetchall(f"select * from websites w inner join users u on u.id = w.user_id where u.fullname = {user_name} and w.name = {name}")
    #search_websites = query_websites.scalars().all()
    # if query_websites:
    #     raise HTTPException(status_code=409, detail="This name of website already exist for this user")

    query_user = await session.execute(select(Users).where(Users.fullname == user_name))
    search_user = query_user.scalars().all()
 
    # 2. Create website on bdd without url
    website = Websites(name=name, user_id= search_user[0].id)
    session.add(website)
    await session.commit()
    await session.refresh(website)

    # 3. Launch script ssh to create website on server (then finish, it has to return url)
    if add_new_website(skycloud_username=user_name, skycloud_projectname= name):
        
        # 4. Modify the new created website with the url
        q = update(Websites).where(Websites.user_id == search_user[0].id and Websites.name == name)
        accessSsh = f'ssh {user_name}@40.67.233.34'
        q = q.values(url=accessSsh)
        q.execution_options(synchronize_session="fetch")
        await session.execute(q)

        # 5. Get the modified website
        query_website = await session.execute(
            select(Websites).where(Websites.user_id == search_user[0].id and Websites.name == name))
        search_website = query_website.scalars().all()
        return search_website


@app.get("/storage", status_code=200)
async def get_storage():
    script = launch_command_into_skycloud("df -h | grep -w / | awk '{print $5}'")
    return script.replace("\n", '')


@app.get('/unprotected')
def unprotected():
    return {'hello': 'world'}


@app.get('/protected')
def protected(username=Depends(auth_handler.auth_wrapper)):
    return {'name': username}


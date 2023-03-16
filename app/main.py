from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession

import logging

from app.sql_app.db import get_session
from app.sql_app.models import Users, UsersCreate, Websites, WebsitesCreate
from app.sql_app.user_password import Hasher
from app.jwt.auth import AuthHandler

app = FastAPI()

logger = logging.getLogger(__name__)

auth_handler = AuthHandler()


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
    encrypted_password = Hasher.get_password_hash(users.password)
    user = Users(fullname=users.fullname, email=users.email, password=encrypted_password)
    session.add(user)
    await session.commit()
    await session.refresh(user)
    return user


@app.get("/login", status_code=200)
async def login(email: str, password: str, session: AsyncSession = Depends(get_session)):
    query_email = await session.execute(select(Users).where(Users.email == email))
    search_email = query_email.scalars().all()
    if not search_email:
        raise HTTPException(status_code=404, detail="User not found")

    user_password = search_email[0].password
    verify_password = Hasher.verify_password(plain_password=password, hashed_password=user_password)
    if verify_password:
        token = auth_handler.encode_token(email)
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
async def post_websites_from_user(name: str, user_id: int,  session: AsyncSession = Depends(get_session)):
    # 1. Verify if website already exist (by user_id and name)
    query_websites = await session.execute(select(Websites).where(Websites.user_id == user_id and Websites.name == name))
    search_websites = query_websites.scalars().all()
    if search_websites:
        raise HTTPException(status_code=409, detail="This name of website already exist for this user")
    # 2. Create website on bdd without url
    website = Websites(name=name, user_id=user_id)
    session.add(website)
    await session.commit()
    await session.refresh(website)
    # 3. Launch script ssh to create website on server (then finish, it has to return url)
    url = "test@url"
    # 4. Modify the new created website with the url
    website_dict = search_websites.dict()
    await website_dict.update({"url": url})



@app.get('/unprotected')
def unprotected():
    return {'hello': 'world'}


@app.get('/protected')
def protected(username=Depends(auth_handler.auth_wrapper)):
    return {'name': username}


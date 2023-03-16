from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession

import logging

from app.sql_app.db import get_session
from app.sql_app.models import Users, UsersCreate
from app.sql_app.user_password import Hasher
from app.jwt.auth import AuthHandler
from fastapi.middleware.cors import CORSMiddleware

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


@app.get("/ping")
async def pong():
    return {"ping": "pong!"}


@app.get("/users")
async def get_users(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Users))
    users = result.scalars().all()
    return 200, users


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


@app.get("/login")
async def login(email, password, session: AsyncSession = Depends(get_session)):
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


@app.get('/unprotected')
def unprotected():
    return {'hello': 'world'}


@app.get('/protected')
def protected(username=Depends(auth_handler.auth_wrapper)):
    return {'name': username}


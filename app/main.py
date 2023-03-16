from urllib import request

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession

import logging

from app.sql_app.db import get_session
from app.sql_app.models import Users, UsersCreate
from app.sql_app.user_password import Hasher

app = FastAPI()

logger = logging.getLogger(__name__)


@app.get("/ping")
async def pong():
    return {"ping": "pong!"}


@app.get("/users")
async def get_users(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Users))
    users = result.scalars().all()
    return 200, users


@app.post("/register")
async def register(users: UsersCreate, session: AsyncSession = Depends(get_session)):
    encrypted_password = Hasher.get_password_hash(users.password)
    user = Users(fullname=users.fullname, email=users.email, password=encrypted_password)
    session.add(user)
    await session.commit()
    await session.refresh(user)
    return 201, user


@app.get("/login")
async def login(email, password, session: AsyncSession = Depends(get_session)):
    query_email = await session.execute(select(Users).where(Users.email == email))
    search_email = query_email.scalars().all()
    if not search_email:
        raise HTTPException(status_code=404, detail="User not found")

    query_password = await session.execute(select(Users).where(Users.email == email))
    search_password = query_password.scalars().all()
    user_password = search_password[0].password

    verify_password = Hasher.verify_password(plain_password=password, hashed_password=user_password)
    if verify_password:
        return 200, "Successfully login"
    else:
        raise HTTPException(status_code=401, detail="Wrong password")

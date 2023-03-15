# from fastapi import Depends, FastAPI, HTTPException
# from sqlalchemy.ext.asyncio import AsyncSession
# from sqlalchemy.future import select
#
# from app.sql_app import crud
# from app.sql_app.schemas import users
# from typing import List
# from app.sql_app.database import database
# from app.sql_app.models import User, CreateUser
#
# app = FastAPI()
#
#
# @app.on_event("startup")
# async def startup():
#     await database.connect()
#
#
# @app.on_event("shutdown")
# async def shutdown():
#     await database.disconnect()
#
#
# @app.get("/")
# async def root():
#     return {"message": "Hello World"}
#
#
# @app.get("/users/", response_model=List[User])
# async def get_users():
#     query = users.select()
#     return await database.fetch_all(query)
#
#
# @app.post("/users/", response_model=User)
# async def create_user(user: CreateUser):
#     query = users.insert().values(fullname=user.fullname, email=user.email, password=user.password)
#     last_record_id = await database.execute(query)
#     return {**user.dict(), "id": last_record_id}
#
#
# @app.post("/login", status_code=200)
# def login(email: str, password: str, db: Session = Depends(get_db)):
#     db_user = crud.get_user_by_email(db, email=email)
#     if db_user is None:
#         raise HTTPException(status_code=404, detail="User not found")
#     encrypted_password = password + "notreallyhashed"
#     if db_user["password"] != encrypted_password:
#         raise HTTPException(status_code=401, detail="Invalid Password")
#     return {"Successfully login"}
# #
# #
# # @app.post("/register", status_code=200)
# # async def register(user: schemas.User, db: AsyncSession = Depends(get_session)):
# #     db_user = crud.get_user_by_email(db, email=user.email)
# #     if db_user:
# #         raise HTTPException(status_code=400, detail="Email already registered")
# #     return crud.create_user(db=db, user=user)
import logging

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.sql_app.database import get_session
from app.sql_app.models import Users, UsersCreate
from app.sql_app import crud

app = FastAPI()


@app.get("/ping")
async def pong():
    return {"ping": "pong!"}


@app.get("/users")
async def get_users(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Users))
    users = result.scalars().all()
    return users


@app.post("/register")
async def register(user: UsersCreate, session: AsyncSession = Depends(get_session)):
    logging.info(f'--------------{Users.get_by_email(session, user.email)}-----------------------')
    print(f'--------------{Users.get_by_email(session, user.email)}-----------------------')
    if Users.get_by_email(session, user.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    create_user = crud.add_user(session, user.fullname, user.email, user.password)
    return create_user

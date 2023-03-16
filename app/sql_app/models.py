from sqlmodel import SQLModel, Field


class UsersBase(SQLModel):
    fullname: str
    email: str
    password: str


class Users(UsersBase, table=True):
    id: int = Field(default=None, primary_key=True)


class UsersCreate(UsersBase):
    pass

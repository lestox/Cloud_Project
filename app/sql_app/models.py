from sqlmodel import SQLModel, Field


class UsersBase(SQLModel):
    fullname: str
    email: str
    password: str

class UsersLogin(SQLModel):
    email: str
    password: str

class Users(UsersBase, table=True):
    id: int = Field(default=None, primary_key=True)


class UsersCreate(UsersBase):
    pass

class User4Login(UsersLogin):
    pass


class WebsitesBase(SQLModel):
    name: str
    user_id: int
    url: str = Field(default=None)


class Websites(WebsitesBase, table=True):
    id: int = Field(default=None, primary_key=True)


class WebsitesCreate(WebsitesBase):
    pass

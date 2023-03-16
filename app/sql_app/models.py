import logging

from sqlmodel import SQLModel, Field, select



class UsersBase(SQLModel):
    fullname: str
    email: str
    password: str


class Users(UsersBase, table=True):
    id: int = Field(default=None, primary_key=True)

    @classmethod
    async def get_by_email(cls, session, email):
        query = select(cls).where(cls.email == email)
        results = await session.execute(query)
        (result,) = results.one()
        logging.info(f'--------------{result}-----------------------')
        if result:
            return True
        else:
            return False

class UsersCreate(UsersBase):
    pass

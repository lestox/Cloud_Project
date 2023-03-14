import sqlalchemy

from .database import Base


class User(Base):
    __tablename__ = 'user'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True)
    fullname = sqlalchemy.Column(sqlalchemy.String(length=100))
    email = sqlalchemy.Column(sqlalchemy.String(length=100))
    password = sqlalchemy.Column(sqlalchemy.String(length=120))

# Base.metadata.create_all(engine)

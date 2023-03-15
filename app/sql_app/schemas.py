# import sqlalchemy
#
# metadata = sqlalchemy.MetaData()
#
# users = sqlalchemy.Table(
#     "users",
#     metadata,
#     sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
#     sqlalchemy.Column("fullname", sqlalchemy.String),
#     sqlalchemy.Column("email", sqlalchemy.String),
#     sqlalchemy.Column("password", sqlalchemy.String),
# )

# class User:
#     id: int
#     fullname: str
#     email: str
#     password: str
#
#     class Config:
#         orm_mode = True

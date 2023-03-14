import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base

# Define the MariaDB engine using MariaDB Connector/Python

SQLALCHEMY_DATABASE_URL = "mariadb+mariadbconnector://root:password@127.0.0.1:8081/data"

engine = create_engine(
	SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class User(Base):
	__tablename__ = 'user'
	id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True)
	fullname = sqlalchemy.Column(sqlalchemy.String(length=100))
	email = sqlalchemy.Column(sqlalchemy.String(length=100))
	password = sqlalchemy.Column(sqlalchemy.String(length=120))

# Base.metadata.create_all(engine)

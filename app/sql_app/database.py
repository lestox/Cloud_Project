from sqlalchemy import create_engine
import pymysql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Define the MariaDB engine using MariaDB Connector/Python

SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:password@127.0.0.1:3306/data"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


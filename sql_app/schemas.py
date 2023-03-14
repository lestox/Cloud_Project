from typing import List, Union
from pydantic import BaseModel

class User(UserBase):
  id: int
  fullname: str
  email: str
  password: str

  class Config:
    orm_mode = True
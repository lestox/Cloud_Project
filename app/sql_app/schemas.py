class User:
    id: int
    fullname: str
    email: str
    password: str

    class Config:
        orm_mode = True

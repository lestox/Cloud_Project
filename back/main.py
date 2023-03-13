from fastapi import FastAPI, HTTPException

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/login")
async def login(username: str, password: str):
    if username != "toto":
        raise HTTPException(status_code=404, detail="User not found")
    return {"Successfully login"}


@app.post("/register")
async def register():
    return {"message": "Hello World"}
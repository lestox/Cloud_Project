# from sqlalchemy.ext.asyncio import AsyncSession
# from . import models, schemas
#
#
# def get_user(db: AsyncSession, user_id: int):
#     return db.execute(models.User).filter(models.User.id == user_id).first()
#
#
# def get_user_by_email(db: Session, email: str):
#     return db.query(models.User).filter(models.User.email == email).first()
#
#
# def get_users(db: Session, skip: int = 0, limit: int = 100):
#     return db.query(models.User).offset(skip).limit(limit).all()
#
#
# def create_user(db: Session, user: schemas.User):
#     fake_hashed_password = user.password + "notreallyhashed"
#     db_user = models.User(fullname=user.fullname, email=user.email, hashed_password=fake_hashed_password)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user

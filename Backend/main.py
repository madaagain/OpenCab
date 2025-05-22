from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.orm import declarative_base, sessionmaker
import os
from dotenv import load_dotenv

app = FastAPI()

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

LIMIT = 100  # Limite d'inscriptions

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    phone = Column(String, nullable=False)
    vtc_platforms = Column(String, nullable=True)
    referral = Column(String, nullable=True)
    accepted_terms = Column(Boolean, nullable=False)

Base.metadata.create_all(bind=engine)

class RegisterRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone: str
    vtc_platforms: str
    referral: str
    accepted_terms: bool

@app.post("/register")
def register_user(data: RegisterRequest):
    if not data.accepted_terms:
        raise HTTPException(status_code=400, detail="Les CGU doivent être acceptées.")

    db = SessionLocal()
    if db.query(User).count() >= LIMIT:
        raise HTTPException(status_code=400, detail="Limite d'inscriptions atteinte.")
    
    if db.query(User).filter_by(email=data.email).first():
        raise HTTPException(status_code=400, detail="Email déjà inscrit.")

    user = User(**data.dict())
    db.add(user)
    db.commit()
    return {"message": "Inscription réussie"}

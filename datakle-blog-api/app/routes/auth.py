from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Admin, Author
from app.schemas import AdminLoginRequest, LoginRequest, TokenResponse
from app.security import verify_password, create_access_token


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/admin/login", response_model=TokenResponse)
def admin_login(login_data: AdminLoginRequest, db: Session = Depends(get_db)):

    admin = (
        db.query(Admin)
        .filter(Admin.admin_email == login_data.admin_email)
        .first()
    )

    if not admin:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect."
        )

    if admin.admin_status != "active":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Compte admin inactif."
        )

    if not verify_password(login_data.password, admin.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect."
        )

    token = create_access_token({
        "sub": str(admin.admin_id),
        "email": admin.admin_email,
        "role": "admin"
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }


@router.post("/author/login", response_model=TokenResponse)
def author_login(login_data: LoginRequest, db: Session = Depends(get_db)):

    author = (
        db.query(Author)
        .filter(Author.author_email == login_data.author_email)
        .first()
    )

    if not author:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect."
        )

    if not verify_password(login_data.password, author.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect."
        )

    token = create_access_token({
        "sub": str(author.author_id),
        "email": author.author_email,
        "role": "author"
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }
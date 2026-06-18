import os
import shutil
import re

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
    UploadFile,
    File,
    Form
)
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Author
from app.schemas import AuthorResponse
from app.security import hash_password
from app.dependencies import require_admin


router = APIRouter(
    prefix="/authors",
    tags=["Authors"]
)


ALLOWED_IMAGE_EXTENSIONS = {
    "jpg",
    "jpeg",
    "png",
    "webp",
    "gif"
}

BASE_URL = os.getenv("BASE_URL", "http://127.0.0.1:8000")


def clean_filename(filename: str) -> str:
    name, extension = os.path.splitext(filename)

    name = name.lower().strip()
    name = re.sub(r"\s+", "-", name)
    name = re.sub(r"[^a-z0-9-_]", "", name)

    extension = extension.lower()

    if not name:
        name = "avatar"

    return f"{name}{extension}"


def get_unique_filename(upload_dir: str, filename: str) -> str:
    name, extension = os.path.splitext(filename)

    final_filename = filename
    counter = 1

    while os.path.exists(os.path.join(upload_dir, final_filename)):
        final_filename = f"{name}-{counter}{extension}"
        counter += 1

    return final_filename


def save_author_avatar(avatar: UploadFile) -> str:
    if not avatar.filename:
        raise HTTPException(
            status_code=400,
            detail="Nom de fichier invalide."
        )

    extension = avatar.filename.split(".")[-1].lower()

    if extension not in ALLOWED_IMAGE_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Type d'image non autorisé."
        )

    upload_dir = os.path.join(
        "app",
        "uploads",
        "authors",
        "avatars"
    )

    os.makedirs(upload_dir, exist_ok=True)

    cleaned_filename = clean_filename(avatar.filename)
    final_filename = get_unique_filename(upload_dir, cleaned_filename)

    file_path = os.path.join(upload_dir, final_filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(avatar.file, buffer)

    return f"{BASE_URL}/uploads/authors/avatars/{final_filename}"


@router.post("/", response_model=AuthorResponse, status_code=status.HTTP_201_CREATED)
def create_author(
    author_full_name: str = Form(...),
    author_email: str = Form(...),
    password: str = Form(...),
    avatar: UploadFile | None = File(None),
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    existing_author = (
        db.query(Author)
        .filter(Author.author_email == author_email)
        .first()
    )

    if existing_author:
        raise HTTPException(
            status_code=400,
            detail="Cet auteur existe déjà."
        )

    avatar_url = None

    if avatar:
        avatar_url = save_author_avatar(avatar)

    new_author = Author(
        author_full_name=author_full_name,
        author_email=author_email,
        avatar_url=avatar_url,
        password_hash=hash_password(password)
    )

    db.add(new_author)
    db.commit()
    db.refresh(new_author)

    return new_author


@router.get("/", response_model=list[AuthorResponse])
def get_authors(
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    return db.query(Author).all()


@router.get("/{author_id}", response_model=AuthorResponse)
def get_author(
    author_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    author = (
        db.query(Author)
        .filter(Author.author_id == author_id)
        .first()
    )

    if not author:
        raise HTTPException(
            status_code=404,
            detail="Auteur introuvable."
        )

    return author


@router.put("/{author_id}", response_model=AuthorResponse)
def update_author(
    author_id: int,
    author_full_name: str | None = Form(None),
    author_email: str | None = Form(None),
    password: str | None = Form(None),
    avatar: UploadFile | None = File(None),
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    author = (
        db.query(Author)
        .filter(Author.author_id == author_id)
        .first()
    )

    if not author:
        raise HTTPException(
            status_code=404,
            detail="Auteur introuvable."
        )

    if author_full_name is not None:
        author.author_full_name = author_full_name

    if author_email is not None:
        existing_author = (
            db.query(Author)
            .filter(
                Author.author_email == author_email,
                Author.author_id != author_id
            )
            .first()
        )

        if existing_author:
            raise HTTPException(
                status_code=400,
                detail="Cet email est déjà utilisé par un autre auteur."
            )

        author.author_email = author_email

    if password:
        author.password_hash = hash_password(password)

    if avatar:
        author.avatar_url = save_author_avatar(avatar)

    db.commit()
    db.refresh(author)

    return author


@router.delete("/{author_id}")
def delete_author(
    author_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    author = (
        db.query(Author)
        .filter(Author.author_id == author_id)
        .first()
    )

    if not author:
        raise HTTPException(
            status_code=404,
            detail="Auteur introuvable."
        )

    db.delete(author)
    db.commit()

    return {
        "message": "Auteur supprimé avec succès."
    }
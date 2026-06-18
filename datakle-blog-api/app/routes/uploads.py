import os
import uuid
import shutil

from fastapi import APIRouter, UploadFile, File, HTTPException, Depends

from app.dependencies import require_author_or_admin


router = APIRouter(
    prefix="/uploads",
    tags=["Uploads"]
)

ALLOWED_EXTENSIONS = {
    "jpg", "jpeg", "png", "webp", "gif",
    "mp4", "mov", "avi", "webm"
}

MAX_FILE_SIZE = 50 * 1024 * 1024


@router.post("/")
def upload_file(
    folder: str,
    file: UploadFile = File(...),
    current_user: dict = Depends(require_author_or_admin)
):

    allowed_folders = [
        "authors/avatars",
        "posts/covers",
        "posts/media",
        "videos"
    ]

    if folder not in allowed_folders:
        raise HTTPException(
            status_code=400,
            detail="Dossier non autorisé."
        )

    extension = file.filename.split(".")[-1].lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Type de fichier non autorisé."
        )

    file.file.seek(0, os.SEEK_END)
    file_size = file.file.tell()
    file.file.seek(0)

    if file_size > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400,
            detail="Fichier trop volumineux."
        )

    upload_dir = os.path.join("app", "uploads", folder)

    os.makedirs(upload_dir, exist_ok=True)

    filename = f"{uuid.uuid4()}.{extension}"

    file_path = os.path.join(upload_dir, filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    file_url = f"http://127.0.0.1:8000/uploads/{folder}/{filename}"

    return {
        "uploaded_by": current_user["role"],
        "filename": filename,
        "file_url": file_url
    }
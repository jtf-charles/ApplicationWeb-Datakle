from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Comment
from app.schemas import CommentCreate, CommentResponse
from app.dependencies import require_admin


router = APIRouter(
    prefix="/comments",
    tags=["Comments"]
)


@router.post("/", response_model=CommentResponse, status_code=status.HTTP_201_CREATED)
def create_comment(
    comment_data: CommentCreate,
    db: Session = Depends(get_db)
):

    new_comment = Comment(**comment_data.model_dump())

    db.add(new_comment)
    db.commit()
    db.refresh(new_comment)

    return new_comment


@router.get("/", response_model=list[CommentResponse])
def get_comments(
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    return db.query(Comment).all()


@router.get("/{comment_id}", response_model=CommentResponse)
def get_comment(
    comment_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    comment = (
        db.query(Comment)
        .filter(Comment.comment_id == comment_id)
        .first()
    )

    if not comment:
        raise HTTPException(
            status_code=404,
            detail="Commentaire introuvable."
        )

    return comment


@router.put("/{comment_id}", response_model=CommentResponse)
def update_comment(
    comment_id: int,
    comment_data: CommentCreate,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    comment = (
        db.query(Comment)
        .filter(Comment.comment_id == comment_id)
        .first()
    )

    if not comment:
        raise HTTPException(
            status_code=404,
            detail="Commentaire introuvable."
        )

    for key, value in comment_data.model_dump().items():
        setattr(comment, key, value)

    db.commit()
    db.refresh(comment)

    return comment


@router.delete("/{comment_id}")
def delete_comment(
    comment_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    comment = (
        db.query(Comment)
        .filter(Comment.comment_id == comment_id)
        .first()
    )

    if not comment:
        raise HTTPException(
            status_code=404,
            detail="Commentaire introuvable."
        )

    db.delete(comment)
    db.commit()

    return {
        "message": "Commentaire supprimé avec succès."
    }
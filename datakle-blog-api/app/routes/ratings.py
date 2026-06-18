from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Rating
from app.schemas import RatingCreate, RatingResponse
from app.dependencies import require_admin


router = APIRouter(
    prefix="/ratings",
    tags=["Ratings"]
)


@router.post("/", response_model=RatingResponse, status_code=status.HTTP_201_CREATED)
def create_rating(
    rating_data: RatingCreate,
    db: Session = Depends(get_db)
):

    if rating_data.rating < 1 or rating_data.rating > 5:
        raise HTTPException(
            status_code=400,
            detail="La note doit être comprise entre 1 et 5."
        )

    new_rating = Rating(**rating_data.model_dump())

    db.add(new_rating)
    db.commit()
    db.refresh(new_rating)

    return new_rating


@router.get("/", response_model=list[RatingResponse])
def get_ratings(
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    return db.query(Rating).all()


@router.get("/{rating_id}", response_model=RatingResponse)
def get_rating(
    rating_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    rating = (
        db.query(Rating)
        .filter(Rating.rating_id == rating_id)
        .first()
    )

    if not rating:
        raise HTTPException(
            status_code=404,
            detail="Note introuvable."
        )

    return rating


@router.put("/{rating_id}", response_model=RatingResponse)
def update_rating(
    rating_id: int,
    rating_data: RatingCreate,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    if rating_data.rating < 1 or rating_data.rating > 5:
        raise HTTPException(
            status_code=400,
            detail="La note doit être comprise entre 1 et 5."
        )

    rating = (
        db.query(Rating)
        .filter(Rating.rating_id == rating_id)
        .first()
    )

    if not rating:
        raise HTTPException(
            status_code=404,
            detail="Note introuvable."
        )

    for key, value in rating_data.model_dump().items():
        setattr(rating, key, value)

    db.commit()
    db.refresh(rating)

    return rating


@router.delete("/{rating_id}")
def delete_rating(
    rating_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    rating = (
        db.query(Rating)
        .filter(Rating.rating_id == rating_id)
        .first()
    )

    if not rating:
        raise HTTPException(
            status_code=404,
            detail="Note introuvable."
        )

    db.delete(rating)
    db.commit()

    return {
        "message": "Note supprimée avec succès."
    }
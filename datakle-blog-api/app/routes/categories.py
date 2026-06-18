from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Category
from app.schemas import CategoryBase, CategoryResponse
from app.dependencies import require_admin


router = APIRouter(
    prefix="/categories",
    tags=["Categories"]
)


@router.post("/", response_model=CategoryResponse, status_code=status.HTTP_201_CREATED)
def create_category(
    category_data: CategoryBase,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    existing_category = (
        db.query(Category)
        .filter(Category.category_slug == category_data.category_slug)
        .first()
    )

    if existing_category:
        raise HTTPException(
            status_code=400,
            detail="Cette catégorie existe déjà."
        )

    new_category = Category(**category_data.model_dump())

    db.add(new_category)
    db.commit()
    db.refresh(new_category)

    return new_category


@router.get("/", response_model=list[CategoryResponse])
def get_categories(db: Session = Depends(get_db)):

    return db.query(Category).all()


@router.get("/{category_id}", response_model=CategoryResponse)
def get_category(
    category_id: int,
    db: Session = Depends(get_db)
):

    category = (
        db.query(Category)
        .filter(Category.category_id == category_id)
        .first()
    )

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Catégorie introuvable."
        )

    return category


@router.put("/{category_id}", response_model=CategoryResponse)
def update_category(
    category_id: int,
    category_data: CategoryBase,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    category = (
        db.query(Category)
        .filter(Category.category_id == category_id)
        .first()
    )

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Catégorie introuvable."
        )

    for key, value in category_data.model_dump().items():
        setattr(category, key, value)

    db.commit()
    db.refresh(category)

    return category


@router.delete("/{category_id}")
def delete_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    category = (
        db.query(Category)
        .filter(Category.category_id == category_id)
        .first()
    )

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Catégorie introuvable."
        )

    db.delete(category)
    db.commit()

    return {
        "message": "Catégorie supprimée avec succès."
    }
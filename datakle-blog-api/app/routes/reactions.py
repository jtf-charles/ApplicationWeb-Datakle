from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Reaction
from app.schemas import ReactionCreate, ReactionResponse
from app.dependencies import require_admin


router = APIRouter(
    prefix="/reactions",
    tags=["Reactions"]
)


@router.post("/", response_model=ReactionResponse, status_code=status.HTTP_201_CREATED)
def create_reaction(
    reaction_data: ReactionCreate,
    db: Session = Depends(get_db)
):

    allowed_reactions = ["like", "unlike", "nothing"]

    if reaction_data.reaction_type not in allowed_reactions:
        raise HTTPException(
            status_code=400,
            detail="La réaction doit être : like, unlike ou nothing."
        )

    new_reaction = Reaction(**reaction_data.model_dump())

    db.add(new_reaction)
    db.commit()
    db.refresh(new_reaction)

    return new_reaction


@router.get("/", response_model=list[ReactionResponse])
def get_reactions(
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    return db.query(Reaction).all()


@router.get("/{reaction_id}", response_model=ReactionResponse)
def get_reaction(
    reaction_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    reaction = (
        db.query(Reaction)
        .filter(Reaction.reaction_id == reaction_id)
        .first()
    )

    if not reaction:
        raise HTTPException(
            status_code=404,
            detail="Réaction introuvable."
        )

    return reaction


@router.put("/{reaction_id}", response_model=ReactionResponse)
def update_reaction(
    reaction_id: int,
    reaction_data: ReactionCreate,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    allowed_reactions = ["like", "unlike", "nothing"]

    if reaction_data.reaction_type not in allowed_reactions:
        raise HTTPException(
            status_code=400,
            detail="La réaction doit être : like, unlike ou nothing."
        )

    reaction = (
        db.query(Reaction)
        .filter(Reaction.reaction_id == reaction_id)
        .first()
    )

    if not reaction:
        raise HTTPException(
            status_code=404,
            detail="Réaction introuvable."
        )

    for key, value in reaction_data.model_dump().items():
        setattr(reaction, key, value)

    db.commit()
    db.refresh(reaction)

    return reaction


@router.delete("/{reaction_id}")
def delete_reaction(
    reaction_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    reaction = (
        db.query(Reaction)
        .filter(Reaction.reaction_id == reaction_id)
        .first()
    )

    if not reaction:
        raise HTTPException(
            status_code=404,
            detail="Réaction introuvable."
        )

    db.delete(reaction)
    db.commit()

    return {
        "message": "Réaction supprimée avec succès."
    }
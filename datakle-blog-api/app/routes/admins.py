from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Admin
from app.schemas import (
    AdminCreate,
    AdminUpdate,
    AdminResponse
)

from app.security import hash_password
from app.dependencies import require_admin


router = APIRouter(
    prefix="/admins",
    tags=["Admins"]
)


# =========================
# CREATE ADMIN
# =========================
@router.post("/", response_model=AdminResponse)
def create_admin(
    admin: AdminCreate,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    existing_admin = db.query(Admin).filter(
        Admin.admin_email == admin.admin_email
    ).first()

    if existing_admin:
        raise HTTPException(
            status_code=400,
            detail="Admin email already exists"
        )

    new_admin = Admin(
        admin_full_name=admin.admin_full_name,
        admin_email=admin.admin_email,
        avatar_url=admin.avatar_url,
        admin_status=admin.admin_status,
        password_hash=hash_password(admin.password)
    )

    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)

    return new_admin


# =========================
# GET ADMINS
# =========================
@router.get("/", response_model=list[AdminResponse])
def get_admins(
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    return db.query(Admin).all()


# =========================
# GET ADMIN
# =========================
@router.get("/{admin_id}", response_model=AdminResponse)
def get_admin(
    admin_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    admin = db.query(Admin).filter(
        Admin.admin_id == admin_id
    ).first()

    if not admin:
        raise HTTPException(
            status_code=404,
            detail="Admin not found"
        )

    return admin


# =========================
# UPDATE ADMIN
# =========================
@router.put("/{admin_id}", response_model=AdminResponse)
def update_admin(
    admin_id: int,
    admin_data: AdminUpdate,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    admin = db.query(Admin).filter(
        Admin.admin_id == admin_id
    ).first()

    if not admin:
        raise HTTPException(
            status_code=404,
            detail="Admin not found"
        )

    update_data = admin_data.model_dump(exclude_unset=True)

    if "password" in update_data:
        admin.password_hash = hash_password(
            update_data.pop("password")
        )

    for key, value in update_data.items():
        setattr(admin, key, value)

    db.commit()
    db.refresh(admin)

    return admin


# =========================
# DELETE ADMIN
# =========================
@router.delete("/{admin_id}")
def delete_admin(
    admin_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    admin = db.query(Admin).filter(
        Admin.admin_id == admin_id
    ).first()

    if not admin:
        raise HTTPException(
            status_code=404,
            detail="Admin not found"
        )

    db.delete(admin)
    db.commit()

    return {
        "message": "Admin deleted successfully"
    }
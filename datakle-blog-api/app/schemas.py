from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict
# ======================
# AUTHORS
# ======================

class AuthorBase(BaseModel):
    author_full_name: str
    author_email: str
    avatar_url: Optional[str] = None


class AuthorCreate(AuthorBase):
    password: str


class AuthorUpdate(BaseModel):
    author_full_name: Optional[str] = None
    author_email: Optional[str] = None
    avatar_url: Optional[str] = None
    password: Optional[str] = None


class AuthorResponse(AuthorBase):
    author_id: int
    author_created_at: Optional[datetime] = None
    author_updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

# ======================
# CATEGORIES
# ======================

class CategoryBase(BaseModel):
    category_name: str
    category_slug: str
    category_description: Optional[str] = None


class CategoryResponse(CategoryBase):
    category_id: int
    category_created_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

# =========================
# POSTS
# =========================

class PostBase(BaseModel):
    category_id: Optional[int] = None
    post_title: Optional[str] = None
    post_slug: Optional[str] = None
    post_excerpt: Optional[str] = None
    post_content: Optional[str] = None
    cover_image_url: Optional[str] = None
    post_status: Optional[str] = "draft"
    post_tags: Optional[str] = None
    published_at: Optional[datetime] = None
    views_count: Optional[int] = 0


class PostCreate(PostBase):
    pass


class PostUpdate(PostBase):
    pass


class PostResponse(PostBase):
    post_id: int
    post_created_at: Optional[datetime] = None
    post_updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)


# ======================
# COMMENTS
# ======================

class CommentBase(BaseModel):
    post_id: int
    user_name: str
    comment: str


class CommentCreate(CommentBase):
    pass


class CommentResponse(CommentBase):
    comment_id: int
    comment_created_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)


# ======================
# RATINGS
# ======================

class RatingBase(BaseModel):
    post_id: int
    rating_ip_address: str
    rating: int


class RatingCreate(RatingBase):
    pass


class RatingResponse(RatingBase):
    rating_id: int
    rating_created_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)


# ======================
# REACTIONS
# ======================

class ReactionBase(BaseModel):
    post_id: int
    reaction_type: str
    reaction_ip_address: str


class ReactionCreate(ReactionBase):
    pass


class ReactionResponse(ReactionBase):
    reaction_id: int
    reaction_created_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)


class LoginRequest(BaseModel):
    author_email: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str



# ======================
# ADMINS
# ======================

class AdminBase(BaseModel):
    admin_full_name: str
    admin_email: str
    avatar_url: Optional[str] = None
    admin_status: Optional[str] = "active"


class AdminCreate(AdminBase):
    password: str


class AdminUpdate(BaseModel):
    admin_full_name: Optional[str] = None
    admin_email: Optional[str] = None
    avatar_url: Optional[str] = None
    admin_status: Optional[str] = None
    password: Optional[str] = None


class AdminResponse(AdminBase):
    admin_id: int
    admin_created_at: Optional[datetime] = None
    admin_updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)


class AdminLoginRequest(BaseModel):
    admin_email: str
    password: str
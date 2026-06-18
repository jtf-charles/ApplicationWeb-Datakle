
from fastapi import APIRouter, Depends, HTTPException, status, Body
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models import Post
from app.schemas import PostCreate, PostUpdate, PostResponse
from app.models import Category, Author, PostAuthor, Comment, Rating, Reaction
from app.dependencies import require_admin, require_author_or_admin



router = APIRouter(
    prefix="/posts",
    tags=["Posts"]
)


def check_post_owner_or_admin(
    post_id: int,
    db: Session,
    current_user: dict
):
    if current_user["role"] == "admin":
        return True

    link = (
        db.query(PostAuthor)
        .filter(
            PostAuthor.post_id == post_id,
            PostAuthor.author_id == int(current_user["user_id"])
        )
        .first()
    )

    if not link:
        raise HTTPException(
            status_code=403,
            detail="Vous ne pouvez gérer que vos propres posts."
        )

    return True


@router.post("/", response_model=PostResponse, status_code=status.HTTP_201_CREATED)
def create_post(
    post_data: PostCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(require_author_or_admin)
):

    existing_post = (
        db.query(Post)
        .filter(Post.post_slug == post_data.post_slug)
        .first()
    )

    if existing_post:
        raise HTTPException(
            status_code=400,
            detail="Ce post existe déjà."
        )

    new_post = Post(**post_data.model_dump())

    db.add(new_post)
    db.commit()
    db.refresh(new_post)

    if current_user["role"] == "author":
        new_link = PostAuthor(
            post_id=new_post.post_id,
            author_id=int(current_user["user_id"])
        )

        db.add(new_link)
        db.commit()

    return new_post


@router.post("/{post_id}/authors/{author_id}")
def add_author_to_post(
    post_id: int,
    author_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    post = db.query(Post).filter(Post.post_id == post_id).first()
    author = db.query(Author).filter(Author.author_id == author_id).first()

    if not post:
        raise HTTPException(status_code=404, detail="Post introuvable.")

    if not author:
        raise HTTPException(status_code=404, detail="Auteur introuvable.")

    existing_link = (
        db.query(PostAuthor)
        .filter(
            PostAuthor.post_id == post_id,
            PostAuthor.author_id == author_id
        )
        .first()
    )

    if existing_link:
        raise HTTPException(
            status_code=400,
            detail="Cet auteur est déjà associé à ce post."
        )

    new_link = PostAuthor(
        post_id=post_id,
        author_id=author_id
    )

    db.add(new_link)
    db.commit()

    return {
        "message": "Auteur ajouté au post avec succès."
    }


@router.delete("/{post_id}/authors/{author_id}")
def remove_author_from_post(
    post_id: int,
    author_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(require_admin)
):

    link = (
        db.query(PostAuthor)
        .filter(
            PostAuthor.post_id == post_id,
            PostAuthor.author_id == author_id
        )
        .first()
    )

    if not link:
        raise HTTPException(
            status_code=404,
            detail="Cette liaison post-auteur est introuvable."
        )

    db.delete(link)
    db.commit()

    return {
        "message": "Auteur retiré du post avec succès."
    }


@router.get("/public/cards")
def get_public_post_cards(
    page: int = 1,
    limit: int = 6,
    search: str | None = None,
    category: str | None = None,
    sort: str = "latest",
    db: Session = Depends(get_db)
):

    query = (
        db.query(Post)
        .join(Category, Post.category_id == Category.category_id)
        .filter(Post.post_status == "published")
    )

    if search:
        query = query.filter(
            Post.post_title.like(f"%{search}%") |
            Post.post_excerpt.like(f"%{search}%") |
            Post.post_content.like(f"%{search}%") |
            Post.post_tags.like(f"%{search}%")
        )

    if category:
        query = query.filter(Category.category_slug == category)

    if sort == "popular":
        query = query.order_by(Post.views_count.desc())

    elif sort == "oldest":
        query = query.order_by(Post.published_at.asc())

    else:
        query = query.order_by(Post.published_at.desc())

    total_posts = query.count()

    posts = (
        query
        .offset((page - 1) * limit)
        .limit(limit)
        .all()
    )

    results = []

    for post in posts:

        category_data = (
            db.query(Category)
            .filter(Category.category_id == post.category_id)
            .first()
        )

        authors = (
            db.query(Author)
            .join(PostAuthor, Author.author_id == PostAuthor.author_id)
            .filter(PostAuthor.post_id == post.post_id)
            .all()
        )

        comments_count = (
            db.query(func.count(Comment.comment_id))
            .filter(Comment.post_id == post.post_id)
            .scalar()
        )

        likes_count = (
            db.query(func.count(Reaction.reaction_id))
            .filter(
                Reaction.post_id == post.post_id,
                Reaction.reaction_type == "like"
            )
            .scalar()
        )

        average_rating = (
            db.query(func.avg(Rating.rating))
            .filter(Rating.post_id == post.post_id)
            .scalar()
        )

        results.append({
            "post_id": post.post_id,
            "post_title": post.post_title,
            "post_slug": post.post_slug,
            "post_excerpt": post.post_excerpt,
            "cover_image_url": post.cover_image_url,
            "post_tags": post.post_tags,
            "published_at": post.published_at,
            "views_count": post.views_count,

            "category": {
                "category_id": category_data.category_id,
                "category_name": category_data.category_name,
                "category_slug": category_data.category_slug
            } if category_data else None,

            "authors": [
                {
                    "author_id": author.author_id,
                    "author_full_name": author.author_full_name,
                    "avatar_url": author.avatar_url
                }
                for author in authors
            ],

            "comments_count": comments_count,
            "likes_count": likes_count,
            "average_rating": round(float(average_rating), 1) if average_rating else 0
        })

    return {
        "page": page,
        "limit": limit,
        "total_posts": total_posts,
        "total_pages": (total_posts + limit - 1) // limit,
        "data": results
    }


@router.get("/public/{post_slug}")
def get_public_post_detail(post_slug: str, db: Session = Depends(get_db)):

    post = (
        db.query(Post)
        .filter(
            Post.post_slug == post_slug,
            Post.post_status == "published"
        )
        .first()
    )

    if not post:
        raise HTTPException(
            status_code=404,
            detail="Post introuvable."
        )

    category = (
        db.query(Category)
        .filter(Category.category_id == post.category_id)
        .first()
    )

    authors = (
        db.query(Author)
        .join(PostAuthor, Author.author_id == PostAuthor.author_id)
        .filter(PostAuthor.post_id == post.post_id)
        .all()
    )

    comments = (
        db.query(Comment)
        .filter(Comment.post_id == post.post_id)
        .order_by(Comment.comment_created_at.desc())
        .all()
    )

    likes_count = (
        db.query(func.count(Reaction.reaction_id))
        .filter(
            Reaction.post_id == post.post_id,
            Reaction.reaction_type == "like"
        )
        .scalar()
    )

    average_rating = (
        db.query(func.avg(Rating.rating))
        .filter(Rating.post_id == post.post_id)
        .scalar()
    )

    return {
        "post_id": post.post_id,
        "post_title": post.post_title,
        "post_slug": post.post_slug,
        "post_excerpt": post.post_excerpt,
        "post_content": post.post_content,
        "cover_image_url": post.cover_image_url,
        "post_tags": post.post_tags,
        "published_at": post.published_at,
        "views_count": post.views_count,

        "category": {
            "category_id": category.category_id,
            "category_name": category.category_name,
            "category_slug": category.category_slug
        } if category else None,

        "authors": [
            {
                "author_id": author.author_id,
                "author_full_name": author.author_full_name,
                "avatar_url": author.avatar_url
            }
            for author in authors
        ],

        "comments": [
            {
                "comment_id": comment.comment_id,
                "user_name": comment.user_name,
                "comment": comment.comment,
                "comment_created_at": comment.comment_created_at
            }
            for comment in comments
        ],

        "comments_count": len(comments),
        "likes_count": likes_count,
        "average_rating": round(float(average_rating), 1) if average_rating else 0
    }


@router.get("/public/{post_slug}/related")
def get_related_posts(
    post_slug: str,
    limit: int = 3,
    db: Session = Depends(get_db)
):

    current_post = (
        db.query(Post)
        .filter(
            Post.post_slug == post_slug,
            Post.post_status == "published"
        )
        .first()
    )

    if not current_post:
        raise HTTPException(
            status_code=404,
            detail="Post introuvable."
        )

    related_posts = (
        db.query(Post)
        .filter(
            Post.post_status == "published",
            Post.category_id == current_post.category_id,
            Post.post_id != current_post.post_id
        )
        .order_by(Post.published_at.desc())
        .limit(limit)
        .all()
    )

    results = []

    for post in related_posts:
        results.append({
            "post_id": post.post_id,
            "post_title": post.post_title,
            "post_slug": post.post_slug,
            "post_excerpt": post.post_excerpt,
            "cover_image_url": post.cover_image_url,
            "published_at": post.published_at,
            "views_count": post.views_count
        })

    return {
        "current_post": current_post.post_title,
        "total_related": len(results),
        "data": results
    }


@router.get("/", response_model=list[PostResponse])
def get_posts(
    db: Session = Depends(get_db),
    current_user: dict = Depends(require_author_or_admin)
):

    return db.query(Post).all()


@router.get("/{post_id}", response_model=PostResponse)
def get_post(
    post_id: int,
    db: Session = Depends(get_db),
    current_user: dict = Depends(require_author_or_admin)
):

    post = (
        db.query(Post)
        .filter(Post.post_id == post_id)
        .first()
    )

    if not post:
        raise HTTPException(
            status_code=404,
            detail="Post introuvable."
        )

    if current_user["role"] == "author":
        check_post_owner_or_admin(post_id, db, current_user)

    return post


@router.put("/{post_id}", response_model=PostResponse)
def update_post(
    post_id: int,
    post_data: PostUpdate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(require_author_or_admin)
):

    post = (
        db.query(Post)
        .filter(Post.post_id == post_id)
        .first()
    )

    if not post:
        raise HTTPException(
            status_code=404,
            detail="Post introuvable."
        )

    check_post_owner_or_admin(post_id, db, current_user)

    update_data = post_data.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(post, key, value)

    db.commit()
    db.refresh(post)

    return post


@router.put("/{post_id}/content", response_model=PostResponse)
def update_post_content(
    post_id: int,
    post_content: str = Body(..., media_type="text/plain"),
    db: Session = Depends(get_db),
    current_user: dict = Depends(require_author_or_admin)
):

    post = (
        db.query(Post)
        .filter(Post.post_id == post_id)
        .first()
    )

    if not post:
        raise HTTPException(
            status_code=404,
            detail="Post introuvable."
        )

    check_post_owner_or_admin(post_id, db, current_user)

    post.post_content = post_content

    db.commit()
    db.refresh(post)

    return post






@router.delete("/{post_id}")
def delete_post(
    post_id: int,
    db: Session = Depends(get_db),
    current_user: dict = Depends(require_author_or_admin)
):

    post = (
        db.query(Post)
        .filter(Post.post_id == post_id)
        .first()
    )

    if not post:
        raise HTTPException(
            status_code=404,
            detail="Post introuvable."
        )

    check_post_owner_or_admin(post_id, db, current_user)

    db.delete(post)
    db.commit()

    return {
        "message": "Post supprimé avec succès."
    }
from sqlalchemy import Column, Integer, String, Text, TIMESTAMP, ForeignKey, Enum
from sqlalchemy.dialects.mysql import LONGTEXT
from sqlalchemy.sql import func
from app.database import Base


class Author(Base):
    __tablename__ = "authors"

    author_id = Column(Integer, primary_key=True, index=True)
    author_full_name = Column(String(150), nullable=False)
    author_email = Column(String(150), nullable=False, unique=True)
    password_hash = Column(String(255), nullable=False)
    avatar_url = Column(String(255))
    author_created_at = Column(TIMESTAMP, server_default=func.now())
    author_updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())


class Category(Base):
    __tablename__ = "categories"

    category_id = Column(Integer, primary_key=True, index=True)
    category_name = Column(String(100), nullable=False)
    category_slug = Column(String(150), nullable=False, unique=True)
    category_description = Column(Text)
    category_created_at = Column(TIMESTAMP, server_default=func.now())


class Post(Base):
    __tablename__ = "posts"

    post_id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey("categories.category_id"), nullable=False)

    post_title = Column(String(255), nullable=False)
    post_slug = Column(String(255), nullable=False, unique=True)
    post_excerpt = Column(Text)
    post_content = Column(LONGTEXT, nullable=False)
    cover_image_url = Column(String(255))

    post_status = Column(Enum("draft", "published", "archived"), default="draft")
    post_tags = Column(String(255))

    published_at = Column(TIMESTAMP)
    views_count = Column(Integer, default=0)

    post_created_at = Column(TIMESTAMP, server_default=func.now())
    post_updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())


class PostAuthor(Base):
    __tablename__ = "post_authors"

    post_id = Column(Integer, ForeignKey("posts.post_id"), primary_key=True)
    author_id = Column(Integer, ForeignKey("authors.author_id"), primary_key=True)


class Comment(Base):
    __tablename__ = "comments"

    comment_id = Column(Integer, primary_key=True, index=True)
    post_id = Column(Integer, ForeignKey("posts.post_id"), nullable=False)
    user_name = Column(String(150), nullable=False)
    comment = Column(Text, nullable=False)
    comment_created_at = Column(TIMESTAMP, server_default=func.now())


class Rating(Base):
    __tablename__ = "ratings"

    rating_id = Column(Integer, primary_key=True, index=True)
    post_id = Column(Integer, ForeignKey("posts.post_id"), nullable=False)
    rating_ip_address = Column(String(45), nullable=False)
    rating = Column(Integer, nullable=False)
    rating_created_at = Column(TIMESTAMP, server_default=func.now())


class Reaction(Base):
    __tablename__ = "reactions"

    reaction_id = Column(Integer, primary_key=True, index=True)
    post_id = Column(Integer, ForeignKey("posts.post_id"), nullable=False)
    reaction_type = Column(Enum("like", "unlike", "nothing"), default="nothing")
    reaction_ip_address = Column(String(45), nullable=False)
    reaction_created_at = Column(TIMESTAMP, server_default=func.now())



class Admin(Base):
    __tablename__ = "admins"

    admin_id = Column(Integer, primary_key=True, index=True)
    admin_full_name = Column(String(150), nullable=False)
    admin_email = Column(String(150), nullable=False, unique=True)
    password_hash = Column(String(255), nullable=False)
    avatar_url = Column(String(255))
    admin_status = Column(Enum("active", "inactive"), default="active")
    admin_created_at = Column(TIMESTAMP, server_default=func.now())
    admin_updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())
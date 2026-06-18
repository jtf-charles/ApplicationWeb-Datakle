from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.database import engine

from app.routes.authors import router as authors_router
from app.routes.categories import router as categories_router
from app.routes.posts import router as posts_router
from app.routes.comments import router as comments_router
from app.routes.ratings import router as ratings_router 
from app.routes.reactions import router as reactions_router
from app.routes.uploads import router as uploads_router
from app.routes.auth import router as auth_router
from app.routes.admins import router as admins_router

app = FastAPI(
    title="DATAKLE Blog API",
    description="API du blog DATAKLE",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Bienvenue sur l'API du Blog DATAKLE"
    }


@app.get("/test-db")
def test_db():

    try:

        connection = engine.connect()

        connection.close()

        return {
            "message": "Connexion MySQL réussie"
        }

    except Exception as e:

        return {
            "error": str(e)
        }
    
app.include_router(categories_router)
app.include_router(authors_router)
app.include_router(posts_router)
app.include_router(comments_router)
app.include_router(ratings_router)
app.include_router(reactions_router)
app.include_router(uploads_router)
app.mount("/uploads", StaticFiles(directory="app/uploads"), name="uploads")
app.include_router(auth_router)
app.include_router(admins_router)
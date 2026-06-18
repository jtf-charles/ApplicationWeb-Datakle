import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { getPublicPosts } from "@/api/postsApi";
import heroBg from "@/assets/images/banner3.jpg";

type Author = {
  author_id: number;
  author_full_name: string;
  avatar_url?: string;
};

type Post = {
  post_id: number;
  post_title: string;
  post_excerpt: string;
  cover_image_url: string;
  post_slug: string;
  authors?: Author[];
  category?: {
    category_name: string;
    category_slug?: string;
  };
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getPublicPosts();
        setPosts(result.data || []);
        setFilteredPosts(result.data || []);
      } catch (error) {
        console.error("Erreur chargement blog :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = posts
      .map((post) => post.category?.category_name)
      .filter(Boolean) as string[];

    return ["Tous", ...new Set(uniqueCategories)];
  }, [posts]);

  useEffect(() => {
    let updatedPosts = [...posts];

    if (selectedCategory !== "Tous") {
      updatedPosts = updatedPosts.filter(
        (post) => post.category?.category_name === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();

      updatedPosts = updatedPosts.filter(
        (post) =>
          post.post_title.toLowerCase().includes(search) ||
          post.post_excerpt.toLowerCase().includes(search)
      );
    }

    setFilteredPosts(updatedPosts);
    setCurrentIndex(0);
  }, [searchTerm, selectedCategory, posts]);

  useEffect(() => {
    if (filteredPosts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= filteredPosts.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredPosts]);

  const featuredPost = filteredPosts[0];

  const visiblePosts = useMemo(() => {
    if (filteredPosts.length === 0) return [];

    if (filteredPosts.length === 1) return [filteredPosts[0]];

    if (filteredPosts.length === 2) {
      return [
        filteredPosts[currentIndex % 2],
        filteredPosts[(currentIndex + 1) % 2],
      ];
    }

    return [
      filteredPosts[currentIndex % filteredPosts.length],
      filteredPosts[(currentIndex + 1) % filteredPosts.length],
      filteredPosts[(currentIndex + 2) % filteredPosts.length],
    ];
  }, [filteredPosts, currentIndex]);

  const nextSlide = () => {
    if (filteredPosts.length <= 1) return;

    setCurrentIndex((prev) =>
      prev >= filteredPosts.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (filteredPosts.length <= 1) return;

    setCurrentIndex((prev) =>
      prev <= 0 ? filteredPosts.length - 1 : prev - 1
    );
  };

  const getAuthorsText = (authors?: Author[]) => {
    if (!authors || authors.length === 0) return "Auteur non renseigné";
    return authors.map((author) => author.author_full_name).join(", ");
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F5FAFF] pt-[76px]">
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5FAFF] pt-[76px]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />

        <div className="absolute inset-0 bg-[#02114f]/85" />

        <div className="relative z-10 mx-auto flex min-h-[610px] items-center justify-center px-4 py-14 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl text-center">
            <span className="inline-flex rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-bold uppercase tracking-wide text-cyan-300 backdrop-blur-md">
              Blog DATAKLE
            </span>

            <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Explorez nos idées, tutoriels et analyses autour de la data.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
              Trouvez rapidement des articles, FAQ, tutoriels et études de cas
              pour mieux exploiter vos données.
            </p>

            <form
              onSubmit={handleSearch}
              className="mx-auto mt-10 max-w-4xl rounded-full bg-white p-2 shadow-2xl ring-1 ring-white/20"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search className="h-5 w-5 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Rechercher un article, tutoriel, FAQ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-none bg-transparent py-3 text-sm text-slate-700 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Rechercher
                </button>
              </div>
            </form>

            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3 pb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "bg-cyan-400 text-slate-950"
                      : "bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        {filteredPosts.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-20 text-center shadow-sm">
            <h3 className="text-3xl font-black text-slate-900">
              Pas de Blog disponible
            </h3>

            <p className="mt-4 text-slate-500">
              Aucun contenu ne correspond à votre recherche.
            </p>
          </div>
        ) : (
          <>
            {featuredPost && (
              <Link
                to={`/blog/${featuredPost.post_slug}`}
                className="group grid overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-2"
              >
                <div className="relative min-h-[320px] overflow-hidden">
                  <img
                    src={featuredPost.cover_image_url}
                    alt={featuredPost.post_title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                    À la une
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                    {featuredPost.category?.category_name}
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                    {featuredPost.post_title}
                  </h2>

                  <div className="mt-5 inline-flex w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                    Par {getAuthorsText(featuredPost.authors)}
                  </div>

                  <p className="mt-6 text-base leading-8 text-slate-600">
                    {featuredPost.post_excerpt}
                  </p>

                  <span className="mt-8 inline-flex w-fit rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white">
                    Lire l’article
                  </span>
                </div>
              </Link>
            )}

            <div className="mt-20 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-black text-slate-950">
                  Derniers contenus
                </h2>

                <p className="mt-2 text-slate-500">
                  Tous les contenus disponibles dans la base de données.
                </p>
              </div>

              {filteredPosts.length > 1 && (
                <div className="hidden gap-3 md:flex">
                  <button
                    onClick={prevSlide}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200 transition hover:bg-slate-100"
                  >
                    ‹
                  </button>

                  <button
                    onClick={nextSlide}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200 transition hover:bg-slate-100"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {visiblePosts.map((post) => (
                <Link
                  key={`${post.post_id}-${currentIndex}`}
                  to={`/blog/${post.post_slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.cover_image_url}
                      alt={post.post_title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-md">
                      {post.category?.category_name}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black leading-snug text-slate-950 transition group-hover:text-blue-700">
                      {post.post_title}
                    </h3>

                    <div className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700">
                      Par {getAuthorsText(post.authors)}
                    </div>

                    <p className="mt-5 line-clamp-3 text-base leading-7 text-slate-600">
                      {post.post_excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
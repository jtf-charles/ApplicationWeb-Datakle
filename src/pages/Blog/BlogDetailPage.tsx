import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostDetail } from "@/api/postsApi";

type Author = {
  author_id: number;
  author_full_name: string;
  avatar_url?: string;
};

type PostDetail = {
  post_id: number;
  post_title: string;
  post_slug: string;
  post_excerpt: string;
  post_content: string;
  cover_image_url: string;
  post_tags?: string;
  published_at?: string;

  category?: {
    category_name: string;
    category_slug: string;
  };

  authors: Author[];
};

export default function BlogDetailPage() {
  const { slug } = useParams();

  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [brokenAvatars, setBrokenAvatars] = useState<number[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!slug) return;

        const result = await getPostDetail(slug);
        setPost(result);
      } catch (error) {
        console.error("Erreur chargement article :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (date?: string) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const getAuthorInitials = (name: string) => {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");
  };

  const getCleanAvatarUrl = (url?: string) => {
    if (!url) return "";

    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("/file/d/")[1]?.split("/")[0];
      return fileId
        ? `https://drive.google.com/uc?export=view&id=${fileId}`
        : url;
    }

    return url;
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F5FAFF] pt-[90px]">
        <div className="mx-auto flex min-h-[420px] max-w-5xl items-center justify-center px-4">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-[#F5FAFF] pt-[90px]">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-3xl font-black text-[#000044]">
            Article introuvable
          </h1>

          <Link
            to="/blog"
            className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white"
          >
            Retour au blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5FAFF] pt-[90px]">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <Link
          to="/blog"
          className="inline-flex text-sm font-bold text-blue-600 hover:text-blue-800"
        >
          ← Retour au blog
        </Link>

        <article className="mt-8 overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200">
          <img
            src={post.cover_image_url}
            alt={post.post_title}
            className="h-[420px] w-full object-cover"
          />

          <div className="p-8 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              {post.category?.category_name}
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight text-[#000044] lg:text-6xl">
              {post.post_title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {post.post_excerpt}
            </p>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="flex flex-wrap items-center gap-6">
                {post.authors?.map((author) => {
                  const avatarUrl = getCleanAvatarUrl(author.avatar_url);
                  const isBroken = brokenAvatars.includes(author.author_id);

                  return (
                    <div
                      key={author.author_id}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      {avatarUrl && !isBroken ? (
                        <img
                          src={avatarUrl}
                          alt={author.author_full_name}
                          className="h-12 w-12 rounded-full border border-slate-200 object-cover shadow-sm"
                          onError={() =>
                            setBrokenAvatars((prev) => [
                              ...prev,
                              author.author_id,
                            ])
                          }
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white shadow-sm">
                          {getAuthorInitials(author.author_full_name)}
                        </div>
                      )}

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Auteur
                        </p>

                        <p className="font-bold text-[#000044]">
                          {author.author_full_name}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {post.published_at && (
                  <div className="ml-auto rounded-2xl bg-blue-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                      Publié le
                    </p>

                    <p className="font-bold text-[#000044]">
                      {formatDate(post.published_at)}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {post.post_tags && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.post_tags.split(",").map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-10 border-t border-slate-100 pt-10">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="whitespace-pre-line leading-9">
                  {post.post_content}
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
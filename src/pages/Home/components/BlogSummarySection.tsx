import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShareAlt, FaStar } from "react-icons/fa";

import card12 from "@/assets/cards/card19.jpg";
import card11 from "@/assets/cards/card21.jpg";
import card2 from "@/assets/cards/card30.jpg";
import card24 from "@/assets/cards/card24.jpg";
import card16 from "@/assets/cards/card18.jpg";

type BlogItem = {
  id: number;
  title: string;
  category: string;
  preview: string;
  image: string;
  author: string;
  date: string;
  slug: string;
};

const BLOGS: BlogItem[] = [
  {
    id: 1,
    title: "Comment analyser ses données simplement ?",
    category: "Articles",
    preview:
      "Découvrez 5 méthodes simples pour analyser vos données sans être expert, avec des exemples tirés de projets réels.",
    image: card11,
    author: "Équipe DATAKLE",
    date: "12 février 2025",
    slug: "/blog/comment-analyser-ses-donnees-simplement",
  },
  {
    id: 2,
    title: "Les erreurs courantes en data (et comment les éviter)",
    category: "Tutoriels",
    preview:
      "Nettoyage, doublons, mauvais indicateurs… On passe en revue les pièges que l’on rencontre le plus souvent sur le terrain.",
    image: card12,
    author: "Charles J. Tancrède",
    date: "3 février 2025",
    slug: "/blog/erreurs-courantes-en-data",
  },
  {
    id: 3,
    title: "Culture data : par où commencer dans votre organisation ?",
    category: "FAQ",
    preview:
      "Mettre en place une vraie culture data, ce n’est pas seulement acheter des outils. C’est d’abord une histoire de people & process.",
    image: card16,
    author: "Équipe DATAKLE",
    date: "25 janvier 2025",
    slug: "/blog/culture-data-par-ou-commencer",
  },
];

export default function BlogSummarySection() {
  const [likes, setLikes] = useState<Record<number, number>>({});
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width:768px)").matches
      ? 2
      : 1
  );

  const n = BLOGS.length;

  // Responsivité
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width:768px)");
    const handleChange = () =>
      setItemsPerView(mql.matches ? 2 : 1);

    handleChange();
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // Auto défilement
  useEffect(() => {
    if (n === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + itemsPerView) % n);
    }, 7000);
    return () => clearInterval(id);
  }, [itemsPerView, n]);

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRating = (id: number, value: number) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  const visibleBlogs: BlogItem[] = Array.from(
    { length: Math.min(itemsPerView, n) },
    (_, offset) => BLOGS[(index + offset) % n]
  );

  return (
    <section
      className="
        my-20
        bg-gradient-to-b from-[#000044] via-[#0059FB] to-[#000044]
        py-10 sm:py-14
      "
    >
      <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
        {/* Coquille blanche / translucide sur le fond bleu */}
        <div
          className="
            rounded-[2rem] bg-white/5 border border-white/15
            shadow-[0_30px_80px_rgba(0,0,0,0.45)]
            backdrop-blur-md px-4 sm:px-6 py-6 sm:py-8
          "
        >
          {/* ----- ENTÊTE ----- */}
          <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#000044]/90 px-3 py-1">
                <span className="text-[10px] sm:text-[11px] tracking-[.25em] font-semibold nexa-black uppercase text-white/80">
                  Blog Datakle
                </span>
                <span className="inline-block h-2 w-2 rounded-full bg-[#0AD1F0]" />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold nexa-bold text-white">
                  Ils parlent data, nous partageons l’essentiel.
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#E5F0FF]/85 nexa-book">
                  Articles, FAQ, tutoriels et retours d’expérience pour faire
                  grandir votre culture data et inspirer vos décisions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* petit accent vertical à droite */}
              <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-[#0AD1F0] via-white to-transparent" />
              <Link
                to="/blog"
                className="
                  inline-flex items-center justify-center gap-2 rounded-full
                  bg-white text-[#0059FB] px-5 py-2.5 text-sm font-semibold
                  shadow-[0_14px_40px_rgba(0,0,0,0.45)]
                  hover:bg-[#E6F0FF] hover:shadow-[0_18px_50px_rgba(0,0,0,0.55)]
                  transition-all duration-200 hover:-translate-y-0.5
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0AD1F0]
                  
                "
              >
                Voir tous les articles
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M7.5 5l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </header>

          {/* ----- CONTAINER GRADIENT / CAROUSEL ----- */}
          <div
            className="
              relative overflow-hidden rounded-3xl border border-white/70
              bg-gradient-to-r from-[#E6F6FF] via-white to-[#E4ECFF]
              shadow-[0_24px_60px_rgba(0,0,68,0.25)]
              ring-1 ring-[#000044]/10 px-4 sm:px-6 py-6 sm:py-8
            "
          >
            {/* halos décoratifs */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#0AD1F0]/18 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-28 h-60 w-60 rounded-full bg-[#0059FB]/18 blur-3xl" />

            {/* ----- CARTES ----- */}
            <div className="relative grid gap-6 md:grid-cols-2">
              {visibleBlogs.map((item) => (
                <article
                  key={item.id}
                  className="
                    group bg-white/90 backdrop-blur rounded-2xl border border-white
                    shadow-sm hover:shadow-xl transition-all duration-300
                    hover:-translate-y-1 flex flex-col overflow-hidden
                  "
                >
                  <div className="relative h-40 sm:h-44 overflow-hidden nexa-black bg-[#000044]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <span
                      className="
                        absolute left-4 top-4 inline-flex items-center rounded-full
                        bg-[#000044]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white
                      "
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="flex-1 p-4 sm:p-5 flex flex-col">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#6B7280] mb-2">
                      <span className="font-semibold nexa-bold text-[#000044]/80">
                        {item.author}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <span className="nexa-light-italic">{item.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#000044] nexa-bold leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#4B5563] line-clamp-3 nexa-book">
                      {item.preview}
                    </p>

                    {/* Actions */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                      {/* Like */}
                      <button
                        type="button"
                        onClick={() => handleLike(item.id)}
                        className="inline-flex items-center gap-1.5 text-[13px] text-[#EF4444] hover:text-[#F97373] transition-colors"
                      >
                        <FaHeart />
                        <span>{likes[item.id] || 0}</span>
                      </button>

                      {/* Partage */}
                      <button
                        type="button"
                        onClick={() =>
                          navigator.share
                            ? navigator.share({
                                title: item.title,
                                text: item.preview,
                                url: window.location.origin + item.slug,
                              })
                            : alert(
                                "Le partage natif n’est pas supporté par ce navigateur."
                              )
                        }
                        className="inline-flex items-center gap-1.5 text-[13px] text-[#6B7280] hover:text-[#111827] transition-colors"
                      >
                        <FaShareAlt />
                        Partager
                      </button>

                      {/* Rating */}
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            onClick={() => handleRating(item.id, star)}
                            className={`h-4 w-4 cursor-pointer transition-colors ${
                              (ratings[item.id] || 0) >= star
                                ? "text-[#FACC15]"
                                : "text-gray-300 group-hover:text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* CTA bas de carte */}
                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        to={item.slug}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#0059FB] hover:text-[#003EB5]"
                      >
                        Voir plus
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M7.5 5l5 5-5 5" />
                        </svg>
                      </Link>

                      <button
                        type="button"
                        className="text-xs text-[#9CA3AF] hover:text-[#4B5563]"
                      >
                        Laisser un commentaire
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* ----- CONTRÔLES CAROUSEL ----- */}
            {n > itemsPerView && (
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setIndex((i) => (i - itemsPerView + n * 5) % n)
                    }
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#0059FB] shadow hover:bg-white"
                    aria-label="Précédent"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setIndex((i) => (i + itemsPerView) % n)
                    }
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#0059FB] shadow hover:bg-white"
                    aria-label="Suivant"
                  >
                    ›
                  </button>
                </div>

                <div className="flex gap-2">
                  {BLOGS.map((_, i) => {
                    const isActive =
                      i === index ||
                      (itemsPerView === 2 &&
                        (i === index || i === (index + 1) % n));

                    return (
                      <span
                        key={i}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          isActive ? "bg-[#0059FB]" : "bg-white/60"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

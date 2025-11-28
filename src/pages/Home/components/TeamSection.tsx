

// À adapter avec les vraies photos de ton dossier
import team1 from "@/assets/team/tanc2.jpg";
import team2 from "@/assets/team/Lorzero.jpg";
import team3 from "@/assets/team/Valcy.jpg";
import team4 from "@/assets/team/Kerly.png";
import team5 from "@/assets/team/Ernice.jpg";
import React, { useEffect, useRef, useState } from "react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  photo: string;
  tagline?: string;
};

const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Charles J. Tancrède",
    role: "Developer and Data-analyst",
    photo: team1,
    tagline: "Transforme les données en décisions concrètes pour les organisations.",
  },
  {
    id: 2,
    name: "Marc-Elie Lorzéro",
    role: "Data Analyst & Visualisation",
    photo: team2,
    tagline: "Dessine des tableaux de bord clairs et actionnables pour le terrain.",
  },
  {
    id: 3,
    name: "Jacques Daguerre Valcy",
    role: "Ingénieur Data & Automatisation",
    photo: team3,
    tagline: "Automatise les flux de données pour gagner du temps au quotidien.",
  },
  {
    id: 4,
    name: "Jean-Kerly Valcy",
    role: "UX / Produit digital",
    photo: team4,
    tagline: "Fait le pont entre les utilisateurs, les outils et la donnée.",
  },
  {
    id: 5,
    name: "Marie Ernice",
    role: "Consultant Data & Formation",
    photo: team5,
    tagline: "Accompagne les équipes dans l’adoption d’une culture data.",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  // Observe l’apparition / disparition de la section dans le viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // true quand ~30% de la section est visible
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Classes animées communes
  const baseAnim =
    "transition-all duration-700 ease-out will-change-transform will-change-opacity";

  const headerAnim = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

  return (
    <section id="Equipe"
      ref={sectionRef}
      className="py-10 bg-gradient-to-b from-[#F5FAFF] via-white to-[#E6F2FF]"
    >
      <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
        {/* En-tête */}
        <header
          className={`mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${baseAnim} ${headerAnim}`}
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#000044]/90 px-3 py-1">
              <span className="text-[10px] sm:text-[11px] tracking-[.25em] font-semibold uppercase text-white/80">
                Équipe Datakle
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-[#0AD1F0]" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-[#000044]">
                Une équipe qui parle data tous les jours.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A2740]/80">
                Consultants, analystes, ingénieurs et formateurs : des profils
                complémentaires pour couvrir tout le cycle de vie de vos
                données, du terrain à la décision.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#4B5563]/80 max-w-sm">
            Chaque projet est suivi par une équipe resserrée. Vous savez qui
            vous accompagne, du premier atelier jusqu’au déploiement
            opérationnel.
          </p>
        </header>

        {/* Cartes équipe */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, idx) => (
            <article
              key={member.id}
              className={`
                group relative flex flex-col items-center text-center
                rounded-2xl border border-white/80 bg-white/95
                shadow-[0_18px_50px_rgba(0,0,68,0.10)]
                px-5 py-7
                hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,68,0.18)]
                ${baseAnim}
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{
                // apparition en cascade : 0ms, 120ms, 240ms, ...
                transitionDelay: inView ? `${idx * 80}ms` : "0ms",
              }}
            >
              {/* halo bleu derrière la photo */}
              <div className="pointer-events-none absolute -top-6 h-24 w-24 rounded-full bg-[#0AD1F0]/20 blur-xl" />

              <div className="relative mb-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-[#0059FB]/15 shadow-md"
                />
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#000044]">
                {member.name}
              </h3>
              <p className="mt-1 text-[13px] font-medium uppercase tracking-[.12em] text-[#0059FB]">
                {member.role}
              </p>

              {member.tagline && (
                <p className="mt-3 text-xs sm:text-sm text-[#4B5563]">
                  {member.tagline}
                </p>
              )}

              <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#0AD1F0] via-[#0059FB] to-[#000044] opacity-80" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// À adapter avec les vraies photos de ton dossier
import team1 from "@/assets/team/tanc2.jpg";
import team2 from "@/assets/team/Lorzero.jpg";
import team3 from "@/assets/team/Valcy.jpg";
import team4 from "@/assets/team/Kerly.png";
import team5 from "@/assets/team/Ernice.jpg";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/common/SectionHeader";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  photo: string;
  tagline?: string;
};

const TEAM: TeamMember[] = [
    {
    id: 3,
    name: "Jacques Daguerre Valcy",
    role: "Responsable analytique",
    photo: team3,
    tagline: "Coordonne les analyses et veille à la qualité des résultats produits.",
  },
  {
    id: 2,
    name: "Marc-Elie Lorzéro",
    role: "Responsable Suivi & évaluation",
    photo: team2,
    tagline:
      "Exploite les données pour suivre les activités, orienter les décisions et évaluer l’impact des projets.",
  },
   {
    id: 1,
    name: "Charles J. Tancrède",
    role: "Responsable technologie et informatique",
    photo: team1,
    tagline:
      "Conçoit les outils et systèmes qui permettent de mieux exploiter les données.",
  },
  {
    id: 4,
    name: "Jean-Kerly Valcy",
    role: "Responsable marketing et médias sociaux",
    photo: team4,
    tagline: "Travaille sur les stratégies de communication et les campagnes marketing numériques.",
  },
  {
    id: 5,
    name: "Marie Ernice",
    role: "Responsable finance et opération",
    photo: team5,
    tagline:
      "Assure la gestion financière et le bon déroulement des activités.",
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
    <section
      id="equipe"
      ref={sectionRef}
      className="py-10 bg-gradient-to-b from-[#F5FAFF] via-white to-[#E6F2FF]"
    >
      <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
        {/* En-tête */}
        <SectionHeader
            kicker="Notre équipe"
            title="Une équipe engagée pour faire parler vos données."
            subtitle="Consultants, analystes, ingénieurs et formateurs : des profils complémentaires pour couvrir tout le cycle de vie de vos données, du terrain à la décision."
            ctaLabel="Voir l'équipe"
            ctaHref="/a-propos#equipe"
            inView={true}
            className="mb-10"
          />

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
                // apparition en cascade : 0ms, 80ms, 160ms, ...
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

              <h3 className="text-base sm:text-lg font-semibold text-[#000044] nexa-black">
                {member.name}
              </h3>
              <p className="mt-1 text-[13px] font-medium uppercase tracking-[.12em] text-[#0059FB] nexa-bold">
                {member.role}
              </p>

              {member.tagline && (
                <p className="mt-3 text-xs sm:text-sm text-[#4B5563] nexa-book">
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

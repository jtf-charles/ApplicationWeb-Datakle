// src/sections/SectionTeam.tsx

import React, { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

// À adapter avec les vraies photos de ton dossier
import team1 from "@/assets/team/tanc77.jpeg";
import team2 from "@/assets/team/Lorzero.jpg";
import team3 from "@/assets/team/Valcy.jpg";
import team4 from "@/assets/team/Kerly.png";
import team5 from "@/assets/team/Ernice.jpg";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  photo: string;
  tagline: string;
  story: string;
  linkedin: string;
};

const TEAM: TeamMember[] = [
  {
    id: 3,
    name: "Jacques Daguerre VALCY",
    role: " Responsable analytique",
    photo: team3,
    tagline: "Coordonne les analyses et veille à la qualité des résultats produits.",
    story:
      "Jacques intervient sur l’analyse des données. Il s’assure que les traitements sont cohérents, que les résultats sont fiables et que les analyses produites par DATAKLE peuvent réellement servir à la décision.",
    linkedin: "https://www.linkedin.com/in/jacques-daguerre-valcy-561bb0159/", // à adapter
  },
  {
    id: 2,
    name: "Marc-Elie LORZERO",
    role: "Responsable Suivi & évaluation",
    photo: team2,
    tagline: "Exploite les données pour suivre les activités, orienter les décisions et évaluer l’impact des projets.",
    story:
      "Marc-Elie travaille sur le suivi des activités et la lecture des résultats. Il aide à transformer les données en repères clairs pour comprendre ce qui avance, ce qui bloque et ce qu’il faut ajuster pour améliorer l’impact des projets.",
    linkedin: "https://www.linkedin.com/in/lorz%C3%A9ro-marc-elie-811b90167/", // à adapter
  },
    {
    id: 1,
    name: "Joseph Tancrède Fils CHARLES",
    role: "Responsable technologie et informatique",
    photo: team1,
    tagline: "Conçoit les outils et systèmes qui permettent de mieux exploiter les données.",
    story:
      "Chez DATAKLE, Charles s’occupe de la partie technique. Il conçoit les outils, structure les systèmes et veille à ce que les données puissent être collectées, organisées et utilisées de façon simple, fiable et utile.",
    linkedin: "https://www.linkedin.com/in/joseph-tancrede-fils-charles-aaa112262", // à adapter
  },
  {
    id: 4,
    name: "Jean-Kerly VALCY",
    role: "Responsable marketing et médias sociaux",
    photo: team4,
    tagline: "Travaille sur les stratégies de communication et les campagnes marketing numériques.",
    story:
      "Jean-Kerly pilote la communication digitale et la présence en ligne des clients. Il travaille sur les contenus, les campagnes et les messages pour mieux faire connaître vos services, renforcer votre image et créer un lien plus direct avec votre audience.",
    linkedin: "https://www.linkedin.com/in/jean-kerly-valcy-0a0a882a5/", // à adapter
  },
  {
    id: 5,
    name: "Marie Ernice VALCY",
    role: "Responsable finance et opération",
    photo: team5,
    tagline: "Assure la gestion financière et le bon déroulement des activités.",
    story:
      "Marie veille à la bonne organisation des activités sur le plan opérationnel et financier. Elle aide à garder les projets bien cadrés, les ressources bien suivies et les interventions menées avec plus de rigueur, de clarté et de continuité.",
    linkedin: "https://www.linkedin.com/in/marie-ernice-valcy-158878223/", // à adapter
  },
];

const SectionTeam: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  // Observer d’apparition dans le viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const baseAnim =
    "transition-all duration-700 ease-out will-change-transform will-change-opacity";
  const headerAnim = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

  return (
    <section
      id="equipe"
      ref={sectionRef}
      className="py-5 bg-gradient-to-b from-[#F5FAFF] via-white to-[#E6F2FF]"
    >
      <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
        {/* En-tête narratif */}
        <header
          className={`mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${baseAnim} ${headerAnim}`}
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#000044]/90 px-3 py-1">
              <span className="text-[10px] sm:text-[11px] tracking-[.25em] font-semibold uppercase text-white/80 nexa-black">
                Notre Équipe
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-[#0AD1F0]" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#000044] nexa-bold">
                Une équipe réunie autour d’un même objectif.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A2740]/80 nexa-book">
                 Notre équipe réunit des profils complémentaires qui avancent avec la même exigence :
                  proposer des solutions utiles, compréhensibles et adaptées aux réalités du terrain.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#4B5563]/80 nexa-book max-w-sm">
            Chaque membre apporte son expertise, mais c’est surtout le travail d’équipe
            qui fait la différence. Ensemble, nous cherchons à construire des solutions
            claires, solides et adaptées.
          </p>
        </header>

        {/* Récits individuels – layout alterné */}
        <div className="space-y-8 sm:space-y-10">
          {TEAM.map((member, idx) => {
            const appearAnim = inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6";

            const isEven = idx % 2 === 0;

            return (
              <article
                key={member.id}
                className={`
                  relative overflow-hidden rounded-3xl bg-white/95
                  shadow-[0_18px_50px_rgba(0,0,68,0.10)]
                  border border-white/70
                  px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8
                  ${baseAnim} ${appearAnim}
                `}
                style={{
                  transitionDelay: inView ? `${idx * 90}ms` : "0ms",
                }}
              >
                {/* halo léger derrière */}
                <div className="pointer-events-none absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#0AD1F0]/15 blur-3xl lg:hidden" />
                <div
                  className={`
                    pointer-events-none absolute top-0
                    ${isEven ? "left-0" : "right-0"}
                    h-full w-1/3
                    bg-gradient-to-b from-[#E6F2FF] via-transparent to-transparent
                    opacity-60
                  `}
                />

                <div
                  className={`
                    relative flex flex-col gap-5 lg:gap-8
                    lg:items-center
                    ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                  `}
                >
                  {/* Colonne photo / identité */}
                  <div className="flex flex-col items-center text-center lg:w-[30%]">
                    <div className="relative mb-3">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#0AD1F0]/30 via-[#0059FB]/20 to-transparent blur-xl" />
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover ring-4 ring-[#0059FB]/15 shadow-md"
                      />
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-[#000044] nexa-black">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[12px] sm:text-[13px] font-medium uppercase tracking-[.16em] text-[#0059FB] nexa-bold text-center">
                      {member.role}
                    </p>

                    <p className="mt-2 text-xs sm:text-sm text-[#4B5563] nexa-book max-w-xs">
                      {member.tagline}
                    </p>

                    {/* Bouton LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        mt-4 inline-flex items-center gap-2 rounded-full
                        bg-[#0A66C2] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white
                        shadow-[0_10px_24px_rgba(10,102,194,0.45)]
                        hover:bg-[#084b8a] hover:shadow-[0_12px_30px_rgba(10,102,194,0.55)]
                        transition-all duration-200 hover:-translate-y-0.5
                      "
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                        <FaLinkedinIn className="h-3 w-3" />
                      </span>
                      <span>Profil LinkedIn</span>
                    </a>
                  </div>

                  {/* Colonne récit */}
                  <div className="lg:w-[70%]">
                    <p className="text-[11px] sm:text-xs font-semibold tracking-[.22em] uppercase text-[#9CA3AF] mb-2">
                      Story {idx + 1}
                    </p>
                    <p className="text-sm sm:text-[15px] leading-relaxed text-[#1F2937] nexa-book">
                      {member.story}
                    </p>

                    {/* Petite jauge / progression projet */}
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex-1 h-1.5 rounded-full bg-[#E5E7EB] overflow-hidden">
                        <div
                          className={`
                            h-full rounded-full bg-gradient-to-r
                            from-[#0AD1F0] via-[#0059FB] to-[#000044]
                          `}
                          style={{ width: `${100}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-[#6B7280]">
                        Présent sur {100}% des projets
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;

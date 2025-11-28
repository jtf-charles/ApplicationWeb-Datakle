// src/sections/SectionTeam.tsx

import React, { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

// À adapter avec les vraies photos de ton dossier
import team1 from "@/assets/team/tanc2.jpg";
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
    id: 1,
    name: "Charles J. Tancrède",
    role: "Developer & Data Analyst",
    photo: team1,
    tagline: "Le fil rouge entre code, terrain et prise de décision.",
    story:
      "Chez DATAKLE, Charles est souvent le premier à ouvrir les fichiers bruts. Il adore comprendre comment les données ont été collectées, d’où viennent les incohérences et comment transformer tout ça en produits concrets : API, dashboards, applications. Son obsession : que chaque graphique réponde à une vraie question métier.",
    linkedin: "https://www.linkedin.com/in/joseph-tancrede-fils-charles-aaa112262", // à adapter
  },
  {
    id: 2,
    name: "Marc-Elie Lorzéro",
    role: "Data Analyst & Visualisation",
    photo: team2,
    tagline: "Rend les chiffres lisibles même pour ceux qui détestent Excel.",
    story:
      "Marc-Elie part toujours d’une idée simple : si un dirigeant ne comprend pas un graphique en 10 secondes, le graphique est à refaire. Il travaille la dataviz comme un designer, en pensant aux couleurs, aux gestes de l’utilisateur, au contexte d’utilisation (mobile, réunion, terrain…). Résultat : des tableaux de bord qui donnent envie d’être utilisés, pas juste consultés.",
    linkedin: "https://www.linkedin.com/in/lorz%C3%A9ro-marc-elie-811b90167/", // à adapter
  },
  {
    id: 3,
    name: "Jacques Daguerre Valcy",
    role: "Ingénieur Data & Automatisation",
    photo: team3,
    tagline: "Rêve d’un monde où plus personne ne recopie des chiffres à la main.",
    story:
      "Jacques aime prendre un process manuel, long, répétitif… et le transformer en pipeline automatisé. Il connecte les bases, sécurise les flux, met en place des scripts qui tournent pendant que les équipes dorment. Sa phrase préférée : « Si tu le fais plus de deux fois, on peut sûrement l’automatiser. »",
    linkedin: "https://www.linkedin.com/in/jacques-daguerre-valcy-561bb0159/", // à adapter
  },
  {
    id: 4,
    name: "Jean-Kerly Valcy",
    role: "UX / Produit Digital",
    photo: team4,
    tagline: "Pense d’abord aux gens qui cliquent, ensuite à l’interface.",
    story:
      "Jean-Kerly accompagne les équipes du premier atelier jusqu’aux maquettes interactives. Il écoute les frustrations, observe les habitudes et transforme tout ça en écrans simples, cohérents, fluides. Sa mission chez DATAKLE : faire en sorte que les outils data soient adoptés, pas subis.",
    linkedin: "https://www.linkedin.com/in/jean-kerly-valcy-0a0a882a5/", // à adapter
  },
  {
    id: 5,
    name: "Marie Ernice",
    role: "Consultante Data & Formation",
    photo: team5,
    tagline: "Met la pédagogie au centre de chaque projet data.",
    story:
      "Marie intervient là où la technique ne suffit plus : dans les salles de formation, les ateliers d’appropriation, les sessions de coaching. Elle traduit le langage des data en exemples concrets, adaptés au terrain. Son objectif : que chaque équipe se sente légitime pour utiliser les outils et challenger les chiffres.",
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
      id="Equipe"
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
                Équipe Datakle
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-[#0AD1F0]" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#000044] nexa-bold">
                Derrière les dashboards, il y a surtout des personnes.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A2740]/80 nexa-book">
                Chaque membre apporte sa manière de regarder les données&nbsp;:
                certains pensent en lignes de code, d’autres en parcours
                utilisateur ou en ateliers de formation. Ensemble, ils
                construisent une même histoire autour de vos projets.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#4B5563]/80 nexa-book max-w-sm">
            Plutôt que d’aligner des profils, nous préférons raconter comment
            chacun intervient dans la vie d’un projet : de la première
            extraction de données jusqu’au moment où les équipes se sentent
            vraiment autonomes.
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
                      Chapitre {idx + 1}
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
                          style={{ width: `${60 + idx * 8}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-[#6B7280]">
                        Présent sur {60 + idx * 8}% des projets
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

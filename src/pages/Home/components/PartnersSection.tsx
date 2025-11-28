// src/components/sections/PartnersSection.tsx
import Carousel from "../../../components/PartnersCarousel";
import brh from "@/assets/partners/brh2.png";
import capital from "@/assets/partners/capitalbank1.jpg";
import delimart from "@/assets/partners/delimart1.jpg";
import digicel from "@/assets/partners/digicel.png";
import soge from "@/assets/partners/sogebank1.png";
import ueh from "@/assets/partners/ueh2.jpg";
import SectionHeaderPartners from "@/components/common/SectionHeaderPartners";
import SectionHeaderSimple from "@/components/common/SectionHeaderSimple";
type Partner = { name: string; logo: string };
import { Link } from "react-router-dom";

const PARTNERS: Partner[] = [
  { name: "Banque de la République d’Haïti", logo: brh },
  { name: "Capital Bank", logo: capital },
  { name: "Delimart", logo: delimart },
  { name: "Digicel", logo: digicel },
  { name: "SOGEBANK", logo: soge },
  { name: "Université d’État d’Haïti", logo: ueh },
];

export default function PartnersSection() {
  return (
    <section className="">

        
    {/* Grille des cartes */}
    <section className="container-app my-12">
      {/* entête simple */}
      {/*<div className="mb-4" >
        <span className="flex items-center justify-center gap-2 rounded-full bg-[#0059FB]/10 text-[#0059FB] px-3 py-1 text-[3vh] tracking-[.22em] font-semibold uppercase ">
          — Nos partenaires
          <span className="inline-block size-1.5 rounded-full bg-[#0AD1F0] p-2"  />

        </span>
            </div>*/}
                <div
            className="
                mb-4
                flex flex-col items-center gap-3            /* mobile : empilé, centré */
                sm:flex-row sm:items-center sm:gap-4        /* ≥640px : sur une ligne */
                sm:justify-between                          /* badge à gauche, CTA à droite */
            "
            >
            {/* Badge */}
            <span
                className="
                inline-flex items-center gap-2 rounded-full
                bg-[#0059FB]/10 text-[#0059FB]
                px-3 py-1
                text-xs sm:text-sm md:text-base            /* taille de texte responsive */
                tracking-[.22em] font-semibold uppercase
                text-center
                nexa-black
                "
            >
                Nos partenaires
                <span className="inline-block size-2 rounded-full bg-[#0AD1F0]" />
            </span>

            {/* CTA */}
            <Link
                to="/default"
                className="
                inline-flex items-center gap-2 rounded-full
                bg-[#0059FB] text-white
                px-4 py-2 text-sm
                shadow-sm hover:shadow-md hover:bg-[#004ae0]
                transition-transform duration-200 hover:-translate-y-0.5
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0059FB]
                sm:ml-auto                                   /* pousse le bouton à droite dès sm */
                "
            >
                Voir plus
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M7.5 5l5 5-5 5" />
                </svg>
            </Link>
            </div>




      
      {/* coquille gradient */}
      <div className="rounded-3xl border border-white/60 bg-gradient-to-r from-[#DDF8FF] via-white to-[#dfe9ff] ring-1 ring-black/5 p-3 sm:p-4">
        <Carousel
          items={PARTNERS}
          intervalMs={5000}
          render={(p) => (
            <article className="h-full w-full rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-black/5 flex items-center justify-center py-7">
              <div className="text-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="mx-auto h-16 sm:h-40 object-contain"
                  // pas de filtre/grayscale -> couleurs préservées
                />
                <p className="mt-3 text-sm sm:text-[15px] font-medium nexa-bold text-[#0d1b2a]">
                  {p.name}
                </p>
              </div>
            </article>
          )}
        />
      </div>
    </section>
</section>
  );
}

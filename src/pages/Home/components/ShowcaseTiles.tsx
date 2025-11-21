import { Link } from "react-router-dom";
import SectionHeaderSimple from "@/components/common/SectionHeaderSimple";
import TileCard, { type Tile } from "../../../styles/components/TileCard";
import TilesCarousel from "../../../styles/components/TilesCarousel";
import { BulbIcon, ChartIcon, PuzzleIcon } from "../../../styles/components/icons";

import card12 from "@/assets/cards/card19.jpg";
import card11 from "@/assets/cards/card21.jpg";
import card2 from "@/assets/cards/card30.jpg";
import card24 from "@/assets/cards/card24.jpg";
import card16 from "@/assets/cards/card18.jpg";

const TILES: Tile[] = [
  {
    kicker: "IDENTITÉ",
    title: "Qui sommes-nous ?",
    short: "Votre partenaire de confiance pour transformer les données en opportunités.",
    long: "Nous sommes une équipe passionnée qui croit que les données, bien exploitées, révèlent un potentiel extraordinaire.",
    to: "/default",
    image: card12,
    Icon: ChartIcon,
  },
  {
    kicker: "EXPERTISE",
    title: "Que faisons-nous ?",
    short: "Des solutions basées sur les données qui transforment vos défis en résultats pertinents.",
    long: "Nous concevons et déployons des solutions : analytics, transformation numérique, marketing digital, coaching, évaluation d’impact.",
    to: "/default",
    image: card11,
    Icon: PuzzleIcon,
  },
  {
    kicker: "IMPACT",
    title: "Pourquoi le faisons-nous ?",
    short: "Donner du sens à vos données pour des décisions éclairées.",
    long: "Les bonnes décisions naissent d’informations fiables : confiance, agilité et performance pour vos équipes.",
    to: "/default",
    image: card2,
    Icon: BulbIcon,
  },
  {
    kicker: "IMPACT",
    title: "Pourquoi le faisons-nous ?",
    short: "Donner du sens à vos données pour des décisions éclairées.",
    long: "Les bonnes décisions naissent d’informations fiables : confiance, agilité et performance pour vos équipes.",
    to: "/default",
    image: card24,
    Icon: BulbIcon,
  },
  {
    kicker: "IMPACT",
    title: "Pourquoi le faisons-nous ?",
    short: "Donner du sens à vos données pour des décisions éclairées.",
    long: "Les bonnes décisions naissent d’informations fiables : confiance, agilité et performance pour vos équipes.",
    to: "/default",
    image: card16,
    Icon: BulbIcon,
  },
];

export default function ShowcaseTiles() {
  return (
     <section className="band-about band-pad">
          {/* Contenu centré et limité */}
          <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
            <SectionHeaderSimple
              title="A PROPOS"
              subtitle={
                <>
                  Des solutions data de bout en bout pour mesurer, comprendre et agir.
                  <br className="hidden sm:block" />
                  Accélérez vos décisions avec des outils clairs et performants.
                </>
              }
              ctaLabel="EN SAVOIR PLUS"
              ctaTo="/default"
            />
    
            {/* Grille des cartes */}
             <div className="mt-6">
            <TilesCarousel tiles={TILES} />
            </div>
          </div>
        </section>
      );
}

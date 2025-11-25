import { Link } from "react-router-dom";
import SectionHeaderSimple from "@/components/common/SectionHeaderSimple";
import TileCard, { type Tile } from "../../../styles/components/TileCard";
import TilesCarousel from "../../../styles/components/TilesCarousel";
import { BulbIcon, ChartIcon, PuzzleIcon,VisionIcon, MissionIcon, ValuesIcon,} from "../../../styles/components/icons";


import card12 from "@/assets/cards/card19.jpg";
import card11 from "@/assets/cards/card21.jpg";
import card2 from "@/assets/cards/card30.jpg";
import card24 from "@/assets/cards/card24.jpg";
import card16 from "@/assets/cards/card18.jpg";
import card18 from "@/assets/cards/card35.webp";
import card19 from "@/assets/cards/card36.jpg";
import card20 from "@/assets/cards/card37.jpg";
import card21 from "@/assets/cards/card38.jpg";
import card22 from "@/assets/cards/card39.jpg";

const TILES: Tile[] = [
  {
    kicker: "IDENTITÉ",
    title: "Qui sommes-nous ?",
    short: "Votre partenaire de confiance pour transformer les données en opportunités.",
    long: "Nous sommes une équipe passionnée qui croit que les données, bien exploitées, révèlent un potentiel extraordinaire.",
    to: "/a-propos#qui-nous-sommes",
    image: card12,
    Icon: ChartIcon,
  },
  {
    kicker: "EXPERTISE",
    title: "Que faisons-nous ?",
    short: "Des solutions basées sur les données qui transforment vos défis en résultats pertinents.",
    long: "Nous concevons et déployons des solutions : analytics, transformation numérique, marketing digital, coaching, évaluation d’impact.",
    to: "/a-propos#ce-que-nous-faisons",
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
    kicker: "VISION",
    title: "Où allons-nous ?",
    short:
      "Une organisation où chaque décision est guidée par les données.",
    long:
      "Faire de chaque organisation une entité où les décisions sont guidées par les données et l’intelligence analytique.",
    to: "/a-propos#vision-mission",
    image: card22,
    Icon: VisionIcon,
  },

  /* ------------------------------------------------------------------
     🔵 MISSION
     ------------------------------------------------------------------ */
  {
    kicker: "MISSION",
    title: "Pourquoi le faisons-nous ?",
    short:
      "Transformer vos données en valeur stratégique.",
    long:
      "Transformer vos données en leviers de performance et de rentabilité.",
    to: "/a-propos#vision-mission",
    image: card20,
    Icon: MissionIcon,
  },

  /* ------------------------------------------------------------------
     🔵 VALEURS
     ------------------------------------------------------------------ */
  {
    kicker: "VALEURS",
    title: "Ce qui nous guide",
    short:
      "Intégrité, excellence, innovation et impact réel.",
    long:
      "Nous croyons en des pratiques responsables : transparence, rigueur, créativité et engagement pour des résultats mesurables et durables.",
    to: "/a-propos#valeurs",
    image: card19,
    Icon: ValuesIcon,
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

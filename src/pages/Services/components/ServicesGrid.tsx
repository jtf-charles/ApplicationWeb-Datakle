import SectionHeaderSimple from "@/components/common/SectionHeaderSimple";
import ServiceCard, { type Service } from "./ServiceCard";
import {
  DataIcon, PipelineIcon, ShieldIcon, SurveyIcon, TrainingIcon, AppIcon
} from "../../../styles/components/icons";
import SectionHeaderDesign from "@/components/common/SectionHeaderDesign";

const SERVICES: Service[] = [
  { title: "Tableaux de bord & Insights",
    description: "KPIs clairs, suivi temps réel, storytelling data (Power BI / Metabase) pour piloter et décider vite.",
    to: "/default", Icon: DataIcon },
  { title: "Pipelines & Qualité de données",
    description: "Collecte, transformation et tests (dbt, ETL/ELT) pour fiabiliser vos informations et vos modèles.",
    to: "/default", Icon: PipelineIcon },
  { title: "Sécurité & Gouvernance",
    description: "Audits, bonnes pratiques, conformité et gouvernance des données pour un environnement maîtrisé.",
    to: "/default", Icon: ShieldIcon },
  { title: "Études & Enquêtes",
    description: "Méthodologie rigoureuse, collecte terrain/numérique, analyses statistiques et restitutions claires.",
    to: "/default", Icon: SurveyIcon },
  { title: "Formation & Coaching",
    description: "Montée en compétence des équipes : outils BI, culture data, pratiques analytiques et productivité.",
    to: "/default", Icon: TrainingIcon },
  { title: "Apps & Automatisation",
    description: "Applications métiers et automatisations pour accélérer vos processus et créer de la valeur.",
    to: "/default", Icon: AppIcon },
];

export default function ServicesGrid() {
  return (
    /* >>> Bande pleine largeur avec background */
    <section className="band-services band-pad bg-gradient-to-b from-[#000044] via-[#0059FB] to-[#000044]">
      <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
      <SectionHeaderDesign
          title="NOS SERVICES"
          subtitle={
            <>
              Des solutions data de bout en bout pour mesurer, comprendre et agir.
              <br className="hidden sm:block" />
              Accélérez vos décisions avec des outils clairs et performants.
            </>
          }
          ctaLabel="Voir tous les services"
          ctaTo="/default"
        />
      </div>
      <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
        {/* Coquille blanche / translucide sur le fond bleu */}
        <div
          className="
            rounded-[2rem] bg-white/5 border border-white/15
            shadow-[0_30px_80px_rgba(0,0,0,0.45)]
            backdrop-blur-md px-4 sm:px-6 py-6 sm:py-8
          "
        >

        
      {/* Contenu centré et limité */}
      <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
        

        {/* Grille des cartes */}
        <div className="mt-6 grid gap-6 md:gap-7 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={i} className="w-full">
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}

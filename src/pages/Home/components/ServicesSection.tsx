import SectionHeader1 from "@/components/common/SectionHeader1";

import TileCard, { type TileProps } from "../../../styles/components/TileCard";
import { BulbIcon, ChartIcon, PuzzleIcon } from "../../../styles/components/icons";

// ➜ remplace par tes propres images
import s1 from "@/assets/services/analysis.png";
import s2 from "@/assets/services/data-pipeline.png";
import s3 from "@/assets/services/mentoring.png";

const SERVICES: TileProps[] = [
  {
    kicker: "ANALYTICS",
    title: "Tableaux de bord & insights",
    short: "Indicateurs clairs, suivi temps réel et analyses opérationnelles.",
    long:
      "Conception de KPIs, Power BI / Metabase, storytelling data et automatisation des rapports.",
    image: s1,
    to: "/services#analytics",
    Icon: ChartIcon,
  },
  {
    kicker: "DATA PIPELINE",
    title: "Collecte, qualité & transformation",
    short: "De la donnée brute à l’information fiable, prête pour la décision.",
    long:
      "ETL/ELT, dbt, orchestration, tests de qualité, entrepôt de données (PostgreSQL, BigQuery).",
    image: s2,
    to: "/services#pipeline",
    Icon: PuzzleIcon,
  },
  {
    kicker: "ADVISORY",
    title: "Accompagnement & gouvernance",
    short: "Cadrage, stratégie data, coaching et montée en compétence.",
    long:
      "Feuille de route, audit de maturité, data catalog, sécurité, formations personnalisées.",
    image: s3,
    to: "/services#advisory",
    Icon: BulbIcon,
  },
];

export default function ServicesSection() {
  return (
    <section className="container-app my-10 sm:my-12">
      <SectionHeader1
        badge="— Découvrez nos expertises"
        title="Services"
        subtitle={
          <>
            <span className="text-gray-700">Des solutions data de bout en bout, </span>
            <span className="bg-gradient-to-r from-[#0AD1F0] to-[#0059FB] bg-clip-text text-transparent">
              pensées pour l’action.
            </span>
          </>
        }
      />
      <div className="grid gap-6 md:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((srv, i) => (
          <TileCard key={i} {...srv} />
        ))}
      </div>
    </section>
  );
}

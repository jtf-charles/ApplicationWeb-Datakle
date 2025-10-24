import { Link } from "react-router-dom";
// Optionnel si tu as une illustration
// import heroSvg from "@/assets/illustrations/hero-analytics.svg";

export default function Hero() {
  return (
    <section className="section">
      <div className="container-app section-grid">
        {/* Texte */}
        <div className="flex flex-col gap-6">
          <h1 className="headline-xl">
            DATAKLE — Transformons vos données en décisions stratégiques
          </h1>
          <p className="lead">
            Analyse de données, enquêtes, mesure de performance et accompagnement décisionnel.
            Une approche claire, utile et orientée résultats.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/contact"  className="btn btn-primary">Contactez-nous</Link>
            <Link to="/services" className="btn btn-ghost">Voir nos services</Link>
          </div>


          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Collecte → Stockage → Transformation → Visualisation</li>
            <li>• Stack moderne : PostgreSQL, BigQuery, dbt, Power BI, Metabase</li>
          </ul>
        </div>

        {/* Visuel */}
        <div className="card p-4 md:p-6">
          <div className="aspect-[16/10] w-full rounded-xl border border-gray-200 grid place-items-center text-gray-500">
            {/* <img src={heroSvg} alt="" className="w-full h-auto" /> */}
            Espace visuel (illustration / mockup / stats)
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/services/ServicesSummarySection.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiDatabase,
  FiShield,
  FiClipboard,
  FiUsers,
  FiCpu,
} from "react-icons/fi";

import { SectionHeader } from "../../../components/common/SectionHeader"; // adapte le chemin si besoin

const BASE_ANIM =
  "transition-all duration-700 ease-out will-change-transform will-change-opacity";

type Service = {
  id: number;
  title: string;
  description: string;
  href: string;
  Icon: IconType;
};

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Tableaux de bord & Insights",
    description:
      "KPIs clairs, suivi temps réel, storytelling data (Power BI, Metabase…) pour décider vite.",
    href: "/services/tableaux-de-bord",
    Icon: FiBarChart2,
  },
  {
    id: 2,
    title: "Pipelines & Qualité de données",
    description:
      "Collecte, transformation, tests de qualité (ETL/ELT, dbt…) pour fiabiliser vos modèles.",
    href: "/services/pipelines-qualite",
    Icon: FiDatabase,
  },
  {
    id: 3,
    title: "Sécurité & Gouvernance",
    description:
      "Conformité, bonnes pratiques et gouvernance de la donnée dans un environnement maîtrisé.",
    href: "/services/securite-gouvernance",
    Icon: FiShield,
  },
  {
    id: 4,
    title: "Études & Enquêtes",
    description:
      "Collecte terrain/numérique, analyses statistiques et synthèses pour vos décisions.",
    href: "/services/etudes-enquetes",
    Icon: FiClipboard,
  },
  {
    id: 5,
    title: "Formation & Coaching",
    description:
      "Accompagnement des équipes : outils BI, culture data, process et bonnes pratiques.",
    href: "/services/formation-coaching",
    Icon: FiUsers,
  },
  {
    id: 6,
    title: "Apps & Automatisation",
    description:
      "Applications métiers, APIs et automatisations pour fluidifier vos processus.",
    href: "/services/apps-automatisation",
    Icon: FiCpu,
  },
];

export default function ServicesSummarySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  // Observer la section pour l’animation d’apparition/disparition
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-5 bg-gradient-to-b from-[#000044] via-[#00115C] to-[#001B80]"
    >
      <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
        {/* === Header réutilisable === */}
        <SectionHeader
          kicker="Nos services"
          title="Des solutions data de bout en bout."
          subtitle="Mesurer, comprendre, automatiser et agir : une offre complète pour rendre vos décisions plus rapides, plus sûres et plus alignées avec le terrain."
          ctaLabel="Voir tous les services"
          ctaHref="/services"
          inView={inView}
        />

        {/* === Bloc cartes services === */}
        <div className="rounded-[2.3rem] bg-gradient-to-b from-[#00125F] via-[#002894] to-[#0035BF] p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, idx) => {
              const { Icon } = service;
              return (
                <article
                  key={service.id}
                  className={`
                    relative flex flex-col items-center text-center
                    rounded-3xl bg-gradient-to-b from-white/98 via-white/95 to-white/90
                    shadow-[0_18px_50px_rgba(0,0,68,0.20)]
                    px-5 py-7
                    hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,68,0.35)]
                    ${BASE_ANIM}
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  `}
                  style={{
                    transitionDelay: inView ? `${idx * 80}ms` : "0ms",
                  }}
                >
                  {/* Icône dédiée */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0059FB] text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-1 text-[15px] sm:text-base font-semibold text-[#00124F]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#4B5563]">
                    {service.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#0059FB] px-4 py-2 text-xs font-semibold text-white hover:bg-[#003EB5] transition-colors"
                    >
                      En savoir plus
                      <span className="text-[11px]">›</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

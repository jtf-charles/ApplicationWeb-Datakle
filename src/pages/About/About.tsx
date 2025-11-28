import type React from "react";

// ⚠️ Remplace ces imports par de vraies images de ton projet.
import aboutHero from "@/assets/about/graph2.jpg";
import aboutOps from "@/assets/about/portrait4.jpg";
import aboutData from "@/assets/about/site.jpg";
import visionImg from "@/assets/about/graph.jpg";
import missionImg from "@/assets/about/team5.jpg";
import impactImg from "@/assets/about/man1.webp";

// 🔥 Hook de scroll vers les sections (#id)
import { useScrollToHash } from "@/hooks/useScrollToHash";

// src/pages/About/AboutPage.tsx

export default function About() {
  // Compense la navbar fixe (ajuste 90 si besoin)
  useScrollToHash(90);

  return (
    <main className="bg-[#F5FAFF] pt-18 sm:pt-18 lg:pt-18">
      {/* ========= HERO ========= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#000044] via-[#000044] to-[#0059FB] text-white">
        {/* halos décoratifs */}
        <div className="pointer-events-none absolute -left-32 -top-40 h-72 w-72 rounded-full bg-[#0AD1F0]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#0059FB]/25 blur-3xl" />

        <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6 py-14 sm:py-20 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] items-center">
            {/* Texte */}
            <div>
              <span className="inline-flex section-kicker nexa-black items-center gap-2 rounded-full bg-white/5 px-3 py-1  text-[#0AD1F0]">
                À propos • DATAKLE
                <span className="h-1.5 w-1.5 rounded-full bg-[#0AD1F0]" />
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight nexa-book">
                Nous transformons vos données
                <span className="block text-[#0AD1F0]">
                  en décisions utiles, mesurables
                  <span className="text-white"> et orientées résultats.</span>
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl nexa-book">
                De plus en plus d’activités se jouent en ligne ou sans mesure
                claire sur le terrain. Chez DATAKLE, on vous aide à reprendre
                le contrôle : des objectifs clairs, les bons outils, des
                indicateurs fiables, des recommandations actionnables.
              </p>

              {/* mini badges */}
              <div className="mt-6 flex flex-wrap gap-3 text-[12px] nexa-book">
                <div className="rounded-full bg-white/10 px-4 py-2">
                  + de 30 projets accompagnés
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2">
                  Télécom, ONG, État, secteur privé
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2">
                  Dashboard, pipelines, études & audits
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="rounded-[2rem] bg-white/5 p-3 sm:p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="relative overflow-hidden rounded-[1.7rem] bg-[#000044]">
                  <img
                    src={aboutHero}
                    alt="Culture data chez DATAKLE"
                    className="h-full w-full object-cover"
                  />
                  {/* pastille */}
                  <span className="absolute nexa-black bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#000044]">
                    Culture data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* barre dégradée */}
        <div className="h-2 w-full bg-gradient-to-r from-[#0AD1F0] via-[#0059FB] to-[#0AD1F0]" />
      </section>

      {/* ========= SECTION : QUI NOUS SOMMES ========= */}
      <section
        id="qui-nous-sommes"
        className="py-14 sm:py-16 bg-[#F5FAFF]"
      >
        <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-start">
            {/* Texte gauche */}
            <div>
              <p className="  section-kicker nexa-black">
                Ce que nous sommes
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#000044] nexa-bold">
                Une équipe data proche du terrain,
                <span className="text-[#0059FB]"> qui parle chiffres & réalité.</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#4B5563] nexa-book">
                DATAKLE est née d’un constat simple : beaucoup d’organisations
                collectent des données… mais ont du mal à les transformer en
                décisions concrètes. Nous faisons le lien entre les besoins du
                terrain, la technique et vos enjeux stratégiques.
              </p>

              <p className="mt-3 text-sm sm:text-base text-[#4B5563] nexa-book">
                Nous combinons expertise en statistiques, science des données,
                développement logiciel et compréhension des contextes
                haïtiens : contraintes réseau, budgets serrés, équipes
                hybrides terrain / bureau.
              </p>

              {/* bullets */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-[#111827]">
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0059FB] nexa-bold">
                    Notre approche
                  </h3>
                  <ul className="space-y-1 text-[13px] text-[#4B5563] nexa-book">
                    <li>• Pédagogie : on explique, on documente.</li>
                    <li>• Co-construction avec vos équipes.</li>
                    <li>• Focus culture data, pas seulement outils.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0059FB] nexa-bold">
                    Ce que vous gagnez
                  </h3>
                  <ul className="space-y-1 text-[13px] text-[#4B5563] nexa-book">
                    <li>• Indicateurs clairs & fiables.</li>
                    <li>• Reporting simplifié.</li>
                    <li>• Plus de décisions basées sur “le feeling”.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* carte stats droite */}
            <div className="space-y-4 nexa-book">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  label="Projets accompagnés"
                  highlight="30+"
                  description="Dashboards, pipelines, audits, études statistiques & dispositifs de suivi-évaluation."
                />
                <InfoCard
                  label="Secteurs"
                  highlight="Télécom, ONG, État"
                  description="Programmes humanitaires, agriculture, santé, finance, éducation…"
                  dark
                />
              </div>

              <InfoCard
                label="Local & connecté"
                highlight="Basés en Haïti, ouverts sur le monde."
                description="On mixe bonnes pratiques internationales et contraintes locales : connexion, outils, équipe, budget."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========= SECTION : CE QUE NOUS FAISONS ========= */}
      <section
        id="ce-que-nous-faisons"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)] items-center">
            {/* Illustration gauche */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-[2rem] bg-[#000044] p-3 sm:p-4 shadow-[0_24px_80px_rgba(15,23,42,0.4)]">
                <img
                  src={aboutOps}
                  alt="Solutions data de bout en bout"
                  className="h-full w-full rounded-[1.6rem] object-cover"
                />
                <div className="absolute -bottom-6 left-10 h-14 w-28 rounded-full bg-[#0AD1F0]/80 blur-xl" />
              </div>
            </div>

            {/* Texte droite */}
            <div className="order-1 lg:order-2">
              <p className="section-kicker nexa-black">
                Ce que nous faisons
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#000044] nexa-bold">
                Des solutions data de bout en bout pour mesurer,
                comprendre et agir.
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#4B5563] nexa-book">
                Nous intervenons sur toute la chaîne de valeur de la donnée :
                de la collecte sur le terrain jusqu’à la prise de décision au
                niveau stratégique.
              </p>

              <div className="mt-6 space-y-4 nexa-book">
                {[
                  {
                    id: "01",
                    title: "Choisir les bons outils",
                    text: "Sélection et paramétrage des solutions adaptées à votre contexte, pas une usine à gaz impossible à maintenir.",
                  },
                  {
                    id: "02",
                    title: "Booster, mesurer, suivre vos activités",
                    text: "Tableaux de bord, pipelines, automatisation, suivi temps réel : vos indicateurs deviennent vivants.",
                  },
                  {
                    id: "03",
                    title: "Exploiter les données de votre entreprise",
                    text: "Nettoyage, structuration, analyses, visualisations… pour voir enfin ce que les chiffres racontent.",
                  },
                  {
                    id: "04",
                    title: "Recevoir des recommandations actionnables",
                    text: "Des insights concrets, priorisés, alignés avec vos objectifs opérationnels et financiers.",
                  },
                ].map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#0059FB] text-[11px] font-semibold text-white">
                      {item.id}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#000044]">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#4B5563] mt-1">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= STRIP VISION / MISSION / VALEURS / IMPACT ========= */}
      <section
        id="vision-mission"
        className="bg-[#000044] text-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1.6fr)] items-start">
            {/* Texte d’intro */}
            <div>
              <p className="section-kicker nexa-black">
                Vision • Mission • Valeurs • Impact
              </p>
              <h2 className="mt-3 text-2xl sm:text-[1.9rem] font-extrabold leading-snug nexa-bold">
                Là où nous allons,
                <span className="text-[#0AD1F0]">
                  {" "}
                  et ce qui guide chacune de nos décisions.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-[15px] text-white/85 max-w-xl leading-relaxed nexa-book">
                Pour nous, la donnée n’a de sens que si elle améliore la vie
                réelle des équipes et des bénéficiaires. Nos engagements se
                structurent autour de quatre piliers : une vision claire, une
                mission opérationnelle, des valeurs assumées et un impact
                mesurable dans vos projets.
              </p>

              <div className="mt-5 grid gap-2 text-[13px] text-white/80 sm:grid-cols-2 nexa-book">
                <div className="space-y-1">
                  <p>• Une boussole : là où nous voulons amener nos clients.</p>
                  <p>• Une façon de faire : comment nous délivrons nos projets.</p>
                </div>
                <div className="space-y-1">
                  <p>• Un cadre : les valeurs qui régissent nos collaborations.</p>
                  <p>• Un résultat : l’impact concret de nos interventions.</p>
                </div>
              </div>
            </div>

            {/* Mosaïque d’images + textes */}
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  key: "vision",
                  label: "Vision",
                  image: visionImg,
                  text: "Faire de chaque organisation une entité où les décisions sont guidées par les données et l’intelligence analytique.",
                  detail:
                    "Nous aidons vos équipes à passer d’une logique de réaction à une logique d’anticipation, grâce à des indicateurs partagés.",
                },
                {
                  key: "mission",
                  label: "Mission",
                  image: missionImg,
                  text: "Transformer vos données en leviers de performance et de rentabilité, avec des solutions concrètes et documentées.",
                  detail:
                    "Nos interventions vont de la collecte à la visualisation, avec un accompagnement pour que les outils soient réellement utilisés.",
                },
                {
                  key: "valeurs",
                  label: "Valeurs",
                  image: aboutData,
                  text: "Pédagogie, transparence, exigence de qualité et respect des réalités haïtiennes : pas de promesses impossibles.",
                  detail:
                    "On préfère un tableau de bord simple qui tourne, plutôt qu’une usine à gaz qui dort dans un dossier partagé.",
                },
                {
                  key: "impact",
                  label: "Impact",
                  image: impactImg,
                  text: "Des tableaux de bord qui servent vraiment, des décisions mieux informées et des programmes qui apprennent de leurs données.",
                  detail:
                    "L’impact se mesure dans vos chiffres, mais aussi dans la confiance retrouvée entre décideurs, équipes opérationnelles et partenaires.",
                },
              ].map((item, idx) => (
                <article
                  key={item.key}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(15,23,42,0.7)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.85)] ${
                    idx % 2 === 1 ? "sm:translate-y-6" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Cartouche texte chevauchant l’image */}
                  <div className="relative -mt-7 mx-4 mb-4 rounded-2xl bg-[#020617]/95 px-4 py-4 text-left">
                    <p className="section-kicker nexa-black">
                      {item.label}
                    </p>
                    <p className="mt-2 text-[13px] sm:text-sm text-white/95 leading-relaxed nexa-bold">
                      {item.text}
                    </p>
                    <p className="mt-2 text-[12px] text-white/70 leading-relaxed nexa-book">
                      {item.detail}
                    </p>
                  </div>

                  {/* halo décoratif */}
                  <div className="pointer-events-none absolute -bottom-6 -right-4 h-16 w-16 rounded-full bg-[#0AD1F0]/30 blur-2xl" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========= SECTION : MANIÈRE DE TRAVAILLER ========= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-center">
            {/* Texte */}
            <div>
              <p className="section-kicker nexa-black">
                Notre façon de travailler
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#000044] nexa-bold">
                Une culture de la donnée pragmatique,
                <span className="text-[#0059FB]"> pas de buzzword inutile.</span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#4B5563] nexa-book">
                On parle Excel, SQL, Python, Power BI… mais aussi « réalité
                terrain », « réseau qui coupe », « budget limité » et
                « équipe débordée ». Notre rôle : traduire les concepts data en
                solutions concrètes que vos équipes peuvent adopter.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 text-[13px] text-[#374151]">
                <div className="space-y-1.5">
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#0059FB] nexa-bold">
                    Ce que nous garantissons
                  </h3>
                  <ul className="space-y-1 nexa-book">
                    <li>• Transparence sur les limites des données.</li>
                    <li>• Documentation claire et réutilisable.</li>
                    <li>• Transfert de compétences vers vos équipes.</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#0059FB] nexa-bold">
                    Ce que nous évitons
                  </h3>
                  <ul className="space-y-1 nexa-book">
                    <li>• Projet “boîte noire” impossible à maintenir.</li>
                    <li>• Dashboard joli mais jamais utilisé.</li>
                    <li>• Outils surdimensionnés par rapport au besoin.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Illustration / tableau simplifié */}
            <div>
              <div className="rounded-[1.8rem] bg-[#F5FAFF] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-[#E5E7EB] nexa-book">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#6B7280] uppercase tracking-[0.18em] mb-3">
                  <span className="nexa-black">Avant DATAKLE</span>
                  <span className="nexa-black">Avec DATAKLE</span>
                </div>
                <div className="grid gap-3 text-[12px] sm:text-[13px]">
                  {[
                    [
                      "Tableurs dispersés, chiffres contradictoires",
                      "Une seule source fiable, partagée",
                    ],
                    [
                      "Rapports produits à la main",
                      "Automatisation & mises à jour rapides",
                    ],
                    [
                      "Décisions au feeling",
                      "Décisions appuyées par des indicateurs clairs",
                    ],
                  ].map(([before, after], i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2"
                    >
                      <div className="rounded-xl bg-white px-3 py-2 text-[#B91C1C] border border-[#FEE2E2]">
                        {before}
                      </div>
                      <div className="rounded-xl bg-[#0059FB]/10 px-3 py-2 text-[#0059FB] border border-[#BFDBFE]">
                        {after}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= BANDEAU SLOGAN ========= */}
      <section className="relative overflow-hidden py-10 bg-gradient-to-r from-[#0059FB] via-[#000044] to-[#0059FB] nexa-black">
        <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-[#0AD1F0]/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 -bottom-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center text-white relative z-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0AD1F0]">
            Notre mantra
          </p>
          <p className="mt-3 text-lg sm:text-xl font-semibold">
            « La donnée n’est pas qu’une question de technologie,
            <span className="text-[#0AD1F0]"> c’est une question de culture.</span> »
          </p>
        </div>
      </section>

      {/* ========= SECTION ÉQUIPE (résumé rapide) ========= */}
    </main>
  );
}

/* ===== composant de carte info réutilisable ===== */

type InfoCardProps = {
  label: string;
  highlight: string;
  description: string;
  dark?: boolean;
};

function InfoCard({ label, highlight, description, dark }: InfoCardProps) {
  if (dark) {
    return (
      <div className="rounded-2xl bg-[#000044] text-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0AD1F0]">
          {label}
        </p>
        <p className="mt-2 text-sm font-semibold">{highlight}</p>
        <p className="mt-2 text-[13px] text-white/80">{description}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] border border-[#E5E7EB]">
      <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0059FB]">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-[#000044]">{highlight}</p>
      <p className="mt-2 text-[13px] text-[#4B5563]">{description}</p>
    </div>
  );
}

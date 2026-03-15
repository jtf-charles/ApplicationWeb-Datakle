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
                À propos de nous
                
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight nexa-book">
                Nous sommes le partenaire idéal pour vous aider
                <span className="block text-[#0AD1F0]">
                   à exploiter vos données
                  <span className="text-white"> et améliorer vos performances</span>
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl nexa-book text-justify">
                Aujourd’hui, de plus en plus de données sont produites : activités en ligne, ventes, campagnes marketing, enquêtes ou suivi de projets. 
                Pourtant, dans beaucoup de cas, ces informations restent peu exploitées. 
                Les données existent, mais elles ne sont pas toujours organisées, analysées ou utilisées pour orienter les décisions. 
                Les équipes avancent alors avec une vision partielle de la réalité. 
                C’est à partir de ce constat qu’est née DATAKLE.
                Notre objectif est de vous aider à mieux organiser, 
                analyser et comprendre vos données afin de transformer l’information disponible en décisions plus éclairées et en actions plus efficaces.
              </p>

              {/* mini badges */}
              <div className="mt-6 flex flex-wrap gap-3 text-[12px] nexa-book">
                <div className="rounded-full bg-white/10 px-4 py-2">
                  + de 5 projets accompagnés
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2">
                  ONG • Institutions publiques • Entreprises • Particuliers
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2">
                  Gestion données, enquêtes, marketing digital, coaching ....
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
                une équipe qui aide 
                <span className="text-[#0059FB]"> à exploiter les données pour mieux décider</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#4B5563] nexa-book  text-justify">
                DATAKLE est une équipe pluridisciplinaire qui accompagne
                les organisations dans l’exploitation de leurs données.
                Nous travaillons à la croisée de la gestion des données, de la technologie,
                du marketing digital, du suivi-évaluation et de la formation
                pour aider nos clients à mieux comprendre leur réalité
                et à prendre de meilleures décisions.
              </p>

              <p className="mt-3 text-sm sm:text-base text-[#4B5563] nexa-book  text-justify">
             Notre rôle ne se limite pas à produire des analyses à partir des données.
              Nous aidons aussi à structurer l’information, à concevoir des outils utiles,
              à améliorer les processus et à rendre les données plus simples,
              plus claires et plus utiles au quotidien.
              </p>

              {/* bullets */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-[#111827]">
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0059FB] nexa-bold">
                    Notre approche
                  </h3>
                  <ul className="space-y-1 text-[13px] text-[#4B5563] nexa-book">
                    <li>Nous partons des besoins réels de chaque client</li>
                    <li>Nous cherchons des solutions simples, utiles et adaptées</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0059FB] nexa-bold">
                    Ce que vous gagnez
                  </h3>
                  <ul className="space-y-1 text-[13px] text-[#4B5563] nexa-book">
                    <li>Des données mieux organisées et plus faciles à exploiter.</li>
                    <li>Des décisions plus claires, plus rapides et mieux orientées.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* carte stats droite */}
            <div className="space-y-4 nexa-book">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  label="Notre expérience"
                  highlight="5+"
                  description="Nous avons accompagné différents clients à travers des enquêtes, des analyses stratégiques et des systèmes de gestion de données..."
                />
                <InfoCard
                  label="Nos clients"
                  highlight="ONG, institutions, entreprises et professionnels"
                  description="Nos services s’adressent à des structures de tailles et de secteurs différents."
                  dark
                />
              </div>

              <InfoCard
                label="Localisation"
                highlight="Basée en Haïti, ouverts sur le monde."
                description="Notre équipe évolue en Haïti et intervient avec une bonne connaissance du terrain et des réalités locales."
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
                Nous offrons des services pour vous aider à mesurer, comprendre et agir avec plus de clarté
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#4B5563] nexa-book">
              Nous accompagnons les organisations, les entreprises et les professionnels dans la gestion de leurs données.
               Nous les aidons à concevoir ou à adopter des outils adaptés, à mieux exploiter leurs informations pour orienter leurs décisions, 
               à renforcer les capacités de leurs équipes par la formation, à développer des stratégies de marketing digital et à améliorer leur performance.
              </p>

              <div className="mt-6 space-y-4 nexa-book">
                {[
                  {
                    id: "01",
                    title: "Évaluer vos besoins",
                    text: "Nous analysons votre contexte, vos besoins et vos priorités pour identifier les solutions les plus utiles à votre activité.",
                  },
                  {
                    id: "02",
                    title: "Concevoir ou choisir les outils adaptés",
                    text: "Nous vous accompagnons dans la conception ou le choix d’outils adaptés à votre réalité et à vos objectifs",
                  },
                  {
                    id: "03",
                    title: "Exploiter vos données",
                    text: "Nous vous aidons à organiser, analyser et valoriser vos données pour mieux comprendre votre activité et mieux décider.",
                  },
                  {
                    id: "04",
                    title: "Mesurer et suivre vos activités",
                    text: "Nous mettons en place des outils et des indicateurs pour suivre vos actions, mesurer vos progrès et améliorer vos performances.",
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
                Ce qui nous guide
                <span className="text-[#0AD1F0]">
                  {" "}
                  et donne du sens à notre travail.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-[15px] text-white/85 max-w-xl leading-relaxed nexa-book">
            Chez DATAKLE, nous croyons que les données ne prennent vraiment de valeur
            que lorsqu’elles aident à mieux comprendre, mieux décider et mieux agir.
            Notre travail repose sur une vision claire,
            des valeurs solides et la volonté de produire un impact concret
            pour les organisations que nous accompagnons.
              </p>

              <div className="mt-5 grid gap-2 text-[13px] text-white/80 sm:grid-cols-2 nexa-book">
                <div className="space-y-1">
                  <p>• Contribuer à une utilisation plus simple, plus utile et plus stratégique des données.</p>
                  <p>• Accompagner les organisations avec des solutions adaptées à leurs réalités et à leurs besoins.</p>
                </div>
                <div className="space-y-1">
                  <p>•  Rigueur, clarté, proximité, responsabilité et volonté de bien faire.</p>
                  <p>• Des outils utiles, des décisions mieux éclairées et des actions plus efficaces.</p>
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
                    "Nous croyons qu’une meilleure utilisation des données permet de travailler avec plus de clarté, plus de cohérence et plus d’efficacité.",
                },
                {
                  key: "mission",
                  label: "Mission",
                  image: missionImg,
                  text: "Transformer vos données en leviers de performance et de rentabilité, avec des solutions concrètes et documentées.",
                  detail:
                    "Nous proposons des solutions concrètes, des outils adaptés et un accompagnement pratique pour que les données servent réellement à décider et à agir.",
                },
                {
                  key: "valeurs",
                  label: "Valeurs",
                  image: aboutData,
                  text: "Clarté, rigueur, proximité et sens du concret guident notre manière de travailler.",
                  detail:
                    "tions utiles, compréhensibles et adaptées à la réalité de chaque client, plutôt que des outils complexes peu utilisés.",
                },
                {
                  key: "impact",
                  label: "Impact",
                  image: impactImg,
                  text: "Des outils utiles, des analyses plus détaillées et des décisions mieux éclairées.",
                  detail:
                    "Notre impact se voit dans des équipes qui comprennent mieux leurs données, suivent mieux leurs activités et avancent avec plus d’assurance.",
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
               Une approche simple, claire
                <span className="text-[#0059FB]">et adaptée à vos réalités.</span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#4B5563] nexa-book">
              Chaque organisation a sa propre réalité. C’est pourquoi nous ne venons pas
              avec des solutions toutes faites. Chez DATAKLE, nous cherchons d’abord à comprendre
              vos besoins, vos priorités et votre fonctionnement, pour construire un accompagnement
              utile, réaliste et vraiment adapté à votre contexte.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 text-[13px] text-[#374151]">
                <div className="space-y-1.5">
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#0059FB] nexa-bold">
                    Ce qui guide notre approche
                  </h3>
                  <ul className="space-y-1 nexa-book">
                    <li>• Écouter avant de proposer</li>
                    <li>• Adapter les outils à votre réalité, pas l’inverse</li>
                    <li>• Construire des solutions simples, utiles et durables</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#0059FB] nexa-bold">
                    Ce que cela apporte pour vous
                  </h3>
                  <ul className="space-y-1 nexa-book">
                    <li>• Des outils plus faciles à adopter par vos équipes</li>
                    <li>• Des données plus claires pour mieux décider</li>
                    <li>• Un accompagnement concret, du besoin jusqu’à l’usage</li>
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
            Notre conviction
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

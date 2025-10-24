// src/components/home/ShowcaseTiles.tsx
import { Link } from "react-router-dom";
import React, { type SVGProps } from "react";
import card12 from "@/assets/cards/card12.webp";
import card11 from "@/assets/cards/card11.jpg";
import card2 from "@/assets/cards/card2.jpg";

/* ---------- petites icônes inline (cartes) ---------- */
function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M4 19h16M7 17V7m5 10V4m5 13V10"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PuzzleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9 4h3a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 012 2v3h-3a2 2 0 00-2 2v1a2 2 0 01-2 2H9v-3a2 2 0 00-2-2H6a2 2 0 01-2-2V9h3a2 2 0 002-2V6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function BulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9 18h6m-5 3h4M12 2a7 7 0 00-4 12c.6.5 1 1.4 1 2.3V17h6v-.7c0-.9.4-1.8 1-2.3A7 7 0 0012 2z"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- icône animé à côté du titre "A PROPOS" ---------- */
/* petit pictogramme “information/insight”, pulsant au survol */
function InfoSparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {/* médaillon */}
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* point du i */}
      <circle cx="12" cy="8" r="1.4" fill="currentColor" />
      {/* barre du i */}
      <path d="M11 11.2h2V17h-2z" fill="currentColor" />
    </svg>
  );
}

/* ---------- types & données ---------- */
type Tile = {
  title: string;
  kicker: string;
  short: string;
  long: string;
  to?: string;
  image: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
};

const TILES: Tile[] = [
  {
    kicker: "IDENTITÉ",
    title: "Qui sommes-nous ?",
    short:
      "Votre partenaire de confiance pour transformer les données en opportunités.",
    long:
      "Nous sommes une équipe passionnée qui croit que les données, bien exploitées, révèlent un potentiel extraordinaire.",
    to: "/a-propos#qui-nous-sommes",
    image: card12,
    Icon: ChartIcon,
  },
  {
    kicker: "EXPERTISE",
    title: "Que faisons-nous ?",
    short:
      "Des solutions basées sur les données qui transforment vos défis en résultats pertinents.",
    long:
      "Nous concevons et déployons des solutions : analytics, transformation numérique, marketing digital, coaching, évaluation d’impact.",
    to: "/services",
    image: card11,
    Icon: PuzzleIcon,
  },
  {
    kicker: "IMPACT",
    title: "Pourquoi le faisons-nous ?",
    short: "Donner du sens à vos données pour des décisions éclairées.",
    long:
      "Les bonnes décisions naissent d’informations fiables : confiance, agilité et performance pour vos équipes.",
    to: "/etudes-de-cas",
    image: card2,
    Icon: BulbIcon,
  },
];

/* ---------- composant ---------- */
export default function ShowcaseTiles() {
  return (
    <section className="container-app my-4 sm:my-4">
      {/* ===== Header / bannière (mêmes logiques, icône ajouté) ===== */}
      <header className="relative isolate overflow-hidden rounded-3xl border border-white/60 bg-[#FFFFFF]/80 backdrop-blur shadow-sm ring-1 ring-black/5 px-2 sm:px-2 py-2 sm:py-2 mb-4 sm:mb-4">
        {/* décors radiaux */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-60 bg-[radial-gradient(closest-side,rgba(10,209,240,.35),transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full blur-3xl opacity-60 bg-[radial-gradient(closest-side,rgba(0,89,251,.35),transparent_70%)]"
        />

        <div className="text-center relative group">
          {/* badge datakle */}
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0059FB]/10 text-[#0059FB] px-3 py-1 text-[11px] tracking-[.28em] font-semibold uppercase">
            — Découvrez l’univers DATAKLE
            <span className="inline-block size-1.5 rounded-full bg-[#0AD1F0]" />
          </span>

          {/* titre + icône (⚠️ éléments inline pour éviter <p> -> <div>) */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <h2 className="font-black leading-tight text-[clamp(28px,5vw,48px)] text-[#000044]">
             A PROPOS
            </h2>
             {/* Wrapper pour halo animé et interaction */}
            <span className="relative inline-flex">
              {/* halo animé (ping) */}
              <span className="absolute inset-0 rounded-full bg-[#0059FB]/30 blur-[2px] animate-ping" aria-hidden />
              {/* icône elle-même (légère rotation au survol) */}
              <InfoSparkIcon
                className="
                  relative h-6 w-6 sm:h-8 sm:w-8
                  text-[#000044]
                  transition-transform duration-300
                  hover:rotate-6
                "
              />
              
            </span>
            
          </div>
          {/* slogan bi-couleur (contient uniquement des spans inline) */}
          <p className="mt-5 max-w-3xl mx-auto text-[clamp(14px,2.3vw,25px)] font-medium">
            <span className="text-gray-700">Vos données , </span>
            <span className="bg-gradient-to-r from-[#0AD1F0] to-[#0059FB] bg-clip-text text-transparent">
               la clé de votre performance !
            </span>
          </p>

          {/* séparateur décoratif */}
          <div className="mx-auto mt-8 h-[px] w-100 rounded-full bg-gradient-to-r from-transparent via-[#0059FB]/50 to-transparent" />
        </div>
      </header>

      {/* ===== Grille de cartes ===== */}
      <div className="grid gap-6 md:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {TILES.map((t, i) => (
          <TileCard key={i} tile={t} />
        ))}
      </div>
    </section>
  );
}

/* ---------- carte ---------- */
function TileCard({ tile }: { tile: Tile }) {
  const { image, title, kicker, short, long, to, Icon } = tile;

  /* contenu réel de la carte */
  const inner = (
    <div
      className="
        group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm
        ring-1 ring-black/5 hover:shadow-xl transition-shadow focus-within:shadow-xl
      "
    >
      {/* image de fond */}
      <div
        className="
          absolute inset-0 bg-cover bg-center
          transition-transform duration-700 group-hover:scale-110
        "
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      {/* overlay pour lisibilité */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/65 via-black/35 to-black/10
        "
        aria-hidden="true"
      />

      {/* contenu texte */}
      <div className="relative z-10 p-5 sm:p-6 lg:p-7 h-full flex flex-col">
        {/* kicker + icône */}
        <div className="flex items-center gap-2 text-white/80">
          <span className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur px-2 py-1 text-[11px] tracking-[.18em] uppercase">
            {kicker}
          </span>
          <Icon className="h-4 w-4 text-[#FFD44D]" />
        </div>

        {/* titre */}
        <h3 className="mt-3 font-extrabold text-white text-xl sm:text-2xl leading-tight drop-shadow">
          {title}
        </h3>

        {/* aperçu */}
        <p className="mt-3 text-white/90 text-sm sm:text-[15px] leading-relaxed max-w-prose">
          {short}
        </p>

        {/* zone déroulante au hover */}
        <div
          className="
            mt-3 grid transition-[grid-template-rows] duration-500 ease-out
            group-hover:grid-rows-[1fr] focus-within:grid-rows-[1fr]
            grid-rows-[0fr]
          "
        >
          <div className="overflow-hidden">
            <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed">
              {long}
            </p>
          </div>
        </div>

        {/* CTA – IMPORTANT : pas de <a> à l’intérieur d’un <a>.
           - Si la carte est enveloppée par <Link> (to défini), on rend un <span>.
           - Sinon, on peut rendre un <Link> classique. */}
        {to && (
          <div className="mt-5">
            {/* span (pas un <a>) car la carte entière est cliquable */}
            <span
              className="
                inline-flex items-center gap-2 rounded-full 
                bg-[#0059FB]/90 text-gray-90 text-white/90 hover:bg-white hover:text-[#000000]
                px-3 py-1.5 text-sm font-semibold transition
              "
            >
              En savoir plus
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M7.5 5l5 5-5 5" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );

  /* enveloppe : si `to` est fourni, on enveloppe TOUTE la carte d’un <Link>.
     Ainsi on n’a plus de <a> imbriquée. */
  return to ? (
    <Link
      to={to}
      className="outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0059FB] rounded-2xl"
    >
      {inner}
    </Link>
  ) : (
    inner
  );
}

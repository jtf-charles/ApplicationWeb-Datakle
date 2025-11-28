// src/components/services/ServicesHeaderBand.tsx
import React from "react";
import { Link } from "react-router-dom";

const BASE_ANIM =
  "transition-all duration-700 ease-out will-change-transform will-change-opacity";

type ServicesHeaderBandProps = {
  kicker: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  inView?: boolean;
  className?: string;

  /** 🎨 Classes facultatives pour customizer les couleurs */
  kickerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeader({
  kicker,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  inView = false,
  className = "",
  kickerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
}: ServicesHeaderBandProps) {
  const animClass = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <header
      className={`
        mb-10 rounded-3xl bg-[#000044] text-white
        px-5 sm:px-10 py-8 sm:py-9
        shadow-[0_22px_70px_rgba(0,0,0,0.45)]
        relative overflow-hidden
        ${BASE_ANIM} ${animClass}
        ${className}
      `}
    >
      {/* petit trait dégradé en bas */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#0AD1F0] via-[#0059FB] to-[#0AD1F0]" />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between relative z-10">
        <div>
          <p className={`section-kicker nexa-black ${kickerClassName}`}>{kicker}</p>
          <h2 className={`section-title1 nexa-bold ${titleClassName}`}>{title}</h2>
          <p className={`section-subtitle nexa-book ${subtitleClassName}`}>
            {subtitle}
          </p>
        </div>

        {ctaLabel && ctaHref && (
          <Link
            to={ctaHref}
            className="
              inline-flex items-center justify-center gap-2 rounded-full
              bg-[#0059FB] px-5 py-2.5 text-sm font-semibold text-white
              shadow-[0_16px_40px_rgba(0,0,0,0.45)]
              hover:bg-[#0A6CFF]
              transition-all duration-200 hover:-translate-y-0.5
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0AD1F0]
            "
          >
            {ctaLabel}
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M7.5 5l5 5-5 5" />
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
}

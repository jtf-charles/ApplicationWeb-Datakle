import React, { type SVGProps } from "react";

export function ChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 19h16M7 17V7m5 10V4m5 13V10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export function PuzzleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M9 4h3a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 012 2v3h-3a2 2 0 00-2 2v1a2 2 0 01-2 2H9v-3a2 2 0 00-2-2H6a2 2 0 01-2-2V9h3a2 2 0 002-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export function BulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M9 18h6m-5 3h4M12 2a7 7 0 00-4 12c.6.5 1 1.4 1 2.3V17h6v-.7c0-.9.4-1.8 1-2.3A7 7 0 0012 2z" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export function InfoSparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="8" r="1.4" fill="currentColor" />
      <path d="M11 11.2h2V17h-2z" fill="currentColor" />
    </svg>
  );
}





export function DataIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path d="M4 6c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3zm0 6c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3zm0 6c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3z" fill="currentColor"/>
    </svg>
  );
}
export function PipelineIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path d="M4 10h16M4 14h16M7 6h10v12H7z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export function ShieldIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 12.5l1.8 1.8 3.2-3.3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export function SurveyIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path d="M6 3h12v18H6z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M9 7h6M9 11h6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
export function TrainingIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path d="M12 3l8 4-8 4-8-4 8-4zm-6 7v7l6 4 6-4v-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    </svg>
  );
}
export function AppIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}



/* ------------------------------------------------------------------ */
/*      NOUVELLES ICÔNES SPÉCIFIQUES : VISION / MISSION / VALEURS     */
/* ------------------------------------------------------------------ */

export function VisionIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      {/* œil stylisé */}
      <path
        d="M3 12s3-5 9-5 9 5 9 5-3 5-9 5-9-5-9-5z"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={12} cy={12} r={2.5} fill="none" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

export function MissionIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      {/* cible + flèche */}
      <circle
        cx={12}
        cy={12}
        r={7}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      />
      <circle
        cx={12}
        cy={12}
        r={3}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M15 9l4-4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M16 7h3V4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ValuesIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      {/* cœur (valeurs, culture, confiance) */}
      <path
        d="M12 20s-4.5-2.6-7-5.7C3.4 13.4 3 12.4 3 11.3 3 9.4 4.4 8 6.3 8c1.2 0 2.3.6 3 1.6.7-1 1.8-1.6 3-1.6 1.9 0 3.3 1.4 3.3 3.3 0 1.1-.4 2.1-2 3.4-2.5 2.9-7 5.3-7 5.3z"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

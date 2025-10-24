import { type SVGProps } from "react";
import { InfoSparkIcon } from "../../styles/components/icons";

type Props = {
  badge?: string;                 // ex: "— Découvrez l’univers DATAKLE"
  title: string;                  // ex: "A PROPOS"
  subtitle?: React.ReactNode;     // phrase courte bi-couleur possible
  Icon?: (p: SVGProps<SVGSVGElement>) => JSX.Element; // icône à côté du titre
};

export default function SectionHeader({ badge, title, subtitle, Icon = InfoSparkIcon }: Props) {
  return (
    <header className="section-shell">
      {/* décor radiaux */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-60 bg-[radial-gradient(closest-side,rgba(10,209,240,.35),transparent_70%)]"/>
      <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full blur-3xl opacity-60 bg-[radial-gradient(closest-side,rgba(0,89,251,.35),transparent_70%)]"/>

      <div className="relative text-center group">
        {badge && (
          <span className="badge-brand">{badge}<span className="inline-block size-1.5 rounded-full bg-[#0AD1F0] ml-2"/></span>
        )}

        <div className="mt-4 flex items-center justify-center gap-3">
          <h2 className="section-title">{title}</h2>
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-[#0059FB]/30 blur-[2px] animate-ping" aria-hidden />
            <Icon className="relative h-6 w-6 sm:h-8 sm:w-8 text-[#000044] transition-transform duration-300 group-hover:rotate-6" />
          </span>
        </div>

        {subtitle && <div className="section-sub">{subtitle}</div>}
        <div className="separator" />
      </div>
    </header>
  );
}

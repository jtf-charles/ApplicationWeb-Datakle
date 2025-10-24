import { Link } from "react-router-dom";

type Props = {
  title: string;
  subtitle?: string | React.ReactNode;
  ctaLabel: string;
  ctaTo: string;
  className?: string;
};

export default function SectionHeaderDesign({
  title,
  subtitle,
  ctaLabel,
  ctaTo,
  className = "",
}: Props) {
  return (
    <div className={`mx-auto max-w-6xl xl:max-w-[76rem] header-design
    
    
    ${className}`}
    
    
    >
      <section className="header-simple header-simple-pad header-design">
        {/* Ligne titre + CTA (à droite). En mobile, CTA passe en dessous */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <h2 className="header-title-design">{title}</h2>

          {/* CTA à droite, même ligne que le titre */}
          <Link
            to={ctaTo}
            className="btn-hero btn-hero-amber sheen sm:self-start sm:ml-auto"
          >
            {ctaLabel}
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M7.5 5l5 5-5 5" />
            </svg>
          </Link>
        </div>

        {/* Sous-texte sur toute la largeur sous la ligne titre/CTA */}
        {subtitle && <p className="header-sub mt-3">{subtitle}</p>}

        <div className="header-accent" aria-hidden />
      </section>
    </div>
  );
}

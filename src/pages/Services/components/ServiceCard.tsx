import { type SVGProps } from "react";
import { Link } from "react-router-dom";

export type Service = {
  title: string;
  description: string;
  to?: string; // la redirection ne s'applique PLUS qu'au CTA
  Icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;
};

export default function ServiceCard({ title, description, to, Icon }: Service) {
  return (
    <div className="service-card service-card-hover service-min focus-ring group cursor-default">
      {/* Fond décoratif — ne capte pas les clics */}
      <div className="service-bg pointer-events-none" aria-hidden />

      <div className="service-body">
        <div className="service-icon-wrap">
          <span className="service-icon-halo pointer-events-none" aria-hidden />
          <Icon className="relative h-9 w-9 text-[#5b57e6]" />
        </div>

        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{description}</p>

        <div className="service-cta">
          {to ? (
            <Link
              to={to}
              className="btn btn-primary btn-pill inline-flex items-center gap-2"
            >
              En savoir plus
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M7.5 5l5 5-5 5" />
              </svg>
            </Link>
          ) : (
            <button
              type="button"
              className="btn btn-primary btn-pill inline-flex items-center gap-2"
            >
              En savoir plus
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M7.5 5l5 5-5 5" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { type SVGProps } from "react";

export type Tile = {
  title: string;
  kicker: string;
  short: string;
  long?: string;
  image: string;
  to?: string;
  /*Icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;*/

  Icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement,
};

export type TileCardProps = { tile?: Tile }; // ← rendre optionnelle pour éviter le crash runtime

export default function TileCard({ tile }: TileCardProps) {
  // garde-fou : si tile est manquante, on ne rend rien (ou un squelette si tu préfères)
  if (!tile) return null;

  const { image, title, kicker, short, long, to, Icon } = tile;

  return (
    <div className="group tile tile-hover h-80">
      <div
        className="tile-bg tile-bg-zoom pointer-events-none h-100"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="tile-overlay pointer-events-none" aria-hidden="true" />

      <div className="tile-body">
        <div className="flex items-center gap-2">
          <span className="kicker nexa-black">{kicker}</span>
          <Icon className="h-4 w-4 text-[#FFD44D]" />
        </div>

        <h3 className="mt-3 section-title1 leading-tight drop-shadow nexa-bold">
          {title}
        </h3>

        <p className="mt-8 section-subtitle text-center leading-relaxed max-w-prose nexa-book ">
          {short}
        </p>

        {long && (
          <div className="mt-0 grid transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] focus-within:grid-rows-[1fr] grid-rows-[0fr]">
            <div className="overflow-hidden">
              <p className="text-white section-subtitle text-center leading-relaxed bg-[#000044]/50 nexa-book">
                {long}
              </p>
            </div>
          </div>
        )}

        {to && (
          <div className="mt-5 mx-auto" >
            <Link
              to={to}
              className="btn btn-primary btn-pill inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0059FB]"
              aria-label={`En savoir plus sur: ${title}`}
            >
              En savoir plus
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M7.5 5l5 5-5 5" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

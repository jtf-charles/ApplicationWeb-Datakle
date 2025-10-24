import React from "react";

export type Partner = {
  name: string;
  src: string;        // chemin de l’image
  alt?: string;
};

export default function PartnerCard({ name, src, alt }: Partner) {
  return (
    <figure
      className="
        partner-card 
        relative flex flex-col items-center justify-center
        rounded-2xl bg-white/80 ring-1 ring-black/5 shadow-sm
        px-6 py-6 h-40 sm:h-44
      "
    >
      {/* ⚠️ aucune désaturation: logos en couleur */}
      <img
        src={src}
        alt={alt ?? name}
        className="max-h-16 sm:max-h-20 object-contain"
        loading="lazy"
      />
      <figcaption className="mt-3 text-[13px] sm:text-sm font-medium text-slate-700 text-center">
        {name}
      </figcaption>
    </figure>
  );
}

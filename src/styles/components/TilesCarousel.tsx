import { useEffect, useMemo, useRef, useState } from "react";
import TileCard from "./TileCard"; // adapte le chemin si besoin

type Tile = Parameters<typeof TileCard>[0]["tile"];
type Props = { tiles: Tile[]; intervalMs?: number };

export default function TilesCarousel({ tiles, intervalMs = 5000 }: Props) {
  const n = tiles.length;
  const [itemsPerView, setItemsPerView] = useState<number>(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width:1024px)").matches ? 2 : 1
  );
  const [index, setIndex] = useState(0); // index de la "slide"
  const [anim, setAnim] = useState(true);
  const mqlRef = useRef<MediaQueryList | null>(null);

  // Duplique les 1..itemsPerView premières cartes pour la boucle
  const slides = useMemo(
    () => [...tiles, ...tiles.slice(0, Math.min(itemsPerView, tiles.length))],
    [tiles, itemsPerView]
  );

  // Resize => 1 ou 2 cartes visibles
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width:1024px)");
    mqlRef.current = mql;
    const onChange = () => {
      const per = mql.matches ? 2 : 1;
      setItemsPerView(per);
      setIndex(0);
      setAnim(false);
      requestAnimationFrame(() => setAnim(true));
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  // Reset discret quand on atteint la fin clonée
  useEffect(() => {
    if (index < n) return;
    const t = setTimeout(() => {
      setAnim(false);
      setIndex(0);
      requestAnimationFrame(() => setAnim(true));
    }, 350);
    return () => clearTimeout(t);
  }, [index, n]);

  // largeur d’un item (en %) selon le nb visible
  const basisClass = itemsPerView === 2 ? "lg:basis-1/2 basis-full" : "basis-full";

  // Gap Tailwind = gap-6 => 24px
  const gapPx = 24;

  // IMPORTANT : le pourcentage de translateX est relatif à la piste.
  // On déplace d'un "item" = 100% / itemsPerView à chaque pas.
  const shiftPercent = -(index * (100 / itemsPerView));
  const translate = `calc(${shiftPercent}% - ${index * gapPx}px)`;

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-6 ${anim ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateX(${translate})` }}
        aria-live="polite"
      >
        {slides.map((tile, i) => (
          <div key={i} className={`${basisClass} shrink-0`}>
            <TileCard tile={tile} />
          </div>
        ))}
      </div>
    </div>
  );
}

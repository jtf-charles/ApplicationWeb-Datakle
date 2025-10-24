// src/components/common/Carousel.tsx
import { useEffect, useMemo, useRef, useState } from "react";

type Props<T> = {
  items: T[];
  /** rendu d'un item */
  render: (it: T, i: number) => React.ReactNode;
  /** ms entre 2 slides auto */
  intervalMs?: number;
};

export default function PartnersCarousel<T>({ items, render, intervalMs = 5000 }: Props<T>) {
  const n = items.length;
  const [perView, setPerView] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width:1024px)").matches ? 2 : 1
  );
  const [index, setIndex] = useState(0);
  const [withAnim, setWithAnim] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // items clonés pour boucle fluide
  const extended = useMemo(() => {
    if (!n) return [] as T[];
    return [...items, ...items.slice(0, perView)];
  }, [items, n, perView]);

  // écoute du breakpoint
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width:1024px)");
    const onChange = () => {
      const next = mql.matches ? 2 : 1;
      setPerView(next);
      // on repart proprement du début pour éviter tout décalage
      setWithAnim(false);
      setIndex(0);
      requestAnimationFrame(() => setWithAnim(true));
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // auto-advance
  useEffect(() => {
    if (n <= 1) return; // rien à auto-défiler
    const id = setInterval(() => setIndex((i) => i + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, n]);

  // quand on dépasse la fin (zone clonée) on reset discrètement à 0
  const onTransitionEnd = () => {
    if (index >= n) {
      setWithAnim(false);
      setIndex(0);
      requestAnimationFrame(() => setWithAnim(true));
    }
  };

  const itemWidth = 100 / perView; // %
  const translate = `-${index * itemWidth}%`;

  if (n === 0) return null;

  return (
    <div className="relative overflow-hidden">
      <div
        ref={trackRef}
        className={`flex ${withAnim ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateX(${translate})` }}
        onTransitionEnd={onTransitionEnd}
        aria-live="polite"
      >
        {extended.map((it, i) => (
          // pas de gap sur le rail -> spacing via padding
          <div key={i} style={{ flex: `0 0 ${itemWidth}%` }} className="px-3">
            {render(it, i)}
          </div>
        ))}
      </div>
    </div>
  );
}

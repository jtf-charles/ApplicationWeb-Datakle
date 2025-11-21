// 👉 importe tes images du dossier assets
import hero1 from "@/assets/images/banner5.jpg";
import hero2 from "@/assets/images/banner1.jpg";
import hero3 from "@/assets/images/banner3.jpg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  lead: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
};

const slides: Slide[] = [
  {
    image: hero1,
    eyebrow: "MISSION",
    title:
      "Transformer vos données en leviers de performance",
    lead: "Collecte → stockage → transformation → visualisation. De bout en bout.",
    primary: { to: "/default", label: "Études de cas →" },
    secondary: { to: "/default", label: "Nos analyses" },
  },
  {
    image: hero2,
    eyebrow: "CONCURRENCE",
    title: "Prix compétitifs, qualité internationale",
    lead: "Équipe pluridisciplinaire, livrables propres et orientés résultats.",
    primary: { to: "/default", label: "Notre équipe →" },
    secondary: { to: "/default", label: "Obtenir un devis" },
  },
  {
    image: hero3,
    eyebrow: "SERVICES",
    title:
      "Analyse de données, marketing numériques, coaching et evaluation d'impact",
    lead: "Pipelines data, dashboards, applications, sécurité et formation.",
    primary: { to: "/default", label: "Nos services →" },
    secondary: { to: "/default", label: "Contactez-nous" },
  },
];

const transitionTypes = ["horizontal", "vertical", "fade"] as const;
type TransitionType = (typeof transitionTypes)[number];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [transitionType, setTransitionType] =
    useState<TransitionType>("fade");

  const timeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const stopAutoplay = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const nextTransitionType = () =>
    transitionTypes[
      (transitionTypes.indexOf(transitionType) + 1) %
        transitionTypes.length
    ];

  const tick = () => {
    setTransitionType(nextTransitionType());
    setIndex((i) => (i + 1) % slides.length);
    timeoutRef.current = window.setTimeout(tick, 5000);
  };

  const startAutoplay = () => {
    stopAutoplay();
    timeoutRef.current = window.setTimeout(tick, 5000);
  };

  useEffect(() => {
    startAutoplay();

    const el = containerRef.current;
    const onEnter = () => stopAutoplay();
    const onLeave = () => startAutoplay();
    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);

    return () => {
      stopAutoplay();
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (n: number) => {
    stopAutoplay();
    setTransitionType(nextTransitionType());
    setIndex((n + slides.length) % slides.length);
    startAutoplay();
  };
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  // Swipe mobile (ignore les éléments interactifs et ne capture qu'en tactile)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    let swiping = false;

    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element && !!t.closest("a,button");

    const onDown = (e: PointerEvent) => {
      if (isInteractive(e.target)) return;
      startX = e.clientX;
      swiping = true;
      if (e.pointerType !== "mouse") {
        try {
          el.setPointerCapture(e.pointerId);
        } catch {}
      }
    };

    const onUp = (e: PointerEvent) => {
      if (!swiping || isInteractive(e.target)) return;
      swiping = false;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 50) {
        dx > 0 ? prev() : next();
      }
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointerup", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointerup", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Calcule le style de transition selon le type
  const getSlideStyle = (i: number) => {
    const active = i === index;
    const base: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${slides[i].image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "all 1.2s ease-in-out",
      zIndex: active ? 2 : 1,
    };

    switch (transitionType) {
      case "horizontal":
        return {
          ...base,
          transform: `translateX(${active ? "0" : i < index ? "-100%" : "100%"})`,
          opacity: active ? 1 : 0.4,
        };
      case "vertical":
        return {
          ...base,
          transform: `translateY(${active ? "0" : i < index ? "-100%" : "100%"})`,
          opacity: active ? 1 : 0.4,
        };
      case "fade":
      default:
        return {
          ...base,
          transform: `scale(${active ? 1 : 1.1})`,
          opacity: active ? 1 : 0,
        };
    }
  };

  return (
    // padding-top pour éviter que le contenu passe sous la navbar sticky,
    // et hauteur "safe viewport" pour améliorer le rendu mobile
    <section
      ref={containerRef}
      className="hero relative overflow-hidden pt-16 md:pt-20"
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div key={i} className="hero-slide" style={getSlideStyle(i)} />
      ))}

      {/* Overlay */}
      <div className="hero-overlay pointer-events-none z-10" />

      {/* Contenu centré */}
      <div className="relative z-20 h-full grid place-items-center text-center px-3 sm:px-4">
        <div
          className="
            text-white
            mx-auto
            w-full
            max-w-[min(92vw,76rem)]
            md:max-w-[68rem]
            xl:max-w-[78rem]
          "
        >
          <div className="hero-eyebrow">— {slides[index].eyebrow}</div>

          {/* Titre : clamp pour une vraie fluidité entre mobile et desktop */}
          <h1
            className="
              hero-title mt-3 nexa-black
              text-[clamp(28px,6vw,72px)]  /* override doux & fluide */
              leading-[clamp(1.18,3.5vw,1.06)]
            "
          >
            {slides[index].title}
          </h1>

          {/* Lead : un peu plus visible et fluide */}
          <p
            className="
              hero-lead mt-4
              text-white/100
             
            "
          >
            {slides[index].lead}
          </p>

          {/* CTAs : espacement & wrap soigné */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              to={slides[index].primary.to}
              className="btn btn--primary btn-pill"
            >
              {slides[index].primary.label}
            </Link>

            {slides[index].secondary && (
              <Link
                to={slides[index].secondary!.to}
                className="btn btn--secondary btn-pill"
              >
                {slides[index].secondary!.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Flèches : tailles un peu plus grandes sur desktop */}
      <div className="absolute inset-0 z-30 flex items-center justify-between px-2 sm:px-3 md:px-5 pointer-events-none">
        <button
          type="button"
          onClick={prev}
          className="arrow-btn pointer-events-auto size-9 sm:size-10 md:size-11"
          aria-label="Slide précédent"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          className="arrow-btn pointer-events-auto size-9 sm:size-10 md:size-11"
          aria-label="Slide suivant"
        >
          ›
        </button>
      </div>

      {/* Bullets : légèrement remontés sur mobile pour ne pas coller au bord */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Aller au slide ${i + 1}`}
            onClick={() => go(i)}
            className={`dot ${i === index ? "dot-active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}

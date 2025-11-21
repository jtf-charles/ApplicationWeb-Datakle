// src/app/providers/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // On remonte en haut à chaque changement de route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // ou "auto" si tu ne veux pas d’animation
    });
  }, [pathname]);

  return null;
}

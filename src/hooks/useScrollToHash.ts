import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Fait défiler vers l’ancre (#id) présente dans l’URL,
 * en compensant la hauteur de la navbar via `offset`.
 */
export function useScrollToHash(offset = 90) {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const { hash } = location;
      if (!hash) return;

      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - offset;

      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [location, offset]);
}

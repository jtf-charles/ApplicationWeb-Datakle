// src/components/common/ScrollToTopLink.tsx
import React from "react";
import { Link, useLocation, type LinkProps } from "react-router-dom";

type Props = LinkProps & {
  scrollBehavior?: ScrollBehavior; // "smooth" ou "auto"
};

export default function ScrollToTopLink({
  scrollBehavior = "smooth",
  onClick,
  to,
  ...rest
}: Props) {
  const location = useLocation();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (onClick) onClick(event);
    if (event.defaultPrevented) return;

    // on récupère juste le pathname cible
    let targetPathname: string | undefined;

    if (typeof to === "string") {
      targetPathname = to.split("#")[0];
    } else if (typeof to === "object" && to.pathname) {
      targetPathname = to.pathname;
    }

    // si on est déjà sur cette page -> on force un scroll
    if (!targetPathname || targetPathname === location.pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior });
    }
  };

  return <Link to={to} onClick={handleClick} {...rest} />;
}

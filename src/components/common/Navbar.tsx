import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/common/Logo";

/* ------------------------------ DATA ------------------------------ */

type Item = { label: string; to: string; external?: boolean };
type Menu = { label: string; to?: string; children?: Item[] };

const MENUS: Menu[] = [
  { label: "Accueil", to: "/" },

  {
    label: "À propos",
    to: "/a-propos",
    children: [
      { label: "Ce que nous sommes", to: "/a-propos#qui-nous-sommes" },
      { label: "Ce que nous faisons", to: "/a-propos#ce-que-nous-faisons" },
      { label: "Équipe", to: "/a-propos#Equipe" },
      { label: "Vision", to: "/a-propos#vision-mission" },
      { label: "Mission", to: "/a-propos#vision-mission" },
    ],
  },

  {
    label: "Services",
    to: "/default",
    children: [
      { label: "Marketing numériques", to: "/default" },
      { label: "Cybermétrie", to: "/default" },
      { label: "Analyse de données", to: "/default" },
      { label: "Coaching", to: "/default" },
      { label: "Évaluations d’impact", to: "/default" },
      { label: "Autres", to: "/default" },
    ],
  },

  { label: "Portfolio", to: "/default" },

  {
    label: "Blog",
    to: "/default",
    children: [
      { label: "Articles", to: "/default" },
      { label: "Podcasts", to: "/default" },
      { label: "FAQ", to: "/default" },
      { label: "Vlogs", to: "/default" },
      { label: "Interviews", to: "/default" },
      { label: "Tutoriels", to: "/default" },
    ],
  },

  {
    label: "Contact",
    to: "/default",
    children: [
      { label: "Réseaux sociaux", to: "/default" },
      { label: "Formulaire de contact", to: "/default" },
      { label: "Autres", to: "/default" },
    ],
  },
];

/* -------------------------- SMALL UTILITIES ------------------------ */

function classNames(...xs: (string | false | null | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

/* ------------------------------ NAVBAR ----------------------------- */

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  // Solid / transparent on scroll
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // Fermer tout dropdown à chaque changement de route
  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <>
      <header
        ref={navRef as any}
        className={classNames(
          "fixed top-0 z-50 w-full transition-colors mb-2",
          solid ? "nav-solid" : "nav-transparent"
        )}
      >
        {/* Barre principale : même hauteur à toutes les tailles */}
        <nav
          className="
            container-app
            h-16 sm:h-18 lg:h-20 xl:h-24
            flex items-center justify-between gap-4
          "
        >
          {/* Logo — parfaitement centré verticalement */}
          <Link
            to="/"
            aria-label="Accueil"
            className="
              h-full inline-flex items-center gap-2 sm:gap-3 shrink-0
              [&_svg]:block
              [&_svg]:h-8 sm:[&_svg]:h-9 lg:[&_svg]:h-10 xl:[&_svg]:h-12
              [&_svg]:w-auto
            "
            onClick={() => setOpenMenu(null)}
          >
            <Logo />
          </Link>

          {/* Liens (>= lg) — centrés verticalement */}
          <div className="hidden xl:flex h-full items-center gap-2 lg:gap-3 xl:gap-4 xl:px-10 nexa-bold">
            {MENUS.map((m) =>
              m.children ? (
                <Dropdown
                  key={m.label}
                  label={m.label}
                  to={m.to}
                  open={openMenu === m.label}
                  onOpen={() => setOpenMenu(m.label)}
                  onClose={() => setOpenMenu((v) => (v === m.label ? null : v))}
                  items={m.children}
                />
              ) : (
                <NavLink
                  key={m.label}
                  to={m.to!}
                  onClick={() => setOpenMenu(null)}
                  className={({ isActive }) =>
                    classNames(
                      "h-full inline-flex items-center px-3 rounded-lg font-medium transition",
                      "text-[clamp(25px,1.0vw,25px)]",
                      isActive
                        ? "text-[#0059FB]"
                        : "text-gray-700 hover:text-[#0059FB]"
                    )
                  }
                >
                  {m.label}
                </NavLink>
              )
            )}
          </div>

          {/* CTA (>= xl) — centré verticalement */}
          <div className="hidden 2xl:flex h-full items-center">
            <Link
              to="https://wa.me/50934389448?text=Bonjour%2C%20je%20sollicite%20votre%20expertise%2C%20pourriez-vous%20m%27aider%20%3F
"
              className="
                inline-flex items-center justify-center leading-none nexa-black
                btn btn--secondary btn-pill
                h-[44px] xl:h-[48px] 2xl:h-[52px]
                px-5 lg:px-6 text-[clamp(14px,0.95vw,18px)]
                m-2
              "
              onClick={() => setOpenMenu(null)}
            >
              Demander une consultation
            </Link>
          </div>

          {/* Burger (< lg) — centré verticalement */}
          <button
            className="
              xl:hidden h-14 inline-flex items-center justify-center border-1 border-[#0059FB]
              rounded-xl px-2 m-1 mb-1  text-[#0059FB] 
            "
            aria-label="Ouvrir le menu"
            onClick={toggleMobile}
          >
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </nav>
      </header>

      {/* SPACER (léger sur mobile) */}
      <div aria-hidden="true" className="h-0 sm:h-3 lg:h-3 xl:h-6" />

      {/* Mobile panel (< 1024px) */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ----------------------------- DROPDOWN ---------------------------- */
/* OUVERTURE 100% AU CLIC SUR LA FLÈCHE — le libellé NAVIGUE. */
function Dropdown({
  label,
  to,
  items,
  open,
  onOpen,
  onClose,
}: {
  label: string;
  to?: string;
  items: Item[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const onToggle = () => (open ? onClose() : onOpen());

  return (
    <div className="relative h-full inline-flex items-center">
      {/* Libellé : survol visuel uniquement, clic = navigation */}
      <NavLink
        to={to || "#"}
        onClick={onClose}
        className={({ isActive }) =>
          classNames(
            "h-full inline-flex items-center px-2 rounded-lg font-medium transition",
            "text-[clamp(30px,1.5vw,30px)]",
            isActive ? "text-[#0059FB]" : "text-gray-700 hover:text-[#0059FB]"
          )
        }
      >
        {label}
      </NavLink>

      {/* Bouton caret : c’est LUI qui ouvre/ferme le sous-menu */}
      <button
        type="button"
        aria-label={`Ouvrir le menu ${label}`}
        aria-expanded={open}
        onClick={onToggle}
        className={classNames(
          "ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md",
          "text-gray-600 hover:text-[#0059FB] hover:bg-gray-100/60 transition"
        )}
      >
        <svg
          className={classNames(
            "h-4 w-4 transition-transform",
            open && "rotate-180"
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {/* Panneau (contrôlé uniquement par le caret) */}
      <div
        className={classNames(
          "absolute left-0 top-full pt-2 transition",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        <div
          className="
            min-w-[220px] rounded-2xl border border-white/70
            bg-white/95 backdrop-blur shadow-lg ring-1 ring-black/5 p-2
          "
          role="menu"
        >
          {items.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              onClick={onClose}
              className="
                flex items-center justify-between rounded-xl
                px-3 py-2 text-[clamp(25px,0.9vw,25px)]
                text-gray-700 hover:bg-[#0059FB]/8 hover:text-[#0059FB] transition
              "
              role="menuitem"
            >
              {it.label}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.5 5l5 5-5 5" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- MOBILE NAV --------------------------- */

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={classNames(
        // 🔴 ICI : on rend le panneau mobile FIXE sous la navbar
        "xl:hidden fixed inset-x-0 top-16 sm:top-18 z-40 transition-[max-height] duration-300 overflow-hidden",
        "bg-white/95 backdrop-blur border-t border-gray-200",
        open ? "max-h-[90vh]" : "max-h-0"
      )}
    >
      {/* Décalage sous le logo pour ne pas masquer “Accueil” */}
      <div className="container-app pt-5 sm:pt-5 pb-2 px-2 nexa-black">
        {MENUS.map((m) =>
          m.children ? (
            <div key={m.label} className="border-b border-gray-100">
              <button
                className="
                  w-full flex items-center justify-between py-3
                  text-left font-medium text-gray-800
                  text-[clamp(15px,3.5vw,17px)]
                "
                onClick={() => setExpanded((x) => (x === m.label ? null : m.label))}
                aria-expanded={expanded === m.label}
              >
                <span>{m.label}</span>
                <svg
                  className={classNames(
                    "h-5 w-5 transition-transform",
                    expanded === m.label && "rotate-180"
                  )}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                </svg>
              </button>

              <div
                className={classNames(
                  "grid transition-[grid-template-rows] duration-300 nexa-bold",
                  expanded === m.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-1 pb-3">
                    {m.children.map((it) => (
                      <Link
                        key={it.label}
                        to={it.to}
                        className="
                          px-2 py-2 rounded-lg text-gray-700 hover:bg-gray-50
                          text-[clamp(14px,3.3vw,16px)]
                        "
                        onClick={onClose}
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <NavLink
              key={m.label}
              to={m.to!}
              className={({ isActive }) =>
                classNames(
                  "block py-3 border-b border-gray-100",
                  "text-[clamp(15px,3.5vw,17px)]",
                  isActive ? "text-[#0059FB] font-semibold" : "text-gray-800"
                )
              }
              onClick={onClose}
            >
              {m.label}
            </NavLink>
          )
        )}

        <div className="pt-3">
          <Link
            to="https://wa.me/50934389448?text=Bonjour%2C%20je%20sollicite%20votre%20expertise%2C%20pourriez-vous%20m%27aider%20%3F
"
            className="btn btn--primary btn-pill w-full justify-center text-[clamp(15px,3.5vw,17px)]"
            onClick={onClose}
          >
            Demander une consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

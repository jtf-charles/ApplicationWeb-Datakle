import { Link } from "react-router-dom";
import logo from "@/assets/images/Logo-05.svg";
import ScrollToTopLink from "../../app/ScrollToTopLink";

/*type Social = { name: string; href: string; Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element };*/

type Social = { name: string; href: string; Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement };

const socials: Social[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1BGFkDphSz/",
    Icon: (p) => (
      <svg viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.3c0-.8.2-1.3 1.3-1.3h1.5V5.5c-.2 0-1.1-.1-2.1-.1-2.2 0-3.7 1.3-3.7 3.7v2.1H8.5V14h2.1v7h2.9Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/datakle?igsh=a2t5djF2aDQ3cjlk",
    Icon: (p) => (
      <svg viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 12 8.7a3 3 0 0 1 0 6.3Zm4.9-7.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" />
        <path fill="currentColor" d="M17.5 3h-11A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21h11a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3Zm2 14.5c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2v-11c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v11Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@datakle?_t=ZM-90ok0hMIgrT&_r=1",
    Icon: (p) => (
      <svg viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M21 9.2a7.1 7.1 0 0 1-4.7-1.7v6.1a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v2.6A3.8 3.8 0 1 0 9.9 17a3.8 3.8 0 0 0 3.9-3.8V3h2.5a4.6 4.6 0 0 0 4.7 4.3V9.2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/datakle/",
    Icon: (p) => (
      <svg viewBox="0 0 24 24" aria-hidden {...p}>
        <path fill="currentColor" d="M6.9 8.8H4V21h2.9V8.8Zm.3-4.2a1.9 1.9 0 1 0-3.8 0 1.9 1.9 0 0 0 3.8 0ZM20 21h-2.9v-6.1c0-1.5-.5-2.6-1.9-2.6-1 0-1.6.7-1.8 1.4-.1.2-.1.6-.1.9V21H8.4s.1-10.5 0-11.6H11v1.6c.4-.7 1.3-1.8 3.1-1.8 2.3 0 4 1.5 4 4.8V21Z" />
      </svg>
    ),
  },
  /* 🚀 Ajout WhatsApp — NE RIEN TOUCHER D'AUTRE */
  {
    name: "WhatsApp",
    href: "https://wa.me/50934389448", // <-- Remplace par ton numéro
    Icon: (p) => (
      <svg viewBox="0 0 32 32" aria-hidden {...p}>
        <path
          fill="currentColor"
          d="M16.04 2.67A13.32 13.32 0 0 0 4.67 22.34L3 29l6.82-1.79a13.32 13.32 0 1 0 6.22-24.54Zm0 24.22a10.9 10.9 0 0 1-5.57-1.53l-.4-.23-4.04 1.06 1.08-3.94-.26-.38a10.78 10.78 0 1 1 9.2 5.02Zm6.03-7.98c-.33-.17-1.96-.96-2.26-1.06-.3-.12-.52-.17-.73.17-.21.33-.84 1.06-1.03 1.27-.19.21-.38.24-.7.08a8.6 8.6 0 0 1-2.53-1.53 9.83 9.83 0 0 1-1.82-2.25c-.19-.33-.02-.5.14-.66.14-.14.33-.38.5-.57.17-.19.22-.33.33-.55.12-.21.06-.4 0-.56-.06-.17-.73-1.78-1-2.44-.26-.63-.52-.54-.73-.55h-.63c-.21 0-.55.08-.84.38-.29.29-1.1 1.08-1.1 2.64 0 1.56 1.13 3.07 1.3 3.28.17.21 2.23 3.41 5.54 4.78.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.63-.1 1.96-.8 2.24-1.57.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell">
      {/* décor */}
      <div className="footer-accent" aria-hidden />

      {/* 🔥 centrage horizontal sur grands écrans */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bloc top — mobile centré, desktop en grille */}
        <div className="grid gap-y-10 lg:gap-12 
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                        text-center sm:text-left">
          {/* Marque */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="DATAKLE" className="h-9 w-auto" />
              <span className="sr-only">DATAKLE</span>
            </Link>
            <p className="text-sm text-white/80 max-w-sm">
              Entreprise tech : Nous transformons vos données en décisions utiles, mesurables et orientées résultats.
            </p>

            {/* Réseaux : centrés en mobile */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
              {socials.map(({ name, href, Icon }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="social-btn">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav>
            <h4 className="footer-title">Services</h4>
            <ul className="space-y-2">
              <li><ScrollToTopLink to="/default" className="footer-link">Tableaux de bord</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/default" className="footer-link">Pipelines & Qualité</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/default" className="footer-link">Sécurité & Gouvernance</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/default" className="footer-link">Apps & Automatisation</ScrollToTopLink></li>
            </ul>
          </nav>

          {/* Ressources */}
          <nav>
            <h4 className="footer-title">Ressources</h4>
            <ul className="space-y-2">
              <li><ScrollToTopLink to="/default" className="footer-link">Études de cas</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/default" className="footer-link">Blog</ScrollToTopLink></li>
              <li><ScrollToTopLink to="/default" className="footer-link">À propos</ScrollToTopLink></li>
            </ul>
          </nav>

{/* Contact */}
         {/* <nav>
            <h4 className="footer-title">Contact</h4>
            <ul className="space-y-2">
              <li><Link to="/etudes-de-cas" className="footer-link">Phone : 509 38179008</Link></li>
              <li><Link to="/blog" className="footer-link">Email : datakle@gmail.com</Link></li>
              <li><Link to="/a-propos" className="footer-link">adresse: #16 Rue romain,Petion-ville, Haiti</Link></li>
            </ul>
          </nav>*/}
<nav>
  <h4 className="footer-title">Contact</h4>

  <ul className="space-y-2">

    {/* Téléphone */}
    <li className="footer-row">
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l1.8-1.8c.3-.3.8-.4 1.2-.2 1 .4 2.2.6 3.3.6.6 0 1 .4 1 .9v2.9c0 .5-.4.9-.9.9C11.6 19.5 4.5 12.4 4.5 3.6c0-.5.4-.9.9-.9H8c.5 0 .9.4.9.9 0 1.1.2 2.3.6 3.3.1.4 0 .9-.3 1.2l-1.6 1.7Z"
        />
      </svg>
      <a href="tel:+50938179008" className="footer-link">
        +509 3817 9008
      </a>
    </li>

    {/* Email */}
    <li className="footer-row">
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
        />
      </svg>
      <a href="mailto:datakle@gmail.com" className="footer-link">
        datakle@gmail.com
      </a>
    </li>

    {/* Adresse / Google Maps */}
    <li className="footer-row">
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2a7 7 0 0 0-7 7c0 4.1 7 13 7 13s7-8.9 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
        />
      </svg>
      <a
        className="footer-link max-w-[18rem] sm:max-w-none"
        target="_blank"
        rel="noreferrer"
        href="https://www.google.com/maps/search/?api=1&query=16+Rue+Romain,+Pétion-Ville,+Haïti"
        title="Voir sur Google Maps"
      >
        #16 Rue Romain, Pétion-Ville, Haïti
      </a>
    </li>
  </ul>
</nav>











          {/* Newsletter — full width en mobile */}
          <div className="max-w-md mx-auto sm:mx-0 w-full">
            <h4 className="footer-title">Newsletter</h4>
            <form
              className="mt-2 flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Votre email"
                className="footer-input flex-1"
                aria-label="Votre email"
              />
              <button type="submit" className="btn-hero sm:whitespace-nowrap">
                S’inscrire
              </button>
            </form>
            <p className="mt-2 text-[13px] text-white/60">
              Pas de spam. Vous pouvez vous désabonner à tout moment.
            </p>
          </div>
        </div>

        {/* Barre bas — centrée en mobile, espacée en desktop */}
        <div className="mt-10 border-t border-white/10 pt-6 
                        flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">
            © {year} DATAKLE. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <ScrollToTopLink to="/default" className="footer-link">Mentions légales</ScrollToTopLink>
            <ScrollToTopLink to="/default" className="footer-link">Confidentialité</ScrollToTopLink>
          </div>
        </div>
      </div>

      {/* back-to-top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Revenir en haut"
        className="to-top"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path fill="currentColor" d="M12 5l6 6-1.4 1.4L13 8.8V19h-2V8.8L7.4 12.4 6 11l6-6Z" />
        </svg>
      </button>
    </footer>
  );
}

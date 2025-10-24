import { Link } from "react-router-dom";

export default function DefaultPage() {
  return (
    <main className="relative min-h-[70vh] md:min-h-[78vh] lg:min-h-[82vh] overflow-hidden">
      {/* BG dégradé + halos doux */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-br from-[#EAF1FF] via-white to-[#F7FAFF]
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute -top-24 -left-24
          h-72 w-72 rounded-full blur-3xl opacity-40
          bg-[#0059FB]/20
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute -bottom-24 -right-24
          h-80 w-80 rounded-full blur-3xl opacity-30
          bg-sky-400/30
        "
      />

      {/* Contenu */}
      <section className="container-app py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-600">
            Default Page
          </span>

          <h1
            className="
              mt-6 font-black leading-tight text-gray-900
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            "
          >
            Page en cours de développement
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600/90">
            Nous mettons en place cette page très bientôt<br/>
            Revenez bientôt ou contactez-nous pour des exemples pertinents.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn btn-white">
              ← Retour à l’accueil
            </Link>
            <Link to="/demander-une-consultation" className="btn btn--primary btn-pill">
              Contact / Devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

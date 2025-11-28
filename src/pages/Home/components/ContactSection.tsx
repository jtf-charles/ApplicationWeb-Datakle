import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function ContactSection() {
  return (
    <section id="contact" className="relative my-20 overflow-hidden">
      {/* ==== ÉLÉMENTS GRAPHIQUES DE FOND ANIMÉS ==== */}
      {/* petit cercle bleu en haut gauche */}
      <div
        className="
          pointer-events-none absolute left-[10%] top-6
          h-5 w-5 rounded-full bg-[#0059FB]/80
          dk-float-x-slow
        "
      />
      {/* petit cercle cyan en haut droit */}
      <div
        className="
          pointer-events-none absolute right-[15%] top-10
          h-4 w-4 rounded-full bg-[#0AD1F0]/90
          dk-float-y-slow
        "
      />
      {/* carré arrondi en contour derrière le bloc tête */}
      <div
        className="
          pointer-events-none absolute right-[8%] top-[3.5rem]
          h-12 w-12 rounded-2xl border border-white/40 bg-white/5
          dk-float-diag-slow
        "
      />
      {/* grand cercle cyan en bas droit */}
      <div
        className="
          pointer-events-none absolute -right-20 bottom-[-6rem]
          h-52 w-52 rounded-full bg-[#0AD1F0]/40
          dk-float-y-slow
        "
      />
      {/* grand cercle bleu foncé en bas gauche */}
      <div
        className="
          pointer-events-none absolute -left-24 bottom-[-5rem]
          h-40 w-40 rounded-full bg-[#000044]/35
          dk-float-diag-slow
        "
      />

      {/* ===== CONTENU PRINCIPAL (au-dessus du fond) ===== */}
      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
        {/* ========= ENTÊTE AVEC SectionHeader ========= */}
        <SectionHeader
          kicker="Contactez-nous"
          title="Parlons de vos données, de vos projets, de vos idées."
          subtitle="Une question, un projet ou une simple curiosité ? Laissez-nous un message, on vous répond rapidement."
          ctaLabel="Écrire un message"
          ctaHref="#contact-form"
          inView={true}              // 🔹 on force l’affichage du header
          className="mb-10"
        />

        {/* ========= CONTENU PRINCIPAL (fond blanc) ========= */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]">
          {/* ---------- FORMULAIRE ---------- */}
          <div
            id="contact-form"
            className="relative bg-white rounded-3xl shadow-[0_18px_50px_rgba(0,0,68,0.10)] border border-[#E5E7EB]"
          >
            <form className="p-5 sm:p-7 space-y-5 nexa-bold">
              {/* Nom + Email */}
              <div className="grid gap-4 sm:grid-cols-2 nexa-book">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold tracking-wide uppercase text-[#000044]/80"
                  >
                    Nom complet
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Votre nom et prénom"
                    className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0AD1F0] focus:border-transparent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold tracking-wide uppercase text-[#000044]/80"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0AD1F0] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Sujet */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-semibold tracking-wide uppercase text-[#000044]/80"
                >
                  Sujet
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Ex. : Tableau de bord, formation, audit data…"
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0AD1F0] focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold tracking-wide uppercase text-[#000044]/80"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Expliquez-nous votre besoin en quelques lignes…"
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0AD1F0] focus:border-transparent resize-none"
                />
              </div>

              {/* Consentement + bouton */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-start gap-2 text-[11px] text-[#6B7280]">
                  <input
                    type="checkbox"
                    className="mt-[2px] h-4 w-4 rounded border-[#D1D5DB] text-[#0059FB] focus:ring-[#0AD1F0]"
                  />
                  <span className="nexa-light">
                    J’accepte que DATAKLE utilise ces informations pour me
                    recontacter. Aucun spam, jamais.
                  </span>
                </label>

                <button
                  type="submit"
                  className="
                    inline-flex items-center justify-center rounded-full
                    bg-[#0059FB] px-6 py-2.5 text-sm font-semibold text-white
                    shadow-[0_14px_35px_rgba(0,0,0,0.35)]
                    hover:bg-[#0042C5] hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)]
                    transition-all duration-200 hover:-translate-y-0.5
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0AD1F0]
                  "
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>

          {/* ---------- INFOS & RÉSEAUX ---------- */}
          <aside className="space-y-6">
            {/* Coordonnées */}
            <div className="rounded-3xl bg-white shadow-[0_14px_40px_rgba(0,0,68,0.08)] border border-[#E5E7EB] p-5 sm:p-6 space-y-4">
              <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-[#000044]/80 nexa-bold">
                Contact direct
              </h3>

              <div className="space-y-3 text-sm text-[#4B5563]">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0059FB]/10 text-[#0059FB]">
                    <FiMail />
                  </span>
                  <div>
                    <p className="font-semibold text-[#000044] nexa-book">Email</p>
                    <a
                      href="mailto:datakle@gmail.com"
                      className="text-[#0059FB] hover:text-[#003EB5] nexa-light"
                    >
                      datakle@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0059FB]/10 text-[#0059FB]">
                    <FiPhone />
                  </span>
                  <div>
                    <p className="font-semibold text-[#000044] nexa-book">Téléphone</p>
                    <a
                      href="tel:+50938179008"
                      className="text-[#0059FB] hover:text-[#003EB5] nexa-light"
                    >
                      +509 3817 9008
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0059FB]/10 text-[#0059FB]">
                    <FiMapPin />
                  </span>
                  <div>
                    <p className="font-semibold text-[#000044] nexa-book">Adresse</p>
                    <p className="text-[#4B5563] nexa-light">
                      #16 Rue Romain, Pétion-Ville, Haïti
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="rounded-3xl bg-[#000044] text-white p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-[#0AD1F0] nexa-bold">
                    Réseaux sociaux
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-white/80 nexa-book">
                    On partage des cas pratiques, des conseils et les coulisses
                    de projets data.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 nexa-book">
                <SocialButton
                  href="https://www.facebook.com/share/1BGFkDphSz/"
                  icon={<FaFacebookF />}
                  label="Facebook"
                />
                <SocialButton
                  href="https://www.instagram.com/datakle?igsh=a2t5djF2aDQ3cjlk"
                  icon={<FaInstagram />}
                  label="Instagram"
                />
                <SocialButton
                  href="https://www.tiktok.com/@datakle?_t=ZM-90ok0hMIgrT&_r=1"
                  icon={<FaTiktok />}
                  label="TikTok"
                />
                <SocialButton
                  href="https://www.linkedin.com/company/datakle/"
                  icon={<FaLinkedinIn />}
                  label="LinkedIn"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/** Petit composant pour les boutons réseaux sociaux */
type SocialButtonProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <Link
      to={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2 rounded-full
        bg:white bg-white text-[#000044] px-3.5 py-2 text-xs sm:text-sm font-medium
        shadow-[0_10px_26px_rgba(0,0,0,0.18)]
        hover:bg-[#0AD1F0] hover:text-[#000044]
        transition-colors duration-150
      "
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0059FB] text-white">
        {icon}
      </span>
      {label}
    </Link>
  );
}

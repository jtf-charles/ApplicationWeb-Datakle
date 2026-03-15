import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { SectionHeader } from "@/components/common/SectionHeader";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<"idle" | "success">("idle");

  const MAX_MESSAGE_LEN = 2000;

  const emailRegex = useMemo(() => {
    // Simple mais efficace pour la majorité des cas
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  }, []);

  const validate = (s: FormState): FormErrors => {
    const e: FormErrors = {};

    if (!s.name.trim()) e.name = "Veuillez renseigner votre nom complet.";
    if (!s.email.trim()) e.email = "Veuillez renseigner votre email.";
    else if (!emailRegex.test(s.email.trim())) e.email = "Veuillez entrer un email valide.";

    if (!s.subject.trim()) e.subject = "Veuillez renseigner le sujet.";
    if (!s.message.trim()) e.message = "Veuillez écrire un message.";
    else if (s.message.length > MAX_MESSAGE_LEN)
      e.message = `Le message ne doit pas dépasser ${MAX_MESSAGE_LEN} caractères.`;

    return e;
  };

  const onChange =
    (key: keyof FormState) =>
    (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        evt.target.type === "checkbox"
          ? (evt.target as HTMLInputElement).checked
          : evt.target.value;

      setSubmitted("idle");
      setForm((prev) => ({ ...prev, [key]: value }));

      // Validation "live" légère : on retire l’erreur du champ dès qu’il devient valide
      setErrors((prev) => {
        const next = { ...prev };
        const draft = { ...form, [key]: value } as FormState;
        const v = validate(draft);
        if (!v[key]) delete next[key];
        return next;
      });
    };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const v = validate(form);
    setErrors(v);

    const hasErrors = Object.keys(v).length > 0;
    if (hasErrors) return;

    // ✅ Front-only "envoi" : ouvre le client mail de l’utilisateur avec sujet + corps pré-remplis
    const to = "contact@datakle.com";
    const subject = encodeURIComponent(form.subject.trim());

    const bodyLines = [
      `Nom: ${form.name.trim()}`,
      "",
      form.message.trim(),
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    setSubmitted("success");

    // Optionnel : reset (tu peux enlever si tu préfères garder le texte après mailto)
    setForm({ name: "", email: "", subject: "", message: "", consent: false });
    setErrors({});
  };

  return (
    <section id="contact" className="relative my-20 overflow-hidden">
      {/* ==== ÉLÉMENTS GRAPHIQUES DE FOND ANIMÉS ==== */}
      <div className="pointer-events-none absolute left-[10%] top-6 h-5 w-5 rounded-full bg-[#0059FB]/80 dk-float-x-slow" />
      <div className="pointer-events-none absolute right-[15%] top-10 h-4 w-4 rounded-full bg-[#0AD1F0]/90 dk-float-y-slow" />
      <div className="pointer-events-none absolute right-[8%] top-[3.5rem] h-12 w-12 rounded-2xl border border-white/40 bg-white/5 dk-float-diag-slow" />
      <div className="pointer-events-none absolute -right-20 bottom-[-6rem] h-52 w-52 rounded-full bg-[#0AD1F0]/40 dk-float-y-slow" />
      <div className="pointer-events-none absolute -left-24 bottom-[-5rem] h-40 w-40 rounded-full bg-[#000044]/35 dk-float-diag-slow" />

      {/* ===== CONTENU PRINCIPAL (au-dessus du fond) ===== */}
      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-[76rem] px-4 sm:px-6">
        <SectionHeader
          kicker="Contactez-nous"
          title="Discutons de vos besoins"
          subtitle="Vous avez une question, une idée ou un besoin particulier ? Écrivez-nous, nous serons heureux d’en discuter avec vous."
          ctaLabel="Écrire un message"
          ctaHref="/#contact"
          inView={true}
          className="mb-10"
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]">
          {/* ---------- FORMULAIRE ---------- */}
          <div
            id="contact-form"
            className="relative bg-white rounded-3xl shadow-[0_18px_50px_rgba(0,0,68,0.10)] border border-[#E5E7EB]"
          >
            <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-5 nexa-bold">
              {/* ✅ Message succès (discret) */}
              {submitted === "success" && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 nexa-book">
                  Message prêt à être envoyé. Votre application mail va s’ouvrir.
                </div>
              )}

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
                    value={form.name}
                    onChange={onChange("name")}
                    placeholder="Votre nom et prénom"
                    aria-invalid={!!errors.name}
                    className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0AD1F0] focus:border-transparent"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 nexa-light">{errors.name}</p>
                  )}
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
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="vous@exemple.com"
                    aria-invalid={!!errors.email}
                    className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0AD1F0] focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 nexa-light">{errors.email}</p>
                  )}
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
                  value={form.subject}
                  onChange={onChange("subject")}
                  placeholder="Ex. : Tableau de bord, formation, audit data…"
                  aria-invalid={!!errors.subject}
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0AD1F0] focus:border-transparent"
                />
                {errors.subject && (
                  <p className="text-[11px] text-red-600 nexa-light">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <div className="flex items-end justify-between gap-3">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-semibold tracking-wide uppercase text-[#000044]/80"
                  >
                    Message
                  </label>

                  <span className="text-[11px] text-[#6B7280] nexa-light">
                    {form.message.length}/{MAX_MESSAGE_LEN}
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange("message")}
                  maxLength={MAX_MESSAGE_LEN + 200} // on laisse dépasser un peu pour déclencher l’erreur si besoin
                  placeholder="Expliquez-nous votre besoin en quelques lignes…"
                  aria-invalid={!!errors.message}
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0AD1F0] focus:border-transparent resize-none"
                />
                {errors.message && (
                  <p className="text-[11px] text-red-600 nexa-light">{errors.message}</p>
                )}
              </div>

              {/* Consentement + bouton */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-start gap-2 text-[11px] text-[#6B7280]">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={onChange("consent")}
                    className="mt-[2px] h-4 w-4 rounded border-[#D1D5DB] text-[#0059FB] focus:ring-[#0AD1F0]"
                  />
                  <span className="nexa-light">
                    J’accepte que DATAKLE utilise ces informations pour me recontacter.
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
                      href="mailto:contact@datakle.com"
                      className="text-[#0059FB] hover:text-[#003EB5] nexa-light"
                    >
                      contact@datakle.com
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
                      Pétion-Ville, Haïti
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="social-media" className="rounded-3xl bg-[#000044] text-white p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-[#0AD1F0] nexa-bold">
                    Réseaux sociaux
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-white/80 nexa-book">
                    Suivez-nous sur les réseaux sociaux pour rester informé de nos activités et de nos publications.
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

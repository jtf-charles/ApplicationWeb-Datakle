export default function DatakleSeparator() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#000044] via-[#001366] to-[#0059FB] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A5B4FC]">
          <span className="inline-block h-1 w-1 rounded-full bg-[#0AD1F0] nexa-black" />
          Slogan Datakle
        </span>
        <div className="font-nexa">
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-white nexa-bold">
          Nous transformons vos données en décisions utiles,
          mesurables et orientées résultats.
        </h2>
        </div>
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-1 w-10 rounded-full bg-[#0AD1F0]" />
          <span className="h-1 w-6 rounded-full bg-white/60" />
          <span className="h-1 w-6 rounded-full bg-[#0059FB]" />
        </div>
      </div>

      {/* --- Formes animées --- */}

      {/* petit cercle bleu */}
      <div
        className="
          pointer-events-none absolute left-[18%] top-6
          h-6 w-6 rounded-full bg-[#0059FB]
          opacity-80 dk-float-x-slow
        "
      />

      {/* petit cercle cyan */}
      <div
        className="
          pointer-events-none absolute right-[22%] top-10
          h-4 w-4 rounded-full bg-[#0AD1F0]
          opacity-90 dk-float-y-slow
        "
      />

      {/* losange clair */}
      <div
        className="
          pointer-events-none absolute right-[32%] top-8
          h-10 w-10 bg-white/10 border border-white/40
          rotate-12 rounded-[0.75rem]
          dk-float-diag-slow
        "
      />

      {/* grand cercle cyan en bas */}
      <div
        className="
          pointer-events-none absolute right-[10%] -bottom-28
          h-48 w-48 rounded-full bg-[#0AD1F0]/80
          opacity-70 dk-float-y-slow
        "
      />

      {/* grand cercle bleu foncé à gauche */}
      <div
        className="
          pointer-events-none absolute -left-24 bottom-[-5rem]
          h-40 w-40 rounded-full bg-[#000044]/60
          dk-float-diag-slow
        "
      />
    </section>
  );
}

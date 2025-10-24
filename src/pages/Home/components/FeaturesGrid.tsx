 <section className="container-app my-4 sm:my-4">
      <SectionHeader
        badge="— Découvrez l’univers DATAKLE"
        title="A PROPOS"
        subtitle={
          <>
            <span className="text-gray-700">Vos données, </span>
            <span className="bg-gradient-to-r from-[#0AD1F0] to-[#0059FB] bg-clip-text text-transparent">
              la clé de votre performance !
            </span>
          </>
        }
      />


      <div className="grid gap-6 md:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {TILES.map((t, i) => (
          <TileCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
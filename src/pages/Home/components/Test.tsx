import "@/styles/index.css";

export default function FontTest() {
  return (
    <div className="p-10 space-y-6">

      <h1 className="nexa-black text-dk-blue">
        TEST TITRE — Ceci doit être en Nexa Bold + bleu Datakle
      </h1>

      <p className="font-nexa text-lg">
        TEST FONT — Ce texte doit être affiché en Nexa.
      </p>

      <p className="text-dk-cyan font-nexa">
        TEST COULEUR — Ce texte doit être en cyan (#0AD1F0).
      </p>

      <p className="text-gray-800">
        TEST DEFAULT — Ceci doit utiliser la font par défaut Tailwind.
      </p>

    </div>
  );
}

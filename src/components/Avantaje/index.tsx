import React from "react";
import Avantaj from "./Avantaj";
import { Award, Crown, TreeDeciduous } from "lucide-react"; // Importăm iconurile

const Avantaje = () => {
  // Date statice pentru avantaje cu iconuri specifice
  const authors = [
    {
      _id: "1",
      name: "Profesioniști în amenajarea grădinilor",
      description:
        "Clientii care au apelat la serviciile oferite de partenerii nostri au fost multumiti si ii vor recomanda mai departe.",
      icon: TreeDeciduous, // Iconul pentru grădini
    },

    {
      _id: "2",
      name: "Tu esti pe primul loc",
      description:
        "Firmele partenere isi adapteaza programul in functie de necesitatile tale si iti ofera consiliere gratuita cu privire la serviciile oferite.",
      icon: Crown, // Iconul pentru prioritate
    },
    {
      _id: "3",
      name: "Pret avantajos",
      description:
        "Beneficiezi de preturi avantajoase si castigi un spatiu verde pe placul tau.",
      icon: Award, // Iconul pentru preț
    },
  ];

  return (
    <section className="pb-15">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-8">
          <h2 className="text-heading-5 font-semibold text-dark">
          Iata de ce sa alegi profesionisti de pe portalul * nume portal *
          </h2>
        </div>
        <div className="border-t border-gray-3 pt-5">
          <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {authors.map((author, key) => (
              <Avantaj author={author} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avantaje;

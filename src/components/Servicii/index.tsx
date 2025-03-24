import React from "react";
import Serviciu from "./Serviciu";
import { TreeDeciduous, Wrench, Leaf } from "lucide-react"; // Importăm iconurile

const Servicii = () => {
  // Date statice pentru servicii cu iconuri specifice
  const authors = [
    {
      _id: "1",
      name: "Amenajari gradini",
      description:
        "Clientii care au apelat la serviciile oferite de partenerii nostri au fost multumiti si ii vor recomanda mai departe.",
      icon: TreeDeciduous, // Icon pentru amenajări grădini
    },
    {
      _id: "2",
      name: "Intretinere gradini",
      description:
        "Firmele partenere isi adapteaza programul in functie de necesitatile tale si iti ofera consiliere gratuita cu privire la serviciile oferite.",
      icon: Wrench, // Icon pentru întreținere grădini
    },
    {
      _id: "3",
      name: "Plante ornamentale",
      description:
        "Beneficiezi de preturi avantajoase si castigi un spatiu verde pe placul tau.",
      icon: Leaf, // Icon pentru plante ornamentale
    },
  ];

  return (
    <section className="pb-15">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-8">
          <h2 className="text-heading-5 font-semibold text-dark">
            Gaseste direct serviciul pe care il cauti
          </h2>
        </div>
        <div className="border-t border-gray-3 pt-14">
          <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {authors.map((author, key) => (
              <Serviciu author={author} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicii;

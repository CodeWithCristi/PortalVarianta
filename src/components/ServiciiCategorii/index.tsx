import React from "react";
import ServiciuCard from "./Serviciu"; // Componenta ce afișează un serviciu individual
import { TreeDeciduous, Wrench, Leaf } from "lucide-react"; // Importăm iconurile
import { IServiciu } from "@/types/serviciu";

const Servicii: React.FC = () => {
  // Date statice pentru servicii cu iconuri specifice
  const servicii: IServiciu[] = [
    {
      _id: "1",
      name: "Amenajari gradini",
      link: "amenajari-gradini",
      description:
        "Clientii care au apelat la serviciile oferite de partenerii nostri au fost multumiti si ii vor recomanda mai departe.",
      icon: TreeDeciduous, // Icon pentru amenajări grădini
    },
    {
      _id: "2",
      name: "Intretinere gradini",
      link: "intretinere-gradini",
      description:
        "Firmele partenere isi adapteaza programul in functie de necesitatile tale si iti ofera consiliere gratuita cu privire la serviciile oferite.",
      icon: Wrench, // Icon pentru întreținere grădini
    },
    {
      _id: "3",
      name: "Plante ornamentale",
      link: "plante-ornamentale",
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
            {servicii.map((serviciu) => (
              <ServiciuCard serviciu={serviciu} key={serviciu._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicii;

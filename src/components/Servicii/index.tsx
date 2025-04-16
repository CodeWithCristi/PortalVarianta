import React from "react";
import { IServiciu } from "@/types/serviciu";
import ServiciuCard from "./Serviciu";

const Servicii: React.FC = () => {
  // Date statice pentru servicii, folosind proprietatea "image"
  const servicii: IServiciu[] = [
    {
      _id: "1",
      name: "Amenajari gradini",
      link: "amenajari-gradini",
      description:
        "Clientii care au apelat la serviciile oferite de partenerii nostri au fost multumiti si ii vor recomanda mai departe.",
      image: "/images/amenajari-gradini.jpg",
    },
    {
      _id: "2",
      name: "Intretinere gradini",
      link: "intretinere-gradini",
      description:
        "Firmele partenere isi adapteaza programul in functie de necesitatile tale si iti ofera consiliere gratuita cu privire la serviciile oferite.",
      image: "/images/intretinere-gradini.jpg",
    },
    {
      _id: "3",
      name: "Plante ornamentale",
      link: "plante-ornamentale",
      description:
        "Beneficiezi de preturi avantajoase si castigi un spatiu verde pe placul tau.",
      image: "/images/plante-ornamentale.jpg",
    },
  ];

  return (
    <section className="pb-15">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-8">
          <h2 className="text-heading-5 font-semibold text-dark">
          Gaseste rapid un profesionist in functie de serviciul dorit
          </h2>
        </div>
        <div className="border-t border-gray-3 pt-14">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
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

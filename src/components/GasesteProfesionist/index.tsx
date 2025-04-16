import React from "react";
import GasesteProf from "./GasesteProf";

const GasesteProfesionist = () => {
  // Date statice pentru profesioniști, folosind proprietăți separate
  const professionals = [
    {
      _id: "1",
      name: "Profesioniști în amenajarea grădinilor",
      description:
        "Clienții care au apelat la serviciile oferite de partenerii noștri au fost mulțumiți și îi vor recomanda mai departe.",
      image: "/images/tree-deciduous.jpg", // Imaginea pentru amenajarea grădinilor
    },
    {
      _id: "2",
      name: "Tu ești pe primul loc",
      description:
        "Firmele partenere își adaptează programul în funcție de necesitățile tale și îți oferă consiliere gratuită cu privire la serviciile oferite.",
      image: "/images/crown.jpg", // Imaginea pentru prioritate
    },
    {
      _id: "3",
      name: "Preț avantajos",
      description:
        "Beneficiezi de prețuri avantajoase și câștigi un spațiu verde pe placul tău.",
      image: "/images/award.jpg", // Imaginea pentru preț
    },
  ];

  return (
    <section className="pb-15">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-8">
          <h2 className="text-heading-5 font-semibold text-dark">
            Găsește rapid un profesionist în funcție de serviciul dorit
          </h2>
        </div>
        <div className="border-t border-gray-3 pt-5">
          <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {professionals.map((professional) => (
              <GasesteProf
                key={professional._id}
                name={professional.name}
                description={professional.description}
                image={professional.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GasesteProfesionist;

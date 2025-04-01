import React from "react";
import Oras from "./Oras";
import MedicalInfoCard from "../Common/MoreInfoCard";

const Orase = () => {
  // Date statice pentru orașe
  const cities = [
    {
      _id: "1",
      name: "București",
      description: "Capitala României, un centru vibrant de cultură și afaceri.",
    },
    {
      _id: "2",
      name: "Cluj-Napoca",
      description: "Inima Transilvaniei, cunoscut pentru universități și tehnologie.",
    },
    {
      _id: "3",
      name: "Timișoara",
      description: "Un oraș cu o moștenire istorică și o viață culturală bogată.",
    },
    {
      _id: "4",
      name: "Iași",
      description: "Un important centru cultural și academic din Moldova.",
    },
    {
      _id: "5",
      name: "Constanța",
      description: "Orasul portuar al României, plin de istorie și litoral.",
    },
    // poți adăuga mai multe orașe după nevoie
  ];

  return (
    <section className="pt-30">
      <div className="max-w-7xl mx-auto px-4">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-8">
          <h2 className="text-heading-5 font-semibold text-dark">
          Top profesionisti gradina in functie de oras 
          </h2>
       
        </div>

        {/* Grilă multi-coloană */}
        <div className="border-t border-b border-gray-3 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Oras key={city._id} city={city} />
          ))}
        </div>
      </div>
    </section>
      
  );
};

export default Orase;

// Orase.tsx
import React from "react";
import Oras from "./Oras";

type OraseProps = {
  url: string;
};

const Orase = ({ url }: OraseProps) => {
  // Date statice pentru orașe
  const cities = [
    {
      _id: "1",
      name: "bucuresti",
      description: "Capitala României, un centru vibrant de cultură și afaceri.",
    },
    {
      _id: "2",
      name: "cluj",
      description: "Inima Transilvaniei, cunoscut pentru universități și tehnologie.",
    },
    {
      _id: "3",
      name: "timisoara",
      description: "Un oraș cu o moștenire istorică și o viață culturală bogată.",
    },
    {
      _id: "4",
      name: "iasi",
      description: "Un important centru cultural și academic din Moldova.",
    },
    {
      _id: "5",
      name: "constanta",
      description: "Oraș portuar al României, plin de istorie și litoral.",
    },
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
            <Oras key={city._id} city={city} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orase;

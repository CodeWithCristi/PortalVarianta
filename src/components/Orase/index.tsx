// Orase.tsx
import React from "react";
import Oras from "./Oras";
import { citiesPaginaCategorii } from "@/utils/Constants";
import { City } from "@/types/city";

type OraseProps = {
  url: string;
  cities: City[];
};
const Orase = ({ url, cities }: OraseProps) => {


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
          {cities.map((city:City) => (
            <Oras key={city._id} city={city} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orase;

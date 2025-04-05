// Oras.tsx
import { City } from "@/types/city";
import { MapPin } from "lucide-react";
import Link from "next/link";


type OrasProps = {
  city: City;
  url: string;
};

const Oras = ({ city, url }: OrasProps) => {
  const cityNameCapitalized = city.name.charAt(0).toUpperCase() + city.name.slice(1);

  return (
    <Link href={`/${url}-${city.name}`} className="group">
      <div className="flex items-center justify-center rounded-[20px] border border-gray-3 bg-gray p-5 transition-all group-hover:-translate-y-2 group-hover:bg-white group-hover:drop-shadow-1 w-[300px] h-[50px]">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-custom-xl font-semibold text-dark">
              {cityNameCapitalized}
            </h3>
          </div>
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-200">
            <MapPin size={24} className="text-gray-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Oras;

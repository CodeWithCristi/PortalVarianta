import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IServiciu } from "@/types/serviciu";

interface ServiciuCardProps {
  serviciu: IServiciu;
}

const ServiciuCard: React.FC<ServiciuCardProps> = ({ serviciu }) => {
  return (
    <Link href={serviciu.link} className="group block">
      <div className="rounded-[20px] border border-gray-3 bg-gray overflow-hidden transition-all group-hover:-translate-y-2 group-hover:bg-white group-hover:drop-shadow-1">
        {/* Containerul imaginii: se extinde pe lățimea întregului card */}
        <div className="relative h-48 w-full">
          <Image
            src={serviciu.image}          // Calea imaginii
            alt={serviciu.name}           // Text alternativ pentru SEO
            fill                         // Umple containerul părinte
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            priority                     // Încărcare prioritară
          />
        </div>
        {/* Conținutul cardului (ex. titlul) */}
        <div className="p-4 text-center">
          <h3 className="mb-1 text-custom-xl font-semibold text-dark">
            {serviciu.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiciuCard;

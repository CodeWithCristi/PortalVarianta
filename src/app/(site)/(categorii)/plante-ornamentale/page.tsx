import React from "react";
import Support from "@/components/Support";
import Servicii from "@/components/Servicii";
import Orase from "@/components/Orase";
import MedicalInfoCard from "@/components/Common/MoreInfoCard";
import InfoAddCompaniesBanner from "@/components/Common/InfoAddCompaniesBanner";
import { City } from "@/types/city";
import { getCitiesWithCompanies } from "@/sanity/sanity-utils";

export const revalidate = 3600; // Regenerare la fiecare 60 de minute

const PlanteOrnamentale = async () => {
    let cities = [] as City[];
    cities = await getCitiesWithCompanies("plante-ornamentale");
    console.log("cities...in PlanteOrnamentale..", cities);
  return (
    <>
      <Orase url="plante-ornamentale" cities={cities}/>
      <InfoAddCompaniesBanner/>
    </>
  );
};

export default PlanteOrnamentale;

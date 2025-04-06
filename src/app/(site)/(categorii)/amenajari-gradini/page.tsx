import React from "react";
import Support from "@/components/Support";
import Servicii from "@/components/Servicii";
import Orase from "@/components/Orase";
import MedicalInfoCard from "@/components/Common/MoreInfoCard";
import InfoAddCompaniesBanner from "@/components/Common/InfoAddCompaniesBanner";
import { getCitiesWithCompanies } from "@/sanity/sanity-utils";
import { City } from "@/types/city";


const AmenajariGradini = async () => {
  let cities = [] as City[];
  cities = await getCitiesWithCompanies("amenajari-gradini");
  console.log("cities...in AmenajariGradini", cities);
  return (
    <>
      <Orase url="amenajari-gradini" cities={cities}/>
      <InfoAddCompaniesBanner/>
    </>
  );
};

export default AmenajariGradini;

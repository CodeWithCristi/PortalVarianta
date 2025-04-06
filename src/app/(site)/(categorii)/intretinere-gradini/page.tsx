import React from "react";
import Support from "@/components/Support";
import Servicii from "@/components/Servicii";
import Orase from "@/components/Orase";
import MedicalInfoCard from "@/components/Common/MoreInfoCard";
import InfoAddCompaniesBanner from "@/components/Common/InfoAddCompaniesBanner";
import { getCitiesWithCompanies } from "@/sanity/sanity-utils";
import { City } from "@/types/city";
export const revalidate = 3600 // revalidate at most every hour
const IntretinereGradini = async () => {
  let cities = [] as City[];
  cities = await getCitiesWithCompanies("intretinere-gradini");
  console.log("cities...in categorie", cities);
  return (
    <>
      <Orase url="intretinere-gradini" cities={cities}/>
      <InfoAddCompaniesBanner/>
    </>
  );
};

export default IntretinereGradini;

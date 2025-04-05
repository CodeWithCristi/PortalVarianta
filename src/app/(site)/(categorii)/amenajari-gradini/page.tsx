import React from "react";
import Support from "@/components/Support";
import Servicii from "@/components/Servicii";
import Orase from "@/components/Orase";
import MedicalInfoCard from "@/components/Common/MoreInfoCard";
import InfoAddCompaniesBanner from "@/components/Common/InfoAddCompaniesBanner";
import { getCitiesWithCompanies } from "@/sanity/sanity-utils";
import { City } from "@/types/city";
type Props = {
  params: Promise<{ slug: string }>;
};

const CategoriiPage = async (props:Props) => {
  const params = await props.params;
  const cities: City[] = await getCitiesWithCompanies(params.slug);
  console.log("cities...", cities);
  return (
    <>
      <Orase url="amenajari-gradini" cities={cities}/>
      <InfoAddCompaniesBanner/>
    </>
  );
};

export default CategoriiPage;

import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Category from "@/components/Home/Category";
import Authors from "@/components/Home/Authors";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import Search from "@/components/Search";
import Filter from "@/components/Filter";
import Avantaje from "@/components/Avantaje";
import Servicii from "@/components/Servicii";
import CallToAction from "@/components/Common/CallToAction";
import MedicalInfoCard from "@/components/Common/MoreInfoCard";
import InfoAddCompaniesBanner from "@/components/Common/InfoAddCompaniesBanner";

export const metadata: Metadata = {
  title: "NextBlog - Next.js Blog Template",
  description: "This is Home Blog page for NextBlog",
  // other metaDescription
};

export default function Home() {
  return (
    <>
      <Filter/>
      {/* <Hero /> */}
      {/* <Category /> */}
      <Avantaje />
      <Servicii />
      <InfoAddCompaniesBanner/>
      <CallToAction />
    </>
  );
}

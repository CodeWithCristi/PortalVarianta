import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Company } from "@/types/firme";
import { getFirst8Companies, imageBuilder } from "@/sanity/sanity-utils";
import SearchPageFilter from "@/components/SearchPageFilter";
import CallToAction from "@/components/Common/CallToAction";
import CompanyCard from "@/components/Common/CompanyCard";

export const metadata: Metadata = {
  title: "Firme Amenajări Grădini - Cele mai noi oferte",
  description: "Găsește și contactează cele mai bune firme de amenajări grădini din România.",
};

export default async function AmenajariGradiniPage() {
  // Obținem primele 8 firme din Sanity (poți modifica limitarea după preferințe)
  const companies: Company[] = await getFirst8Companies();

  return (
    <>
      {/* Componenta ta de filtrare / căutare */}
      <SearchPageFilter />

      {/* Container lat, centrat */}
      <section className="pb-15">
        <div className="mx-auto w-full max-w-[1200px] px-0 sm:px-0 xl:px-0">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Firme de Amenajări Grădini
          </h1>

          {/* Grid cu doar 2 coloane pe ecrane medii (md) și mai mari */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company) => (
  <CompanyCard key={company._id} company={company} />
))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

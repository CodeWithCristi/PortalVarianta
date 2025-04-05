// pages/[slug].tsx sau pages/amenajari-gradini/[slug].tsx

import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import { getCityContent, getCompaniesByCity, imageBuilder } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { Company } from "@/types/firme";
import CompanyCardList from "@/components/Firme/CompanyCardList";
import CompanyBottomCTA from "@/components/Firme/CompanyBottomCTA";
import CallToAction from "@/components/Common/CallToAction";
import MoreInfoFirmePageBanner from "@/components/Common/MoreInfoFirmePageBanner";
import { CityContent } from "@/types/cityContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;

  const prefix = "amenajari-gradini-";
  const city = params.slug.startsWith(prefix) ? params.slug.replace(prefix, "") : params.slug;
  const siteURL = process.env.SITE_URL;

  return {
    title: `Firme de amenajări grădini în ${city.charAt(0).toUpperCase() + city.slice(1)}`,
    description: `Aici poți găsi firme specializate în amenajări grădini din ${city.charAt(0).toUpperCase() + city.slice(1)}.`,
    alternates: {
      canonical: `${siteURL}/${params.slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: `Firme de amenajări grădini în ${city.charAt(0).toUpperCase() + city.slice(1)}`,
      description: `Aici poți găsi firme specializate în amenajări grădini din ${city.charAt(0).toUpperCase() + city.slice(1)}.`,
      url: `${siteURL}/${params.slug}`,
      type: "website",
    },
  };
}

const CompaniesByCity = async (props: Props) => {
  const params = await props.params;
  const prefix = "amenajari-gradini-";
  const city = params.slug.startsWith(prefix) ? params.slug.replace(prefix, "") : params.slug;
  console.log("city...", city)

  // Preluăm lista companiilor pentru oraș
  const companies: Company[] = await getCompaniesByCity(city);
  // Preluăm și conținutul paginii pentru oraș (documentul cityContent)
  const cityContent: CityContent = await getCityContent(city);

  return (
    <main>
      <section className="pb-17.5 pt-31.5">
        <div className="mx-auto max-w-[1030px] px-4 sm:px-8 xl:px-0">
          <div className="mx-auto max-w-[770px] text-center">
            <h1 className="mb-5 text-2xl font-bold text-dark sm:text-4xl lg:text-custom-2">
              Firme de amenajări grădini în {city.charAt(0).toUpperCase() + city.slice(1)}
            </h1>
            <p className="text-body">
              Aici poți găsi firme specializate în amenajări grădini din{" "}
              {city.charAt(0).toUpperCase() + city.slice(1)}.
            </p>
          </div>
          <CompanyCardList companies={companies} city={city} />
             {/* Add the bottom CTA component after the company list */}
             <CompanyBottomCTA />
          {/* Pentru fiecare companie, redăm un layout similar cu pagina de blog */}
          <div className="mt-10">
            {companies.map((company, index) => (
              <article key={company._id} className="mx-auto max-w-[770px] my-10">
                <h2 className="mb-5 text-2xl font-bold text-dark sm:text-4xl lg:text-custom-2">
                  {index + 1}.{company.companyName}
                </h2>
                {company.mainImage && (
                  <Image
                    src={imageBuilder(company.mainImage).url()!}
                    alt={company.companyName}
                    className="mb-11 mt-10 rounded-lg"
                    width={1030}
                    height={550}
                  />
                )}
                
           
             
                <div className="mx-auto max-w-[770px]">
                  <div className="blog-details blog-details-one">
                    <RenderBodyContent company={company} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
    
      </section>
      <div className="mx-auto max-w-[1030px] sm:px-8 xl:px-0 w-full h-px border-t border-gray-3"></div>
      {cityContent && <MoreInfoFirmePageBanner content={cityContent.body} />}
      <CallToAction />
    </main>
  );
};

export default CompaniesByCity;

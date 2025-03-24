// pages/[slug].tsx sau pages/amenajari-gradini/[slug].tsx

import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import { getCompaniesByCity, imageBuilder } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { Company } from "@/types/firme";
import CompanyCardList from "@/components/Firme/CompanyCardList";
import CompanyBottomCTA from "@/components/Firme/CompanyBottomCTA";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const prefix = "amenajari-gradini-";
  const city = slug.startsWith(prefix) ? slug.replace(prefix, "") : slug;
  const siteURL = process.env.SITE_URL;

  return {
    title: `Firme de amenajări grădini în ${city.charAt(0).toUpperCase() + city.slice(1)}`,
    description: `Aici poți găsi firme specializate în amenajări grădini din ${city.charAt(0).toUpperCase() + city.slice(1)}.`,
    alternates: {
      canonical: `${siteURL}/${slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: `Firme de amenajări grădini în ${city.charAt(0).toUpperCase() + city.slice(1)}`,
      description: `Aici poți găsi firme specializate în amenajări grădini din ${city.charAt(0).toUpperCase() + city.slice(1)}.`,
      url: `${siteURL}/${slug}`,
      type: "website",
    },
  };
}

const CompaniesByCity = async ({ params }: Props) => {
  const { slug } = await params;
  const prefix = "amenajari-gradini-";
  const city = slug.startsWith(prefix) ? slug.replace(prefix, "") : slug;
  const companies: Company[] = await getCompaniesByCity(city);

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
                    <RenderBodyContent post={company} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <NewsletterSignup />
      </section>
    </main>
  );
};

export default CompaniesByCity;

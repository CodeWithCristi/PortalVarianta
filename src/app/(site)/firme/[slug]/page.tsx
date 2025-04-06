import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import { getPost, imageBuilder, getPosts, getCompanyByCompanySlug } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { structuredAlgoliaHtmlData } from "@/libs/crawlIndex";
import { Company } from "@/types/firme";
import DetaliiFirma from "../../../../components/DetaliiFirma/DetaliiFirma";
import { capitalizeFirstLetter } from "@/libs/utils";
import CallToAction from "@/components/Common/CallToAction";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600; // Regenerare la fiecare 60 de minute


export async function generateMetadata(props: Props) {
  // const params = await props.params;
  // const { slug } = params;
  // const post = await getPost(slug);
  // const siteURL = process.env.SITE_URL;

  const params = await props.params;
  const { slug } = params;
  const company: Company = await getCompanyByCompanySlug(slug);
  const siteURL = process.env.SITE_URL;


  if (company) {
    return {
      title: `${company.companyName} | Promovare Firme`,
      description: `${company.metaDescription.slice(0, 136)}...`,
      author: company.companyName,
      alternates: {
        canonical: `${siteURL}/firme/${company.companySlug.current}`,
        languages: {
          "ro-RO": "/ro-RO",
        },
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: `${company.companyName} | Promovare Firme`,
        description: company.metaDescription,
        url: `${siteURL}/firme/${company.companySlug.current}`,
        siteName: "Promovare Firme",
        images: [
          {
            url: imageBuilder(company.mainImage).url(),
            width: 1800,
            height: 1600,
            alt: company.companyName,
          },
        ],
        locale: "ro_RO",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${company.companyName} | Promovare Firme`,
        description: `${company.metaDescription.slice(0, 136)}...`,
        creator: "@PromovareFirme",
        site: "@PromovareFirme",
        images: [imageBuilder(company.mainImage).url()],
        url: `${siteURL}/firme/${company.companySlug.current}`,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "Nu a fost găsită nicio firmă cu aceste date",
    };
  }
}

const FirmePage = async (props: Props) => {
  // const params = await props.params;
  // const { slug } = params;
  // const post: Blog = await getPost(slug);
  // const author = post?.author;

  const params = await props.params;
  const { slug } = params;
  const company: Company = await getCompanyByCompanySlug(slug);

  // await structuredAlgoliaHtmlData({
  //   type: "company",
  //   title: company.companyName || "",
  //   htmlString: company.metaDescription || "",
  //   pageUrl: `${process.env.SITE_URL}/firme/${company.companySlug.current}`,
  //   imageURL: imageBuilder(company.mainImage).url()!,
  // });

  return (
    <main>
      <section className="pb-17.5 pt-31.5">
        <div className="mx-auto max-w-[1030px] px-4 sm:px-8 xl:px-0">
          <div className="mx-auto max-w-[770px] text-center">

            <div className="mt-7.5 flex items-center justify-center gap-4">
            <DetaliiFirma company={company}/>
            </div>
          </div>

 

          <div className="mx-auto max-w-[770px] border-t border-gray-3">
        
            <div className="blog-details blog-details-one pt-8">
              <RenderBodyContent company={company} />
            </div>

            {/* <!-- Blog Show More BTN --> */}
            <button className="mx-auto flex justify-center ">
              <Link
                href={`/amenajari-gradini-${company.city}`}
                className="mt-10 rounded-md border border-dark px-7.5 py-3 font-medium text-dark duration-200 ease-in hover:bg-dark  hover:text-white"
              >
                Vezi toate firmele din {capitalizeFirstLetter(company.city)}
              </Link>
            </button>

        
          </div>
        </div>
      </section>
        <CallToAction />
    </main>
  );
};

export default FirmePage;

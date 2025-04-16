import { Metadata } from "next";
import Filter from "@/components/Filter";
import Avantaje from "@/components/Avantaje";
import Servicii from "@/components/Servicii";
import InfoAddCompaniesBanner from "@/components/Common/InfoAddCompaniesBanner";
import CallToAction from "@/components/Common/CallToAction";

// 1. Metadate Next.js
export const metadata: Metadata = {
  title: "Firme Amenajari Gradina - Director Local | Homepage",
  description: "Găsește rapid o firmă de amenajări grădini în orașul tău. Director local cu servicii de proiectare, întreținere și plante ornamentale.",
  openGraph: {
    title: "Firme Amenajari Gradina - Director Local",
    description: "Găsește rapid o firmă de amenajări grădini în orașul tău. Director local cu servicii de proiectare, întreținere și plante ornamentale.",
    url: "https://www.firmeamenajarigradina.ro/",
    images: [
      {
        url: "https://www.firmeamenajarigradina.ro/og-image.jpg",
        alt: "Imagine cu o grădină frumoasă",
      },
    ],
    // Poți menționa și type: "website" sau locale: "ro_RO"
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firme Amenajari Gradina - Director Local",
    description: "Găsește rapid o firmă de amenajări grădini în orașul tău. Director local cu servicii de proiectare, întreținere și plante ornamentale.",
    images: ["https://www.firmeamenajarigradina.ro/twitter-image.jpg"],
  },
  // Poți seta indexarea explicit (implicit e "index, follow")
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  // 2. JSON-LD minimal pentru homepage: WebSite
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Firme Amenajari Gradina",
    "url": "https://www.firmeamenajarigradina.ro/",
    "description": "Portal de amenajări grădini în diverse orașe",
    // Poți adăuga limba site-ului (opțional, dar e bine):
    "inLanguage": "ro-RO"
  };

  return (
    <>
      {/* Conținutul efectiv al paginii */}
      <Filter />
      <Servicii />
      <Avantaje />
      <InfoAddCompaniesBanner />
      <CallToAction />

      {/* Script JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}

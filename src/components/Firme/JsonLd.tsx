import type { Company } from "@/types/firme"
import Script from "next/script"

type JsonLdProps = {
  companies: Company[]
  city: string
}

export function JsonLd({ companies, city }: JsonLdProps) {
  // Create structured data for local businesses
  const localBusinessesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: companies.map((company, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "LocalBusiness",
        name: company.companyName,
        description: company.metaDescription,
        telephone: company.phoneNumber,
        email: company.emailAddress,
        address: {
          "@type": "PostalAddress",
          addressLocality: city.charAt(0).toUpperCase() + city.slice(1),
          addressCountry: "RO",
        },
        image: company.mainImage ? company.mainImage : null,
        url: `${process.env.SITE_URL}/firme/${company.slug?.current || ""}`,
        priceRange: "$$",
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            addressCountry: "Romania",
          },
          geoRadius: "50000",
        },
      },
    })),
  }

  return (
    <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(localBusinessesData)}
    </Script>
  )
}


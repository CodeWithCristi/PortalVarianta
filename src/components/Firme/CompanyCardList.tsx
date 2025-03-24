import type { Company } from "@/types/firme"
import CompanyCard from "./CompanyCard"
import { JsonLd } from "./JsonLd"

type CompanyCardListProps = {
  companies: Company[]
  city: string
}

export default function CompanyCardList({ companies, city }: CompanyCardListProps) {
  if (!companies || companies.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">
          Nu am găsit firme de amenajări grădini în {city.charAt(0).toUpperCase() + city.slice(1)}.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-10 mb-16">
      <h2 className="text-xl font-semibold mb-6">
        Top {companies.length} firme de amenajări grădini în {city.charAt(0).toUpperCase() + city.slice(1)}
      </h2>

      {/* Add structured data for SEO */}
      <JsonLd companies={companies} city={city} />

      {/* Company cards */}
      <div className="space-y-6">
        {companies.map((company, index) => (
          <CompanyCard key={company._id} company={company} index={index} />
        ))}
      </div>
    </div>
  )
}



import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Globe, Phone, MapPin, Leaf } from "lucide-react"
import { imageBuilder } from "@/sanity/sanity-utils"
import RevealPhoneButton from "../Common/RevealPhoneButton"
import { Company } from "@/types/firme"



// This would be replaced with your actual data
const firmaData = {
  companyName: "Nume Firma Amenajari",
  specialization: "Amenajări Grădini",
  address: "Str. Nicolae Pascaly 7, Cluj-Napoca",
  phone: "0712 345 678",
  slug: "nume-firma-amenajari",
  mainImage: "/placeholder.svg?height=400&width=400",
  socialLinks: {
    facebook: "#",
    instagram: "#",
    website: "#",
  },
}
interface FirmaProfileProps {
  company: Company;
}

export default function FirmaProfile(company: Company) {
  console.log("company.company...///", company);
  return (
    <div className="w-full max-w-4xl mx-auto pb-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile image - larger circular image */}
      <div className="w-full max-w-[280px] mx-auto md:mx-0">
          <div className="aspect-square rounded-full overflow-hidden border-2 border-gray-100 shadow-md">
          {company.company.mainImage && (
            <Image
              src={imageBuilder(company.company.mainImage).url()}
              alt={`${company.company.companyName} - Specialiști în Amenajari gradini`}
              width={280}
              height={280}
              className="w-full h-full object-cover"
              priority
            />
          )}
          </div>
        </div>

        {/* Profile information */}
        <div className="flex-1">
          {/* Company name with H1 for SEO */}
          <h1 className="text-left text-3xl md:text-4xl font-bold text-dark mb-4">{firmaData.companyName}</h1>

          {/* Social media links */}
          <div className="flex gap-4 mb-6">
            <Link
              href={firmaData.socialLinks.facebook}
              aria-label={`Pagina de Facebook ${firmaData.companyName}`}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href={firmaData.socialLinks.instagram}
              aria-label={`Pagina de Instagram ${firmaData.companyName}`}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href={firmaData.socialLinks.website}
              aria-label={`Website ${firmaData.companyName}`}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Globe className="w-6 h-6" />
            </Link>
          </div>

          {/* Divider line */}
          <div className="w-full h-px border-t border-gray-3 my-6"></div>

          {/* Specialization with icon */}
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-5 h-5 text-black flex-shrink-0" />
            <div>
              <span className="text-black font-medium">Specializari</span>
              <span className="text-gray-700"> | Amenajari Gradini</span>
            </div>
          </div>

          {/* Address with icon */}
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-black flex-shrink-0" />
            <div>
              <span className="font-medium text-gray-800">Adresă Firma:</span>
              <span className="text-gray-700"> {company.company.city}</span>
            </div>
          </div>

          {/* Phone number with reveal button */}
   

            <RevealPhoneButton fullPhone={company.company.phoneNumber} />

     
        </div>
      </div>
    </div>
  )
}


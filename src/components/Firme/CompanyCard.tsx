import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Info } from 'lucide-react';
import { imageBuilder } from "@/sanity/sanity-utils";
import { Company } from "@/types/firme";
import RevealPhoneButton from "../Common/RevealPhoneButton";

type CompanyCardProps = {
  company: Company;
  index: number;
};

export default function CompanyCard({ company, index }: CompanyCardProps) {
  // Generate star rating display
  const rating = 4.9;
  
  return (
    <div className="flex flex-col md:flex-row rounded-[10px] overflow-hidden border border-gray-200 shadow-1 mb-6">
      {/* Left Section */}
      <div className="bg-dark text-white p-6 md:w-1/3">
        <h2 className="text-2xl font-bold mb-2">{company.companyName}</h2>
        <p className="mb-2">Amenajări Grădini</p>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="ml-2">{rating} / 5.0</span>
        </div>

        <Link 
          href={`/firme/${company?.companySlug?.current || ''}`}
          className="flex items-center justify-center gap-2 bg-transparent border border-white text-white rounded-md py-3 px-4 w-full mt-4 hover:bg-white/10 transition-colors"
        >
          Vezi Detalii Firma <Info className="w-4 h-4" />
        </Link>
      </div>

      {/* Middle Section */}
      <div className="p-6 md:w-1/3 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-start gap-2 mb-4">
            <MapPin className="text-dark mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-800">
                Locație: <span className="font-medium">{company.city.charAt(0).toUpperCase() + company.city.slice(1)}</span>
              </p>
            </div>
          </div>



          <div className="flex items-start gap-2 mb-4">
            <Mail className="text-dark mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-800">
                Email: 
                <a 
                  href={`mailto:${company.emailAddress}`} 
                  className="ml-1 text-dark hover:underline"
                  aria-label={`Trimite email la ${company.companyName}`}
                >
                  {company.emailAddress}
                </a>
              </p>
            </div>
          </div>

       
          <RevealPhoneButton fullPhone={company.phoneNumber} />
        
        </div>

        <div className="mt-4">
          <h3 className="font-medium mb-2">Servicii oferite:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {company.tags && company.tags.map((tag, idx) => (
              <li key={idx} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark rounded-full mr-2"></span>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </li>
            ))}
            {(!company.tags || company.tags.length === 0) && (
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark rounded-full mr-2"></span>
                Amenajări grădini complete
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="p-6 md:w-1/3 flex flex-col justify-between bg-white">
 
        <div className="mt-6 space-y-3">
          <a 
            href={`tel:${company.phoneNumber}`}
            className="flex items-center justify-center rounded-md bg-dark px-5.5 py-3.5 font-medium text-white transition-all duration-300 ease-linear hover:opacity-90 w-full"
            aria-label={`Contactează ${company.companyName}`}
          >
            Contactează acum <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          
          <Link 
            href={`/firme/${company.slug?.current || ''}`}
            className="inline-flex justify-center rounded-md border border-dark px-7.5 py-3 font-medium text-dark duration-200 ease-in hover:bg-dark hover:text-white w-full"
          >
            Vezi portofoliu <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

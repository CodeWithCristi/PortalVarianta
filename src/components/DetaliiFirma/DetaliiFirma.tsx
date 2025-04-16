import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, MapPin, Leaf } from "lucide-react";
import { imageBuilder } from "@/sanity/sanity-utils";
import RevealPhoneButton from "../Common/RevealPhoneButton";
import { Company } from "@/types/firme";
import ContractForm from "./ContactForm";

interface FirmaProfileProps {
  company: Company;
}

export default function FirmaProfile({ company }: FirmaProfileProps) {
  const imageToShow = company.logo || company.mainImage;

  return (
    <div className="w-full max-w-4xl mx-auto pb-8">
      {/* Profilul firmei */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Logo / imagine rotundă */}
        <div className="w-full max-w-[280px] mx-auto md:mx-0">
          <div className="aspect-square rounded-full overflow-hidden rounded-lg border-2 border-white-100 shadow-md">
            {imageToShow && (
              <Image
                src={imageBuilder(imageToShow).url()}
                alt={`${company.companyName} - Specialiști în amenajări`}
                width={280}
                height={280}
                className="w-full h-full object-cover"
                priority
              />
            )}
          </div>  
        </div>

        {/* Informații firmă */}
        <div className="flex-1">
          {/* Company Name (SEO) */}
          <h1 className="text-left text-3xl md:text-4xl font-bold text-dark mb-4">
            {company.companyName}
          </h1>

          {/* DOAR Email și WhatsApp */}
          <div className="flex gap-4 mb-6">
            {/* Email */}
            {company.emailAddress && (
              <Link
                href={`mailto:${company.emailAddress}`}
                aria-label={`Trimite email către ${company.companyName}`}
                className="text-green hover:text-green transition-colors"
              >
                <Mail className="w-8 h-8" />
              </Link>
            )}

            {/* WhatsApp */}
            {company.whatsapp && (
              <Link
                href={`https://wa.me/${company.whatsapp}`}
                aria-label={`Trimite mesaj WhatsApp la ${company.companyName}`}
                className="text-green hover:text-green transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-8 h-8" />
              </Link>
            )}
          </div>

          {/* Linie de separare */}
          <div className="w-full h-px border-t border-gray-300 my-4"></div>

          {/* Categorie (dacă e definită) */}
          {company.categorie && (
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-7 h-7 text-green flex-shrink-0" />
              <div>
                <span className="text-black font-medium">Categorie</span>
                <span className="text-gray-700"> | {company.categorie}</span>
              </div>
            </div>
          )}

          {/* Oraș */}
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-7 h-7 text-green flex-shrink-0" />
            <div>
              <span className="font-medium text-gray-800">Oraș:</span>
              <span className="text-gray-700"> {company.city}</span>
            </div>
          </div>

          {/* Telefon (cu buton "RevealPhoneButton") */}
          <RevealPhoneButton fullPhone={company.phoneNumber} />
        </div>
      </div>

   
    </div>
  );
}

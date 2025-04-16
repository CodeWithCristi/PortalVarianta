"use client"; 
// Deoarece este un component de tip client (folosește Next/Image etc.)

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imageBuilder } from "@/sanity/sanity-utils";
import { Company } from "@/types/firme";
import { MapPin, Phone } from "lucide-react";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  // Construiește URL imagine; fallback la un placeholder dacă nu există
  const imgUrl = company.mainImage
    ? imageBuilder(company.mainImage).url()
    : "/placeholder-image.png";

  // Descriere scurtă
  const shortDescription = company.metaDescription
    ? company.metaDescription.substring(0, 80) + "..."
    : "Detalii disponibile despre această firmă";

  return (
    <div
      // Container simplu (fără <Link> pe tot cardul)
      className="group relative block rounded-xl bg-white shadow-md overflow-hidden
                 hover:shadow-lg transition-shadow"
      aria-label={`Card firmă ${company.companyName}`}
    >
      {/* Imagine: raport 16:9, zoom la hover */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={
            imageBuilder(imgUrl)
              .width(1030) // Stabilim lățimea dorită
              .height(580) // Calculăm înălțimea pentru 16:9
              .auto("format")
              .url()!
          }
          alt={company.companyName}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay la baza imaginii (opțional) */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-60" />
      </div>

      {/* Conținut card */}
      <div className="p-6 flex flex-col gap-2">
        {/* Titlu */}
        <h2 className="text-xl font-bold text-gray-900">
          {company.companyName}
        </h2>

        {/* Categorie (dacă există) */}
        {company.categorie && (
          <span className="text-base font-semibold text-gray-700">
            {company.categorie}
          </span>
        )}

        {/* Descriere scurtă */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {shortDescription}
        </p>

        {/* Oraș */}
        {company.city && (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{company.city}</span>
          </div>
        )}

        {/* Telefon */}
        {company.phoneNumber && (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Phone className="w-4 h-4" />
            <span>{company.phoneNumber}</span>
          </div>
        )}

        {/* Buton "Vezi detalii" -> Link doar pe buton */}
        <div className="mt-3">
          <Link
            href={`/firme/${company.companySlug?.current}`}
            className="rounded-md bg-green px-5.5 py-2.5 font-medium text-white hover:opacity-100 opacity-90 lg:transition-all lg:duration-200 lg:ease-linear inline-block"
          >
            Vezi detalii
          </Link>
        </div>
      </div>
    </div>
  );
}

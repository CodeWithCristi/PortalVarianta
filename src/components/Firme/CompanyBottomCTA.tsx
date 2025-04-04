"use client"

import Link from "next/link"
import { Info, CheckCircle, Users, DollarSign } from "lucide-react"

export default function CompanyBottomCTA() {
  return (
    <section className="my-10">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-gray-200 shadow-1">
        {/* Left Section - Dark Background */}
        <div className="bg-dark p-6 md:w-1/3 flex flex-col items-center justify-center">
          <Link
            href="/inscrie-firma"
            className="flex items-center justify-center gap-2 bg-white text-dark rounded-md py-3 px-6 w-full hover:bg-gray-100 transition-colors font-medium"
          >
            Adaugă / Recomandă o firmă <Info className="w-4 h-4" />
          </Link>

          <button
            onClick={() => window.open("/termeni-si-conditii", "_blank")}
            className="mt-4 text-white/80 flex items-center gap-1 hover:text-white transition-colors text-sm"
          >
            <Info className="w-4 h-4" /> vezi termeni și condiții
          </button>
        </div>

        {/* Right Section - White Background */}
        <div className="bg-white p-6 md:w-2/3 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-dark w-6 h-6" />
            <span className="text-gray-700">Firmă Verificată med.ro</span>
            {/* <Info className="text-gray-400 w-4 h-4 cursor-help" /> */}
          </div>

          <div className="flex items-center gap-2">
            <Users className="text-dark w-6 h-6" />
            <span className="text-gray-700">Specializare Principală</span>
            {/* <Info className="text-gray-400 w-4 h-4 cursor-help" /> */}
          </div>

          {/* <div className="flex items-center gap-2">
            <DollarSign className="text-dark w-6 h-6" />
            <span className="text-gray-700">Cel mai bun preț</span>
            <Info className="text-gray-400 w-4 h-4 cursor-help" />
          </div> */}
        </div>
      </div>
    </section>
  )
}


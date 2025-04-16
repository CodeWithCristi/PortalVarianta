import Image from "next/image";
import Link from "next/link";

export default function MedicalInfoCard() {
  return (
    <section className="relative z-10 overflow-hidden bg-gray py-12.5">
   
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-[10px] bg-white px-4 py-9 shadow-1 sm:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div className="max-w-lg space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Updatăm constant informațiile
              </h2>
              <p className="text-gray-700">
                În fiecare zi, echipa noastră de experți verifică și actualizează informațiile din articolele noastre,
                astfel încât să vă puteți baza pe cele mai recente date.
              </p>
              <Link
                href="/despre-noi"
                className="flex items-center justify-center rounded-md bg-green px-5.5 py-3.5 font-medium text-white transition-all duration-300 ease-linear hover:opacity-90"
              >
                Citeste mai mult
              </Link>
            </div>
            <div className="mt-6 md:mt-0">
              <Image
                src="/placeholder.svg?height=200&width=240"
                width={240}
                height={200}
                alt="Medical professionals illustration"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

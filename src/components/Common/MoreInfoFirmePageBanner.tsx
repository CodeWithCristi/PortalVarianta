export default function MoreInfoFirmePageBanner() {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-12 md:py-16" aria-labelledby="info-banner-heading">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-[10px] bg-gray-300 px-4 py-9 shadow-lg sm:px-8 xl:px-10">
          {/* Single column layout with full width */}
          <div className="w-full">
            {/* Text container with left alignment */}
            <div className="text-left space-y-4 max-w-full">
              <h2 id="info-banner-heading" className="text-3xl font-bold text-dark">
                Aici va fi text editabil
              </h2>
              <p className="text-gray-600 leading-relaxed">
                În fiecare zi, echipa noastră de experți verifică și actualizează informațiile din articolele noastre,
                astfel încât să vă puteți baza pe cele mai recente date.
              </p>
              <h2 id="info-banner-heading" className="text-3xl font-bold text-dark">
                Updatăm constant informațiile
              </h2>
              <p className="text-gray-600 leading-relaxed">
                În fiecare zi, echipa noastră de experți verifică și actualizează informațiile din articolele noastre,
                astfel încât să vă puteți baza pe cele mai recente date.
              </p>
              <p className="text-gray-600 leading-relaxed">
                În fiecare zi, echipa noastră de experți verifică și actualizează informațiile din articolele noastre,
                astfel încât să vă puteți baza pe cele mai recente date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


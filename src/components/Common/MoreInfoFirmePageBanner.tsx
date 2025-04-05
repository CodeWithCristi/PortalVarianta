// components/MoreInfoFirmePageBanner.tsx
import { PortableText } from "@portabletext/react";

const components = {
  types: {
    // Omit render-ul pentru imagini: dacă apare un bloc de tip "image", se va returna null
    image: () => null,
  },
};

type MoreInfoFirmePageBannerProps = {
  content: any; // Înlocuiește "any" cu tipul specific dacă ai definit unul pentru blockContent
};

export default function MoreInfoFirmePageBanner({ content }: MoreInfoFirmePageBannerProps) {
  return (
    <section
      className="relative z-10 overflow-hidden bg-white py-12 md:py-16"
      aria-labelledby="info-banner-heading"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-[10px] bg-gray-300 px-4 py-9 shadow-lg sm:px-8 xl:px-10">
          <div className="w-full">
            <div className="text-left space-y-4 max-w-full">
              <PortableText value={content || []} components={components} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// types/company.ts

export interface Company {
  _id: string;
  companyName: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  phoneNumber: string;
  emailAddress: string;
  city: string;
  categorie: string;
  // Slug-ul pentru pagina de oraș (ex.: "amenajari-gradini-bucuresti")
  slug: {
    current: string;
  };
  // Slug-ul pentru numele firmei (ex.: "compania-exemplu-srl")
  companySlug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    // Dacă vrei să gestionezi hotspot/crop, poți adăuga structuri opționale aici:
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
  body: any; // Înlocuiește "any" cu tipul pentru blockContent, dacă ai unul definit
  publishedAt: string;

  // --- Câmpuri noi (opționale) ---
  whatsapp?: string; // ex.: "0712XXXXXX" sau "00407XXXXXX"
  video?: string;    // URL video YouTube / Vimeo, etc.
  logo?: {
    asset: {
      _ref: string;
      _type: string;
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
}

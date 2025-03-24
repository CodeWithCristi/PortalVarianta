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
    slug: {
      current: string;
    };
    mainImage: {
      asset: {
        _ref: string;
        _type: string;
      };
      // Poți adăuga aici câmpuri suplimentare, cum ar fi crop sau hotspot, dacă este necesar
    };
    body: any; // Înlocuiește "any" cu tipul specific pentru blockContent (de ex.: PortableTextBlock[]) dacă ai definit unul
    publishedAt: string; // Sau poți folosi Date, în funcție de cum gestionezi datetime-ul în proiect
  }
  
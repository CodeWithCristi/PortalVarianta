import { categoryOptions } from "@/utils/categorii_sanity";
import { citiesOptions } from "@/utils/orase_romania_sanity";
import { Rule } from "sanity";

const firma = {
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    // ---------------------- Fields existente ----------------------------
    {
      name: "companyName",
      title: "Numele firmei",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "metaDescription",
      title: "Meta Descriere",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Cuvinte cheie",
      type: "array",
      of: [
        {
          type: "string",
          validation: (Rule: any) =>
            Rule.custom((fields: string) => {
              if (
                fields !== fields.toLowerCase() ||
                fields.split(" ").includes("")
              ) {
                return "Tags trebuie să fie toate lowercase și fără spații goale";
              }
              return true;
            }),
        },
      ],
    },
    {
      name: "phoneNumber",
      title: "Număr de Telefon",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "emailAddress",
      title: "Adresă Email",
      type: "string",
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: "city",
      title: "Orașul",
      type: "string",
      options: {
        list: citiesOptions,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "categorie",
      title: "Categorie",
      type: "string",
      options: {
        list: categoryOptions,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug Pagina Oras",
      type: "slug",
      options: {
        source: (doc: any) => `amenajari-gradini-${doc.city}`,
        unique: true,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, ""),
      },
      validation: (Rule: Rule) =>
        Rule.required().custom((fields: any) => {
          if (
            fields?.current !== fields?.current?.toLowerCase() ||
            fields?.current.split(" ").includes("")
          ) {
            return "Slug trebuie să fie în litere mici și fără spații";
          }
          return true;
        }),
    },
    {
      name: "companySlug",
      title: "Slug Nume Firma (Pagina agenție)",
      type: "slug",
      options: {
        source: (doc: any) => doc.companyName,
        unique: true,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, ""),
      },
      validation: (Rule: Rule) =>
        Rule.required().custom((fields: any) => {
          if (
            fields?.current !== fields?.current?.toLowerCase() ||
            fields?.current.split(" ").includes("")
          ) {
            return "Slug trebuie să fie în litere mici și fără spații";
          }
          return true;
        }),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "body",
      title: "Conținut (Blog/Descriere)",
      type: "blockContent",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },

    // ---------------------- Câmpuri NOI ----------------------------
    // 1) WhatsApp
    {
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      validation: (Rule: Rule) => Rule.optional(),
    },
    // 2) Video (afișat doar dacă există un link valid)
    {
      name: "video",
      title: "URL Video (opțional)",
      type: "url",
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }).optional(),
    },
    // 3) Logo (imagine suplimentară cu dimensiuni recomandate 720 x 380)
    {
      name: "logo",
      title: "Logo (720 x 380)",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.optional(),
    },
  ],
  preview: {
    select: {
      title: "companyName",
      subtitle: "city",
      media: "mainImage",
    },
    prepare(value: Record<string, any>) {
      const { title, subtitle } = value;
      return {
        title,
        subtitle: subtitle ? `Situată în ${subtitle}` : "",
      };
    },
  },
};

export default firma;

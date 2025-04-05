import { citiesOptions } from '@/utils/orase_romania_sanity';
import { Rule } from 'sanity';

const firma = {
  name: "company",
  title: "Company",
  type: "document",
  fields: [
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
            Rule.custom((fields: any) => {
              if (
                fields !== fields.toLowerCase() ||
                fields.split(" ").includes("")
              ) {
                return "Tags must be lowercase and not be included space";
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
      title: "Slug Nume Firma (Pagina agentie)",
      type: "slug",
      options: {
        // Folosește companyName ca sursă pentru slug
        source: (doc: any) => doc.companyName,
        unique: true,
        // Funcția slugify: transformă în litere mici, elimină spațiile inutile și înlocuiește spațiile cu cratime
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
      title: "Main image",
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
  }
  
};

export default firma;

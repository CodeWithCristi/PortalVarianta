// schemas/cityContent.js
import { Rule } from 'sanity';
import { citiesOptions } from '@/utils/orase_romania_sanity';

export default {
  name: 'cityContent',
  title: 'City Content',
  type: 'document',
  fields: [
    {
      name: 'city',
      title: 'Orașul',
      type: 'string',
      options: {
        list: citiesOptions, // Folosește opțiunile cu title (pentru afișare) și value (pentru salvare)
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Conținut',
      type: 'blockContent', // Asigură-te că ai definit tipul "blockContent" în proiectul tău
      description: 'Textul editabil pentru pagina orașului',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'city',
    },
  },
};

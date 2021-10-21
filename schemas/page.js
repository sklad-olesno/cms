import { MdDescription } from "react-icons/md";

export default {
  name: 'page',
  title: 'Strona',
  type: 'document',
  icon: MdDescription,
  order: '2',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Opublikowany',
      type: 'datetime',
    },
    {
      name: 'slug',
      title: 'Link',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'body',
      title: 'Opis',
      type: 'blockContent',
    },
    {
      name: 'mainImage',
      title: 'Grafika',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}

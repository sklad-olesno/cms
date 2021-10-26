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
      initialValue: (new Date()).toISOString()
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
      name: "sections",
      title: "Sekcje",
      type: "array",
      of: [
        { type: "section_title_left_description" },
        { type: "section_title_description_link_center" },
        { type: "section_title_description_link_image" },
        { type: "section_title_description_img_center" },
        { type: "section_offer" },
        { type: "section_prices" },
        { type: "section_contact" },
      ]
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

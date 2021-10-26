import { MdPostAdd } from "react-icons/md";

export default {
  name: 'offer',
  title: 'Oferta',
  type: 'document',
  icon: MdPostAdd,
  order: '3',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    },
    {
      title: 'Cena luzem',
      name: 'price_raw',
      type: 'number'
    },
    {
      title: 'Cena za worek',
      name: 'price_pack',
      type: 'number'
    },
    {
      name: "attributes",
      title: "Cechy",
      type: "array",
      of: [
        { type: "section_offer_attribute" },
      ]
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    },
  },
}

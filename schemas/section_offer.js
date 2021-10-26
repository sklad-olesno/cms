//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
  name: 'section_offer',
  title: 'Oferta',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: "offer_set",
      title: "Oferta",
      type: "reference",
      to: [{ type: "offer" }]
    },
  ],
  preview: {
    select: {
      title: 'offer_set.title',
      media: 'offer_set.mainImage'
    },
  },
}
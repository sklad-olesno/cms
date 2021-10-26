//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
  name: 'section_prices',
  title: 'Cennik',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: "prices_set",
      title: "Cennik",
      type: "reference",
      to: [{ type: "offer" }]
    },
  ],
  preview: {
    select: {
      title: 'prices_set.title',
      media: 'prices_set.mainImage'
    },
  },
}
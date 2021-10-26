//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
  name: 'section_offer_attribute',
  title: 'Pojedyncza cecha',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
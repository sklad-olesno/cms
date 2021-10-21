//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
  name: 'section_title_description_link_center',
  title: 'Tytuł, opis i link na środku',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'text'
    },
    {
      name: "link",
      title: "Link",
      type: "array",
      of: [
        { type: "navigationItemExternall" },
        { type: "navigationItemInternall" }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
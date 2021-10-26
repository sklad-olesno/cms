//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
  name: 'section_title_description_img_center',
  title: 'Tytuł, opis i zdjęcie na środku',
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
      name: 'image',
      title: 'Zdjęcie',
      type: 'image'
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
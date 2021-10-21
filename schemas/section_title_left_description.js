//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
  name: 'section_title_left_description',
  title: 'Tytuł po lewej i opis po prawej',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
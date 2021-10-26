//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
  name: 'section_contact',
  title: 'Kontakt',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: 'title_localization',
      title: 'Tytuł dla sekcji z lokalizacją',
      type: 'string',
    },
    {
      name: 'title_work_open',
      title: 'Tytuł dla sekcji z godzinami otwarcia',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
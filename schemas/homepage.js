import { MdHome } from "react-icons/md";

export default {
  name: 'homepage',
  title: 'Strona główna',
  type: 'document',
  icon: MdHome,
  order: '1', 
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      title: 'Tytuł strony',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis strony',
      type: 'text'
    },
    {
      name: 'publishedAt',
      title: 'Opublikowano',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    },
    {
      name: 'baner_title',
      title: 'Tytuł baneru',
      type: 'string',
    },
    {
      name: 'baner_subtitle',
      title: 'Subtytuł baneru',
      type: 'string',
    },
    {
      name: 'baner_image',
      title: 'Zdjęcie baneru',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "sections",
      title: "Sekcje",
      type: "array",
      of: [
        { type: "section_title_left_description" },
        { type: "section_title_description_link_center" },
        { type: "section_title_description_link_image" },
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt'
    },
  },
}
import { MdSettings } from "react-icons/md";

export default {
  name: 'settings',
  type: 'document',
  title: 'Ustawienia',
  icon: MdSettings,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  order: '10',
  fields: [
    {
      name: 'title',
      title: 'Meta tytuł',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Meta opis',
      type: 'text'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'mainNav',
      title: 'Nawigacja główna',
      description: 'Wybierz menu do nawigacji głównej',
      type: 'reference',
      to: [{type: 'navigation'}],
    },
    {
      name: 'socialNav',
      title: 'Nawigacja w stopce',
      description: 'Wybierz menu do nawigacji w stopce',
      type: 'reference',
      to: [{type: 'navigation'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
}

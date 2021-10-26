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
      name: 'footerNav',
      title: 'Menu w stopce',
      description: 'Wybierz menu do nawigacji w stopce',
      type: 'reference',
      to: [{type: 'navigation'}],
    },
    {
      name: 'socialNav',
      title: 'Social media w stopce',
      description: 'Wybierz menu do nawigacji w stopce',
      type: 'reference',
      to: [{type: 'navigation'}],
    },
    {
      name: 'telephone',
      title: 'Telefon kontaktowy',
      type: 'string',
    },
    {
      name: 'adress',
      title: 'Adres firmy',
      type: 'text'
    },
    {
      name: 'work_time',
      title: 'Godziny otwarcia',
      type: 'text'
    },
    {
      name: 'footer_title_menu',
      title: 'Tytuł dla menu w stopce',
      type: 'string',
    },
    {
      name: 'footer_title_adress',
      title: 'Tytuł dla adresu w stopce',
      type: 'string',
    },
    {
      name: 'footer_title_contact',
      title: 'Tytuł dla kontaktu w stopce',
      type: 'string',
    },
    {
      name: 'copyright',
      title: 'Prawa autorskie',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
}

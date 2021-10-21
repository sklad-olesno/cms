import { MdMenuOpen } from "react-icons/md";

export default {
  name: 'navigation',
  title: 'Menu',
  type: 'document',
  icon: MdMenuOpen,
  order: '9',
  fields: [
    {
      name: "title",
      title: "Tytuł",
      type: "string",
    },
    {
      name: 'navId',
      title: "ID nawigacji",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: "items",
      title: "Navigation items",
      type: "array",
      of: [{ type: "navigationItemExternall" },{ type: "navigationItemInternall" }]
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

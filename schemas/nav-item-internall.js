//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
  name: 'navigationItemInternall',
  title: 'Link do podstrony',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: "internalLinkTitle",
      type: "string",
      title: "Tytuł"
    },
    {
      title: 'Internal Link',
      name: 'internalLinkUrl',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{ type: 'homepage' },{ type: 'offer' },{ type: 'page' }], 
    },
  ],
  preview: {
    select: {
      title: 'internalLinkTitle',
    },
  },
}
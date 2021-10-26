//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
  name: 'navigationItemExternall',
  title: 'Link do strony internetowej',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: "externalLinkTitle",
      type: "string",
      title: "Tytuł"
    },
    {
      title: 'Pozycja wyróżniona',
      name: 'highlight',
      type: 'boolean'
    },
    {
      name: 'externalLinkUrl',
      title: 'Adres',
      description:"Use fully qualified URLS for external link",
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'externalLinkTitle',
    },
  },
}
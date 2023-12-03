import { CollectionConfig } from "payload/dist/exports/types";
import { SLUG } from "../constants/slugKey";

export const Places: CollectionConfig = {
  slug: SLUG.PLACE,
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: "place",
    defaultColumns: ["place", "city", "id"],
    
  },
  fields: [
    {
      name: "place",
      type: "text",
      required: true,
    },
    {
      name: "city",
      type: "relationship",
      relationTo: SLUG.CITIES,
    },
  ],
};

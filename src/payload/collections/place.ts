import { CollectionConfig } from "payload/dist/exports/types";
import { slugKey } from "../constants/slugKey";

export const Places: CollectionConfig = {
  slug: slugKey.PLACE,
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
      relationTo: slugKey.CITIES,
    },
  ],
};

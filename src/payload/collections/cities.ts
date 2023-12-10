import { CollectionConfig } from "payload/dist/exports/types";
import { slugKey } from "../constants/slugKey";

export const Cities: CollectionConfig = {
  slug: slugKey.CITIES,
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: "city",
  },
  fields: [
    {
      name: "city",
      type: "text",
      required: true,
    },
  ],
};

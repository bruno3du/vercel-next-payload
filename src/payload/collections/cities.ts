import { CollectionConfig } from "payload/dist/exports/types";
import { SLUG } from "../constants/slugKey";

export const Cities: CollectionConfig = {
  slug: SLUG.CITIES,
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

import { CollectionConfig } from "payload/dist/exports/types";
import { SLUG } from "../constants/slugKey";

export const Type: CollectionConfig = {
  slug: SLUG.TYPE,
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: "type",
  },
  fields: [
    {
      name: "type",
      type: "text",
    },
  ],
};

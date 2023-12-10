import { CollectionConfig } from "payload/dist/exports/types";
import { slugKey } from "../constants/slugKey";

export const Type: CollectionConfig = {
  slug: slugKey.TYPE,
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

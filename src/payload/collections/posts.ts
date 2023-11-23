import { regenerateStaticPage } from "@/utils/revalidate-static-page";
import { CollectionConfig } from "payload/dist/exports/types";

export const Post: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
  hooks: {
    afterChange: [regenerateStaticPage],
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "body",
      type: "text",
    },
  ],
};

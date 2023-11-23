import { GlobalConfig } from "payload/dist/exports/types";

export const Config: GlobalConfig = {
  slug: "config",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "body",
      type: "richText",
    },
  ],
};

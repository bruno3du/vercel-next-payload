import path from "path";
import { CollectionConfig } from "payload/types";
import { slugKey } from "../constants/slugKey";

export const Media: CollectionConfig = {
  slug: slugKey.MEDIA,
  upload: {
    staticURL: "/media",
    disableLocalStorage: true,
    staticDir: path.join(__dirname, "../../public"),
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",

    mimeTypes: ["image/*"],
  },

  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
    },
  ],
};

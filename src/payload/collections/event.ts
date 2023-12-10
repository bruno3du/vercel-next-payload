import { regenerateStaticPage } from "@/utils/revalidate-static-page";
import { CollectionConfig } from "payload/dist/exports/types";
import { slugKey } from "../constants/slugKey";

export const Event: CollectionConfig = {
  slug: slugKey.EVENT,
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [regenerateStaticPage],
  },
  admin: {
    useAsTitle: "eventName",
  },
  fields: [
    {
      name: "eventImg",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "eventName",
      type: "text",
      required: true,
    },
    {
      name: "dateStart",
      type: "date",
    },
    {
      name: "dateStartHour",
      type: "text",
    },
    {
      name: "dateEndHour",
      type: "text",
    },
    {
      name: "status",
      type: "select",
      defaultValue: "Upcoming",
      options: ["Happening", "Upcoming", "Past"],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "dateEnd",
      type: "date",
    },
    {
      name: "eventLocation",
      type: "relationship",
      required: true,
      relationTo: slugKey.PLACE,
    },
    {
      name: "eventType",
      type: "relationship",
      required: true,
      relationTo: slugKey.TYPE,
    },
    {
      name: "PayableEvent",
      type: "checkbox",

      admin: {
        position: "sidebar",
      },
    },
    {
      name: "eventPrice",
      type: "number",
      admin: {
        condition: (data) => !!data?.PayableEvent,
      },
    },

    {
      name: "slug",
      type: "text",
    },
  ],
};

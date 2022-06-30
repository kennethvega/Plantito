export default {
  name: "product3",
  title: "Product3",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Plant name",
      type: "string",
    },
    {
      name: "potColor",
      title: "Pot-color",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 90 },
    },
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
    {
      name: "variety",
      title: "Black Variety",
      type: "document",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "name",
          title: "Plant name",
          type: "string",
        },
        {
          name: "potColor",
          title: "Pot-color",
          type: "string",
        },

        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
            maxLength: 90,
          },
        },
        {
          name: "id",
          title: "ID",
          type: "string",
        },
        {
          name: "details",
          title: "Details",
          type: "string",
        },
        {
          name: "summary",
          title: "Summary",
          type: "string",
        },
        {
          name: "price",
          title: "Price",
          type: "number",
        },
        {
          name: "tags",
          title: "Tags",
          type: "array",
          of: [
            {
              name: "tag",
              title: "Tag",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

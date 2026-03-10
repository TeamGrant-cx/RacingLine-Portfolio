/** @type {import('payload').CollectionConfig} */
export const Services = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
    access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
    },
    {
      name: 'pageHeading',
      type: 'text',
    },
    {
      name: 'pageDescription',
      type: 'textarea',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'highlightItems',
      type: 'array',
      fields: [
        { name: 'text', type: 'text', required: true },
      ],
    },
    {
      name: 'gridLayout',
      type: 'group',
      admin: { description: 'Controls grid positioning on the homepage services section' },
      fields: [
        { name: 'colSpan', type: 'number', defaultValue: 4 },
        { name: 'rowSpan', type: 'number', defaultValue: 1 },
        { name: 'order', type: 'number', defaultValue: 0 },
      ],
    },
    {
      name: 'subServiceCards',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
        {
          name: 'cardType',
          type: 'select',
          options: [
            { label: 'Lottie Animation', value: 'lottie' },
            { label: 'Image', value: 'image' },
            { label: 'Image Half', value: 'imageHalf' },
            { label: 'Video', value: 'video' },
          ],
          defaultValue: 'lottie',
          required: true,
        },
        {
          name: 'lottieFile',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.cardType === 'lottie',
          },
        },
        {
          name: 'defaultImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) =>
              siblingData?.cardType === 'image' || siblingData?.cardType === 'imageHalf',
          },
        },
        {
          name: 'hoverImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.cardType === 'image',
          },
        },
        {
          name: 'videoFile',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.cardType === 'video',
          },
        },
      ],
    },
    {
      name: 'serviceDetails',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'text', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'serviceDetailsImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'serviceDetailsAvatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'projectShowcase',
      type: 'relationship',
      relationTo: 'portfolio-projects',
      hasMany: true,
    },
  ],
}

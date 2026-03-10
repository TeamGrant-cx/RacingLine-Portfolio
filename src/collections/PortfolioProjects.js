/** @type {import('payload').CollectionConfig} */
export const PortfolioProjects = {
  slug: 'portfolio-projects',
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
      name: 'category',
      type: 'relationship',
      relationTo: 'services',
      required: true,
    },
    {
      name: 'clientLogo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'challengeAndStrategy',
      type: 'textarea',
    },
    {
      name: 'servicesDelivered',
      type: 'array',
      fields: [
        { name: 'text', type: 'text', required: true },
      ],
    },
    {
      name: 'showcaseImages',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'metrics',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'showcaseLayout',
      type: 'select',
      options: [
        { label: 'Digital (metrics grid)', value: 'digital' },
        { label: 'Software (laptop mockup)', value: 'software' },
        { label: 'Offline (image gallery)', value: 'offline' },
      ],
      defaultValue: 'digital',
    },
  ],
}

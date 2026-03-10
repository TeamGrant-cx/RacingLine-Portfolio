/** @type {import('payload').GlobalConfig} */
export const HomePage = {
  slug: 'home-page',
   access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'headingLines',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        { name: 'description', type: 'textarea' },
        { name: 'ctaText', type: 'text', defaultValue: 'lets drink coffee and talk' },
        { name: 'ctaLink', type: 'text', defaultValue: '/contactUs' },
        { name: 'heroImage', type: 'upload', relationTo: 'media' },
        { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'clientLogos',
      type: 'array',
      fields: [
        { name: 'logo', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    {
      name: 'howWeWork',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'how we work' },
        { name: 'subheading', type: 'text', defaultValue: 'A complete, high-end framework' },
        { name: 'diagramImage', type: 'upload', relationTo: 'media' },
        {
          name: 'steps',
          type: 'array',
          fields: [
            { name: 'icon', type: 'upload', relationTo: 'media', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'clientsTea',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', defaultValue: "Clients Tea!!" },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}

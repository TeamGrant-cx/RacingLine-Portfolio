/** @type {import('payload').GlobalConfig} */
export const AboutPage = {
  slug: 'about-page',
  label: 'About Page',
   access: {
    read: () => true,
  },
  fields: [
    {
      name: 'founderMessage',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'MESSAGE FROM THE FOUNDER' },
        { name: 'description', type: 'textarea' },
        { name: 'ctaText', type: 'text' },
        { name: 'ctaLink', type: 'text' },
        { name: 'founderImage', type: 'upload', relationTo: 'media' },
        { name: 'decorativeImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'philosophy',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Our philosophy' },
        {
          name: 'paragraphs',
          type: 'array',
          fields: [{ name: 'text', type: 'textarea' }],
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'teamSection',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Meet My Family' },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}

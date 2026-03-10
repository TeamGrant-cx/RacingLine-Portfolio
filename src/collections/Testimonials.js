/** @type {import('payload').CollectionConfig} */
export const Testimonials = {
  slug: 'testimonials',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'clientName',
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'clientRole',
      type: 'text',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'clientPhoto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'reviewText',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 0,
      max: 5,
      required: true,
      admin: { step: 0.1 },
    },
  ],
}

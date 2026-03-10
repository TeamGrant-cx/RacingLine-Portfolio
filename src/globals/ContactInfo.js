/** @type {import('payload').GlobalConfig} */
export const ContactInfo = {
  slug: 'contact-info',
  label: 'Contact Info',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroHeading',
      type: 'text',
    },
    {
      name: 'heroDescription',
      type: 'textarea',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'getInTouchDescription',
      type: 'textarea',
    },
    {
      name: 'offices',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'flag', type: 'upload', relationTo: 'media' },
        { name: 'address', type: 'textarea', required: true },
        { name: 'inquiriesLabel', type: 'text', defaultValue: 'For General Inquiries:' },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text', required: true },
      ],
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'instagram', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'facebook', type: 'text' },
      ],
    },
  ],
}

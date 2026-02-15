import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Service', plural: 'Services' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'order'],
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Service Title' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'URL Slug (e.g. platform-development)' },
    { name: 'shortDescription', type: 'text', required: true, label: 'Short Description (for navbar/cards)' },
    { name: 'order', type: 'number', defaultValue: 0, label: 'Display Order' },
    { name: 'icon', type: 'select', label: 'Icon', options: [
      { label: 'Globe', value: 'globe' },
      { label: 'Smartphone', value: 'smartphone' },
      { label: 'CPU / AI', value: 'cpu' },
      { label: 'Trending Up', value: 'trending-up' },
      { label: 'Code', value: 'code' },
      { label: 'Settings / Customize', value: 'settings' },
      { label: 'Rocket', value: 'rocket' },
      { label: 'Layers', value: 'layers' },
    ]},
    { name: 'colorTheme', type: 'select', label: 'Accent Color', defaultValue: 'blue', options: [
      { label: 'Blue', value: 'blue' },
      { label: 'Purple', value: 'purple' },
    ]},
    {
      type: 'group',
      name: 'page',
      label: 'Service Page Content',
      fields: [
        { name: 'heroHeading', type: 'text', label: 'Page Heading' },
        { name: 'heroDescription', type: 'textarea', label: 'Page Description' },
        { name: 'ctaButtonText', type: 'text', defaultValue: 'Start a Project', label: 'CTA Button Text' },
        {
          name: 'features',
          type: 'array',
          label: 'Key Features',
          minRows: 1,
          maxRows: 8,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'whyUsHeading', type: 'text', label: 'Why Us Heading', defaultValue: 'Why ACE?' },
        { name: 'whyUsBody', type: 'textarea', label: 'Why Us Description' },
        {
          name: 'deliverables',
          type: 'array',
          label: 'What We Deliver',
          fields: [
            { name: 'item', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}

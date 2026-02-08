import type { CollectionConfig } from 'payload'

export const Affiliates: CollectionConfig = {
  slug: 'affiliates',
  admin: {
    useAsTitle: 'partnerName',
    defaultColumns: ['partnerName', 'slug', 'categoryTag', 'active', 'clickCount'],
    group: 'Growth',
    description: 'Affiliate partner links with click tracking.',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'partnerName',
      type: 'text',
      required: true,
      label: 'Partner Name',
    },
    {
      name: 'targetUrl',
      type: 'text',
      required: true,
      label: 'Target URL',
      admin: {
        description: 'The destination URL the user will be redirected to.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        position: 'sidebar',
        description: 'Used in /go/[slug] redirect URL.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.partnerName) {
              return data.partnerName
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      required: true,
      label: 'Active',
      admin: {
        position: 'sidebar',
        description: 'Toggle off to disable this affiliate link site-wide.',
      },
    },
    {
      name: 'categoryTag',
      type: 'select',
      label: 'Category',
      options: [
        { label: 'Cloud', value: 'cloud' },
        { label: 'AI Tools', value: 'ai-tools' },
        { label: 'Software', value: 'software' },
        { label: 'Infrastructure', value: 'infrastructure' },
        { label: 'Analytics', value: 'analytics' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Internal Description',
      admin: {
        description: 'Internal notes — why we partner with them. Not shown publicly.',
      },
    },
    {
      name: 'clickCount',
      type: 'number',
      defaultValue: 0,
      label: 'Click Count',
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'Auto-incremented on each redirect.',
      },
    },
  ],
  timestamps: true,
}

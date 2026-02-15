import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'source', 'status', 'createdAt'],
    group: 'Growth',
    description: 'Captured leads from website forms and lead magnets.',
  },
  access: {
    // Anyone can create (public form submissions)
    create: () => true,
    // Only authenticated users can read/update/delete
    read: ({ req }) => {
      if (req.user) return true
      return false
    },
    update: ({ req }) => {
      if (req.user) return true
      return false
    },
    delete: ({ req }) => {
      if (req.user) return true
      return false
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company',
      admin: {
        description: 'Optional — company or organization name.',
      },
    },
    {
      name: 'painPoints',
      type: 'textarea',
      label: 'Pain Points / Project Details',
      admin: {
        description: 'What challenges or goals the lead described.',
      },
    },
    {
      name: 'source',
      type: 'select',
      required: true,
      defaultValue: 'contact-form',
      label: 'Lead Source',
      options: [
        { label: 'Contact Form', value: 'contact-form' },
        { label: 'Lead Magnet — Free Audit', value: 'lead-magnet-audit' },
        { label: 'CTA Footer', value: 'cta-footer' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      required: true,
      label: 'Status',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Proposal Sent', value: 'proposal-sent' },
        { label: 'Closed Won', value: 'closed-won' },
        { label: 'Closed Lost', value: 'closed-lost' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
      admin: {
        description: 'Private notes about this lead (not shown to the lead).',
      },
    },
  ],
  timestamps: true,
}

import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'roles', 'createdAt'],
    group: 'Admin',
  },
  access: {
    read: () => true,
    // Only authenticated users can create new users (no public registration)
    create: ({ req }) => {
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
      name: 'firstName',
      type: 'text',
      label: 'First Name',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['user'],
      required: true,
      options: [
        { label: 'Super Admin', value: 'superadmin' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Sales', value: 'sales' },
        { label: 'User', value: 'user' },
      ],
      admin: {
        description: 'Assign one or more roles to this user.',
      },
    },
  ],
  timestamps: true,
}

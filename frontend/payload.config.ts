import path from 'path'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Stacks } from './src/collections/Stacks'
import { Affiliates } from './src/collections/Affiliates'
import { Leads } from './src/collections/Leads'
import { Services } from './src/collections/Services'
import { Homepage } from './src/globals/Homepage'
import { About } from './src/globals/About'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  routes: {
    admin: '/ace-control-center',
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' | ACE inovations',
      description: 'ACE inovations Control Center',
    },
  },
  collections: [Users, Media, Stacks, Affiliates, Leads, Services],
  globals: [Homepage, About],
  secret: process.env.PAYLOAD_SECRET || 'ace-innovations-default-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  editor: lexicalEditor(),
  sharp,
})

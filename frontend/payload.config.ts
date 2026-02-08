import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Stacks } from './src/collections/Stacks'
import { Affiliates } from './src/collections/Affiliates'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' | ACE inovations',
      description: 'ACE inovations Admin Panel',
    },
  },
  collections: [Users, Media, Stacks, Affiliates],
  secret: process.env.PAYLOAD_SECRET || 'ace-innovations-default-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: true,
  }),
  editor: lexicalEditor(),
  sharp,
})

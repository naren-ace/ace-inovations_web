import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16 with Turbopack (default)
  experimental: {
    reactCompiler: false,
  },
}

export default withPayload(nextConfig)

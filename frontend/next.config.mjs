import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16 with Turbopack (default)
  allowedDevOrigins: ['*'],
}

export default withPayload(nextConfig)

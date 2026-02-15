import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['ace-db-stabilize.preview.emergentagent.com', 'ace-db-stabilize.cluster-0.preview.emergentcf.cloud', 'ace-db-stabilize.cluster-5.preview.emergentcf.cloud'],
}

export default withPayload(nextConfig)

import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'premium-cms-hub.preview.emergentagent.com',
    'premium-cms-hub.cluster-0.preview.emergentcf.cloud',
    'premium-cms-hub.cluster-5.preview.emergentcf.cloud',
    'premium-cms-hub.cluster-1.preview.emergentcf.cloud',
    'premium-cms-hub.cluster-2.preview.emergentcf.cloud',
    'premium-cms-hub.cluster-3.preview.emergentcf.cloud',
    'premium-cms-hub.cluster-4.preview.emergentcf.cloud',
  ],
}

export default withPayload(nextConfig)

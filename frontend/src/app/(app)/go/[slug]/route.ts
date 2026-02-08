import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params

  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'affiliates',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  })

  const affiliate = result.docs[0]

  if (!affiliate) {
    return NextResponse.json({ error: 'Affiliate not found' }, { status: 404 })
  }

  if (!affiliate.active) {
    return NextResponse.json({ error: 'This link is currently inactive' }, { status: 410 })
  }

  await payload.update({
    collection: 'affiliates',
    id: affiliate.id,
    data: {
      clickCount: (affiliate.clickCount ?? 0) + 1,
    },
  })

  return NextResponse.redirect(affiliate.targetUrl as string, 302)
}

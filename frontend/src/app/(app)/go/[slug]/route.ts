import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { sql } from 'drizzle-orm'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const baseUrl = request.nextUrl.origin

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
    return NextResponse.redirect(`${baseUrl}/?ref=404&slug=${slug}`, 302)
  }

  if (!affiliate.active) {
    return NextResponse.redirect(`${baseUrl}/?ref=inactive&slug=${slug}`, 302)
  }

  // Atomic increment — safe under concurrent clicks
  const db = payload.db.drizzle
  await db.execute(
    sql`UPDATE affiliates SET click_count = click_count + 1 WHERE id = ${affiliate.id}`
  )

  return NextResponse.redirect(affiliate.targetUrl as string, 302)
}

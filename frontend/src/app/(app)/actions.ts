'use server'

export async function submitContactForm(data: {
  name: string
  email: string
  company?: string
  message: string
  source?: string
}) {
  console.log('--- CONTACT FORM SUBMISSION ---')
  console.log(`Name: ${data.name}`)
  console.log(`Email: ${data.email}`)
  console.log(`Company: ${data.company || 'N/A'}`)
  console.log(`Message: ${data.message}`)
  console.log(`Source: ${data.source || 'contact-form'}`)
  console.log(`Timestamp: ${new Date().toISOString()}`)
  console.log('--- END SUBMISSION ---')

  return { success: true }
}

export async function subscribeNewsletter(email: string) {
  console.log('--- NEWSLETTER SUBSCRIPTION ---')
  console.log(`Email: ${email}`)
  console.log(`Timestamp: ${new Date().toISOString()}`)
  console.log('--- END SUBSCRIPTION ---')

  return { success: true }
}

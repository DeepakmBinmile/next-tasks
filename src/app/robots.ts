import { ENV } from '@/resources/environment/env'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${ENV.BASE_URL}/sitemap.xml`,
  }
}

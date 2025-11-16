import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://mocker-mg.vercel.app';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/sign-in',  // Example: Block sign-in pages
        '/sign-up',
        '/user-profile', // Example: Block private user dashboards
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
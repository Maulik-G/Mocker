// app/sitemap.ts
import { MetadataRoute } from 'next'
 
const siteUrl = 'https://mocker-mg.vercel.app';

// This is an EXAMPLE function. You must replace this
// with your actual function to get all your mocks from your database.
async function getAllMocks() {
  // const mocks = await db.query...
  // For now, we'll hardcode the IDs you had in your file:
  return [
    { id: '1' },
    { id: '2' },
    { id: '202501' },
    { id: '202401' },
    { id: '5' },
    { id: '6' },
    { id: '13' },
    { id: '11' },
    { id: '10' },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  // 1. Get all your mock instruction pages
  const mocks = await getAllMocks();
  const mockRoutes = mocks.map((mock) => ({
    url: `${siteUrl}/instructions?mockId=${mock.id}`,
    lastModified: new Date(),
    priority: 0.64,
  }));

  // 2. Get your category pages
  const categories = ['CAT', 'GATE', 'TECH'];
  const categoryRoutes = categories.map((category) => ({
    url: `${siteUrl}/mocks?category=${category}`,
    lastModified: new Date(),
    priority: 0.80,
  }));
  
  // 3. List your main static pages
  const staticRoutes = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      priority: 1.00,
    },
    {
      url: `${siteUrl}/mocks`,
      lastModified: new Date(),
      priority: 0.80,
    },
    {
      url: `${siteUrl}/team`,
      lastModified: new Date(),
      priority: 0.80,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      priority: 0.80,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.80,
    },
  ];

  // 4. Combine all routes
  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...mockRoutes,
  ];
}
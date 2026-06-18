export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout', '/order-success'],
    },
    sitemap: 'https://cropus.vercel.app/sitemap.xml',
  };
}

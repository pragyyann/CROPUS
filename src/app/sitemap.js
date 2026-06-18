import { products } from '../data/cropusData';

export default function sitemap() {
  const baseUrl = 'https://cropus.vercel.app';
  
  // Static paths
  const staticPaths = [
    '',
    '/shop',
    '/state-blends',
    '/bulk-supply',
    '/about',
    '/contact',
    '/cart',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Dynamic product paths
  const productPaths = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPaths, ...productPaths];
}

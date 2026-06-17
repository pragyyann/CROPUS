import React from 'react';
import ProductDetailClient from './ProductDetailClient';
import { products } from '../../../data/cropusData';

// Dynamic SEO metadata generation
export async function generateMetadata({ params }) {
  const unwrappedParams = await params;
  const product = products.find(p => p.slug === unwrappedParams.slug);

  if (!product) {
    return {
      title: 'Blend Not Found | CROPUS Vermicompost',
      description: 'The requested regional blend could not be found.'
    };
  }

  return {
    title: `${product.name} | CROPUS Vermicompost`,
    description: `${product.description} Recommended for: ${product.recommendedFor} Built with state-specific inputs to restore soil microbial layers.`,
    openGraph: {
      title: `${product.name} | CROPUS Vermicompost`,
      description: `${product.description} Recommended for: ${product.recommendedFor} Built with state-specific inputs to restore soil microbial layers.`,
    }
  };
}

// Generate static routes for the blends
export async function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }) {
  const unwrappedParams = await params;
  return <ProductDetailClient slug={unwrappedParams.slug} />;
}

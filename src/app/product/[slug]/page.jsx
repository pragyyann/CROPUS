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

  let title = `${product.name} | CROPUS Vermicompost`;
  let description = `${product.description} Recommended for: ${product.recommendedFor} Built with state-specific inputs to restore soil microbial layers.`;

  if (product.id === 'kashmir-blend') {
    title = 'Kashmir Blend Vermicompost | CROPUS Organic Compost';
    description = 'CROPUS Kashmir Blend is a region-aware vermicompost for colder soil conditions, orchard crops, and moisture-sensitive regions.';
  } else if (product.id === 'gujarat-blend') {
    title = 'Gujarat Blend Vermicompost | CROPUS Organic Compost';
    description = 'CROPUS Gujarat Blend is a region-aware vermicompost for dry heat, moisture retention needs, and soil structure support.';
  } else if (product.id === 'punjab-haryana-blend') {
    title = 'Punjab Haryana Blend Vermicompost | CROPUS Organic Compost';
    description = 'CROPUS Punjab / Haryana Blend supports high-crop-cycle agricultural belts and soil recovery.';
  } else if (product.id === 'south-india-blend') {
    title = 'South India Blend Vermicompost | CROPUS Organic Compost';
    description = 'CROPUS South India Blend is a region-aware vermicompost for humid regions, plantation crops, and organic matter support.';
  } else if (product.id === 'central-india-blend') {
    title = 'Central India Blend Vermicompost | CROPUS Organic Compost';
    description = 'CROPUS Central India Blend is a region-aware vermicompost for mixed farming, dryland agriculture, and soil conditioning.';
  } else if (product.id === 'general-blend') {
    title = 'General Blend Vermicompost | CROPUS Organic Compost';
    description = 'CROPUS General Blend is a balanced starting formulation for guided selection and general soil conditioning.';
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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
  const product = products.find(p => p.slug === unwrappedParams.slug);

  let jsonLd = null;
  if (product) {
    const minPrice = Math.min(...product.packSizes.map(p => p.price));
    const maxPrice = Math.max(...product.packSizes.map(p => p.price));
    
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "brand": {
        "@type": "Brand",
        "name": "CROPUS"
      },
      "category": "Vermicompost / Organic Compost",
      "image": product.image ? `https://cropus.vercel.app${product.image}` : undefined,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": minPrice,
        "highPrice": maxPrice,
        "offerCount": product.packSizes.length,
        "priceRange": `₹${minPrice}-₹${maxPrice}`
      }
    };
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProductDetailClient slug={unwrappedParams.slug} />
    </>
  );
}

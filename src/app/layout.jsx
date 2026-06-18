import React from 'react';
import { CartProvider } from '../context/CartContext';
import CropusNavbar from '../components/cropus/CropusNavbar';
import CropusFooter from '../components/cropus/CropusFooter';
import CartDrawer from '../components/cropus/CartDrawer';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://cropus.vercel.app'),
  title: {
    template: '%s | CROPUS Vermicompost INDIA LLP',
    default: 'CROPUS Vermicompost INDIA LLP | Region-Aware Vermicompost & Organic Compost India'
  },
  description: 'Shop CROPUS region-aware vermicompost and organic compost for Indian soil, crops, gardens, farms, nurseries, and bulk agricultural supply.',
  keywords: [
    'vermicompost', 
    'organic compost', 
    'organic manure', 
    'vermicompost India', 
    'buy vermicompost online', 
    'compost for plants', 
    'compost for farming', 
    'compost for garden', 
    'soil conditioner', 
    'soil health', 
    'bulk vermicompost supply', 
    'region-aware vermicompost', 
    'state-specific vermicompost', 
    'natural compost', 
    'compost manure', 
    'organic soil amendment'
  ],
  creator: 'CROPUS Vermicompost INDIA LLP',
  publisher: 'CROPUS Vermicompost INDIA LLP',
  authors: [{ name: 'CROPUS Agronomy & Soil Science Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://cropus.vercel.app',
    title: 'CROPUS Vermicompost INDIA LLP | Region-Aware Vermicompost & Organic Compost India',
    description: 'Shop CROPUS region-aware vermicompost and organic compost for Indian soil, crops, gardens, farms, nurseries, and bulk agricultural supply.',
    siteName: 'CROPUS Vermicompost',
    images: [
      {
        url: '/og-cropus.jpg',
        width: 1200,
        height: 630,
        alt: 'CROPUS Vermicompost Region-Aware Organic Compost India'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CROPUS Vermicompost INDIA LLP | Region-Aware Vermicompost & Organic Compost India',
    description: 'Shop CROPUS region-aware vermicompost and organic compost for Indian soil, crops, gardens, farms, nurseries, and bulk agricultural supply.',
    images: ['/og-cropus.jpg']
  }
};

export default function RootLayout({ children }) {
  const globalSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CROPUS Vermicompost INDIA LLP",
      "url": "https://cropus.vercel.app",
      "logo": "https://cropus.vercel.app/logo.png",
      "description": "Region-aware vermicompost and organic compost brand in India."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CROPUS Vermicompost INDIA LLP",
      "url": "https://cropus.vercel.app",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://cropus.vercel.app/shop?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F7F3EA] text-[#111111] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#111111]">
        <CartProvider>
          {/* Injecting Structured Organization and Website JSON-LD data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemas) }}
          />
          <CropusNavbar />
          <div className="flex-grow flex flex-col w-full">
            {children}
          </div>
          <CropusFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

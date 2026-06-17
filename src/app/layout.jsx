import React from 'react';
import { CartProvider } from '../context/CartContext';
import CropusNavbar from '../components/cropus/CropusNavbar';
import CropusFooter from '../components/cropus/CropusFooter';
import './globals.css';

export const metadata = {
  title: {
    template: '%s | CROPUS Vermicompost',
    default: 'CROPUS Vermicompost INDIA LLP | Region-Aware Vermicompost for Indian Soil'
  },
  description: 'CROPUS offers region-aware vermicompost solutions for Indian soil, crop, climate, and moisture conditions. Shop small packs or request bulk supply.',
  keywords: ['vermicompost', 'organic compost', 'region-aware compost', 'Indian soil recovery', 'crop recovery', 'cow manure compost', 'Kashmir blend', 'Gujarat blend', 'South India blend'],
  creator: 'CROPUS Vermicompost INDIA LLP',
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
    url: 'https://cropus.in',
    title: 'CROPUS Vermicompost | Region-Aware Soil Recovery Blends',
    description: 'Soil-specific and crop-optimized organic vermicompost solutions for diverse climates across Indian states.',
    siteName: 'CROPUS Vermicompost',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CROPUS Vermicompost | Region-Aware Soil Recovery Blends',
    description: 'Soil-specific and crop-optimized organic vermicompost solutions for diverse climates across Indian states.',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F7F3EA] text-[#111111] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#111111]">
        <CartProvider>
          <CropusNavbar />
          <div className="flex-grow flex flex-col w-full">
            {children}
          </div>
          <CropusFooter />
        </CartProvider>
      </body>
    </html>
  );
}

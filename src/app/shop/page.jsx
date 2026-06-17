import React from 'react';
import ShopClient from './ShopClient';

export const metadata = {
  title: 'Shop Blends | CROPUS Vermicompost',
  description: 'Explore and order CROPUS region-aware vermicompost blends tailored to specific Indian climates, crops, and moisture levels.',
  keywords: ['organic compost', 'vermicompost shop', 'Indian soil recovery', 'Kashmir blend', 'Gujarat blend', 'South India blend'],
  openGraph: {
    title: 'Shop Blends | CROPUS Vermicompost',
    description: 'Explore and order CROPUS region-aware vermicompost blends tailored to specific Indian climates, crops, and moisture levels.',
  }
};

export default function ShopPage() {
  return <ShopClient />;
}

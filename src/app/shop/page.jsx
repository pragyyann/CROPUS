import React from 'react';
import ShopClient from './ShopClient';

export const metadata = {
  title: 'Buy Vermicompost Online | CROPUS Organic Compost Packs',
  description: 'Shop CROPUS vermicompost packs for gardens, farms, nurseries, and regional soil needs. Choose from Kashmir, Gujarat, Punjab/Haryana, South India, Central India, and General blends.',
  keywords: ['organic compost', 'vermicompost shop', 'buy vermicompost online', 'Indian soil recovery', 'Kashmir blend', 'Gujarat blend', 'South India blend'],
  openGraph: {
    title: 'Buy Vermicompost Online | CROPUS Organic Compost Packs',
    description: 'Shop CROPUS vermicompost packs for gardens, farms, nurseries, and regional soil needs. Choose from Kashmir, Gujarat, Punjab/Haryana, South India, Central India, and General blends.',
  }
};

export default function ShopPage() {
  return <ShopClient />;
}

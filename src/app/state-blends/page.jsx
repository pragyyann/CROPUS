import React from 'react';
import StateBlendsClient from './StateBlendsClient';

export const metadata = {
  title: 'State-Specific Vermicompost Blends | CROPUS',
  description: 'Explore region-aware vermicompost blends designed for India’s diverse soils, crops, climates, and moisture conditions.',
  openGraph: {
    title: 'State-Specific Vermicompost Blends | CROPUS',
    description: 'Explore region-aware vermicompost blends designed for India’s diverse soils, crops, climates, and moisture conditions.',
  }
};

export default function StateBlendsPage() {
  return <StateBlendsClient />;
}

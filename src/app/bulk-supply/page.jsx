import React from 'react';
import BulkSupplyClient from './BulkSupplyClient';

export const metadata = {
  title: 'Bulk Supply | CROPUS Vermicompost',
  description: 'Request bulk quotes for CROPUS region-specific vermicompost supply for commercial farming, FPOs, and distributors.',
  openGraph: {
    title: 'Bulk Supply | CROPUS Vermicompost',
    description: 'Request bulk quotes for CROPUS region-specific vermicompost supply for commercial farming, FPOs, and distributors.',
  }
};

export default function BulkSupplyPage() {
  return <BulkSupplyClient />;
}

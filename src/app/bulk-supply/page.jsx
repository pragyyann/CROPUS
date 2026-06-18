import React from 'react';
import BulkSupplyClient from './BulkSupplyClient';

export const metadata = {
  title: 'Bulk Vermicompost Supply India | CROPUS',
  description: 'Request bulk vermicompost supply for farms, nurseries, agri distributors, organic stores, FPOs, and private label buyers.',
  openGraph: {
    title: 'Bulk Vermicompost Supply India | CROPUS',
    description: 'Request bulk vermicompost supply for farms, nurseries, agri distributors, organic stores, FPOs, and private label buyers.',
  }
};

export default function BulkSupplyPage() {
  return <BulkSupplyClient />;
}

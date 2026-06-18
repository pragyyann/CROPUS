import React from 'react';
import CartClient from './CartClient';

export const metadata = {
  title: 'Cart | CROPUS Vermicompost',
  description: 'Review selected CROPUS vermicompost packs before checkout.',
  openGraph: {
    title: 'Cart | CROPUS Vermicompost',
    description: 'Review selected CROPUS vermicompost packs before checkout.',
  }
};

export default function CartPage() {
  return <CartClient />;
}

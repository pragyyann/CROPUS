import React from 'react';
import CartClient from './CartClient';

export const metadata = {
  title: 'Your Cart | CROPUS Vermicompost',
  description: 'Review your selected CROPUS region-specific vermicompost blends and configure quantities before checkout.',
  openGraph: {
    title: 'Your Cart | CROPUS Vermicompost',
    description: 'Review your selected CROPUS region-specific vermicompost blends and configure quantities before checkout.',
  }
};

export default function CartPage() {
  return <CartClient />;
}

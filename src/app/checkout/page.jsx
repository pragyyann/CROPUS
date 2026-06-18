import React from 'react';
import CheckoutClient from './CheckoutClient';

export const metadata = {
  title: 'Checkout | CROPUS Vermicompost',
  description: 'Complete your CROPUS vermicompost order details through guest checkout.',
  openGraph: {
    title: 'Checkout | CROPUS Vermicompost',
    description: 'Complete your CROPUS vermicompost order details through guest checkout.',
  }
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}

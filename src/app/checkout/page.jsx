import React from 'react';
import CheckoutClient from './CheckoutClient';

export const metadata = {
  title: 'Checkout | CROPUS Vermicompost',
  description: 'Provide shipment details to finalize your region-specific vermicompost procurement order.',
  openGraph: {
    title: 'Checkout | CROPUS Vermicompost',
    description: 'Provide shipment details to finalize your region-specific vermicompost procurement order.',
  }
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}

import React from 'react';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact CROPUS | Vermicompost & Bulk Compost Inquiries',
  description: 'Contact CROPUS for vermicompost orders, state blend recommendations, bulk supply, partnerships, and product inquiries.',
  openGraph: {
    title: 'Contact CROPUS | Vermicompost & Bulk Compost Inquiries',
    description: 'Contact CROPUS for vermicompost orders, state blend recommendations, bulk supply, partnerships, and product inquiries.',
  }
};

export default function ContactPage() {
  return <ContactClient />;
}

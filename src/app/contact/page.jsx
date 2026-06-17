import React from 'react';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Us | CROPUS Vermicompost',
  description: 'Submit inquiries regarding CROPUS small packs, regional logistics, custom formulations, or distribution partnerships.',
  openGraph: {
    title: 'Contact Us | CROPUS Vermicompost',
    description: 'Submit inquiries regarding CROPUS small packs, regional logistics, custom formulations, or distribution partnerships.',
  }
};

export default function ContactPage() {
  return <ContactClient />;
}

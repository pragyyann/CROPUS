import React from 'react';
import { CartProvider } from '../context/CartContext';
import CropusNavbar from '../components/cropus/CropusNavbar';
import CropusFooter from '../components/cropus/CropusFooter';
import './globals.css';

export const metadata = {
  title: 'CROPUS Vermicompost INDIA LLP',
  description: 'Region-aware organic vermicompost solutions for Indian soils, climate, moisture, and crop conditions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F7F3EA] text-[#111111] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#111111]">
        <CartProvider>
          <CropusNavbar />
          <div className="flex-grow flex flex-col w-full">
            {children}
          </div>
          <CropusFooter />
        </CartProvider>
      </body>
    </html>
  );
}

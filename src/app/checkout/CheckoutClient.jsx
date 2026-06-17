"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '../../components/cropus/PageHeader';
import CheckoutForm from '../../components/cropus/CheckoutForm';
import OrderSummary from '../../components/cropus/OrderSummary';
import { useCart } from '../../context/CartContext';

export default function CheckoutClient() {
  const { cartItems, cartSubtotal } = useCart();
  const [checkoutData, setCheckoutData] = useState(null);

  const handleSubmit = (data) => {
    setCheckoutData(data);
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-6 pt-36 pb-20 animate-fade-in flex-grow flex flex-col">
      <PageHeader 
        label="SECURE CHECKOUT"
        title="Procurement Checkout"
        subtitle="Complete the shipment details to register your local region supply request."
      />

      {checkoutData ? (
        <div className="p-8 md:p-12 border border-[#C6A15B] bg-[#fcf9f3] rounded-lg text-center flex flex-col items-center gap-6 mt-4 max-w-2xl mx-auto shadow-xl">
          <div className="w-12 h-12 rounded-full bg-[#0F1F16] text-[#C6A15B] flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl select-none">local_shipping</span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-fraunces text-2xl font-bold text-[#111111]">Details Captured Locally</h4>
            <span className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-widest">
              LOCAL DEMO SUCCESS
            </span>
          </div>
          
          <div className="border border-[#c3c8c2] bg-white rounded-lg p-5 w-full text-left flex flex-col gap-3.5 text-xs text-[#6F6A63]">
            <div className="flex justify-between items-baseline border-b border-[#c3c8c2]/30 pb-2">
              <span className="font-bold text-[#111111]">Shipment Destination:</span>
              <span className="font-mono-plex">{checkoutData.fullName} ({checkoutData.phone})</span>
            </div>
            <div>
              <p className="leading-relaxed">
                {checkoutData.houseStreet}, {checkoutData.areaLocality}, {checkoutData.city}, {checkoutData.state} - {checkoutData.pinCode}
              </p>
              {checkoutData.landmark && <p className="mt-1">Landmark: {checkoutData.landmark}</p>}
            </div>
            <div className="border-t border-[#c3c8c2]/30 pt-2 flex justify-between items-baseline">
              <span className="font-bold text-[#111111]">Payment Method Selected:</span>
              <span className="font-mono-plex uppercase font-semibold text-[#C6A15B]">{checkoutData.paymentMethod}</span>
            </div>
          </div>

          <div className="bg-[#111111] text-[#F7F3EA] p-4 rounded-md border border-[#C6A15B]/30 text-xs w-full text-center font-mono-plex leading-relaxed">
            “Checkout details captured locally. Backend order processing and payment integration will be added later.”
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link 
              href="/shop" 
              className="px-6 py-3 border border-[#111111] text-[#111111] font-mono-plex text-[10px] uppercase tracking-wider font-bold hover:bg-[#111111] hover:text-white transition-all rounded-sm text-center"
            >
              Back to Shop
            </Link>
            <button
              onClick={() => setCheckoutData(null)}
              className="px-6 py-3 bg-[#C6A15B] text-[#111111] font-mono-plex text-[10px] uppercase tracking-wider font-bold hover:bg-[#111111] hover:text-[#C6A15B] transition-all rounded-sm cursor-pointer"
            >
              Modify Details
            </button>
          </div>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="text-center py-20 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg flex flex-col items-center gap-4 justify-center flex-grow">
          <span className="material-symbols-outlined text-4xl text-[#7A5F45] select-none">
            receipt_long
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="font-fraunces text-2xl font-semibold text-[#111111]">No Items to Checkout</h3>
            <p className="text-sm text-[#6F6A63]">Please add products to your cart before checking out.</p>
          </div>
          <Link 
            href="/shop" 
            className="mt-4 px-6 py-3.5 bg-[#C6A15B] hover:bg-[#111111] hover:text-[#C6A15B] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold transition-all rounded-sm text-center"
          >
            Go to Shop Catalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Checkout Form */}
          <div className="col-span-12 lg:col-span-8">
            <CheckoutForm onSubmit={handleSubmit} />
          </div>

          {/* Order Summary Panel */}
          <div className="col-span-12 lg:col-span-4">
            <OrderSummary cart={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
}

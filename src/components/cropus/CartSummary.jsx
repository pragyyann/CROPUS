"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import CTAButton from './CTAButton';

export default function CartSummary({ cartTotal, cartCount }) {
  const router = useRouter();

  return (
    <div className="p-6 border border-[#c3c8c2] bg-[#fcf9f3]/60 rounded-lg flex flex-col gap-6">
      <div className="flex flex-col gap-1 border-b border-[#c3c8c2]/30 pb-4">
        <h3 className="font-fraunces text-xl font-bold text-[#111111]">Cart Summary</h3>
        <span className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-widest">
          Pricing Details
        </span>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between items-baseline text-[#6F6A63]">
          <span>Total Items</span>
          <span className="font-semibold text-[#111111]">{cartCount}</span>
        </div>
        <div className="flex justify-between items-baseline text-[#6F6A63]">
          <span>Shipping</span>
          <span className="font-semibold text-[#111111] text-xs">Calculated at checkout</span>
        </div>
        
        <div className="flex justify-between items-baseline border-t border-[#c3c8c2]/30 pt-4 mt-2">
          <span className="font-mono-plex text-xs uppercase tracking-wider text-[#111111] font-bold">Estimated Subtotal</span>
          <span className="font-fraunces text-2xl font-bold text-[#111111]">
            ₹{cartTotal.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <CTAButton
          onClick={() => router.push('/checkout')}
          variant="primary"
          className="w-full py-4 text-center"
        >
          Proceed to Checkout
        </CTAButton>
        <CTAButton
          onClick={() => router.push('/shop')}
          variant="secondary"
          className="w-full py-3 text-center"
        >
          Continue Shopping
        </CTAButton>
      </div>
    </div>
  );
}

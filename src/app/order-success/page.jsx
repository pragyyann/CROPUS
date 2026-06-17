import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Order Status | CROPUS Vermicompost',
  description: 'Track the status of your region-aware vermicompost supply and logistics coordinates.',
  robots: {
    index: false,
    follow: false
  }
};

export default function OrderSuccessPage() {
  return (
    <div className="w-full max-w-[1180px] mx-auto px-6 pt-36 pb-20 flex-grow flex items-center justify-center">
      <div className="p-8 md:p-12 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg text-center flex flex-col items-center gap-6 max-w-xl shadow-sm">
        <div className="w-12 h-12 rounded-full bg-[#EFE8DC] text-[#C6A15B] flex items-center justify-center border border-[#C6A15B]/30">
          <span className="material-symbols-outlined text-2xl select-none">science</span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-fraunces text-2xl md:text-3xl font-bold text-[#111111]">Order Success Preview</h1>
          <span className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-widest">
            STUB SUCCESS PANEL
          </span>
        </div>
        
        <p className="text-[#6F6A63] text-sm leading-relaxed">
          This page will be activated after backend order creation and payment confirmation are integrated.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link 
            href="/shop" 
            className="px-6 py-3 bg-[#C6A15B] text-[#111111] font-mono-plex text-[10px] uppercase tracking-wider font-bold hover:bg-[#111111] hover:text-[#C6A15B] transition-all rounded-sm text-center"
          >
            Back to Shop
          </Link>
          <Link 
            href="/cart" 
            className="px-6 py-3 border border-[#111111] text-[#111111] font-mono-plex text-[10px] uppercase tracking-wider font-bold hover:bg-[#111111] hover:text-white transition-all rounded-sm text-center"
          >
            Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

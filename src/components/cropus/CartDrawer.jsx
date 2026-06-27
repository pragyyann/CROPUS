"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import WireframeImage from './WireframeImage';
import QuantityStepper from './QuantityStepper';
import DeleteIcon from './icons/DeleteIcon';

export default function CartDrawer() {
  const { 
    cartItems, 
    cartSubtotal, 
    isCartDrawerOpen, 
    closeCartDrawer, 
    updateQuantity, 
    removeFromCart 
  } = useCart();

  const drawerRef = useRef(null);

  // Close on Escape key press and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartDrawerOpen) {
        closeCartDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    if (isCartDrawerOpen) {
      document.body.style.overflow = 'hidden';
      // Focus drawer for keyboard trap accessibility
      if (drawerRef.current) {
        drawerRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isCartDrawerOpen, closeCartDrawer]);

  if (!isCartDrawerOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCartDrawer();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-[1.5px] transition-opacity duration-300 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div 
        ref={drawerRef}
        tabIndex={-1}
        className="relative w-full sm:max-w-md md:max-w-lg bg-[#FAF6EE] border-l border-[#e2decb]/60 shadow-xl flex flex-col h-full text-[#111111] focus:outline-none focus:ring-0 animate-slide-up sm:animate-none sm:translate-x-0 transition-transform duration-300"
      >
        {/* Header - Premium Charcoal */}
        <div className="bg-[#111111] text-[#F7F3EA] p-6 flex justify-between items-center border-b border-[#C6A15B]/20">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono-plex text-[8px] uppercase tracking-wider text-[#C6A15B] font-semibold">
              CROPUS SUPPLY SYSTEM
            </span>
            <h2 id="drawer-title" className="font-fraunces text-xl md:text-2xl font-bold">
              Shopping Cart
            </h2>
          </div>
          <button
            onClick={closeCartDrawer}
            className="p-2 text-[#F7F3EA]/70 hover:text-[#C6A15B] transition-colors rounded-full hover:bg-white/10 focus:outline-none cursor-pointer"
            aria-label="Close cart drawer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center gap-4 py-20">
              <svg className="w-8 h-8 text-[#7A5F45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1,0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0,1-1.12-1.243l1.264-12A1.125 1.125 0 0,1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Zm7.5 0a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Z" />
              </svg>
              <div>
                <h3 className="font-fraunces text-lg font-bold text-[#111111]">Your Cart is Empty</h3>
                <p className="text-xs text-[#6F6A63] mt-1">Select from our premium regional soil blends.</p>
              </div>
              <Link
                href="/shop"
                onClick={closeCartDrawer}
                className="mt-2 px-6 py-2.5 bg-[#C6A15B] text-[#111111] font-mono-plex text-[10px] uppercase tracking-widest font-bold hover:bg-[#111111] hover:text-[#C6A15B] transition-all duration-300 rounded-sm cursor-pointer"
              >
                Shop Small Packs
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id}
                className="p-4 border border-[#e2decb]/60 bg-white rounded-md flex gap-4 relative"
              >
                {/* Product Image preview */}
                <div className="w-20 h-20 relative shrink-0 bg-[#FAF6EE] border border-[#e2decb]/40 rounded-sm flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={item.image}
                        alt={`CROPUS ${item.name} packaging`}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <WireframeImage className="w-full h-full border-0" label={item.packSize || '5kg'} />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-col">
                      <h4 className="font-fraunces text-sm font-bold text-[#111111] leading-tight">
                        {item.blendName || item.name}
                      </h4>
                      <span className="font-mono-plex text-[8px] text-[#7A5F45] uppercase tracking-wider font-semibold mt-1">
                        {item.packSize.endsWith('Pack') ? item.packSize : `${item.packSize} Pack`} • {item.region} Blend
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-800/60 hover:text-red-800 p-1 shrink-0 cursor-pointer"
                      aria-label="Remove item"
                    >
                      <DeleteIcon className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Quantity Stepper & Price Row */}
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-[#e2decb]/20">
                    <QuantityStepper 
                      quantity={item.quantity} 
                      onChange={(newQty) => updateQuantity(item.id, newQty)}
                      className="h-8 scale-90 origin-left"
                    />
                    <div className="flex flex-col items-end">
                      <span className="font-fraunces text-sm font-bold text-[#111111]">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-[9px] text-[#6F6A63] font-mono-plex">
                          (₹{item.price.toLocaleString('en-IN')} each)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & CTAs */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-[#e2decb]/60 flex flex-col gap-4">
            <div className="flex justify-between items-baseline">
              <span className="font-mono-plex text-xs uppercase tracking-wider text-[#7A5F45] font-semibold">
                Estimated Subtotal
              </span>
              <span className="font-fraunces text-2xl font-bold text-[#111111]">
                ₹{cartSubtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <p className="text-[10px] text-[#6F6A63] leading-relaxed">
              Shipping fees, delivery options, and taxes are calculated at checkout.
            </p>

            <div className="flex flex-col gap-2.5 mt-2">
              <Link 
                href="/checkout"
                onClick={closeCartDrawer}
                className="w-full py-3.5 bg-[#C6A15B] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold border border-[#C6A15B] hover:bg-[#111111] hover:text-[#C6A15B] transition-all duration-300 rounded-sm cursor-pointer text-center flex items-center justify-center"
              >
                Proceed to Checkout
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <Link 
                  href="/cart"
                  onClick={closeCartDrawer}
                  className="py-3 border border-[#111111] text-[#111111] font-mono-plex text-[10px] uppercase tracking-widest font-bold hover:bg-[#111111] hover:text-white transition-all duration-300 rounded-sm cursor-pointer text-center flex items-center justify-center"
                >
                  View Full Cart
                </Link>
                <button
                  onClick={closeCartDrawer}
                  className="py-3 border border-[#c3c8c2] text-[#6F6A63] hover:text-[#111111] hover:border-[#111111] font-mono-plex text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-sm cursor-pointer text-center"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import PageHeader from '../../components/cropus/PageHeader';
import CartItem from '../../components/cropus/CartItem';
import CartSummary from '../../components/cropus/CartSummary';
import { useCart } from '../../context/CartContext';
import ShoppingBagIcon from '../../components/cropus/icons/ShoppingBagIcon';

export default function CartClient() {
  const { cartItems, updateQuantity, removeFromCart, cartSubtotal, cartCount } = useCart();

  const handleUpdateQuantity = (itemId, newQty) => {
    updateQuantity(itemId, newQty);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-6 pt-36 pb-20 animate-fade-in flex-grow flex flex-col">
      <PageHeader 
        label="SHOPPING CART"
        title="Your Procurement Cart"
        subtitle="Review your state blends, bag configurations, and estimated order values before proceeding to secure checkout."
      />

      {cartItems.length === 0 ? (
        <div className="text-center py-20 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg flex flex-col items-center gap-4 justify-center flex-grow">
          <ShoppingBagIcon className="h-10 w-10 text-[#7A5F45]" />
          <div className="flex flex-col gap-1">
            <h3 className="font-fraunces text-2xl font-semibold text-[#111111]">Your Cart is Empty</h3>
            <p className="text-sm text-[#6F6A63]">You haven't selected any region blends yet.</p>
          </div>
          <Link 
            href="/shop" 
            className="mt-4 px-6 py-3.5 bg-[#C6A15B] hover:bg-[#111111] hover:text-[#C6A15B] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold transition-all rounded-sm text-center"
          >
            Explore State Blends
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Cart Items List */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                onUpdateQuantity={(newQty) => handleUpdateQuantity(item.id, newQty)}
                onRemove={() => handleRemoveItem(item.id)}
              />
            ))}
          </div>

          {/* Cart Summary Panel */}
          <div className="col-span-12 lg:col-span-4">
            <CartSummary cartTotal={cartSubtotal} cartCount={cartCount} />
          </div>
        </div>
      )}
    </div>
  );
}

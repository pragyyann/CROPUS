"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WireframeImage from './WireframeImage';
import CTAButton from './CTAButton';
import PackSelector from './PackSelector';
import QuantityStepper from './QuantityStepper';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, preSelectedSize }) {
  // Default to 5kg pack size (index 1) if available, else first one
  const defaultPack = product.packSizes[1] || product.packSizes[0];
  const [selectedPack, setSelectedPack] = useState(defaultPack);
  const { cartItems, addToCart, updateQuantity, removeFromCart, openCartDrawer } = useCart();

  useEffect(() => {
    if (preSelectedSize && preSelectedSize !== 'All') {
      const targetPack = product.packSizes.find(p => p.label === preSelectedSize);
      if (targetPack) {
        setSelectedPack(targetPack);
      }
    }
  }, [preSelectedSize, product.packSizes]);

  const itemId = `${product.id}-${selectedPack.label}`;
  const existingCartItem = cartItems.find(item => item.id === itemId);
  const currentQuantity = existingCartItem ? existingCartItem.quantity : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const item = {
      id: itemId,
      blendId: product.id,
      blendName: product.name,
      name: product.name,
      slug: product.slug,
      packSize: selectedPack.label,
      price: selectedPack.price,
      quantity: 1,
      region: product.region,
      description: product.description,
      image: product.image
    };
    
    addToCart(item);
    openCartDrawer();
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(itemId, currentQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (currentQuantity > 1) {
      updateQuantity(itemId, currentQuantity - 1);
    } else {
      removeFromCart(itemId);
    }
  };

  const handlePackChange = (formattedPack) => {
    const pack = product.packSizes.find(p => p.label === formattedPack.id);
    if (pack) setSelectedPack(pack);
  };

  // Map pack sizes for selector
  const formattedPacks = product.packSizes.map(pack => ({
    id: pack.label,
    size: `${pack.label} Sack`,
    price: pack.price
  }));

  return (
    <div className="h-full border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg overflow-visible flex flex-col group hover:border-[#C6A15B] transition-colors duration-300 relative">
      {/* Product Image or Visual Placeholder */}
      {product.image ? (
        <Link 
          href={`/product/${product.slug}`} 
          className="block relative aspect-square w-full cursor-pointer bg-[#FAF6EE] border-b border-[#e2decb]/60 rounded-t-lg p-6 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.image}
              alt={`CROPUS ${product.name} region-aware vermicompost packaging`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority={product.id === 'kashmir-blend'}
            />
          </div>
        </Link>
      ) : (
        <Link href={`/product/${product.slug}`} className="block relative aspect-square w-full cursor-pointer">
          <WireframeImage className="w-full h-full border-0 rounded-t-lg" label={selectedPack.label} />
        </Link>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-1.5">
          <Link href={`/product/${product.slug}`} className="font-fraunces text-lg font-bold text-[#111111] hover:text-[#C6A15B] transition-colors leading-snug cursor-pointer">
            {product.name}
          </Link>
          <p className="text-[#6F6A63] text-xs leading-relaxed min-h-[48px] md:min-h-[56px]">
            {product.description}
          </p>
        </div>

        {/* Custom Pack Size Selector */}
        <PackSelector
          selectedPackId={selectedPack.label}
          packs={formattedPacks}
          onChange={handlePackChange}
          className="mt-1"
        />

        {/* Price & Actions Row */}
        <div className="flex justify-between items-baseline mt-auto pt-2 border-t border-[#c3c8c2]/30">
          <span className="text-xs text-[#6F6A63] font-mono-plex uppercase tracking-wider">Price</span>
          <span className="font-fraunces text-xl font-bold text-[#111111]">
            ₹{selectedPack.price.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 mt-1">
          <Link 
            href={`/product/${product.slug}`}
            className="py-2.5 border border-[#111111] text-[#111111] font-mono-plex text-[10px] uppercase tracking-wider font-bold text-center hover:bg-[#111111] hover:text-white transition-colors rounded-sm cursor-pointer"
          >
            View Blend
          </Link>
          
          {currentQuantity > 0 ? (
            <QuantityStepper 
              quantity={currentQuantity}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
              variant="premium-stepper"
              className="w-full"
            />
          ) : (
            <CTAButton 
              variant="primary" 
              onClick={handleAddToCart}
              className="py-2.5 text-[10px] w-full"
            >
              Add to Cart
            </CTAButton>
          )}
        </div>
      </div>
    </div>
  );
}

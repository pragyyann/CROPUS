"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import WireframeImage from '../../../components/cropus/WireframeImage';
import PackSelector from '../../../components/cropus/PackSelector';
import QuantityStepper from '../../../components/cropus/QuantityStepper';
import CTAButton from '../../../components/cropus/CTAButton';
import ProductDetailsAccordion from '../../../components/cropus/ProductDetailsAccordion';
import ProductGrid from '../../../components/cropus/ProductGrid';
import SectionShell from '../../../components/cropus/SectionShell';
import { products } from '../../../data/cropusData';
import { useCart } from '../../../context/CartContext';

export default function ProductDetailClient({ slug }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Find target blend
  const product = products.find(p => p.slug === slug);

  // Default selected pack to 5kg (index 1)
  const defaultPack = product?.packSizes[1] || product?.packSizes[0];
  const [selectedPack, setSelectedPack] = useState(defaultPack);

  if (!product) {
    return (
      <main className="flex-grow max-w-[1180px] mx-auto px-6 pt-36 pb-20 text-center flex flex-col items-center justify-center gap-4">
        <h1 className="font-fraunces text-3xl font-bold">Blend Not Found</h1>
        <p className="text-[#6F6A63]">The regional formulation you requested does not exist or has been moved.</p>
        <Link href="/shop" className="underline font-mono-plex text-xs uppercase tracking-widest text-[#C6A15B] cursor-pointer">
          Back to Catalog
        </Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    const item = {
      id: `${product.id}-${selectedPack.label}`,
      blendId: product.id,
      blendName: product.name,
      name: product.name,
      slug: product.slug,
      packSize: selectedPack.label,
      price: selectedPack.price,
      quantity: quantity,
      region: product.region,
      description: product.description
    };
    addToCart(item);
    router.push('/cart');
  };

  const handleBuyNow = () => {
    const item = {
      id: `${product.id}-${selectedPack.label}`,
      blendId: product.id,
      blendName: product.name,
      name: product.name,
      slug: product.slug,
      packSize: selectedPack.label,
      price: selectedPack.price,
      quantity: quantity,
      region: product.region,
      description: product.description
    };
    addToCart(item);
    router.push('/checkout');
  };

  const handlePackChange = (pack) => {
    setSelectedPack(pack);
  };

  // Get related blends (exclude current)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  // Map pack sizes to match the PackSelector structure
  const formattedPacks = product.packSizes.map(pack => ({
    id: pack.label,
    size: `${pack.label} Sack`,
    price: pack.price
  }));

  const selectedFormattedPack = {
    id: selectedPack?.label || defaultPack.label,
    size: `${selectedPack?.label || defaultPack.label} Sack`,
    price: selectedPack?.price || defaultPack.price
  };

  return (
    <main className="flex-grow w-full max-w-[1180px] mx-auto px-6 pt-36 pb-20 animate-fade-in">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[10px] font-mono-plex uppercase tracking-widest text-[#6F6A63] mb-6">
        <Link href="/" className="hover:text-[#111111] cursor-pointer">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[#111111] cursor-pointer">Shop</Link>
        <span>/</span>
        <span className="text-[#111111]">{product.name}</span>
      </div>

      {/* Product Details Columns */}
      <div className="grid grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#c3c8c2]/30">
        {/* Left: Images Column */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
          <WireframeImage 
            className="aspect-square w-full rounded-lg" 
            label={`${product.name} — ${selectedFormattedPack.id}`} 
          />
          
          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            <WireframeImage className="aspect-square rounded-md border-dashed cursor-pointer" label="Bag Spec" />
            <WireframeImage className="aspect-square rounded-md border-dashed cursor-pointer" label="Compost Texture" />
            <WireframeImage className="aspect-square rounded-md border-dashed cursor-pointer" label="Lab Report" />
          </div>
        </div>

        {/* Right: Parameters Column */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2 border-b border-[#c3c8c2]/30 pb-4">
            <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-wider">
              // REGIONAL BLEND SPECIFICATION
            </span>
            <h1 className="font-fraunces text-3xl md:text-4xl font-bold text-[#111111] leading-tight">
              {product.name}
            </h1>
            <span className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-widest mt-1">
              Recommended For: {product.recommendedFor}
            </span>
            <p className="text-[#6F6A63] text-sm leading-relaxed mt-3">
              {product.description} CROPUS prepares state-specific biological inputs to support soil microbial activity, moisture retention, and strong crop roots.
            </p>
          </div>

          {/* Pack Size Selector */}
          <PackSelector 
            selectedPackId={selectedFormattedPack.id} 
            packs={formattedPacks} 
            onChange={(formattedPack) => {
              const target = product.packSizes.find(p => p.label === formattedPack.id);
              if (target) handlePackChange(target);
            }} 
          />

          {/* Quantity Selector */}
          <div className="flex flex-col gap-2 border-t border-b border-[#c3c8c2]/30 py-4">
            <span className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-wider font-semibold">
              Select Quantity
            </span>
            <div className="flex items-center gap-6">
              <QuantityStepper quantity={quantity} onChange={setQuantity} />
              <span className="text-xs font-mono-plex text-[#6F6A63]">
                Subtotal: <span className="text-sm font-semibold text-[#111111]">₹{((selectedPack?.price || defaultPack.price) * quantity).toLocaleString('en-IN')}</span>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <CTAButton variant="secondary" onClick={handleAddToCart} className="cursor-pointer">
              Add to Cart
            </CTAButton>
            <CTAButton variant="primary" onClick={handleBuyNow} className="cursor-pointer">
              Buy Now
            </CTAButton>
          </div>

          {/* Logistics Note */}
          <div className="text-xs text-[#6F6A63] flex items-center gap-2 bg-[#EFE8DC]/30 p-3 rounded border border-[#c3c8c2]/20">
            <span className="material-symbols-outlined text-[#4F6F52] text-sm select-none">local_shipping</span>
            <span>Delivery across India. Estimated delivery 3–7 business days.</span>
          </div>
        </div>
      </div>

      {/* Accordion Details Section */}
      <ProductDetailsAccordion />

      {/* Related Products Section */}
      <SectionShell
        id="related-products"
        number="02"
        label="Catalog Recommendations"
        title="Related Soil Recovery Blends"
        subtitle="Explore CROPUS formulations optimized for other soil structures, moisture conditions, and crop profiles."
        borderTop={true}
        className="mt-16"
      >
        <div className="mt-8">
          <ProductGrid products={relatedProducts} />
        </div>
      </SectionShell>
    </main>
  );
}

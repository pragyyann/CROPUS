"use client";

import React, { useState } from 'react';
import PageHeader from '../../components/cropus/PageHeader';
import ProductCard from '../../components/cropus/ProductCard';
import { products, regionOptions } from '../../data/cropusData';

export default function ShopClient() {
  const [selectedRegionFilter, setSelectedRegionFilter] = useState('All');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('All');

  // Filter products by region
  const filteredProducts = products.filter(product => {
    const matchesRegion = selectedRegionFilter === 'All' || product.region === selectedRegionFilter;
    return matchesRegion;
  });

  const sizes = ['All', '1kg', '5kg', '10kg', '25kg'];
  const regions = ['All', ...regionOptions];

  return (
    <div className="w-full max-w-[1180px] mx-auto px-6 pt-36 pb-20 animate-fade-in">
      <PageHeader 
        label="E-COMMERCE CATALOG"
        title="Shop Region-Aware Vermicompost"
        subtitle="CROPUS vermicompost is prepared specifically for regional Indian soils. Choose a state blend below and configure your desired sack volume."
      />

      {/* E-Commerce Filters Bar */}
      <div className="flex flex-col gap-6 border-b border-[#c3c8c2]/30 pb-6 mb-8">
        {/* Region Filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider font-semibold mr-2 w-24">
            Region Blend:
          </span>
          <div className="flex flex-wrap gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegionFilter(reg)}
                className={`px-3 py-1.5 text-[10px] font-mono-plex font-bold tracking-wider uppercase border rounded-xs cursor-pointer transition-all ${
                  selectedRegionFilter === reg
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'border-[#c3c8c2] text-[#6F6A63] hover:border-[#111111] hover:text-[#111111] bg-white/40'
                }`}
              >
                {reg === 'All' ? 'All Blends' : `${reg} Blend`}
              </button>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider font-semibold mr-2 w-24">
            Weight Preset:
          </span>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSizeFilter(size)}
                className={`px-3 py-1.5 text-[10px] font-mono-plex font-bold tracking-wider uppercase border rounded-xs cursor-pointer transition-all ${
                  selectedSizeFilter === size
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'border-[#c3c8c2] text-[#6F6A63] hover:border-[#111111] hover:text-[#111111] bg-white/40'
                }`}
              >
                {size === 'All' ? 'Default (5kg)' : `${size} Sack`}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-[#6F6A63] font-mono-plex border-t border-[#c3c8c2]/20 pt-4 flex justify-between">
          <span>Formulated for regional soil recovery</span>
          <span>Showing {filteredProducts.length} of {products.length} Blends</span>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            preSelectedSize={selectedSizeFilter} 
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import SectionShell from './SectionShell';

export default function BuyingPathSection() {
  const router = useRouter();

  return (
    <SectionShell
      id="buying-path"
      number="03"
      label="Procurement Routes"
      title="Choose Your Supply Path"
      subtitle="Whether you need precision packs for residential use or customized formulations in bulk metric tonnage, CROPUS provides a streamlined, region-aware route."
    >
      <div className="grid grid-cols-12 gap-0 border border-[#c3c8c2] rounded-lg overflow-hidden mt-8">
        {/* Panel 1: Retail packs */}
        <div 
          onClick={() => router.push('/shop')}
          className="col-span-12 md:col-span-6 p-8 md:p-12 flex flex-col justify-between gap-8 group hover:bg-white transition-all duration-300 cursor-pointer bg-[#fcf9f3]/20 border-b md:border-b-0 md:border-r border-[#c3c8c2]"
        >
          <div className="flex flex-col gap-4">
            <span className="font-mono-plex text-[10px] uppercase tracking-widest text-[#6F6A63]">
              // RETAIL PACKS
            </span>
            <h3 className="font-fraunces text-3xl font-bold text-[#111111] group-hover:text-[#C6A15B] transition-colors">
              Shop Region Packs
            </h3>
            <p className="text-[#6F6A63] text-sm leading-relaxed">
              For home gardens, potted plants, trial buyers, nurseries, and small farms. Select your state or region before choosing pack size.
            </p>
            
            <div className="mt-4 flex flex-col gap-2">
              <span className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-wider">
                Available Sizes
              </span>
              <div className="flex flex-wrap gap-2">
                {['1kg', '5kg', '10kg', '25kg'].map(size => (
                  <span key={size} className="px-2.5 py-1 bg-[#F7F3EA] border border-[#c3c8c2] text-xs font-mono-plex text-[#111111]">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 border-t border-[#c3c8c2]/30 pt-6">
            <span className="font-mono-plex text-xs uppercase tracking-widest font-bold text-[#111111] group-hover:underline">
              Shop Small Packs
            </span>
            <span className="material-symbols-outlined text-xl text-[#111111] group-hover:translate-x-2 transition-transform duration-300">
              arrow_right_alt
            </span>
          </div>
        </div>

        {/* Panel 2: Bulk supply */}
        <div 
          onClick={() => router.push('/bulk-supply')}
          className="col-span-12 md:col-span-6 p-8 md:p-12 flex flex-col justify-between gap-8 group hover:bg-[#1e2e25] transition-all duration-300 cursor-pointer bg-[#0F1F16] text-[#F7F3EA]"
        >
          <div className="flex flex-col gap-4">
            <span className="font-mono-plex text-[10px] uppercase tracking-widest text-[#C6A15B]">
              // INDUSTRIAL SUPPLY
            </span>
            <h3 className="font-fraunces text-3xl font-bold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors">
              Regional Bulk Supply
            </h3>
            <p className="text-[#B8AAA3] text-sm leading-relaxed">
              For farms, distributors, FPOs, agri-retailers, nurseries, and institutional buyers. Tailored quotes based on state, crop type, and soil concerns.
            </p>
            
            <div className="mt-4 flex flex-col gap-2">
              <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-wider">
                Bulk Volumes
              </span>
              <div className="flex flex-wrap gap-2">
                {['100kg', '500kg', '1T+'].map(size => (
                  <span key={size} className="px-2.5 py-1 bg-[#111111] border border-[#C6A15B]/30 text-xs font-mono-plex text-[#F7F3EA]">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 border-t border-[#C6A15B]/20 pt-6">
            <span className="font-mono-plex text-xs uppercase tracking-widest font-bold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors">
              Request Regional Bulk Quote
            </span>
            <span className="material-symbols-outlined text-xl text-[#C6A15B] group-hover:translate-x-2 transition-transform duration-300">
              arrow_right_alt
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

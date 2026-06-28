"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '../../components/cropus/PageHeader';
import BlendDetailModal from '../../components/cropus/BlendDetailModal';
import { regionalBlendsDetailed } from '../../data/cropusData';

export default function StateBlendsClient() {
  const [selectedBlend, setSelectedBlend] = useState(null);

  return (
    <main className="w-full max-w-[1180px] mx-auto px-6 pt-36 pb-20 flex-grow">
      <PageHeader 
        label="Agricultural Science"
        title="Vermicompost Built for Indian Soil Diversity"
        subtitle="Kashmir’s soil needs are not Gujarat’s soil needs. South India’s humid plantations require altogether different organic release profiles than Punjab's crop recovery rotation belts."
      />

      {/* Detailed Region Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {regionalBlendsDetailed.map((blend, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedBlend(blend)}
            className="p-6 border border-[#D9D6D0] bg-[#FAF6EE] rounded-lg flex flex-col justify-between h-full group hover:border-[#C6A15B] hover:shadow-md transition-all duration-300 cursor-pointer relative"
          >
            <div className="flex flex-col">
              {/* Region Code Row */}
              <div className="flex justify-between items-center pb-3">
                <span className="font-mono-plex text-[10px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase">
                  {blend.code}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
              </div>
              <div className="border-b border-[#D9D6D0] mb-4"></div>
              
              {/* Blend Name & Short Description */}
              <h3 className="font-fraunces text-2xl font-bold text-[#111111] group-hover:text-[#C6A15B] transition-colors leading-tight">
                {blend.name}
              </h3>
              <p className="text-neutral-700 text-xs md:text-sm leading-relaxed italic pr-2 font-medium mt-2">
                {blend.shortDescription}
              </p>

              {/* Climate & Soil Section */}
              <span className="font-mono-plex text-[10px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase block mt-5 mb-2.5">
                Climate & Soil
              </span>
              <div className="flex flex-wrap gap-2">
                {blend.climateTags?.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="px-2.5 py-1 bg-[#EFE8DC] border border-[#D9D6D0] text-[10px] md:text-xs font-mono-plex font-bold text-[#7A5F45] rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Crop Targets Section */}
              <span className="font-mono-plex text-[10px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase block mt-5 mb-1.5">
                Crop Targets
              </span>
              <p className="text-neutral-700 text-xs md:text-sm font-medium leading-relaxed">
                {blend.cropTags?.join(' · ')}
              </p>
            </div>

            {/* View Details Hint */}
            <div className="flex items-center gap-1.5 mt-6 text-[#7A5F45] font-mono-plex text-[10px] uppercase tracking-[0.16em] font-bold group-hover:text-[#C6A15B] transition-colors self-end mt-auto">
              <span>View Details</span>
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Global actions block */}
      <div className="p-8 md:p-12 border border-[#c3c8c2] bg-white/40 rounded-lg mt-12 text-center flex flex-col items-center gap-6">
        <h3 className="font-fraunces text-2xl md:text-3xl font-bold text-[#111111]">
          Ready to Select Your Blend?
        </h3>
        <p className="text-[#6F6A63] text-sm leading-relaxed max-w-md">
          Order small packs for gardens or request a regional bulk supply quote for larger agricultural and nursery operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link href="/shop" className="px-8 py-3.5 bg-[#C6A15B] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold border border-[#C6A15B] hover:bg-[#111111] hover:text-[#C6A15B] transition-all duration-300 rounded-sm cursor-pointer text-center">
            Shop Region Packs
          </Link>
          <Link href="/bulk-supply" className="px-8 py-3.5 border border-[#111111] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold hover:bg-[#111111] hover:text-white transition-all duration-300 rounded-sm cursor-pointer text-center">
            Request Bulk Quote
          </Link>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedBlend && (
        <BlendDetailModal 
          blend={selectedBlend} 
          onClose={() => setSelectedBlend(null)} 
        />
      )}
    </main>
  );
}

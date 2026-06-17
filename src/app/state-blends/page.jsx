import React from 'react';
import Link from 'next/link';
import PageHeader from '../../components/cropus/PageHeader';
import { regionalBlendsDetailed } from '../../data/cropusData';

export const metadata = {
  title: 'State Blends | CROPUS Vermicompost',
  description: 'Understand the distinct organic compositions engineered for different regional climates and soils across India.',
  openGraph: {
    title: 'State Blends | CROPUS Vermicompost',
    description: 'Understand the distinct organic compositions engineered for different regional climates and soils across India.',
  }
};

export default function StateBlendsPage() {
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
            className="p-6 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg flex flex-col justify-between min-h-[300px] group hover:border-[#C6A15B] transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-[#c3c8c2]/30 pb-3">
                <span className="font-mono-plex text-[9px] uppercase tracking-wider text-[#6F6A63] font-semibold">
                  {blend.code}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
              </div>
              
              <h3 className="font-fraunces text-2xl font-bold text-[#111111] group-hover:text-[#C6A15B] transition-colors">
                {blend.name}
              </h3>
              
              <div className="flex flex-col gap-1">
                <span className="font-mono-plex text-[8px] text-[#7A5F45] uppercase tracking-widest font-semibold">
                  Target Climate & Soil
                </span>
                <span className="text-xs font-semibold text-[#111111]">{blend.climate}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono-plex text-[8px] text-[#7A5F45] uppercase tracking-widest font-semibold">
                  Common Crop Targets
                </span>
                <p className="text-[#6F6A63] text-xs leading-relaxed">{blend.crops}</p>
              </div>

              <div className="flex flex-col gap-1 border-t border-[#c3c8c2]/20 pt-3">
                <span className="font-mono-plex text-[8px] text-[#7A5F45] uppercase tracking-widest font-semibold">
                  Formulation Support
                </span>
                <p className="text-[#6F6A63] text-xs leading-relaxed italic">{blend.supports}</p>
              </div>
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
    </main>
  );
}

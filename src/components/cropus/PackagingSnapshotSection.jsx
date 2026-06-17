import React from 'react';
import SectionShell from './SectionShell';

export default function PackagingSnapshotSection() {
  const packagingRows = [
    {
      category: 'Small Packs',
      sizes: '1kg / 5kg',
      target: 'Home gardens, trial buyers, and indoor plants.'
    },
    {
      category: 'Retail Packs',
      sizes: '10kg / 25kg',
      target: 'Medium gardens, boutique nurseries, and small organic farms.'
    },
    {
      category: 'Bulk Supply',
      sizes: '100kg / 500kg / 1T+',
      target: 'Commercial farms, FPOs, distributors, and bulk landscaping.'
    },
    {
      category: 'State-Specific Supply',
      sizes: 'Custom Tailored Volume',
      target: 'Formulated and packed based on region and specific crop requirements.'
    }
  ];

  return (
    <SectionShell
      id="packaging"
      number="05"
      label="Packaging Specifications"
      title="Packaging for Gardens, Farms, and Bulk Supply"
    >
      <div className="mt-8 flex flex-col gap-6">
        <div className="border border-[#c3c8c2] rounded-lg overflow-hidden bg-white/20">
          <div className="divide-y divide-[#c3c8c2]/50">
            {packagingRows.map((row, index) => (
              <div 
                key={index} 
                className="grid grid-cols-12 gap-4 p-6 hover:bg-[#fcf9f3]/60 transition-colors duration-200 items-center"
              >
                <div className="col-span-12 md:col-span-3">
                  <span className="font-mono-plex text-xs uppercase tracking-wider text-[#7A5F45] font-semibold">
                    {row.category}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <span className="font-mono-plex text-sm text-[#111111] bg-[#EFE8DC] px-2.5 py-1 rounded-xs border border-[#c3c8c2]/30">
                    {row.sizes}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="text-[#6F6A63] text-sm leading-relaxed">
                    {row.target}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footnote */}
        <div className="flex items-center gap-3 p-4 bg-[#EFE8DC]/40 border border-[#c3c8c2]/50 rounded-lg">
          <span className="material-symbols-outlined text-[#C6A15B] text-lg select-none">
            info
          </span>
          <span className="text-[#6F6A63] text-xs leading-relaxed">
            Custom packaging and private-label support available for selected partners.
          </span>
        </div>
      </div>
    </SectionShell>
  );
}

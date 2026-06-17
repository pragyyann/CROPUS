"use client";

import React from 'react';
import BulkQuoteForm from '../../components/cropus/BulkQuoteForm';
import WireframeImage from '../../components/cropus/WireframeImage';
import CTAButton from '../../components/cropus/CTAButton';
import { buyerCategories, bulkVolumes } from '../../data/cropusData';

export default function BulkSupplyPage() {
  const handleScrollToForm = () => {
    const el = document.getElementById('bulk-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const formats = [
    { title: 'Retail Packs', detail: '10kg / 25kg standard woven sacks.', target: 'Ideal for retail distribution and nurseries.' },
    { title: 'Bulk Supply', detail: '100kg / 500kg / 1T+ high-density jumbo bags.', target: 'Designed for commercial farming setups and estate storage.' },
    { title: 'Private Label', detail: 'Full branding support and packing specifications.', target: 'For retail brands looking to source quality inputs.' },
    { title: 'Custom Packaging', detail: 'Weatherproof liners and specialized sacks on request.', target: 'For moisture-sensitive regions and open-transit logistics.' },
    { title: 'Regional Blends', detail: 'Prepared based on state target soil and crop parameters.', target: 'Tailored biological composition profiles.' }
  ];

  const steps = [
    {
      num: '01',
      title: 'Submit Requirement',
      desc: 'Share state, crop, soil concern, quantity, and packaging need via our quote form.'
    },
    {
      num: '02',
      title: 'Review & Quote',
      desc: 'Agronomy and logistics teams review parameters and share customized pricing details.'
    },
    {
      num: '03',
      title: 'Confirm Details',
      desc: 'Finalize region blend specifications, packaging layout, and dispatch schedules.'
    },
    {
      num: '04',
      title: 'Dispatch Coordination',
      desc: 'Custom compost is prepared, batch-tested, and dispatched directly through dedicated routes.'
    }
  ];

  return (
    <main className="w-full max-w-[1180px] mx-auto px-6 pt-36 pb-20 flex-grow flex flex-col gap-16">
      {/* Bulk Hero Section */}
      <div className="grid grid-cols-12 gap-8 md:gap-12 items-center border-b border-[#c3c8c2]/30 pb-12">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
          <span className="font-mono-plex text-xs text-[#C6A15B] tracking-[0.25em] uppercase">
            // COMMERCIAL B2B
          </span>
          <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight">
            Bulk Vermicompost Supply by Region
          </h1>
          <p className="text-[#6F6A63] text-sm md:text-base leading-relaxed">
            For farms, distributors, nurseries, FPOs, agri-retailers, and institutional buyers looking for vermicompost aligned with local soil and crop conditions.
          </p>
          <div className="mt-2">
            <CTAButton onClick={handleScrollToForm} variant="primary">
              Request Regional Bulk Quote
            </CTAButton>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <WireframeImage 
            className="aspect-video w-full rounded-lg" 
            label="CROPUS Regional Bulk Storage Wireframe" 
          />
        </div>
      </div>

      {/* Who We Supply */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5 border-b border-[#c3c8c2]/30 pb-4 mb-4">
          <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-widest">// PARTNER CHANNELS</span>
          <h3 className="font-fraunces text-2xl font-bold text-[#111111]">Who We Supply</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyerCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="p-6 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg flex flex-col justify-between group hover:border-[#111111] transition-all duration-300 min-h-[160px]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono-plex text-[10px] text-[#6F6A63] font-semibold tracking-wider">
                    CHANNEL_0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
                </div>
                <h4 className="font-fraunces text-lg font-bold text-[#111111] group-hover:text-[#C6A15B] transition-colors">
                  {cat.title}
                </h4>
                <p className="text-[#6F6A63] text-xs leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Bulk Volumes */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5 border-b border-[#c3c8c2]/30 pb-4 mb-4">
          <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-widest">// CAPACITY & FREQUENCY</span>
          <h3 className="font-fraunces text-2xl font-bold text-[#111111]">Available Bulk Volumes</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {bulkVolumes.map((bv, idx) => (
            <div 
              key={idx} 
              className="p-6 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg flex flex-col justify-between group hover:border-[#C6A15B] transition-colors duration-300 min-h-[160px]"
            >
              <div className="flex flex-col gap-3">
                <span className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-wider font-semibold">
                  {bv.label}
                </span>
                <h4 className="font-fraunces text-3xl font-bold text-[#111111] group-hover:text-[#C6A15B] transition-colors">
                  {bv.volume}
                </h4>
                <p className="text-[#6F6A63] text-xs leading-relaxed mt-1 border-t border-[#c3c8c2]/30 pt-3">
                  {bv.use}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Packaging & Supply Format */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5 border-b border-[#c3c8c2]/30 pb-4 mb-4">
          <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-widest">// SUPPLY STRUCTURES</span>
          <h3 className="font-fraunces text-2xl font-bold text-[#111111]">Packaging & Supply Format</h3>
        </div>
        
        <div className="border border-[#c3c8c2] rounded-lg overflow-hidden bg-white/20">
          <div className="divide-y divide-[#c3c8c2]/50">
            {formats.map((row, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-12 gap-4 p-6 hover:bg-[#fcf9f3]/60 transition-colors duration-200 items-center"
              >
                <div className="col-span-12 md:col-span-3">
                  <span className="font-mono-plex text-xs uppercase tracking-wider text-[#7A5F45] font-semibold">
                    {row.title}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <span className="font-mono-plex text-sm text-[#111111] bg-[#EFE8DC] px-2.5 py-1 rounded-xs border border-[#c3c8c2]/30">
                    {row.detail}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-[#6F6A63] text-sm leading-relaxed">
                    {row.target}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Request Bulk Quote Form */}
      <BulkQuoteForm />

      {/* How Bulk Supply Works */}
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex flex-col gap-1.5 border-b border-[#c3c8c2]/30 pb-4 mb-4">
          <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-widest">// COMPLIANCE FLOW</span>
          <h3 className="font-fraunces text-2xl font-bold text-[#111111]">How Bulk Supply Works</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="p-6 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg flex flex-col gap-4 relative group hover:border-[#111111] transition-all duration-300"
            >
              <span className="font-mono-plex text-xs text-[#C6A15B] font-bold">
                STEP_{step.num}
              </span>
              <h4 className="font-fraunces text-lg font-bold text-[#111111]">{step.title}</h4>
              <p className="text-[#6F6A63] text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[95vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0F1F16] via-[#111111] to-[#1C1A17] text-[#F7F3EA] z-10">
      
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-70"
        aria-hidden="true"
      >
        {/* Place the H.264 MP4 file at client/public/videos/cropus-hero.mp4 */}
        <source src="/videos/cropus-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays: Dark wash and dynamic warm/green gradient layer for editorial look */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#111111]/90 via-[#0F1F16]/50 to-[#111111]/90 pointer-events-none" />

      {/* Main Hero Grid Content */}
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 pt-36 md:pt-40 pb-16 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Headline, Subheadline, CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left max-w-[620px] lg:max-w-none">
            
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#C6A15B]" />
              <span className="font-mono-plex text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold">
                STATE-SPECIFIC VERMICOMPOST
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F7F3EA] leading-[1.15] tracking-tight">
              One India. Many Soils.<br />
              <span className="text-[#C6A15B] font-normal italic block mt-1.5">
                One Compost Cannot Fit All.
              </span>
            </h1>

            {/* Subheadline Paragraph */}
            <p className="text-[#F7F3EA]/80 text-sm md:text-base leading-relaxed max-w-[540px]">
              Region-aware vermicompost solutions for Indian soil, climate, moisture, and crop conditions — from Kashmir’s cold valleys to Gujarat’s dry belts and South India’s humid farms.
            </p>

            {/* CTA buttons row */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mt-4 w-full">
              <Link
                href="/shop"
                className="px-6 py-4 bg-[#C6A15B] hover:bg-[#F7F3EA] text-[#111111] hover:text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold text-center transition-all duration-300 rounded-sm cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                Shop Small Packs
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </Link>

              <Link
                href="/bulk-supply"
                className="px-6 py-4 bg-transparent hover:bg-white/5 text-[#F7F3EA] border border-[#F7F3EA]/30 hover:border-[#F7F3EA] font-mono-plex text-xs uppercase tracking-widest font-bold text-center transition-all duration-300 rounded-sm cursor-pointer flex items-center justify-center gap-2"
              >
                Request Bulk Quote
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Subtle third link */}
            <div className="mt-2">
              <Link
                href="/state-blends"
                className="inline-flex items-center gap-2 font-mono-plex text-xs uppercase tracking-widest text-[#F7F3EA]/80 hover:text-[#C6A15B] transition-colors group underline underline-offset-4 decoration-[#C6A15B]/40 hover:decoration-[#C6A15B]"
              >
                Explore State Blends
                <span className="material-symbols-outlined text-xs transition-transform duration-200 group-hover:translate-x-1">
                  east
                </span>
              </Link>
            </div>
            
          </div>

          {/* Right Column: Premium Floating Product Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="bg-[#111111]/80 backdrop-blur-md border border-[#c3c8c2]/15 p-6 rounded-lg shadow-2xl max-w-[340px] w-full flex flex-col gap-5 hover:border-[#C6A15B]/30 transition-all duration-300">
              <div className="flex justify-between items-start">
                <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-wider font-semibold bg-[#C6A15B]/10 px-2 py-0.5 rounded-sm">
                  CROPUS Pack
                </span>
                <span className="font-mono-plex text-[9px] text-[#F7F3EA]/40 uppercase tracking-widest">
                  India Delivery
                </span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <h4 className="font-fraunces text-xl font-semibold text-[#F7F3EA]">
                  CROPUS Region Packs
                </h4>
                <p className="text-xs text-[#F7F3EA]/70 leading-relaxed">
                  State-specific selection available
                </p>
              </div>
              
              <div className="flex justify-between items-end border-t border-b border-[#c3c8c2]/10 py-4 my-1">
                <div className="flex flex-col gap-1">
                  <span className="font-mono-plex text-[9px] text-[#F7F3EA]/40 uppercase tracking-wider">
                    Pack Sizes
                  </span>
                  <span className="font-mono-plex text-[11px] text-[#F7F3EA]/85 font-bold">
                    1kg / 5kg / 10kg / 25kg
                  </span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="font-mono-plex text-[9px] text-[#F7F3EA]/40 uppercase tracking-wider">
                    Starting At
                  </span>
                  <span className="font-fraunces text-2xl text-[#C6A15B] font-semibold leading-none">
                    ₹499
                  </span>
                </div>
              </div>
              
              <Link 
                href="/shop" 
                className="w-full py-3.5 bg-[#C6A15B] hover:bg-[#F7F3EA] text-[#111111] hover:text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold text-center transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                View Packs 
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Trust & Stat Strip Section at Bottom */}
      <div className="w-full border-t border-[#c3c8c2]/10 py-6 bg-[#111111]/55 backdrop-blur-md relative z-10">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          
          <div className="flex flex-col items-start lg:items-center text-left lg:text-center gap-1.5 lg:border-r lg:border-[#c3c8c2]/10 last:border-r-0 lg:px-4">
            <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-wider font-semibold">
              01 / FORMULATION
            </span>
            <span className="font-fraunces text-sm sm:text-base text-[#F7F3EA] font-semibold">
              Region-Aware Blends
            </span>
          </div>

          <div className="flex flex-col items-start lg:items-center text-left lg:text-center gap-1.5 lg:border-r lg:border-[#c3c8c2]/10 last:border-r-0 lg:px-4">
            <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-wider font-semibold">
              02 / FLEXIBILITY
            </span>
            <span className="font-fraunces text-sm sm:text-base text-[#F7F3EA] font-semibold">
              1kg–25kg Packs
            </span>
          </div>

          <div className="flex flex-col items-start lg:items-center text-left lg:text-center gap-1.5 lg:border-r lg:border-[#c3c8c2]/10 last:border-r-0 lg:px-4">
            <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-wider font-semibold">
              03 / CAPACITY
            </span>
            <span className="font-fraunces text-sm sm:text-base text-[#F7F3EA] font-semibold">
              Bulk Supply Available
            </span>
          </div>

          <div className="flex flex-col items-start lg:items-center text-left lg:text-center gap-1.5 lg:px-4">
            <span className="font-mono-plex text-[10px] text-[#C6A15B] uppercase tracking-wider font-semibold">
              04 / DISTRIBUTION
            </span>
            <span className="font-fraunces text-sm sm:text-base text-[#F7F3EA] font-semibold">
              India-Wide Delivery
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}

"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function BlendDetailModal({ blend, onClose }) {
  const modalRef = useRef(null);

  // Close on Escape key press and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus modal container for accessibility
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!blend) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-[2px] p-2 sm:p-6 transition-opacity duration-300 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-[96vw] sm:max-w-3xl bg-[#FAF6EE] border border-[#D9D6D0] rounded-t-xl sm:rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] text-[#111111] focus:outline-none focus:ring-0 animate-slide-up sm:animate-scale-up"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-3 text-[#111111] hover:text-red-800 transition-colors rounded-full hover:bg-white/60 focus:outline-none cursor-pointer z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Scrollable Container */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          
          {/* Header */}
          <div className="border-b border-[#D9D6D0] pb-4 mb-5 pr-8">
            <span className="font-mono-plex text-[11px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase">
              {blend.code}
            </span>
            <h2 id="modal-title" className="font-fraunces text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#111111] mt-1 leading-tight">
              {blend.name}
            </h2>
            <p className="text-[#3f3a33] text-[15px] md:text-[18px] leading-relaxed mt-2.5 font-medium italic">
              {blend.shortDescription}
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            
            {/* Left Column (Targets & Criteria) */}
            <div className="flex flex-col gap-5">
              
              <div>
                <span className="font-mono-plex text-[11px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase block border-b border-[#D9D6D0] pb-1.5 mb-2">
                  Best For
                </span>
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-semibold">
                  {blend.bestFor}
                </p>
              </div>

              <div>
                <span className="font-mono-plex text-[11px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase block border-b border-[#D9D6D0] pb-1.5 mb-2">
                  Target Climate & Soil
                </span>
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                  {blend.targetClimateSoil}
                </p>
              </div>

              <div>
                <span className="font-mono-plex text-[11px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase block border-b border-[#D9D6D0] pb-1.5 mb-2">
                  Common Crop Targets
                </span>
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-semibold">
                  {blend.commonCropTargets}
                </p>
              </div>

              <div>
                <span className="font-mono-plex text-[11px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase block border-b border-[#D9D6D0] pb-1.5 mb-2">
                  Recommended Packs
                </span>
                <p className="text-sm md:text-base text-neutral-700 font-mono-plex font-bold tracking-wide leading-relaxed">
                  {blend.recommendedPacks}
                </p>
              </div>

            </div>

            {/* Right Column (Science & Formulation) */}
            <div className="flex flex-col gap-5 justify-between">
              
              <div className="flex flex-col gap-5">
                <div>
                  <span className="font-mono-plex text-[11px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase block border-b border-[#D9D6D0] pb-1.5 mb-2">
                    Formulation Support
                  </span>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                    {blend.formulationSupport}
                  </p>
                </div>

                <div>
                  <span className="font-mono-plex text-[11px] md:text-xs font-bold tracking-[0.16em] text-[#7A5F45] uppercase block border-b border-[#D9D6D0] pb-1.5 mb-2">
                    How It Helps
                  </span>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                    {blend.howItHelps}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* CTAs Footer (Always below both columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 pt-6 border-t border-[#D9D6D0]">
            <Link 
              href={blend.ctaPath}
              onClick={onClose}
              className="px-6 py-3 bg-[#C6A15B] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold border border-[#C6A15B] hover:bg-[#111111] hover:text-[#C6A15B] hover:border-[#111111] transition-all duration-300 rounded-sm cursor-pointer text-center flex items-center justify-center min-h-[44px]"
            >
              Shop This Blend
            </Link>
            <Link 
              href="/bulk-supply"
              onClick={onClose}
              className="px-6 py-3 border-2 border-[#111111] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold hover:bg-[#111111] hover:text-white transition-all duration-300 rounded-sm cursor-pointer text-center flex items-center justify-center min-h-[44px]"
            >
              Request Bulk Quote
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

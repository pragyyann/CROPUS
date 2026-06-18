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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-[2px] p-0 sm:p-6 transition-opacity duration-300 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full sm:max-w-3xl bg-[#FAF6EE] border-t sm:border border-[#e2decb] rounded-t-xl sm:rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] text-[#111111] focus:outline-none focus:ring-0 animate-slide-up sm:animate-scale-up"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 text-[#6F6A63] hover:text-[#111111] transition-colors rounded-full hover:bg-white/40 focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Scrollable Container */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 lg:p-10">
          
          {/* Header */}
          <div className="border-b border-[#e2decb]/60 pb-5 mb-6 pr-8">
            <span className="font-mono-plex text-[9px] uppercase tracking-wider text-[#7A5F45] font-semibold">
              {blend.code}
            </span>
            <h2 id="modal-title" className="font-fraunces text-2xl md:text-3xl font-bold text-[#111111] mt-1 leading-tight">
              {blend.name}
            </h2>
            <p className="text-[#6F6A63] text-xs md:text-sm leading-relaxed mt-2 italic">
              {blend.shortDescription}
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            
            {/* Left Column (Targets & Criteria) */}
            <div className="flex flex-col gap-5">
              
              <div>
                <span className="font-mono-plex text-[8px] uppercase tracking-wider text-[#7A5F45] font-semibold block border-b border-[#e2decb]/40 pb-1 mb-1.5">
                  Best For
                </span>
                <p className="text-xs text-[#2C2B29] font-medium leading-relaxed">
                  {blend.bestFor}
                </p>
              </div>

              <div>
                <span className="font-mono-plex text-[8px] uppercase tracking-wider text-[#7A5F45] font-semibold block border-b border-[#e2decb]/40 pb-1 mb-1.5">
                  Target Climate & Soil
                </span>
                <p className="text-xs text-[#6F6A63] leading-relaxed">
                  {blend.targetClimateSoil}
                </p>
              </div>

              <div>
                <span className="font-mono-plex text-[8px] uppercase tracking-wider text-[#7A5F45] font-semibold block border-b border-[#e2decb]/40 pb-1 mb-1.5">
                  Common Crop Targets
                </span>
                <p className="text-xs text-[#6F6A63] leading-relaxed">
                  {blend.commonCropTargets}
                </p>
              </div>

              <div>
                <span className="font-mono-plex text-[8px] uppercase tracking-wider text-[#7A5F45] font-semibold block border-b border-[#e2decb]/40 pb-1 mb-1.5">
                  Recommended Packs
                </span>
                <p className="text-xs text-[#6F6A63] font-mono-plex font-bold tracking-wide">
                  {blend.recommendedPacks}
                </p>
              </div>

            </div>

            {/* Right Column (Science & Formulation) */}
            <div className="flex flex-col gap-5 justify-between">
              
              <div className="flex flex-col gap-5">
                <div>
                  <span className="font-mono-plex text-[8px] uppercase tracking-wider text-[#7A5F45] font-semibold block border-b border-[#e2decb]/40 pb-1 mb-1.5">
                    Formulation Support
                  </span>
                  <p className="text-xs text-[#6F6A63] leading-relaxed">
                    {blend.formulationSupport}
                  </p>
                </div>

                <div>
                  <span className="font-mono-plex text-[8px] uppercase tracking-wider text-[#7A5F45] font-semibold block border-b border-[#e2decb]/40 pb-1 mb-1.5">
                    How It Helps
                  </span>
                  <p className="text-xs text-[#6F6A63] leading-relaxed">
                    {blend.howItHelps}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* CTAs Footer (Always below both columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 pt-6 border-t border-[#e2decb]/60">
            <Link 
              href={blend.ctaPath}
              onClick={onClose}
              className="px-6 py-3 bg-[#C6A15B] text-[#111111] font-mono-plex text-[10px] uppercase tracking-widest font-bold border border-[#C6A15B] hover:bg-[#111111] hover:text-[#C6A15B] transition-all duration-300 rounded-sm cursor-pointer text-center flex items-center justify-center min-h-[44px]"
            >
              Shop This Blend
            </Link>
            <Link 
              href="/bulk-supply"
              onClick={onClose}
              className="px-6 py-3 border border-[#111111] text-[#111111] font-mono-plex text-[10px] uppercase tracking-widest font-bold hover:bg-[#111111] hover:text-white transition-all duration-300 rounded-sm cursor-pointer text-center flex items-center justify-center min-h-[44px]"
            >
              Request Bulk Quote
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

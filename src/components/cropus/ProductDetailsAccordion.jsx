"use client";

import React, { useState } from 'react';
import { productDetails } from '../../data/cropusData';

export default function ProductDetailsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full border border-[#c3c8c2] rounded-lg overflow-hidden bg-white/20 mt-12">
      <div className="divide-y divide-[#c3c8c2]/50">
        {productDetails.accordionItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="flex flex-col">
              <button
                type="button"
                onClick={() => handleToggle(idx)}
                className="w-full px-6 py-5 flex justify-between items-center bg-[#fcf9f3]/40 hover:bg-[#EFE8DC]/30 text-left transition-colors focus:outline-none cursor-pointer"
              >
                <span className="font-fraunces text-base font-bold text-[#111111]">{item.title}</span>
                <span className="material-symbols-outlined text-[#6F6A63] transition-transform duration-300 select-none" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                  expand_more
                </span>
              </button>
              
              {isOpen && (
                <div className="px-6 py-5 bg-white border-t border-[#c3c8c2]/20">
                  <p className="text-[#6F6A63] text-sm leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

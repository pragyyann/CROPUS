"use client";

import React, { useState, useRef, useEffect } from 'react';
import ExpandMoreIcon from './icons/ExpandMoreIcon';

export default function PackSelector({ selectedPackId, packs, onChange, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Find currently selected pack details
  const selectedPack = packs.find(p => p.id === selectedPackId) || packs[0];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionSelect = (pack) => {
    onChange(pack);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative flex flex-col gap-1.5 w-full ${className}`}>
      <span className="font-mono-plex text-[8px] text-[#7A5F45] uppercase tracking-widest font-semibold select-none">
        Select Pack Size
      </span>
      
      <div className="relative">
        {/* Selected Pack Toggle Button */}
        <button
          type="button"
          onClick={handleToggle}
          className="w-full h-11 md:h-12 px-4 bg-[#FCF9F3] border border-[#B8AAA3] rounded-md text-left flex justify-between items-center text-[#111111] hover:border-[#111111] transition-colors focus:outline-none cursor-pointer"
        >
          <span className="font-mono-plex text-xs font-semibold">
            {selectedPack.id.endsWith('Pack') ? selectedPack.id : `${selectedPack.id} Pack`}
          </span>
          <div className="flex items-center gap-3">
            <span className="font-fraunces text-sm font-bold text-[#111111]">
              ₹{selectedPack.price.toLocaleString('en-IN')}
            </span>
            <ExpandMoreIcon 
              className="h-4 w-4 text-[#6F6A63] transition-transform duration-300 select-none"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
            />
          </div>
        </button>

        {/* Dropdown Options List */}
        {isOpen && (
          <div className="absolute left-0 right-0 mt-1.5 bg-[#F7F3EA] border border-[#C6A15B] rounded-md shadow-lg z-30 max-h-52 overflow-y-auto animate-fade-in divide-y divide-[#c3c8c2]/30">
            {packs.map((pack) => {
              const isSelected = pack.id === selectedPackId;
              return (
                <button
                  key={pack.id}
                  type="button"
                  onClick={() => handleOptionSelect(pack)}
                  className={`w-full h-10 px-4 text-left flex justify-between items-center text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#C6A15B]/15 text-[#111111] font-bold border-l-2 border-[#C6A15B]'
                      : 'hover:bg-[#EFE8DC] text-[#111111] bg-[#FCF9F3]/40'
                  }`}
                >
                  <span className="font-mono-plex">{pack.id.endsWith('Pack') ? pack.id : `${pack.id} Pack`}</span>
                  <span className="font-fraunces font-bold text-[#111111]">
                    ₹{pack.price.toLocaleString('en-IN')}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

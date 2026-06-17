import React from 'react';

export default function RegionSelector({ selectedRegion, regions, onChange, className = '' }) {
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <label htmlFor="region-select" className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-wider">
        Target Region / Soil Type
      </label>
      <div className="relative">
        <select
          id="region-select"
          value={selectedRegion}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-[#c3c8c2] rounded-md text-sm font-medium text-[#111111] focus:outline-none focus:border-[#C6A15B] appearance-none cursor-pointer"
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region === 'Not Sure' ? 'Not Sure / General Composition' : `${region} Composition`}
            </option>
          ))}
        </select>
        {/* Custom Chevron Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#6F6A63]">
          <span className="material-symbols-outlined text-base">expand_more</span>
        </div>
      </div>
      <p className="text-[11px] text-[#6F6A63] leading-relaxed">
        Compost biological formulation is calibrated specifically for the selected target zone.
      </p>
    </div>
  );
}

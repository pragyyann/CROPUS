import React from 'react';

export default function WireframeImage({ 
  className = 'aspect-video', 
  label = 'Image Placeholder',
  bgClassName = 'bg-[#f1ede7]/30',
  borderClassName = 'border-[#c3c8c2]',
  crossClassName = 'text-[#c3c8c2]/50',
  labelClassName = ''
}) {
  return (
    <div className={`relative border ${borderClassName} ${bgClassName} overflow-hidden flex items-center justify-center ${className}`}>
      {/* Diagonal lines using SVG for crisp rendering */}
      <svg className={`absolute inset-0 w-full h-full ${crossClassName}`} viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      
      {/* Optional Label */}
      {label && (
        <span className={`relative z-10 px-3 py-1 bg-[#F7F3EA] border border-[#c3c8c2] text-[10px] uppercase font-mono tracking-widest text-[#6F6A63] shadow-sm rounded-sm ${labelClassName}`}>
          {label}
        </span>
      )}
    </div>
  );
}

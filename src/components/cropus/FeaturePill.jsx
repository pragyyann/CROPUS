import React from 'react';

export default function FeaturePill({ children }) {
  return (
    <span className="px-3 py-1.5 border border-[#737873]/50 text-[#111111] font-mono text-[10px] uppercase tracking-widest rounded-sm bg-[#fcf9f3]/40 backdrop-blur-xs select-none">
      {children}
    </span>
  );
}

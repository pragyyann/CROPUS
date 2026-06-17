import React from 'react';

export default function PageHeader({
  label,
  title,
  subtitle,
  className = ''
}) {
  return (
    <div className={`border-b border-[#c3c8c2]/30 pb-8 mb-10 flex flex-col gap-3 ${className}`}>
      {label && (
        <span className="font-mono-plex text-xs text-[#C6A15B] tracking-[0.25em] uppercase">
          // {label}
        </span>
      )}
      {title && (
        <h1 className="font-fraunces text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="text-[#6F6A63] text-sm md:text-base max-w-2xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}

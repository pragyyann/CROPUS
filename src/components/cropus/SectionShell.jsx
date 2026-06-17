import React from 'react';

export default function SectionShell({
  id,
  className = '',
  borderTop = true,
  number,
  label,
  title,
  subtitle,
  children
}) {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-20 ${borderTop ? 'border-t border-[#c3c8c2]/30' : ''} ${className}`}
    >
      {(number || label || title || subtitle) && (
        <div className="grid grid-cols-12 gap-6 mb-10">
          <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              {number && (
                <span className="font-mono-plex text-xs text-[#C6A15B] font-bold tracking-wider">
                  // {number}
                </span>
              )}
              {label && (
                <span className="font-mono-plex text-xs uppercase tracking-[0.25em] text-[#6F6A63]">
                  {label}
                </span>
              )}
            </div>
            {title && (
              <h2 className="font-fraunces text-3xl md:text-4xl text-[#111111] leading-tight mt-3">
                {title}
              </h2>
            )}
          </div>
          {subtitle && (
            <div className="col-span-12 md:col-start-7 md:col-span-6 flex flex-col justify-end pb-1">
              <p className="text-base text-[#6F6A63] leading-relaxed">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

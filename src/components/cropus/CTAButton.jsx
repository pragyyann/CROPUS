import React from 'react';

export default function CTAButton({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'dark-outline' | 'white-outline'
  type = 'button',
  className = '',
  disabled = false
}) {
  const baseStyle = "px-6 py-3 font-mono-plex text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-sm select-none focus:outline-none focus:ring-1 focus:ring-[#C6A15B] cursor-pointer";
  
  const variants = {
    primary: "bg-[#C6A15B] text-[#111111] border border-[#C6A15B] hover:bg-[#111111] hover:text-[#C6A15B] disabled:bg-[#B8AAA3] disabled:border-[#B8AAA3] disabled:text-[#6F6A63]",
    secondary: "bg-transparent text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-white disabled:opacity-50",
    'dark-outline': "bg-transparent text-[#111111] border border-[#c3c8c2] hover:border-[#111111] disabled:opacity-50",
    'white-outline': "bg-transparent text-white border border-white/20 hover:bg-white/10 disabled:opacity-50"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

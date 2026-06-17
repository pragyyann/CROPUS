import React from 'react';
import Link from 'next/link';

export default function CropusFooter() {
  return (
    <footer className="w-full bg-[#0F1F16] text-[#F7F3EA] border-t border-[#C6A15B]/15 pt-16 pb-12 mt-auto">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-12 gap-8 md:gap-12">
        {/* Branding Column */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <Link href="/" className="flex flex-col items-start cursor-pointer">
            <span className="font-fraunces text-2xl font-bold tracking-tight text-[#F7F3EA] uppercase leading-none">
              CROPUS
            </span>
            <span className="font-mono-plex text-[10px] tracking-[0.15em] text-[#C6A15B] uppercase mt-1">
              Vermicompost INDIA LLP
            </span>
          </Link>
          <p className="text-[#B8AAA3] text-xs leading-relaxed max-w-xs">
            Healthy soil begins with region-aware vermicompost. Engineered for the diverse climatic and soil profiles of India.
          </p>
        </div>

        {/* Nav Links Column */}
        <div className="col-span-6 md:col-span-3 flex flex-col gap-4">
          <span className="font-mono-plex text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
            Navigation
          </span>
          <div className="flex flex-col gap-2.5">
            <Link href="/" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/shop" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors cursor-pointer">
              Shop Packs
            </Link>
            <Link href="/state-blends" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors cursor-pointer">
              State Blends
            </Link>
            <Link href="/bulk-supply" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors cursor-pointer">
              Bulk Supply
            </Link>
            <Link href="/about" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors cursor-pointer">
              About Us
            </Link>
            <Link href="/contact" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors cursor-pointer">
              Contact
            </Link>
          </div>
        </div>

        {/* Info & Legal Column */}
        <div className="col-span-6 md:col-span-3 flex flex-col gap-4">
          <span className="font-mono-plex text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
            Legal & Info
          </span>
          <div className="flex flex-col gap-2.5">
            <a href="#" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors">
              Shipping Policy
            </a>
            <a href="#" className="text-xs text-[#B8AAA3] hover:text-[#C6A15B] transition-colors">
              Refund Policy
            </a>
          </div>
        </div>

        {/* Logo/Footer visual indicator */}
        <div className="col-span-12 md:col-span-2 flex flex-col gap-4">
          <span className="font-mono-plex text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
            Positioning
          </span>
          <p className="text-[10px] text-[#B8AAA3] leading-relaxed uppercase tracking-wider font-mono-plex">
            ONE INDIA.<br />
            MANY SOILS.<br />
            ONE COMPOST CANNOT FIT ALL.
          </p>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-[1180px] mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono-plex text-[9px] text-[#6F6A63] uppercase tracking-wider">
          © {new Date().getFullYear()} CROPUS Vermicompost INDIA LLP. All rights reserved.
        </span>
        <span className="font-mono-plex text-[9px] text-[#C6A15B] uppercase tracking-widest">
          ESTABLISHED IN INDIA
        </span>
      </div>
    </footer>
  );
}

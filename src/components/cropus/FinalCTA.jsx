import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-[#111111] text-[#F7F3EA] rounded-lg p-12 md:p-20 text-center flex flex-col items-center gap-6 border border-[#C6A15B]/20 shadow-2xl my-16">
      <span className="font-mono-plex text-xs text-[#C6A15B] tracking-[0.3em] uppercase">
        READY TO REBUILD SOIL HEALTH
      </span>
      <h2 className="font-fraunces text-4xl md:text-5xl max-w-2xl leading-tight font-semibold">
        Find Your Region. <br />
        <span className="text-[#C6A15B]">Start With the Right Compost.</span>
      </h2>
      <p className="text-[#B8AAA3] text-sm md:text-base max-w-xl leading-relaxed">
        Shop small packs for home and trial use, or request a regional bulk quote for farm, nursery, distributor, or institutional supply.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Link 
          href="/shop" 
          className="px-8 py-4 bg-[#C6A15B] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold hover:bg-[#F7F3EA] transition-all duration-300 rounded-sm"
        >
          Shop Small Packs
        </Link>
        <Link 
          href="/bulk-supply" 
          className="px-8 py-4 border border-white/20 text-white font-mono-plex text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-all duration-300 rounded-sm"
        >
          Request Regional Bulk Quote
        </Link>
      </div>
    </section>
  );
}

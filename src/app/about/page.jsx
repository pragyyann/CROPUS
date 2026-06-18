import React from 'react';
import Link from 'next/link';
import PageHeader from '../../components/cropus/PageHeader';
import WireframeImage from '../../components/cropus/WireframeImage';
import EcoIcon from '../../components/cropus/icons/EcoIcon';
import CancelIcon from '../../components/cropus/icons/CancelIcon';

export const metadata = {
  title: 'About CROPUS | Region-Aware Vermicompost India',
  description: 'Learn how CROPUS approaches vermicompost through Indian soil diversity, regional climate, crop needs, and responsible soil-first thinking.',
  openGraph: {
    title: 'About CROPUS | Region-Aware Vermicompost India',
    description: 'Learn how CROPUS approaches vermicompost through Indian soil diversity, regional climate, crop needs, and responsible soil-first thinking.',
  }
};

export default function AboutPage() {
  return (
    <main className="w-full max-w-[1180px] mx-auto px-6 pt-36 pb-20 flex-grow animate-fade-in">
      <PageHeader 
        label="Our Mission"
        title="Healthy Soil Begins With Regional Understanding"
        subtitle="CROPUS Vermicompost INDIA LLP rejects the industry standard of uniform composition, choosing instead to map local crop requirements to Indian soil climates."
      />

      {/* Brand Story Editorial block */}
      <div className="grid grid-cols-12 gap-8 md:gap-12 items-center my-12">
        <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
          <h2 className="font-fraunces text-3xl font-bold text-[#111111] leading-tight">
            Our Origin & Philosophy
          </h2>
          <p className="text-[#6F6A63] text-sm md:text-base leading-relaxed">
            CROPUS Vermicompost INDIA LLP is built around the idea that Indian soil conditions vary by state, crop, climate, and moisture profile. Kashmir’s cold clay valleys do not possess the same biological deficits as Gujarat's saline, dry cotton fields.
          </p>
          <p className="text-[#6F6A63] text-sm md:text-base leading-relaxed">
            We coordinate organic processing by analyzing target regional agricultural conditions, integrating cow manure formulations, and sustaining stabilized, active microbial colonies. Our inputs are recovery tools, not simple fertilizers.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5">
          <WireframeImage 
            className="aspect-square w-full rounded-lg" 
            label="CROPUS Processing Facility Wireframe" 
          />
        </div>
      </div>

      {/* Soil First Philosophy vs What We Avoid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t border-b border-[#c3c8c2]/30 py-12 bg-white/20 px-6 rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#4F6F52]">
            <EcoIcon className="h-5 w-5 shrink-0" />
            <h3 className="font-fraunces text-xl font-bold text-[#111111]">The Soil-First Philosophy</h3>
          </div>
          <p className="text-[#6F6A63] text-xs leading-relaxed">
            We believe healthy food begins with healthy soil. Restoring active micro-flora layers, organic carbon density, and soil porosity is critical to crop recovery and farming stability.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-red-800/80">
            <CancelIcon className="h-5 w-5 shrink-0" />
            <h3 className="font-fraunces text-xl font-bold text-[#111111]">What We Avoid</h3>
          </div>
          <p className="text-[#6F6A63] text-xs leading-relaxed">
            We actively reject generic, one-size-fits-all compost thinking. We refuse to claim fake organic certifications, exaggerate crop growth metrics, or rely on cheap logistical corners.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 md:p-12 border border-[#C6A15B] bg-[#fcf9f3] rounded-lg text-center flex flex-col items-center gap-6">
        <h3 className="font-fraunces text-2xl font-bold text-[#111111]">
          Experience Region-Aware Soil Inputs
        </h3>
        <p className="text-[#6F6A63] text-sm max-w-md">
          Review how our customized formulations help specific climates, or buy small packs to test.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/state-blends" className="px-8 py-3.5 bg-[#111111] text-white font-mono-plex text-xs uppercase tracking-widest font-bold hover:bg-[#C6A15B] hover:text-[#111111] transition-all duration-300 rounded-sm cursor-pointer text-center">
            Explore State Blends
          </Link>
          <Link href="/shop" className="px-8 py-3.5 bg-[#C6A15B] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold hover:bg-[#111111] hover:text-[#C6A15B] transition-all duration-300 rounded-sm cursor-pointer text-center">
            Shop Small Packs
          </Link>
        </div>
      </div>
    </main>
  );
}

import React from 'react';
import SectionShell from './SectionShell';
import FeaturePill from './FeaturePill';
import WireframeImage from './WireframeImage';

export default function ProductSnapshotSection() {
  const pills = [
    'Living Soil Support',
    'Moisture Retention',
    'Root Strength',
    'Organic Matter',
    'Region-Aware Composition'
  ];

  return (
    <SectionShell
      id="product"
      number="04"
      label="Product Technicalities"
      title="More Than Compost. A Soil Recovery Input."
    >
      <div className="grid grid-cols-12 gap-8 md:gap-12 items-center mt-6">
        {/* Left Side: Product Description & Feature Pills */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
          <p className="text-base text-[#6F6A63] leading-relaxed">
            CROPUS vermicompost supports microbial activity, soil structure, moisture retention, organic matter, and stronger root conditions. It acts as an active biological engine for soil recovery.
          </p>
          
          <div className="flex flex-wrap gap-2.5 mt-2">
            {pills.map((pill) => (
              <FeaturePill key={pill}>{pill}</FeaturePill>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Wireframe */}
        <div className="col-span-12 md:col-span-6">
          <WireframeImage 
            className="aspect-video w-full rounded-lg" 
            label="Product Composition Wireframe" 
          />
        </div>
      </div>
    </SectionShell>
  );
}

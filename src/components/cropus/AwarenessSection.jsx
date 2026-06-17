import React from 'react';
import SectionShell from './SectionShell';

export default function AwarenessSection() {
  const stages = [
    {
      step: '01',
      title: 'Weak Soil',
      description: 'Low organic matter and poor moisture retention weaken the growing base.',
      accent: 'border-l-2 border-red-800/40 bg-red-50/10'
    },
    {
      step: '02',
      title: 'Weak Crops',
      description: 'Plants struggle when soil structure, biology, and nutrients are not supported.',
      accent: 'border-l-2 border-orange-800/40 bg-orange-50/10'
    },
    {
      step: '03',
      title: 'Weak Food',
      description: 'The quality of what grows is connected to the quality of the soil beneath it.',
      accent: 'border-l-2 border-stone-800/40 bg-stone-50/10'
    }
  ];

  return (
    <SectionShell
      id="awareness"
      number="01"
      label="The Soil-Food Connection"
      title="What Grows in Weak Soil Reaches Your Plate"
      subtitle="Weak soil affects crop strength, water retention, plant growth, and long-term farm productivity. Healthy food begins with healthy soil."
    >
      <div className="relative mt-8">
        {/* Progression Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {stages.map((stage, idx) => (
            <div 
              key={idx} 
              className={`p-6 md:p-8 border border-[#c3c8c2] rounded-lg flex flex-col gap-4 relative group hover:border-[#111111] transition-all duration-300 ${stage.accent}`}
            >
              <span className="font-mono-plex text-xs text-[#C6A15B] font-bold">
                STAGE_0{idx + 1}
              </span>
              <h3 className="font-fraunces text-2xl font-semibold text-[#111111]">
                {stage.title}
              </h3>
              <p className="text-[#6F6A63] text-sm leading-relaxed">
                {stage.description}
              </p>
              
              {/* Connector indicator for desktop */}
              {idx < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center bg-[#F7F3EA] border border-[#c3c8c2] rounded-full text-[#6F6A63]">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

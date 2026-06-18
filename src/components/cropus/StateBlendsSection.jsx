import React from 'react';
import Link from 'next/link';
import SectionShell from './SectionShell';
import ArrowRightIcon from './icons/ArrowRightIcon';

export default function StateBlendsSection() {
  const regions = [
    {
      name: 'Kashmir Region',
      focus: 'Colder Climates & Orchards',
      desc: 'Formulated for colder soil conditions, premium orchard crops, and high moisture-sensitive agricultural setups.',
      code: 'REG_N_KAS'
    },
    {
      name: 'Gujarat Region',
      focus: 'Dry Heat & Structure Support',
      desc: 'Engineered for dry, arid conditions, water retention needs, and heavy structure support for sandy/saline soils.',
      code: 'REG_W_GUJ'
    },
    {
      name: 'Punjab / Haryana Region',
      focus: 'High Crop Cycle Recovery',
      desc: 'Optimized for high-yield, intense agricultural belts requiring fast biological recovery and organic replenishment.',
      code: 'REG_N_PB_HR'
    },
    {
      name: 'South India Region',
      focus: 'Humid Plantation Soils',
      desc: 'Tailored for humid growing zones, plantation crops (coffee, tea, spices), and rapid organic matter degradation support.',
      code: 'REG_S_HUM'
    }
  ];

  return (
    <SectionShell
      id="state-blends"
      number="02"
      label="State Blends"
      title="Vermicompost Built for Indian Soil Diversity"
      subtitle="India does not have one soil type, one climate, or one crop pattern. CROPUS vermicompost is prepared with regional soil and climate needs in mind. Kashmir’s soil needs are not Gujarat’s soil needs."
    >
      <div className="flex flex-col gap-10 mt-8">
        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, idx) => (
            <div 
              key={idx} 
              className="p-6 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg flex flex-col justify-between min-h-[260px] group hover:border-[#C6A15B] transition-colors duration-300"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-[#c3c8c2]/30 pb-2">
                  <span className="font-mono-plex text-[9px] uppercase tracking-wider text-[#6F6A63]">
                    {region.code}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
                </div>
                <h3 className="font-fraunces text-xl font-bold text-[#111111] group-hover:text-[#C6A15B] transition-colors">
                  {region.name}
                </h3>
                <span className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-wider">
                  {region.focus}
                </span>
                <p className="text-[#6F6A63] text-xs leading-relaxed mt-1">
                  {region.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* State Selection CTA */}
        <div className="flex justify-center mt-2">
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#F7F3EA] hover:bg-[#C6A15B] hover:text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-sm"
          >
            <span>Find Your State Blend</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}

import React from 'react';
import SectionShell from './SectionShell';

export default function QualitySnapshotSection() {
  const standards = [
    {
      title: 'Batch Check',
      desc: 'Consistent testing protocol to monitor biological, chemical, and physical parameters before dispatch.',
      icon: 'rule'
    },
    {
      title: 'Clean Input',
      desc: 'Sourced strictly from quality organic inputs and pre-treated weed-free biomass.',
      icon: 'eco'
    },
    {
      title: 'Region Notes',
      desc: 'Specific formulation reports mapped to target regional climate and soil guidelines.',
      icon: 'map'
    },
    {
      title: 'Bulk Support',
      desc: 'Reliable industrial supply capacity with dedicated logistical pipelines across states.',
      icon: 'local_shipping'
    },
    {
      title: 'Documentation',
      desc: 'Full lab analysis, composition certificates, and batch test sheets available on request.',
      icon: 'description'
    }
  ];

  return (
    <SectionShell
      id="standards"
      number="06"
      label="Supply Standards"
      title="Built for Consistent Regional Supply"
    >
      <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
        {standards.map((std, idx) => (
          <div 
            key={idx} 
            className="p-6 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg flex flex-col gap-4 group hover:border-[#111111] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-sm bg-[#111111] text-[#F7F3EA] flex items-center justify-center group-hover:bg-[#C6A15B] group-hover:text-[#111111] transition-colors duration-300">
              <span className="material-symbols-outlined text-xl">
                {std.icon}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-fraunces text-lg font-bold text-[#111111]">
                {std.title}
              </h3>
              <p className="text-[#6F6A63] text-xs leading-relaxed">
                {std.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

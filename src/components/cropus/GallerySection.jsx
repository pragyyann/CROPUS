"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function GallerySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const galleryImages = [
    {
      src: "/images/about/gallery/IMG-20260627-WA0001.jpg",
      title: "Production Ground",
      alt: "CROPUS vermicompost production ground with packaged bags"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0002.jpg",
      title: "Processed Compost",
      alt: "Processed vermicompost pile at CROPUS site"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0003.jpg",
      title: "Soil Texture",
      alt: "Rich vermicompost soil texture held in hand"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0004.jpg",
      title: "Field Preparation",
      alt: "Agricultural field prepared for organic input processing"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0005.jpg",
      title: "Farm Work",
      alt: "CROPUS agricultural field work and processing site"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0012.jpg",
      title: "Packaged Supply",
      alt: "CROPUS packaged vermicompost bags ready for supply"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0007.jpg",
      title: "Compost Handling",
      alt: "Handling of organic compost at processing yard"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0010.jpg",
      title: "Open Yard",
      alt: "Open yard drying and aeration of organic compost"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0013.jpg",
      title: "Regional Groundwork",
      alt: "CROPUS groundwork and soil analysis at a farm"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0015.jpg",
      title: "Organic Processing",
      alt: "Sifting and sorting organic vermicompost layers"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0016.jpg",
      title: "Bagged Output",
      alt: "Large quantities of vermicompost bagged and stacked"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0017.jpg",
      title: "Compost Storage",
      alt: "Under-shade storage of stabilized organic vermicompost"
    },
    {
      src: "/images/about/gallery/IMG-20260627-WA0018.jpg",
      title: "Supply Preparation",
      alt: "Logistics preparation for dispatching vermicompost across India"
    }
  ];

  return (
    <div className="my-16 flex flex-col gap-8">
      <div className="flex flex-col gap-2 border-b border-[#c3c8c2]/30 pb-6 mb-2">
        <span className="font-mono-plex text-[10px] text-[#C6A15B] tracking-widest uppercase font-bold">
          — GALLERY
        </span>
        <h2 className="font-fraunces text-2xl md:text-3xl font-bold text-[#111111] leading-tight">
          From Soil to Supply
        </h2>
        <p className="text-[#6F6A63] text-sm md:text-base leading-relaxed max-w-3xl">
          A closer look at CROPUS vermicompost handling, field preparation, packaging, and ground-level agricultural work.
        </p>
      </div>

      {/* Lighter parchment container panel */}
      <div className="bg-[#FCF9F3] border border-[#D9D6D0] rounded-lg p-6 md:p-8 shadow-sm flex flex-col gap-6">
        {/* Main 12-column Grid (6 Images) */}
        <div className="grid grid-cols-12 gap-4">
          {galleryImages.slice(0, 6).map((img, idx) => {
            const colSpans = [
              'col-span-12 md:col-span-3',
              'col-span-12 md:col-span-5',
              'col-span-12 md:col-span-4',
              'col-span-12 md:col-span-5',
              'col-span-12 md:col-span-4',
              'col-span-12 md:col-span-3'
            ];
            const aspectRatios = [
              'aspect-[3/4]',
              'aspect-[4/3]',
              'aspect-square',
              'aspect-[4/3]',
              'aspect-square',
              'aspect-[3/4]'
            ];

            return (
              <div 
                key={idx} 
                className={`${colSpans[idx]} relative overflow-hidden rounded-md border border-[#D9D6D0] shadow-sm group cursor-pointer`}
              >
                <div className={`relative w-full ${aspectRatios[idx]}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                  {/* Image Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-mono-plex text-[9px] uppercase tracking-widest text-[#C6A15B] font-semibold block mb-0.5 opacity-80">
                      {`BOARD_0${idx + 1}`}
                    </span>
                    <h4 className="font-fraunces text-sm md:text-base font-bold text-[#FCF9F3] leading-tight">
                      {img.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable Lower Grid (Remaining 7 Images) */}
        {isExpanded && (
          <div className="grid grid-cols-12 gap-4 pt-4 border-t border-[#D9D6D0]/40 animate-fade-in">
            {galleryImages.slice(6).map((img, idx) => {
              const actualIdx = idx + 6;
              const colSpan = actualIdx < 9 ? 'col-span-12 md:col-span-4' : 'col-span-12 md:col-span-3';
              const aspectRatio = 'aspect-video';

              return (
                <div 
                  key={actualIdx} 
                  className={`${colSpan} relative overflow-hidden rounded-md border border-[#D9D6D0] shadow-sm group cursor-pointer`}
                >
                  <div className={`relative w-full ${aspectRatio}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                    {/* Image Title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="font-mono-plex text-[9px] uppercase tracking-widest text-[#C6A15B] font-semibold block mb-0.5 opacity-80">
                        {`BOARD_0${actualIdx + 1}`}
                      </span>
                      <h4 className="font-fraunces text-sm md:text-base font-bold text-[#FCF9F3] leading-tight">
                        {img.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View More Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            type="button"
            className="px-8 py-3.5 border border-[#111111] text-[#111111] font-mono-plex text-xs uppercase tracking-widest font-bold hover:bg-[#111111] hover:text-white transition-all duration-300 rounded-sm cursor-pointer"
          >
            {isExpanded ? 'View Less Photos' : 'View More Photos'}
          </button>
        </div>
      </div>
    </div>
  );
}

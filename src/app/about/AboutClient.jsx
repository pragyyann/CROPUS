"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '../../components/cropus/PageHeader';
import EcoIcon from '../../components/cropus/icons/EcoIcon';
import CancelIcon from '../../components/cropus/icons/CancelIcon';

export default function AboutClient() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [fileStatus, setFileStatus] = useState('checking'); // 'checking' | 'exists' | 'missing'
  const [isExpanded, setIsExpanded] = useState(false);
  const modalRef = useRef(null);

  // Verify file existence client-side
  useEffect(() => {
    if (!selectedCert) {
      setFileStatus('checking');
      return;
    }

    const checkFile = async () => {
      try {
        const res = await fetch(selectedCert.file);
        // Next.js Dev/Prod server returns HTML page fallback on 404. 
        // If content-type is text/html, the file doesn't actually exist.
        if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {
          setFileStatus('exists');
        } else {
          setFileStatus('missing');
        }
      } catch (e) {
        setFileStatus('missing');
      }
    };

    checkFile();
  }, [selectedCert]);

  // Close on Escape key press and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedCert(null);
    }
  };

  const certificates = [
    {
      title: "IEC Certificate",
      label: "Import Export Code",
      description: "Registered for import-export and cross-border commercial eligibility.",
      file: "/documents/iec-certificate.pdf",
    },
    {
      title: "GST Certificate",
      label: "Goods & Services Tax",
      description: "GST-registered business for verified commercial transactions and invoicing.",
      file: "/documents/gst-certificate.pdf",
    },
    {
      title: "MSME Certificate",
      label: "Udyam Registered Enterprise",
      description: "Registered under the Ministry of Micro, Small & Medium Enterprises.",
      file: "/documents/msme-certificate.pdf",
    },
    {
      title: "Registration Certificate",
      label: "Business Registration",
      description: "Legal registration document for enterprise verification and business identity.",
      file: "/documents/registration-certificate.pdf",
    },
  ];

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
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-[#c3c8c2]/60 shadow-sm">
            <Image
              src="/images/about-hero.jpg"
              alt="CROPUS vermicompost processing and organic agricultural material"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* Editorial Gallery Section */}
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

      {/* Certifications & Compliance Section */}
      <div className="my-16 flex flex-col gap-8">
        <div className="flex flex-col gap-2 border-b border-[#c3c8c2]/30 pb-6 mb-2">
          <span className="font-mono-plex text-[10px] text-[#C6A15B] tracking-widest uppercase font-bold">
            COMPLIANCE & CERTIFICATIONS
          </span>
          <h2 className="font-fraunces text-2xl md:text-3xl font-bold text-[#111111] leading-tight">
            Registered, Verified & Business Ready
          </h2>
          <p className="text-[#6F6A63] text-sm md:text-base leading-relaxed max-w-3xl">
            CROPUS Vermicompost INDIA LLP maintains essential business registrations and compliance documents for transparent commercial supply, distributor onboarding, and institutional procurement.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-[#FCF9F3] border border-[#D9D6D0] rounded-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#C6A15B]/70 hover:translate-x-0.5 transition-all duration-200 group"
            >
              {/* Left Side: Index & Title */}
              <div className="flex items-baseline gap-3 md:w-1/4">
                <span className="font-mono-plex text-xs text-[#C6A15B] font-bold">
                  [0{index + 1}]
                </span>
                <h3 className="font-fraunces text-base md:text-lg font-bold text-[#111111]">
                  {cert.title}
                </h3>
              </div>

              {/* Middle: Short Label & Description */}
              <div className="flex flex-col gap-1 md:w-1/2">
                <span className="font-mono-plex text-[9px] md:text-[10px] text-[#7A5F45] uppercase tracking-wider font-semibold">
                  {cert.label}
                </span>
                <p className="text-neutral-600 text-xs md:text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Right Side: Action Link */}
              <div className="md:w-1/4 flex md:justify-end items-center mt-2 md:mt-0">
                <button 
                  onClick={() => setSelectedCert(cert)}
                  type="button"
                  className="font-mono-plex text-xs uppercase tracking-wider font-bold text-[#7A5F45] group-hover:text-[#C6A15B] transition-colors flex items-center gap-1.5 cursor-pointer hover:underline bg-transparent border-0 outline-none"
                >
                  <span>View Certificate</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
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

      {/* Reusable Certificate Modal Overlay */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-4 transition-opacity duration-300 animate-fade-in"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCert.title} preview`}
        >
          <div 
            ref={modalRef}
            tabIndex={-1}
            className="relative w-full max-w-[92vw] sm:max-w-4xl h-[80vh] bg-[#FCF9F3] border border-[#D9D6D0] rounded-md shadow-2xl flex flex-col overflow-hidden text-[#111111] focus:outline-none animate-scale-up"
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-[#D9D6D0] flex justify-between items-center bg-[#FAF6EE]">
              <div className="flex flex-col">
                <span className="font-mono-plex text-[9px] uppercase tracking-wider text-[#7A5F45] font-semibold">
                  {selectedCert.label}
                </span>
                <h2 className="font-fraunces text-lg md:text-xl font-bold text-[#111111] mt-0.5">
                  {selectedCert.title}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-2 text-[#111111] hover:text-red-800 hover:bg-black/5 rounded-full transition-colors focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Document Preview Frame */}
            <div className="flex-grow w-full bg-[#FAF6EE] relative flex items-center justify-center min-h-[400px]">
              {fileStatus === 'checking' && (
                <div className="text-[#7A5F45] font-mono-plex text-xs animate-pulse">
                  Verifying document...
                </div>
              )}
              {fileStatus === 'missing' && (
                <div className="text-center p-8 flex flex-col gap-2 items-center justify-center">
                  <svg className="w-12 h-12 text-[#7A5F45]/50 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <p className="text-[#111111] font-fraunces text-base font-bold">
                    Certificate file not added yet.
                  </p>
                  <p className="text-xs text-[#6F6A63] max-w-xs leading-relaxed">
                    This compliance document will be available once the official verification files are uploaded.
                  </p>
                </div>
              )}
              {fileStatus === 'exists' && (
                <iframe 
                  src={`${selectedCert.file}#toolbar=0&navpanes=0`} 
                  title={selectedCert.title} 
                  className="w-full h-full border-0 absolute inset-0"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

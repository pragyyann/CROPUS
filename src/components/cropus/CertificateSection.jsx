"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function CertificateSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [fileStatus, setFileStatus] = useState('checking'); // 'checking' | 'exists' | 'missing'
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
      document.body.classList.add('certificate-modal-open');
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('certificate-modal-open');
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.classList.remove('certificate-modal-open');
    };
  }, [selectedCert]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedCert(null);
    }
  };

  const handleViewCertificate = (cert) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.location.href = cert.file;
    } else {
      setSelectedCert(cert);
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

  return (
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
                onClick={() => handleViewCertificate(cert)}
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

      {/* Reusable Certificate Modal Overlay */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-4 transition-opacity duration-300 animate-fade-in"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCert.title} preview`}
        >
          <div 
            ref={modalRef}
            tabIndex={-1}
            className="relative w-full max-w-[92vw] md:max-w-[80vw] lg:max-w-[1000px] h-[82vh] bg-[#FCF9F3] border border-[#D9D6D0] rounded-md shadow-2xl flex flex-col overflow-hidden text-[#111111] focus:outline-none animate-scale-up"
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
    </div>
  );
}

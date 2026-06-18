"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import ArrowRightIcon from './icons/ArrowRightIcon';
import ShoppingBagIcon from './icons/ShoppingBagIcon';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

export default function CropusNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinkClassName = (href) => {
    const isActive = pathname === href;
    return `font-mono-plex text-[10px] uppercase tracking-widest transition-all duration-200 py-1.5 px-0.5 relative flex items-center justify-center h-full select-none ${
      isActive 
        ? 'text-[#C6A15B]' 
        : 'text-[#F7F3EA]/70 hover:text-[#C6A15B]'
    }`;
  };

  const navLinkChildren = (label, href) => {
    const isActive = pathname === href;
    return (
      <>
        <span>{label}</span>
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A15B] rounded-full" />
        )}
      </>
    );
  };

  const navBgClass = isHomePage && !isScrolled
    ? 'bg-[#111111]/30 backdrop-blur-md border-white/10 shadow-none'
    : 'bg-[#111111] border-[#c3c8c2]/15 shadow-2xl';

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1180px] lg:max-w-[1240px] h-20 rounded-lg text-[#F7F3EA] flex justify-between items-center px-6 z-50 border transition-all duration-300 ${navBgClass}`}>
      {/* Brand Block */}
      <div className="flex-1 flex justify-start">
        <Link 
          href="/" 
          onClick={handleMobileLinkClick}
          className="flex flex-col items-start hover:opacity-90 transition-opacity cursor-pointer group"
          aria-label="CROPUS Vermicompost INDIA LLP Homepage"
        >
          <span className="font-fraunces text-base md:text-lg font-bold tracking-tight text-[#F7F3EA] uppercase leading-none transition-colors duration-200 group-hover:text-[#C6A15B]">
            CROPUS
          </span>
          <span className="font-mono-plex text-[8px] tracking-[0.15em] text-[#C6A15B] uppercase mt-0.5">
            Vermicompost INDIA LLP
          </span>
        </Link>
      </div>

      {/* Nav Links (Centered Desktop) */}
      <div className="hidden lg:flex items-center justify-center gap-6 h-full">
        <Link href="/" className={navLinkClassName('/')}>
          {navLinkChildren('Home', '/')}
        </Link>
        <Link href="/shop" className={navLinkClassName('/shop')}>
          {navLinkChildren('Shop', '/shop')}
        </Link>
        <Link href="/state-blends" className={navLinkClassName('/state-blends')}>
          {navLinkChildren('State Blends', '/state-blends')}
        </Link>
        <Link href="/bulk-supply" className={navLinkClassName('/bulk-supply')}>
          {navLinkChildren('Bulk Supply', '/bulk-supply')}
        </Link>
        <Link href="/about" className={navLinkClassName('/about')}>
          {navLinkChildren('About', '/about')}
        </Link>
        <Link href="/contact" className={navLinkClassName('/contact')}>
          {navLinkChildren('Contact', '/contact')}
        </Link>
      </div>

      {/* Right Side Utility (Right Desktop & Mobile Toggles) */}
      <div className="flex-1 flex justify-end items-center gap-4">
        {/* Desktop Cart Action */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/cart"
            className={`flex items-center gap-2 px-3 py-1.5 border rounded-md font-mono-plex text-[10px] uppercase tracking-widest transition-all duration-200 ${
              pathname === '/cart'
                ? 'bg-[#C6A15B]/10 border-[#C6A15B] text-[#C6A15B]' 
                : 'border-[#c3c8c2]/20 text-[#F7F3EA]/80 hover:text-[#C6A15B] hover:border-[#C6A15B]/50'
            }`}
            aria-label={`Shopping cart containing ${cartCount} items`}
          >
            <ShoppingBagIcon className="h-4 w-4" />
            <span>Cart ({cartCount})</span>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-3">
          <Link 
            href="/cart"
            onClick={handleMobileLinkClick}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 border rounded-md font-mono-plex text-[9px] uppercase tracking-widest transition-all duration-200 ${
              pathname === '/cart'
                ? 'bg-[#C6A15B]/10 border-[#C6A15B] text-[#C6A15B]' 
                : 'border-[#c3c8c2]/20 text-[#F7F3EA]/80 hover:text-[#C6A15B] hover:border-[#C6A15B]/50'
            }`}
            aria-label={`Shopping cart containing ${cartCount} items`}
          >
            <ShoppingBagIcon className="h-3.5 w-3.5" />
            <span>({cartCount})</span>
          </Link>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center text-[#F7F3EA] hover:text-[#C6A15B] focus:outline-none cursor-pointer w-8 h-8 border border-[#c3c8c2]/20 rounded-md transition-all"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-[86px] left-0 right-0 bg-[#111111] border border-[#c3c8c2]/15 rounded-lg flex flex-col p-5 gap-1 shadow-2xl lg:hidden z-50">
          <Link 
            href="/" 
            onClick={handleMobileLinkClick}
            className={`font-mono-plex text-[10px] uppercase tracking-widest py-3 border-b border-[#c3c8c2]/10 transition-colors duration-200 flex justify-between items-center ${
              pathname === '/' ? 'text-[#C6A15B] font-bold' : 'text-[#F7F3EA]/80 hover:text-[#C6A15B]'
            }`}
          >
            <span>Home</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <Link 
            href="/shop" 
            onClick={handleMobileLinkClick}
            className={`font-mono-plex text-[10px] uppercase tracking-widest py-3 border-b border-[#c3c8c2]/10 transition-colors duration-200 flex justify-between items-center ${
              pathname === '/shop' ? 'text-[#C6A15B] font-bold' : 'text-[#F7F3EA]/80 hover:text-[#C6A15B]'
            }`}
          >
            <span>Shop</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <Link 
            href="/state-blends" 
            onClick={handleMobileLinkClick}
            className={`font-mono-plex text-[10px] uppercase tracking-widest py-3 border-b border-[#c3c8c2]/10 transition-colors duration-200 flex justify-between items-center ${
              pathname === '/state-blends' ? 'text-[#C6A15B] font-bold' : 'text-[#F7F3EA]/80 hover:text-[#C6A15B]'
            }`}
          >
            <span>State Blends</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <Link 
            href="/bulk-supply" 
            onClick={handleMobileLinkClick}
            className={`font-mono-plex text-[10px] uppercase tracking-widest py-3 border-b border-[#c3c8c2]/10 transition-colors duration-200 flex justify-between items-center ${
              pathname === '/bulk-supply' ? 'text-[#C6A15B] font-bold' : 'text-[#F7F3EA]/80 hover:text-[#C6A15B]'
            }`}
          >
            <span>Bulk Supply</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <Link 
            href="/about" 
            onClick={handleMobileLinkClick}
            className={`font-mono-plex text-[10px] uppercase tracking-widest py-3 border-b border-[#c3c8c2]/10 transition-colors duration-200 flex justify-between items-center ${
              pathname === '/about' ? 'text-[#C6A15B] font-bold' : 'text-[#F7F3EA]/80 hover:text-[#C6A15B]'
            }`}
          >
            <span>About</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <Link 
            href="/contact" 
            onClick={handleMobileLinkClick}
            className={`font-mono-plex text-[10px] uppercase tracking-widest py-3 border-b border-[#c3c8c2]/10 transition-colors duration-200 flex justify-between items-center ${
              pathname === '/contact' ? 'text-[#C6A15B] font-bold' : 'text-[#F7F3EA]/80 hover:text-[#C6A15B]'
            }`}
          >
            <span>Contact</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <Link 
            href="/cart" 
            onClick={handleMobileLinkClick}
            className={`font-mono-plex text-[10px] uppercase tracking-widest py-3 transition-colors duration-200 flex justify-between items-center ${
              pathname === '/cart' ? 'text-[#C6A15B] font-bold' : 'text-[#F7F3EA]/80 hover:text-[#C6A15B]'
            }`}
          >
            <span className="flex items-center gap-2">
              <ShoppingBagIcon className="h-3.5 w-3.5" />
              <span>Cart ({cartCount})</span>
            </span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </nav>
  );
}

import React from 'react';
import HeroSection from '../components/cropus/HeroSection';
import AwarenessSection from '../components/cropus/AwarenessSection';
import StateBlendsSection from '../components/cropus/StateBlendsSection';
import BuyingPathSection from '../components/cropus/BuyingPathSection';
import ProductGrid from '../components/cropus/ProductGrid';
import SectionShell from '../components/cropus/SectionShell';
import FinalCTA from '../components/cropus/FinalCTA';
import { products } from '../data/cropusData';

export const metadata = {
  title: 'CROPUS Vermicompost INDIA LLP | Organic Compost for Indian Soil',
  description: 'CROPUS offers region-aware vermicompost and organic compost solutions for Indian soil, climate, moisture, crops, gardens, farms, and bulk buyers.',
  keywords: ['vermicompost', 'organic compost', 'vermicompost India', 'organic farming India', 'soil recovery', 'region-aware compost', 'soil carbon restoration'],
  openGraph: {
    title: 'CROPUS Vermicompost INDIA LLP | Organic Compost for Indian Soil',
    description: 'CROPUS offers region-aware vermicompost and organic compost solutions for Indian soil, climate, moisture, crops, gardens, farms, and bulk buyers.',
  }
};

export default function HomePage() {
  // Feature the main pack sizes on the homepage
  const featuredProducts = products.slice(0, 3); // 3 items fit nicely on desktop grid

  return (
    <main className="w-full flex flex-col">
      {/* Full-width Hero Section */}
      <HeroSection />
      
      {/* Constrained Content Wrapper */}
      <div className="w-full max-w-[1180px] mx-auto px-6">
        <AwarenessSection />
        
        {/* State USP preview */}
        <StateBlendsSection />
        
        {/* Buying path preview */}
        <BuyingPathSection />
        
        {/* Featured Products Section */}
        <SectionShell
          id="featured-products"
          number="04"
          label="Featured Selections"
          title="Featured Soil Recovery Packs"
          subtitle="Explore CROPUS small packs prepared with state-specific inputs to condition and restore soil microbial layers."
        >
          <div className="mt-8">
            <ProductGrid products={featuredProducts} />
          </div>
        </SectionShell>

        <FinalCTA />
      </div>
    </main>
  );
}

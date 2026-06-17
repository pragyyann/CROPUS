import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, className = '' }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 border border-[#c3c8c2] bg-[#fcf9f3]/40 rounded-lg">
        <p className="text-[#6F6A63] text-sm">No products found matching the criteria.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

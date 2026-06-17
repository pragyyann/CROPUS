import React from 'react';
import QuantityStepper from './QuantityStepper';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const sizeLabel = item.packSize || item.size || '5kg';
  
  return (
    <div className="p-5 border border-[#c3c8c2] bg-white rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-5 relative">
      {/* Product meta & Delete for Mobile */}
      <div className="flex justify-between items-start md:w-2/5">
        <div className="flex flex-col gap-1.5">
          <h4 className="font-fraunces text-base md:text-lg font-bold text-[#111111]">{item.blendName || item.name}</h4>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-mono-plex text-[9px] text-[#7A5F45] bg-[#EFE8DC] px-2 py-0.5 rounded-xs border border-[#c3c8c2]/30 uppercase tracking-widest">
              {sizeLabel} Pack
            </span>
            <span className="font-mono-plex text-[9px] text-[#6F6A63] bg-white px-2 py-0.5 rounded-xs border border-[#c3c8c2]/50 uppercase tracking-widest">
              {item.region} Blend
            </span>
          </div>
        </div>
        
        {/* Remove Button for Mobile */}
        <button
          type="button"
          onClick={onRemove}
          className="text-red-800/60 hover:text-red-800 p-1.5 flex items-center justify-center cursor-pointer border border-[#c3c8c2]/30 rounded-md md:hidden"
          aria-label="Remove item"
        >
          <span className="material-symbols-outlined text-lg select-none">delete</span>
        </button>
      </div>

      {/* Pricing & Control Block */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#c3c8c2]/20 md:border-t-0 md:pt-0 md:w-3/5 md:justify-end md:gap-8">
        <div className="flex flex-col">
          <span className="text-[9px] text-[#6F6A63] font-mono-plex uppercase tracking-wider">Unit Price</span>
          <span className="text-xs font-semibold text-[#6F6A63]">₹{item.price.toLocaleString('en-IN')}</span>
        </div>

        {/* Quantity control */}
        <div className="flex flex-col">
          <span className="text-[9px] text-[#6F6A63] font-mono-plex uppercase tracking-wider mb-1">Qty</span>
          <QuantityStepper quantity={item.quantity} onChange={onUpdateQuantity} />
        </div>

        {/* Item subtotal */}
        <div className="flex flex-col items-end">
          <span className="text-[9px] text-[#6F6A63] font-mono-plex uppercase tracking-wider">Subtotal</span>
          <span className="font-fraunces text-base font-bold text-[#111111]">
            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Remove Button for Desktop */}
        <button
          type="button"
          onClick={onRemove}
          className="hidden md:flex text-red-800/60 hover:text-red-800 p-2 items-center justify-center cursor-pointer border border-[#c3c8c2]/30 rounded-md hover:bg-red-50/50 transition-colors"
          aria-label="Remove item"
        >
          <span className="material-symbols-outlined text-lg select-none">delete</span>
        </button>
      </div>
    </div>
  );
}

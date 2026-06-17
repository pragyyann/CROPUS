import React from 'react';
import QuantityStepper from './QuantityStepper';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const sizeLabel = item.packSize || item.size || '5kg';
  
  return (
    <div className="p-5 border border-[#c3c8c2] bg-white rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Product meta */}
      <div className="flex flex-col gap-1.5 md:w-2/5">
        <h4 className="font-fraunces text-lg font-bold text-[#111111]">{item.blendName || item.name}</h4>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-mono-plex text-[9px] text-[#7A5F45] bg-[#EFE8DC] px-2 py-0.5 rounded-xs border border-[#c3c8c2]/30 uppercase tracking-widest">
            {sizeLabel} Pack
          </span>
          <span className="font-mono-plex text-[9px] text-[#6F6A63] bg-white px-2 py-0.5 rounded-xs border border-[#c3c8c2]/50 uppercase tracking-widest">
            {item.region} Blend
          </span>
        </div>
      </div>

      {/* Pricing Unit */}
      <div className="flex justify-between items-center md:w-3/5 gap-6">
        <div className="flex flex-col md:text-center">
          <span className="text-[10px] text-[#6F6A63] font-mono-plex uppercase tracking-wider md:hidden">Unit Price</span>
          <span className="text-sm font-semibold text-[#6F6A63]">₹{item.price.toLocaleString('en-IN')}</span>
        </div>

        {/* Quantity control */}
        <div className="flex flex-col md:items-center">
          <span className="text-[10px] text-[#6F6A63] font-mono-plex uppercase tracking-wider md:hidden mb-1.5">Qty</span>
          <QuantityStepper quantity={item.quantity} onChange={onUpdateQuantity} />
        </div>

        {/* Item subtotal */}
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-[#6F6A63] font-mono-plex uppercase tracking-wider md:hidden">Subtotal</span>
          <span className="font-fraunces text-base font-bold text-[#111111]">
            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="text-red-800/60 hover:text-red-800 p-2 flex items-center justify-center cursor-pointer"
          aria-label="Remove item"
        >
          <span className="material-symbols-outlined text-lg select-none">delete</span>
        </button>
      </div>
    </div>
  );
}

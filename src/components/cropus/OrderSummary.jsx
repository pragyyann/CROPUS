import React from 'react';

export default function OrderSummary({ cart, deliveryCharge = 80, taxes = 'Included' }) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + deliveryCharge;

  return (
    <div className="p-6 border border-[#c3c8c2] rounded-lg bg-[#fcf9f3]/60 flex flex-col gap-6">
      <div className="flex flex-col gap-1 border-b border-[#c3c8c2]/30 pb-4">
        <h3 className="font-fraunces text-xl font-bold text-[#111111]">Order Summary</h3>
        <span className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-widest">
          Procurement Details
        </span>
      </div>

      {/* Items List */}
      <div className="flex flex-col gap-4 max-h-[250px] overflow-y-auto pr-1">
        {cart.length === 0 ? (
          <p className="text-[#6F6A63] text-sm text-center py-4">No items in summary.</p>
        ) : (
          cart.map((item, idx) => {
            const sizeLabel = item.packSize || item.size || '5kg';
            return (
              <div key={idx} className="flex justify-between items-start gap-4">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#111111]">
                    {item.blendName || item.name} x {item.quantity}
                  </span>
                  <span className="font-mono-plex text-[9px] text-[#6F6A63] uppercase tracking-wider mt-0.5">
                    Size: {sizeLabel} | Region: {item.region}
                  </span>
                </div>
                <span className="text-sm font-semibold text-[#111111]">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            );
          })
        )}
      </div>

      {/* Totals Breakdown */}
      <div className="flex flex-col gap-3 border-t border-[#c3c8c2]/30 pt-4 text-sm">
        <div className="flex justify-between items-baseline text-[#6F6A63]">
          <span>Subtotal</span>
          <span className="font-semibold text-[#111111]">₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between items-baseline text-[#6F6A63]">
          <span>Delivery Charge</span>
          <span className="font-semibold text-[#111111]">₹{deliveryCharge.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between items-baseline text-[#6F6A63]">
          <span>Taxes</span>
          <span className="font-semibold text-[#111111]">{taxes}</span>
        </div>
        
        <div className="flex justify-between items-baseline border-t border-[#c3c8c2]/30 pt-4">
          <span className="font-mono-plex text-xs uppercase tracking-wider text-[#111111] font-bold">Total Amount</span>
          <span className="font-fraunces text-2xl font-bold text-[#111111]">
            ₹{total.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
}

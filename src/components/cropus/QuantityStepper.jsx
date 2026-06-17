import React from 'react';

export default function QuantityStepper({ 
  quantity, 
  onChange, 
  onIncrease,
  onDecrease,
  min = 1, 
  max = 99, 
  className = '',
  variant = 'default'
}) {
  const handleDecrement = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onDecrease) {
      onDecrease();
    } else if (onChange && quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onIncrease) {
      onIncrease();
    } else if (onChange && quantity < max) {
      onChange(quantity + 1);
    }
  };

  if (variant === 'premium-stepper') {
    return (
      <div className={`inline-flex items-center justify-between border border-[#111111] rounded-sm bg-[#111111] text-[#F7F3EA] h-[38px] select-none ${className}`}>
        <button
          type="button"
          onClick={handleDecrement}
          className="w-10 h-full flex items-center justify-center text-[#F7F3EA]/70 hover:text-[#C6A15B] hover:bg-[#1f1f1f] active:bg-[#333] transition-colors duration-200 focus:outline-none font-mono-plex text-sm cursor-pointer border-r border-[#c3c8c2]/10"
          aria-label="Decrease quantity"
        >
          —
        </button>
        <span className="w-8 text-center font-mono-plex text-xs font-bold text-[#F7F3EA]">
          {quantity}
        </span>
        <button
          type="button"
          onClick={handleIncrement}
          className="w-10 h-full flex items-center justify-center text-[#F7F3EA]/70 hover:text-[#C6A15B] hover:bg-[#1f1f1f] active:bg-[#333] transition-colors duration-200 focus:outline-none font-mono-plex text-sm cursor-pointer border-l border-[#c3c8c2]/10"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center border border-[#c3c8c2] rounded-sm bg-white overflow-hidden ${className}`}>
      <button
        type="button"
        onClick={handleDecrement}
        className="w-10 h-10 flex items-center justify-center text-[#111111] hover:bg-[#EFE8DC] active:bg-[#D9D6D0] transition-colors focus:outline-none font-medium select-none cursor-pointer"
        aria-label="Decrease quantity"
      >
        —
      </button>
      <span className="w-12 text-center font-mono-plex text-sm font-semibold select-none text-[#111111]">
        {quantity}
      </span>
      <button
        type="button"
        onClick={handleIncrement}
        className="w-10 h-10 flex items-center justify-center text-[#111111] hover:bg-[#EFE8DC] active:bg-[#D9D6D0] transition-colors focus:outline-none font-medium select-none cursor-pointer"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

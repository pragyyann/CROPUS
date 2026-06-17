import React from 'react';

export default function FormField({
  label,
  name,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder,
  className = ''
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={name} className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider font-semibold">
          {label} {required && <span className="text-red-800">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white transition-all duration-200"
      />
    </div>
  );
}

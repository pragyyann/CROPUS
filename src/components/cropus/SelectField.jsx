import React from 'react';
import ExpandMoreIcon from './icons/ExpandMoreIcon';

export default function SelectField({
  label,
  name,
  required = false,
  value,
  onChange,
  options = [],
  className = ''
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={name} className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider font-semibold">
          {label} {required && <span className="text-red-800">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          name={name}
          id={name}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 bg-white border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] appearance-none cursor-pointer transition-all duration-200"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {/* Custom Dropdown Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#6F6A63]">
          <ExpandMoreIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

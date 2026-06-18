import React from 'react';

export default function ScienceIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12" />
      <path d="M12 3v13.5" />
      <path d="M8.5 10h7" />
      <path d="M18 16.5a4.5 4.5 0 0 1-4.5 4.5h-3A4.5 4.5 0 0 1 6 16.5V3h12v13.5z" />
    </svg>
  );
}

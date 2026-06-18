import React from 'react';

export default function EcoIcon({ className = "" }) {
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
      <path d="M2 22c1.25-3.67 4.17-6.58 8-8m0 0c3.83 1.42 6.75 4.33 8 8m-8-8c1.33-4.67 4.33-7.67 9-9" />
      <path d="M10 14V2" />
    </svg>
  );
}

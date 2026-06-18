import React from 'react';

export default function RuleIcon({ className = "" }) {
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
      <path d="M12 2v20" />
      <path d="M17 5H9.5" />
      <path d="M17 10H12" />
      <path d="M17 15H9.5" />
      <path d="M17 19H12" />
    </svg>
  );
}

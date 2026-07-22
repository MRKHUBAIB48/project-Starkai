import { useId } from "react";

function Logo({ className = "", iconOnly = false }) {
  const gradientId = useId();

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="shrink-0">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#6d78d8" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
        <path
          d="M6 19C8.5 19.5 11 20.5 12.5 22.5"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
        <path
          d="M9.5 16.5L14 21L22.5 11.5"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="22.5" cy="11.5" r="2" fill="#7dd3fc" />
      </svg>
      {!iconOnly && (
        <span className="text-xl font-black tracking-tight text-white">
          Stark <span className="text-cyan-soft">AI</span>
        </span>
      )}
    </div>
  );
}

export default Logo;

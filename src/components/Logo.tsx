import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const GeometricZMark: React.FC<LogoProps> = ({ className = 'mark-svg', size = 28 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="64" height="64" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M8 8H56V19L29 46H56V56H8V45L35 18H8V8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Wordmark: React.FC<{ showBadge?: boolean }> = ({ showBadge = false }) => {
  return (
    <a href="#hero" className="wordmark" aria-label="zuhri.ai.id beranda">
      <GeometricZMark />
      <span>
        zuhri<i>.ai.id</i>
      </span>
      {showBadge && (
        <span className="badge brand" style={{ fontSize: '10px', padding: '2px 6px' }}>
          FOR SALE
        </span>
      )}
    </a>
  );
};

import React from 'react';
import { MARQUEE_ITEMS } from '../config/site';
import { GeometricZMark } from './Logo';

export const Marquee: React.FC = () => {
  return (
    <div className="marquee-bar" aria-hidden="true">
      <div className="marquee-track">
        {/* Render twice for continuous loop */}
        <div className="marquee-group">
          {MARQUEE_ITEMS.map((item, index) => (
            <div key={`m1-${index}`} className="marquee-item">
              <em>{String(index + 1).padStart(2, '0')}</em>
              <span>{item}</span>
              <GeometricZMark className="marquee-separator" size={14} />
            </div>
          ))}
        </div>
        <div className="marquee-group">
          {MARQUEE_ITEMS.map((item, index) => (
            <div key={`m2-${index}`} className="marquee-item">
              <em>{String(index + 1).padStart(2, '0')}</em>
              <span>{item}</span>
              <GeometricZMark className="marquee-separator" size={14} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Wordmark } from './Logo';
import { DOMAIN_DATA, CURRENT_YEAR } from '../config/site';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Wordmark />
            <p className="footer-tagline">
              Domain offered for sale. A bold digital asset tailored for AI innovations, high-signal
              portfolio, and personal branding in technology.
            </p>
          </div>

          <div className="footer-links">
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--foreground)' }}>
              Navigasi Cepat
            </div>
            <a href="#hero">Beranda</a>
            <a href="#keunggulan">Keunggulan Domain</a>
            <a href="#detail">Spesifikasi & Harga</a>
            <a href="#alur">Alur Pembelian</a>
            <a href="#faq">Tanya Jawab (FAQ)</a>
          </div>

          <div className="footer-links">
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--foreground)' }}>
              Kontak Penjualan
            </div>
            <a
              href={`mailto:${DOMAIN_DATA.contactEmail}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Mail size={14} />
              <span>{DOMAIN_DATA.contactEmail}</span>
            </a>
            <span style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>
              Penawaran awal: {DOMAIN_DATA.priceDisplay} (Nego)
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {CURRENT_YEAR} <strong>{DOMAIN_DATA.name}</strong> · Seluruh hak cipta dilindungi.
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Kembali ke bagian atas halaman"
          >
            <span>Kembali ke atas</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Wordmark } from './Logo';
import { CONTACT_CONFIG } from '../config/site';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileOpen]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Wordmark showBadge />

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Navigasi Utama">
            <a href="#hero">Beranda</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#detail">Detail Domain</a>
            <a href="#alur">Alur Transaksi</a>
            <a href="#faq">FAQ</a>
            <a
              href={CONTACT_CONFIG.getMailtoUrl()}
              className="btn sm shine"
              aria-label="Ajukan minat membeli domain via email"
            >
              <span>Minat Membeli</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi mobile"
        >
          <a href="#hero" onClick={() => setIsMobileOpen(false)}>
            Beranda
          </a>
          <a href="#keunggulan" onClick={() => setIsMobileOpen(false)}>
            Keunggulan
          </a>
          <a href="#detail" onClick={() => setIsMobileOpen(false)}>
            Detail Domain
          </a>
          <a href="#alur" onClick={() => setIsMobileOpen(false)}>
            Alur Transaksi
          </a>
          <a href="#faq" onClick={() => setIsMobileOpen(false)}>
            FAQ
          </a>
          <div style={{ marginTop: '12px' }}>
            <a
              href={CONTACT_CONFIG.getMailtoUrl()}
              className="btn lg shine"
              style={{ width: '100%' }}
              onClick={() => setIsMobileOpen(false)}
            >
              <span>Minat Membeli</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

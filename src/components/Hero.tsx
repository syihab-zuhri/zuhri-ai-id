import React, { useState } from 'react';
import { DOMAIN_DATA, CONTACT_CONFIG } from '../config/site';
import { GeometricZMark } from './Logo';
import { Mail, ArrowDown, Copy, Check, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onShowToast: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyDomain = async () => {
    try {
      await navigator.clipboard.writeText(DOMAIN_DATA.name);
      setCopied(true);
      onShowToast(`Domain "${DOMAIN_DATA.name}" berhasil disalin ke clipboard!`);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      onShowToast(`Domain: ${DOMAIN_DATA.name}`);
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Offer Information */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="badge brand">
                <span className="pulse-dot" />
                DOMAIN FOR SALE · AI.ID
              </span>
            </div>

            <h1 className="hero-title">
              Your Next AI Identity <br />
              <span style={{ color: 'var(--brand-text)' }}>Starts Here.</span>
            </h1>

            <p className="hero-lead">
              <strong>{DOMAIN_DATA.name}</strong> — domain teknologi yang ringkas untuk personal branding,
              portofolio AI, eksperimen kecerdasan buatan, atau proyek digital masa depan.
            </p>

            {/* Prominent Domain Card Box */}
            <div className="domain-hero-badge" role="region" aria-label="Informasi Domain">
              <div className="domain-hero-badge-top">
                <span className="spec-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={13} color="var(--brand-text)" />
                  Nama Domain Resmi
                </span>
                <button
                  type="button"
                  className="btn sm outline"
                  onClick={handleCopyDomain}
                  aria-label="Salin nama domain ke clipboard"
                  style={{ gap: '6px', height: '30px', padding: '0 10px' }}
                >
                  {copied ? <Check size={13} color="var(--success)" /> : <Copy size={13} />}
                  <span>{copied ? 'Tersalin' : 'Salin Domain'}</span>
                </button>
              </div>

              <div className="domain-name-large">
                zuhri<span className="tld">.ai.id</span>
              </div>

              <div className="price-tag-wrapper">
                <div className="price-main">{DOMAIN_DATA.priceDisplay}</div>
                <div className="price-badge-nego">{DOMAIN_DATA.priceNote}</div>
                <p className="price-note-text">{DOMAIN_DATA.priceSubtext}</p>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="hero-actions">
              <a
                href={CONTACT_CONFIG.getMailtoUrl()}
                className="btn lg shine"
                aria-label="Ajukan penawaran via email resmi pemilik"
              >
                <Mail size={18} aria-hidden="true" />
                <span>Ajukan Penawaran</span>
              </a>

              <a
                href="#detail"
                className="btn lg outline"
                aria-label="Lihat rincian lengkap domain"
              >
                <span>Lihat Detail Domain</span>
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Layered Geometric Stack Visual */}
          <div className="stack-visual" aria-hidden="true">
            <div className="stack-layer layer-1" />
            <div className="stack-layer layer-2" />
            <div className="stack-layer layer-3">
              <div className="stack-top-badge">
                <span className="badge" style={{ fontSize: '11px', background: 'transparent' }}>
                  TLD .ID · PANDI
                </span>
                <span className="badge success" style={{ fontSize: '11px' }}>
                  <ShieldCheck size={12} />
                  Ready to Transfer
                </span>
              </div>

              <div className="stack-center-mark">
                <GeometricZMark className="mark-large" size={72} />
                <div className="stack-domain-title">
                  zuhri<span style={{ color: 'var(--brand-text)' }}>.ai.id</span>
                </div>
                <div className="stack-sub-info">High-Signal Tech Asset · Direct from Owner</div>
              </div>

              <div className="stack-bottom-info">
                <div>
                  <div style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '10px' }}>
                    Penawaran Awal
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--foreground)', fontWeight: 600 }}>
                    {DOMAIN_DATA.priceDisplay}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '10px' }}>
                    Status
                  </div>
                  <div style={{ color: 'var(--brand-text)', fontWeight: 600 }}>Nego Terbuka</div>
                </div>
              </div>
            </div>

            {/* Floating Badge Label */}
            <div className="stack-caption-floating">
              <small>Aset Digital</small>
              <b>zuhri.ai.id · Identitas AI</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

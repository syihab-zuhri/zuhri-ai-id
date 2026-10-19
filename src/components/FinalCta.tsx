import React, { useState } from 'react';
import { DOMAIN_DATA, CONTACT_CONFIG } from '../config/site';
import { Mail, Copy, Check, MessageSquare } from 'lucide-react';

interface FinalCtaProps {
  onShowToast: (msg: string) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DOMAIN_DATA.contactEmail);
      setCopiedEmail(true);
      onShowToast(`Alamat email "${DOMAIN_DATA.contactEmail}" berhasil disalin!`);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      onShowToast(`Email: ${DOMAIN_DATA.contactEmail}`);
    }
  };

  const handleCopyDraft = async () => {
    const text = `Kepada: ${CONTACT_CONFIG.email}\nSubjek: ${CONTACT_CONFIG.defaultSubject}\n\n${CONTACT_CONFIG.defaultBody}`;
    try {
      await navigator.clipboard.writeText(text);
      onShowToast('Draf format email penawaran berhasil disalin!');
    } catch {
      onShowToast(`Email: ${CONTACT_CONFIG.email}`);
    }
  };

  return (
    <section className="section" id="contact" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="final-cta-box">
          <div style={{ marginBottom: '16px' }}>
            <span className="badge brand">DIRECT INQUIRY</span>
          </div>

          <h2 className="final-cta-title">Ready to Build Something with zuhri.ai.id?</h2>

          <p className="final-cta-desc">
            Punya ide untuk domain ini? Hubungi pemilik untuk mendiskusikan pembelian dan penawaran harga.
          </p>

          <div className="final-cta-actions">
            {/* Primary Action Button */}
            <a
              href={CONTACT_CONFIG.getMailtoUrl()}
              className="btn lg shine"
              aria-label="Kirim email penawaran ke pemilik domain"
            >
              <Mail size={18} aria-hidden="true" />
              <span>Hubungi Pemilik Domain</span>
            </a>

            {/* Quick Copy Email Button */}
            <button
              type="button"
              className="btn lg outline"
              onClick={handleCopyEmail}
              aria-label="Salin alamat email pemilik domain"
            >
              {copiedEmail ? <Check size={18} color="var(--success)" /> : <Copy size={18} />}
              <span>{copiedEmail ? 'Email Tersalin' : 'Salin Email'}</span>
            </button>

            {/* Copy Draft Template Button */}
            <button
              type="button"
              className="btn lg outline"
              onClick={handleCopyDraft}
              aria-label="Salin format draf email penawaran"
              title="Salin template draf pesan penawaran"
            >
              <MessageSquare size={18} />
              <span>Salin Format Draf</span>
            </button>
          </div>

          <div style={{ display: 'inline-block' }}>
            <div className="contact-direct-pill">
              <span>Email Resmi:</span>
              <strong style={{ color: 'var(--foreground)' }}>{DOMAIN_DATA.contactEmail}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { DOMAIN_DATA } from '../config/site';
import { Globe, Tag, CheckCircle2, Mail, KeyRound, ShieldAlert } from 'lucide-react';

interface DomainSpecsProps {
  onShowToast: (msg: string) => void;
}

export const DomainSpecs: React.FC<DomainSpecsProps> = ({ onShowToast }) => {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DOMAIN_DATA.contactEmail);
      onShowToast(`Email "${DOMAIN_DATA.contactEmail}" berhasil disalin!`);
    } catch {
      onShowToast(`Email: ${DOMAIN_DATA.contactEmail}`);
    }
  };

  return (
    <section className="section" id="detail">
      <div className="container">
        <div className="section-head">
          <div className="section-label">
            <span>01</span>
            <span>Rincian Informasi</span>
          </div>
          <h2 className="section-title">Spesifikasi & Status Kepemilikan.</h2>
          <p className="section-desc">
            Informasi transparan mengenai nama domain, ketentuan negosiasi harga, dan saluran komunikasi resmi
            langsung dengan pemilik domain.
          </p>
        </div>

        <div className="spec-grid">
          {/* Card 1: Domain Name */}
          <div className="spec-card">
            <div>
              <div className="spec-card-header">
                <span className="spec-label">Domain & Ekstensi</span>
                <Globe size={18} color="var(--brand-text)" />
              </div>
              <div className="spec-value font-mono">
                {DOMAIN_DATA.name}
              </div>
              <p className="spec-sub">
                Ekstensi resmi <strong>{DOMAIN_DATA.extension}</strong> (ccTLD Indonesia kategori kecerdasan buatan dan inovasi).
              </p>
            </div>
            <div style={{ marginTop: '16px' }}>
              <span className="badge brand">ccTLD .ID Resmi</span>
            </div>
          </div>

          {/* Card 2: Harga Penawaran */}
          <div className="spec-card">
            <div>
              <div className="spec-card-header">
                <span className="spec-label">Harga Penawaran Awal</span>
                <Tag size={18} color="var(--brand-text)" />
              </div>
              <div className="spec-value font-mono">
                {DOMAIN_DATA.priceDisplay}
              </div>
              <p className="spec-sub">
                Harga penawaran awal. Negosiasi terbuka untuk tawaran yang wajar dari pembeli serius.
              </p>
            </div>
            <div style={{ marginTop: '16px' }}>
              <span className="badge success">Negotiable</span>
            </div>
          </div>

          {/* Card 3: Status Penjualan */}
          <div className="spec-card">
            <div>
              <div className="spec-card-header">
                <span className="spec-label">Status Penjualan</span>
                <CheckCircle2 size={18} color="var(--brand-text)" />
              </div>
              <div className="spec-value">
                {DOMAIN_DATA.status}
              </div>
              <p className="spec-sub">
                Domain siap dialihkan kepemilikannya kepada pembeli baru setelah kesepakatan tercapai.
              </p>
            </div>
            <div style={{ marginTop: '16px' }}>
              <span className="badge">Direct Owner Sale</span>
            </div>
          </div>

          {/* Card 4: Saluran Kontak */}
          <div className="spec-card">
            <div>
              <div className="spec-card-header">
                <span className="spec-label">Kontak Resmi</span>
                <Mail size={18} color="var(--brand-text)" />
              </div>
              <div className="spec-value font-mono" style={{ fontSize: '15px', wordBreak: 'break-all' }}>
                {DOMAIN_DATA.contactEmail}
              </div>
              <p className="spec-sub">
                Satu-satunya alamat email resmi untuk seluruh korespondensi dan penawaran domain ini.
              </p>
            </div>
            <div style={{ marginTop: '16px' }}>
              <button
                type="button"
                className="btn sm outline"
                onClick={handleCopyEmail}
                style={{ width: '100%' }}
              >
                Salin Alamat Email
              </button>
            </div>
          </div>

          {/* Card 5: Mekanisme Transfer */}
          <div className="spec-card">
            <div>
              <div className="spec-card-header">
                <span className="spec-label">Metode Pengalihan</span>
                <KeyRound size={18} color="var(--brand-text)" />
              </div>
              <div className="spec-value">
                EPP Code / Internal Push
              </div>
              <p className="spec-sub">
                Pengalihan dilakukan via kode otorisasi EPP registrar atau transfer antar-akun registrar .id terakreditasi PANDI.
              </p>
            </div>
            <div style={{ marginTop: '16px' }}>
              <span className="badge">Standar PANDI</span>
            </div>
          </div>

          {/* Card 6: Kebijakan Transaksi Aman */}
          <div className="spec-card">
            <div>
              <div className="spec-card-header">
                <span className="spec-label">Transparansi</span>
                <ShieldAlert size={18} color="var(--brand-text)" />
              </div>
              <div className="spec-value">
                Tanpa Biaya Tersembunyi
              </div>
              <p className="spec-sub">
                Tidak ada biaya perantara pihak ketiga yang dipaksakan. Mekanisme pembayaran disepakati bersama secara aman.
              </p>
            </div>
            <div style={{ marginTop: '16px' }}>
              <span className="badge brand">Aman & Terverifikasi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

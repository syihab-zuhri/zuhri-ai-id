import React from 'react';
import { PROCESS_STEPS, CONTACT_CONFIG } from '../config/site';
import { Mail, Check, ShieldCheck } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  return (
    <section className="section" id="alur">
      <div className="container">
        <div className="section-head">
          <div className="section-label">
            <span>03</span>
            <span>Alur Transaksi</span>
          </div>
          <h2 className="section-title">Proses Pengalihan yang Transparan.</h2>
          <p className="section-desc">
            Transaksi dilakukan langsung antara calon pembeli dan pemilik domain tanpa perantara,
            mengikuti standar registrasi domain tingkat nasional (PANDI).
          </p>
        </div>

        <div className="process-grid">
          {PROCESS_STEPS.map((item) => (
            <div key={item.step} className="process-card">
              <div className="process-step-num">{item.step}</div>
              <h3 className="process-step-title">{item.title}</h3>
              <p className="process-step-desc" style={{ marginBottom: '12px' }}>
                {item.desc}
              </p>
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '12px',
                  borderTop: '1px dashed var(--border)',
                  fontSize: '12px',
                  color: 'var(--brand-text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Check size={14} flex-shrink="0" />
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Security / Assurance Banner */}
        <div
          style={{
            marginTop: '32px',
            padding: '20px 24px',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck size={24} color="var(--brand-text)" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--foreground)' }}>
                Keamanan & Integritas Registrar Terjamin
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>
                Pengalihan kepemilikan tunduk pada kebijakan Pengelola Nama Domain Internet Indonesia (PANDI).
              </div>
            </div>
          </div>

          <a
            href={CONTACT_CONFIG.getMailtoUrl()}
            className="btn sm shine"
            aria-label="Kirim penawaran sekarang via email"
          >
            <Mail size={14} />
            <span>Mulai Penawaran</span>
          </a>
        </div>
      </div>
    </section>
  );
};

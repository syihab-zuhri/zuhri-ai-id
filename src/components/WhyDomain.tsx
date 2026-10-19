import React from 'react';
import { WHY_FEATURES } from '../config/site';
import { Cpu, UserCheck, Bot, Rocket } from 'lucide-react';

export const WhyDomain: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-portfolio':
        return <Cpu size={22} />;
      case 'personal-branding':
        return <UserCheck size={22} />;
      case 'ai-experiments':
        return <Bot size={22} />;
      case 'digital-projects':
      default:
        return <Rocket size={22} />;
    }
  };

  return (
    <section className="section" id="keunggulan">
      <div className="container">
        <div className="section-head">
          <div className="section-label">
            <span>02</span>
            <span>Potensi Pemanfaatan</span>
          </div>
          <h2 className="section-title">Mengapa Memilih zuhri.ai.id?</h2>
          <p className="section-desc">
            Kombinasi nama yang ringkas dengan ekstensi inovasi .ai.id membuka berbagai skenario
            pengembangan produk dan representasi digital.
          </p>
        </div>

        <div className="why-grid">
          {WHY_FEATURES.map((item) => (
            <article key={item.id} className="why-card">
              <div className="why-card-top">
                <span className="why-num">{item.num}</span>
                <div className="why-icon-box" aria-hidden="true">
                  {getIcon(item.id)}
                </div>
              </div>

              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc" style={{ marginBottom: '14px', fontWeight: 500, color: 'var(--foreground)' }}>
                {item.shortDesc}
              </p>
              <p className="why-desc">
                {item.fullDesc}
              </p>

              <div style={{ marginTop: '20px' }}>
                <span className="badge" style={{ fontSize: '11px' }}>
                  {item.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

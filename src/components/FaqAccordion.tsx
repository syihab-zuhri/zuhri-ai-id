import React, { useState } from 'react';
import { FAQ_ITEMS } from '../config/site';
import { ChevronDown } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  // Open the first item by default
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="section-label">
            <span>04</span>
            <span>Tanya Jawab</span>
          </div>
          <h2 className="section-title">Pertanyaan yang Sering Diajukan.</h2>
          <p className="section-desc">
            Jawaban transparan mengenai harga, negosiasi, legalitas kepemilikan, dan proses pengalihan domain.
          </p>
        </div>

        <div className="faq-list" role="region" aria-label="Daftar FAQ">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            const buttonId = `faq-btn-${item.id}`;
            const contentId = `faq-panel-${item.id}`;

            return (
              <div key={item.id} className="faq-item">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon-wrapper" aria-hidden="true">
                      <ChevronDown size={16} />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="faq-content"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

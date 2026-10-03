import React from 'react';

export default function TrustLogoStrip() {
  const clientBrands = [
    { name: "THIRD WAVE COFFEE" },
    { name: "HDB FINANCIAL SERVICES" },
    { name: "THALAPPAKATTI RESTAURANT" },
    { name: "SPENCER'S" },
    { name: "ARVIND FASHIONS" },
    { name: "ENAMOR" },
    { name: "MUTHOOT FINANCE" },
    { name: "AB MAURI" },
    { name: "HOMELANE" }
  ];

  return (
    <section className="v3-trust-section">
      <div className="container text-center">
        <div className="v3-logos-flex">
          {clientBrands.map((brand, idx) => (
            <div key={idx} className="v3-logo-item">
              <span className="v3-logo-text">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .v3-trust-section {
          background: #ffffff;
          padding: 24px 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .v3-logos-flex {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px 28px;
          flex-wrap: wrap;
        }
        .v3-logo-item {
          padding: 8px 16px;
          border-radius: 8px;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.8);
          opacity: 0.85;
          transition: var(--transition);
        }
        .v3-logo-item:hover {
          opacity: 1;
          transform: translateY(-2px);
          border-color: #f97316;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.12);
        }
        .v3-logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.92rem;
          letter-spacing: 0.8px;
          color: #0f172a;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .v3-logos-flex {
            gap: 14px;
          }
          .v3-logo-text {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}

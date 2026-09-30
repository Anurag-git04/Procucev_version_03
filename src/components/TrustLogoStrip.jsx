import React from 'react';

export default function TrustLogoStrip() {
  const logos = [
    { name: "logitech", display: "logitech" },
    { name: "nvidia", display: "NVIDIA" },
    { name: "dell", display: "DELL" },
    { name: "crucial", display: "crucial" },
    { name: "fortinet", display: "FORTINET" },
    { name: "asus", display: "ASUS" },
    { name: "sandisk", display: "SanDisk" }
  ];

  return (
    <section className="v3-trust-section">
      <div className="container text-center">
        <p className="v3-trust-headline">
          Trusted By <strong>100+ Leading Global Brands</strong> & Enterprises
        </p>

        <div className="v3-logos-flex">
          {logos.map((logo, idx) => (
            <div key={idx} className="v3-logo-item">
              <span className="v3-logo-text">{logo.display}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .v3-trust-section {
          background: #ffffff;
          padding: 30px 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .v3-trust-headline {
          font-size: 0.88rem;
          color: #64748b;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .v3-trust-headline strong {
          color: #0f172a;
        }
        .v3-logos-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .v3-logo-item {
          opacity: 0.65;
          transition: var(--transition);
        }
        .v3-logo-item:hover {
          opacity: 1;
        }
        .v3-logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 1px;
          color: #1e293b;
        }
        @media (max-width: 768px) {
          .v3-logos-flex {
            justify-content: center;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}

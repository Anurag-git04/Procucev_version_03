import React from 'react';
import { Building2, Quote, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ClientsSection() {
  const clients = [
    "Third Wave Coffee",
    "HDB Financial Services",
    "Thalappakatti Restaurant",
    "Spencer's",
    "Arvind Fashions",
    "Enamor",
    "Muthoot Finance",
    "AB Mauri",
    "HomeLane"
  ];

  const industries = [
    "Retail",
    "Food & Beverage",
    "Financial Services",
    "Fashion & Apparel",
    "Home & Interiors",
    "FMCG Ingredients"
  ];

  const testimonials = [
    {
      quote: "GMT has significantly reduced both my sourcing time and costs. GMT is our primary channel for sourcing the right vendor for the right product at a right price.",
      name: "Kalpana",
      title: "Procurement Manager",
      company: "Leading Enterprise Brand"
    },
    {
      quote: "With Procucev’s consulting services and price benchmarking, we got clarity and pricing transparency. It is our go-to approach for key sourcing decisions.",
      name: "Priya",
      title: "Head – Procurement & Admin",
      company: "Logistics & Infrastructure"
    },
    {
      quote: "Packaging material pricing was always difficult. With Procucev's Price Benchmarking and Category Management, our effort was dramatically reduced.",
      name: "Ramesh",
      title: "Procurement Manager",
      company: "Agrochemical Manufacturing"
    }
  ];

  return (
    <section className="v3-clients-section section" id="clients">
      <div className="container">
        
        {/* Header */}
        <div className="v3-section-header text-center">
          <div className="badge-tag-pill">
            <Building2 size={14} className="icon-emerald" /> Our Clients
          </div>
          <h2 className="v3-section-title">
            Trusted by leading brands <br />
            <span className="serif-italic text-brand-blue">across India</span>
          </h2>
          <p className="v3-section-desc">
            From high-growth retail chains to enterprise manufacturers, leading brands rely on Procucev for procurement savings and automation.
          </p>
        </div>

        {/* Industries We Serve */}
        <div className="industries-box mb-16" style={{ marginTop: '40px' }}>
          <h3 className="ind-title text-center">Industries We Serve</h3>
          <div className="ind-pills-row flex flex-wrap justify-center items-center gap-3">
            {industries.map((ind, idx) => (
              <span key={idx} className="ind-pill">{ind}</span>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="testimonials-block">
          <h3 className="v3-sub-heading text-center mb-8">Client Testimonials</h3>
          <div className="testimonials-grid">
            {testimonials.map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <Quote size={32} className="quote-icon" />
                <p className="quote-text">"{item.quote}"</p>
                <div className="author-info">
                  <strong className="author-name">{item.name}</strong>
                  <span className="author-title">{item.title}</span>
                  <span className="author-company">{item.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .v3-clients-section {
          background: #f8fafc;
          
          border-top: 1px solid var(--border-light);
        }

        .cl-marquee-container {
          overflow: hidden;
          width: 100%;
          display: flex;
          position: relative;
          padding: 12px 0; /* Prevents shadow clipping */
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        .cl-marquee-track {
          display: flex;
          gap: 16px;
        }

        .cl-marquee-set {
          display: flex;
          gap: 16px;
          flex-shrink: 0;
          animation: marquee 20s linear infinite;
        }

        .cl-marquee-track:hover .cl-marquee-set {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 16px)); }
        }
        .brand-chip {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .brand-chip:hover {
          transform: translateY(-3px);
          border-color: #10b981;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
        }
        .brand-name-text {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
        }

        .industries-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 64px;
        }
        .ind-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .ind-pill {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #334155;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 6px 16px;
          border-radius: 999px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testimonial-card {
          background: #ffffff;
          color: #0f172a;
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }
        .quote-icon {
          color: #10b981;
          opacity: 0.8;
          margin-bottom: 16px;
        }
        .quote-text {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 24px;
        }

        .author-info {
          border-top: 1px solid #e2e8f0;
          padding-top: 16px;
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
        }
        .author-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #10b981;
        }
        .author-company {
          font-size: 0.78rem;
          color: #64748b;
        }

        @media (max-width: 992px) {
          .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

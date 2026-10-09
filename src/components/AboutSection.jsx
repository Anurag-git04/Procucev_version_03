import React from 'react';
import { Target, TrendingUp, Cpu, CheckCircle2, ShieldCheck, ArrowRight, Building2, Award } from 'lucide-react';

export default function AboutSection({ onOpenDemo }) {
  const howWeWork = [
    {
      step: "01",
      title: "Strategize",
      desc: "Understand your spend and set the right sourcing plan.",
      icon: <Target size={24} className="icon-emerald" />
    },
    {
      step: "02",
      title: "Optimize",
      desc: "Benchmark prices, specifications and suppliers to find savings.",
      icon: <TrendingUp size={24} className="icon-blue" />
    },
    {
      step: "03",
      title: "Empower",
      desc: "Give your team AI tools that run RFQs without manual follow-up.",
      icon: <Cpu size={24} className="icon-indigo" />
    }
  ];

  const whyProcucev = [
    "A verified supplier network across India.",
    "AI that turns an email or a BOQ into a structured RFQ.",
    "Side-by-side quote comparison, ready for approval.",
    "A leadership team with procurement, ISRO, IIM and IIT backgrounds."
  ];

  return (
    <section className="v3-about-section section" id="about">
      <div className="container">

        {/* Header */}
        <div className="v3-section-header text-center">
          <div className="badge-tag-pill">
            <Building2 size={14} className="icon-emerald" /> About Procucev
          </div>
          <h2 className="v3-section-title">
            One partner for the <br />
            <span className="serif-italic text-brand-blue">full procurement cycle</span>
          </h2>
          <p className="v3-section-desc">
            Procucev is a Bengaluru-based procurement company that brings together consulting, digital platforms and an AI-driven supplier marketplace. We help companies cut procurement cost and cycle time, from the first requirement to the final purchase order.
          </p>
        </div>


        {/* How We Work 3 Column Cards */}
        <div className="v3-how-block">
          <h3 className="v3-sub-heading text-center">
            <span className="text-emerald">Strategize</span> · <span className="text-blue">Optimize</span> · <span className="text-indigo">Empower</span>
          </h3>
        </div>

        {/* Why Procucev Dark Callout Banner */}
        <div className="why-procucev-banner">
          <div className="why-banner-grid">

            <div className="why-left-content">
              <div className="banner-badge">
                <Award size={14} className="icon-emerald" /> Proven Advantage
              </div>
              <h3 className="why-title">Why Procucev?</h3>
              <p className="why-desc">
                We combine deep domain expertise with cutting-edge AI automation to ensure total pricing transparency, rapid execution, and guaranteed ROI.
              </p>
              <button onClick={onOpenDemo} className="btn btn-green-pill btn-lg">
                Talk to us <ArrowRight size={16} />
              </button>
            </div>

            <div className="why-right-grid">
              {whyProcucev.map((reason, idx) => (
                <div key={idx} className="why-check-item">
                  <CheckCircle2 size={18} className="icon-emerald-bright" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .v3-about-section {
          background: #ffffff;
          
          border-top: 1px solid var(--border-light);
        }

        .v3-section-header {
          margin-bottom: 24px;
        }
        .v3-section-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #0f172a;
          margin: 12px 0 16px;
          line-height: 1.15;
        }
        .v3-section-desc {
          font-size: 1.05rem;
          color: #475569;
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .v3-how-block {
          margin-bottom: 24px;
        }
        .v3-sub-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
        }
        .text-emerald { color: #10b981; }
        .text-blue { color: #074193; }
        .text-indigo { color: #6366f1; }
        .icon-emerald { color: #10b981; }
        .icon-blue { color: #074193; }
        .icon-indigo { color: #6366f1; }
        .icon-emerald-bright { color: #34d399; flex-shrink: 0; }

        .how-work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .how-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px 24px;
          position: relative;
          transition: all 0.3s ease;
        }
        .how-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
          border-color: #10b981;
          background: #ffffff;
        }
        .how-step-num {
          position: absolute;
          top: 20px;
          right: 24px;
          font-size: 2rem;
          font-weight: 900;
          color: #cbd5e1;
        }
        .how-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .how-card-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .how-card-desc {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.55;
        }

        /* Light Callout Banner */
        .why-procucev-banner {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 48px;
          color: #0f172a;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
        }
        .why-banner-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 40px;
          align-items: center;
        }
        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #10b981;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .why-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: #0f172a;
        }
        .why-desc {
          font-size: 0.98rem;
          color: #475569;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .why-right-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .why-check-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 18px;
          border-radius: 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #334155;
          line-height: 1.45;
        }

        @media (max-width: 992px) {
          .how-work-grid { grid-template-columns: 1fr; }
          .why-banner-grid { grid-template-columns: 1fr; }
          .why-right-grid { grid-template-columns: 1fr; }
          .v3-section-title { font-size: 2.2rem; }
          .why-procucev-banner { padding: 32px 24px; }
        }
      `}</style>
    </section>
  );
}

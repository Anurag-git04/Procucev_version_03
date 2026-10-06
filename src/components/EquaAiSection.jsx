import React from 'react';
import { Cpu, ShieldCheck, CheckCircle2, ArrowRight, Layers, Lock, Server, Sparkles } from 'lucide-react';

export default function EquaAiSection({ onOpenDemo }) {
  const workflowSteps = [
    "Email or upload your RFQ/BOQ",
    "AI reads the documents",
    "Choose your sourcing mode",
    "Automatic quote follow-up by email, SMS & WhatsApp",
    "Comparison matrix",
    "Approvals & automatic PO"
  ];

  const sourcingModes = [
    {
      title: "Your vendors",
      desc: "Source only from your approved supplier list."
    },
    {
      title: "Your vendors + Procucev network",
      desc: "Widen competition with our verified suppliers."
    },
    {
      title: "Managed sourcing",
      desc: "Procucev's team handles supplier onboarding, strategic sourcing and the deal from start to finish."
    }
  ];

  const enterpriseFeatures = [
    "White-label portal",
    "API access",
    "Single sign-on",
    "Role-based access",
    "Supplier KYC & performance tracking",
    "Multi-level approvals",
    "Full audit trail",
    "Spend analytics"
  ];

  return (
    <section className="v3-equa-section section" id="equa-ai">
      <div className="container">
        
        {/* Header */}
        <div className="v3-section-header text-center">
          <div className="badge-tag-pill light-indigo">
            <Cpu size={14} className="icon-indigo" /> eQua AI Enterprise Platform
          </div>
          <h2 className="v3-section-title text-white">
            Your own AI procurement engine, <br />
            <span className="serif-italic text-cyan">inside your workflow</span>
          </h2>
          <p className="v3-section-desc text-slate-light">
            eQua AI is a private procurement platform for enterprise buying teams. Send RFQs and BOQs by email, and eQua AI reads them, chases suppliers for quotes, builds the comparison and routes it for approval, all the way to a purchase order.
          </p>
        </div>

        {/* Workflow Pipeline */}
        <div className="pipeline-container">
          <h3 className="pipeline-title text-center">Automated End-to-End Workflow Pipeline</h3>
          <div className="pipeline-steps-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="pipeline-step-card">
                <span className="step-num-badge">{idx + 1}</span>
                <span className="step-text-label">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Three Ways to Source */}
        <div className="sourcing-ways-block mb-12">
          <h3 className="v3-sub-heading text-white text-center">Three Ways to Source</h3>
          <div className="sourcing-cards-grid">
            {sourcingModes.map((mode, idx) => (
              <div key={idx} className="mode-card">
                <span className="mode-num">0{idx + 1}</span>
                <h4 className="mode-title">{mode.title}</h4>
                <p className="mode-desc">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Built for Enterprise Feature Box */}
        <div className="enterprise-box">
          <div className="ent-header flex items-center justify-between">
            <div>
              <span className="pill-tag green mb-2">Enterprise Ready</span>
              <h3 className="ent-title">Built for Enterprise Security & Scale</h3>
            </div>
            <div className="azure-badge flex items-center gap-2">
              <Server size={16} className="icon-cyan" /> Built on Microsoft Azure
            </div>
          </div>

          <div className="ent-features-grid">
            {enterpriseFeatures.map((feat, idx) => (
              <div key={idx} className="ent-feat-pill">
                <CheckCircle2 size={16} className="icon-indigo" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button onClick={onOpenDemo} className="btn btn-green-pill btn-lg">
              Book an eQua AI demo <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .v3-equa-section {
          background: #f8fafc;
          color: #0f172a;
          
          border-top: 1px solid var(--border-light);
        }

        .text-white { color: #0f172a !important; }
        .text-cyan { color: #0ea5e9 !important; }
        .text-slate-light { color: #475569 !important; }
        .icon-indigo { color: #6366f1; }
        .icon-cyan { color: #0ea5e9; }

        .pipeline-container {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px;
          margin-bottom: 48px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }
        .pipeline-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }
        .pipeline-steps-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }
        .pipeline-step-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .step-num-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(129, 140, 248, 0.2);
          border: 1px solid #818cf8;
          color: #818cf8;
          font-weight: 900;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
        .step-text-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #334155;
          line-height: 1.35;
        }

        /* 3 Ways Grid */
        .sourcing-ways-block {
          margin-bottom: 48px;
        }
        .sourcing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .mode-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
        }
        .mode-num {
          font-size: 1.2rem;
          font-weight: 900;
          color: #38bdf8;
          display: block;
          margin-bottom: 12px;
        }
        .mode-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .mode-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.55;
        }

        /* Enterprise Box */
        .enterprise-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }
        .ent-header {
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e2e8f0;
        }
        .ent-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0f172a;
        }
        .azure-badge {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #475569;
        }

        .ent-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .ent-feat-pill {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 12px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
        }

        @media (max-width: 992px) {
          .pipeline-steps-grid { grid-template-columns: repeat(2, 1fr); }
          .sourcing-cards-grid { grid-template-columns: 1fr; }
          .ent-features-grid { grid-template-columns: repeat(2, 1fr); }
          .ent-header { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>
    </section>
  );
}

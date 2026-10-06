import React from 'react';
import { Cpu, Mail, Zap, ArrowRight, CheckCircle2, ShieldCheck, ShoppingBag, Package, Layers, Sparkles } from 'lucide-react';

export default function QuaAiSection({ onOpenDemo }) {
  const gmtSteps = [
    { num: "1", text: "Send your requirement" },
    { num: "2", text: "AI structures the RFQ" },
    { num: "3", text: "Verified suppliers quote" },
    { num: "4", text: "Compare and choose" }
  ];

  const categories = [
    "IT Consumables",
    "Electrical Equipment",
    "Packaging Material",
    "MRO & Spares",
    "Chemicals",
    "Pharma & Lab Supplies"
  ];

  return (
    <section className="v3-qua-section section" id="qua-ai">
      <div className="container">
        
        {/* Header */}
        <div className="v3-section-header text-center">
          <div className="badge-tag-pill">
            <Sparkles size={14} className="icon-blue" /> Qua AI Marketplace
          </div>
          <h2 className="v3-section-title">
            India's AI-powered B2B marketplace <br />
            <span className="serif-italic text-brand-blue">for buyers and suppliers</span>
          </h2>
          <p className="v3-section-desc">
            Qua AI matches what you need to buy with suppliers who can deliver it. Buyers use it free. Suppliers get qualified RFQs from real buyers.
          </p>
        </div>

        {/* 2 Big Feature Cards (GMT & BFS) */}
        <div className="gmt-bfs-grid mb-12">
          
          {/* GMT: Get My Quote */}
          <div className="feature-card dark-gmt">
            <div className="card-top-tag flex items-center justify-between">
              <span className="pill-tag green">GMT - Get My Quote</span>
              <span className="email-span flex items-center gap-1">
                <Mail size={14} className="icon-green" /> RFQ@procucev.com
              </span>
            </div>
            <h3 className="card-heading">Instant Structured RFQs</h3>
            <p className="card-body">
              Email your requirement to <a href="mailto:RFQ@procucev.com" className="link-green">RFQ@procucev.com</a> or fill in a short form. Our AI turns it into a structured RFQ, sends it to matching verified suppliers and returns competitive quotes, usually within 24 hours. No phone follow-ups.
            </p>

            <h4 className="steps-title">How It Works</h4>
            <div className="steps-2x2-grid">
              {gmtSteps.map((step, idx) => (
                <div key={idx} className="step-pill-box">
                  <span className="step-badge-num">{step.num}</span>
                  <span className="step-label-text">{step.text}</span>
                </div>
              ))}
            </div>

            <button onClick={onOpenDemo} className="btn btn-green-pill w-full mt-6">
              Get My Quote Now <ArrowRight size={16} />
            </button>
          </div>

          {/* BFS: Buy From Stock */}
          <div className="feature-card dark-bfs">
            <div className="card-top-tag flex items-center justify-between">
              <span className="pill-tag blue">BFS - Buy From Stock</span>
              <span className="email-span flex items-center gap-1">
                <Package size={14} className="icon-cyan" /> Ready Inventory
              </span>
            </div>
            <h3 className="card-heading">Instant Surplus & Stock Clearing</h3>
            <p className="card-body">
              Buy ready inventory, raw materials, equipment and consumables that are already in stock, for faster delivery. Suppliers can also list slow-moving or surplus stock and turn it into cash.
            </p>

            <h4 className="steps-title">Categories We Cover</h4>
            <div className="cat-2x3-grid">
              {categories.map((cat, idx) => (
                <div key={idx} className="cat-pill-box">
                  <span className="cat-dot-cyan"></span>
                  <span className="cat-text">{cat}</span>
                </div>
              ))}
            </div>

            <button onClick={onOpenDemo} className="btn btn-outline-cyan w-full mt-6">
              Explore Ready Stock <ArrowRight size={16} />
            </button>
          </div>

        </div>

        {/* For Buyers vs For Suppliers Comparison Cards */}
        <div className="buyers-suppliers-grid">
          <div className="role-card buyer-bg">
            <span className="role-tag green">For Buyers</span>
            <h3 className="role-title">Free and Unlimited Sourcing</h3>
            <p className="role-desc">
              Free and unlimited. Raise as many RFQs as you need, get quotes from verified suppliers and compare them on price, delivery and terms.
            </p>
            <button onClick={onOpenDemo} className="btn btn-green-pill">
              I'm a buyer: Raise an RFQ <ArrowRight size={16} />
            </button>
          </div>

          <div className="role-card supplier-bg">
            <span className="role-tag blue">For Suppliers</span>
            <h3 className="role-title">Verified High-Intent Leads</h3>
            <p className="role-desc">
              Get real buyer RFQs in your category. Buy credit packs to download RFQs and send your quote. Clear idle stock through BFS.
            </p>
            <button onClick={onOpenDemo} className="btn btn-blue-pill">
              I'm a supplier: Join Qua AI <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .v3-qua-section {
          background: #f8fafc;
          
          border-top: 1px solid var(--border-light);
        }

        .gmt-bfs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }

        .feature-card {
          background: #ffffff;
          color: #0f172a;
          border-radius: 24px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .dark-gmt {
          /* background: linear-gradient(145deg, #0f172a 0%, #064e3b 100%); */
        }
        .dark-bfs {
          /* background: linear-gradient(145deg, #0f172a 0%, #074193 100%); */
        }

        .pill-tag {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 999px;
          text-transform: uppercase;
        }
        .pill-tag.green {
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.4);
        }
        .pill-tag.blue {
          background: rgba(56, 189, 248, 0.2);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.4);
        }
        .email-span {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 600;
        }

        .card-heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0f172a;
          margin: 16px 0 10px;
        }
        .card-body {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .link-green {
          color: #34d399;
          text-decoration: underline;
          font-weight: 700;
        }

        .steps-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .steps-2x2-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .step-pill-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .step-badge-num {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #10b981;
          color: #ffffff;
          font-weight: 900;
          font-size: 0.72rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .step-label-text {
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
        }

        .cat-2x3-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .cat-pill-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cat-dot-cyan {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px rgba(56,189,248,0.4);
        }
        .cat-text {
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
        }

        /* Buyer / Supplier 2 Columns */
        .buyers-suppliers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .role-card {
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }
        .buyer-bg {
          background: #ecfdf5;
          border-color: #a7f3d0;
        }
        .supplier-bg {
          background: #eff6ff;
          border-color: #bfdbfe;
        }

        .role-tag {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .role-tag.green { background: #d1fae5; color: #047857; }
        .role-tag.blue { background: #dbeafe; color: #1d4ed8; }

        .role-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .role-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .btn-blue-pill {
          background: #074193;
          color: #ffffff;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-outline-cyan {
          background: transparent;
          color: #38bdf8;
          border: 1px solid #38bdf8;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 999px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        @media (max-width: 992px) {
          .gmt-bfs-grid { grid-template-columns: 1fr; }
          .buyers-suppliers-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

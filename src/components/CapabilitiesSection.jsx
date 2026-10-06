import React from 'react';
import { Cpu, HardDrive, Package, ShieldCheck, Zap, BarChart3, ArrowRight, RefreshCw } from 'lucide-react';

export default function CapabilitiesSection({ onOpenDemo }) {
  const capabilities = [
    {
      icon: <Cpu size={24} className="icon-emerald" />,
      title: "proCPX Platform",
      subtitle: "Enterprise Source-to-Pay Suite",
      desc: "Automates requisitions, approval matrices, RFX events, catalog buying, and purchase order tracking with real-time audit trails."
    },
    {
      icon: <Zap size={24} className="icon-orange" />,
      title: "QUA AI Marketplace",
      subtitle: "50,000+ Verified Supplier Engine",
      desc: "Intelligent buyer-seller matching engine predicting ideal suppliers and price anomaly warnings instantly."
    },
    {
      icon: <Package size={24} className="icon-blue" />,
      title: "GMT - Get My QuoTe",
      subtitle: "Instant RFQ Portal",
      desc: "Submit custom part/item requirements and receive structured competitive quotes within 24 hours without phone follow-ups."
    },
    {
      icon: <HardDrive size={24} className="icon-purple" />,
      title: "BFS - Buy From Stock",
      subtitle: "Inventory Marketplace",
      desc: "Pre-inspected surplus, ready-stock raw materials, equipment, and consumables with expedited delivery."
    },
    {
      icon: <RefreshCw size={24} className="icon-cyan" />,
      title: "E-Auction Suite",
      subtitle: "Reverse & Forward Bidding",
      desc: "Dynamic bidding downwards and asset liquidation with real-time bid rank visibility and seller verification."
    },
    {
      icon: <BarChart3 size={24} className="icon-indigo" />,
      title: "360° Price Benchmarking",
      subtitle: "Spend Analytics & MDM",
      desc: "Specification optimization, item standardization, catalog MDM, and tail spend consolidation for guaranteed ROI."
    }
  ];

  return (
    <section className="v3-cap-section section" id="marketplace">
      <div className="container">
        
        {/* Section Title Header */}
        <div className="v3-cap-header text-center">
          <div className="badge-tag-pill">
            <ShieldCheck size={14} className="text-emerald" /> B2B Marketplace & Technology Solutions
          </div>
          <h2 className="v3-cap-title">
            One Unified Ecosystem For <br />
            <span className="serif-italic text-brand-blue">End-to-End Procurement Orchestration</span>
          </h2>
          <p className="v3-cap-subtitle">
            Saving at procurement is the direct profit for company. Join 500+ Cr enterprise leaders operating with zero human intervention.
          </p>
        </div>

        {/* 6 Capabilities 3-Column Grid */}
        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="cap-card">
              <div className="cap-card-content">
                <div className="cap-icon-box">
                  {cap.icon}
                </div>
                <h3 className="cap-card-title">{cap.title}</h3>
                <span className="cap-card-sub">{cap.subtitle}</span>
                <p className="cap-card-desc">{cap.desc}</p>
              </div>

              <div className="cap-card-footer">
                <button className="cap-action-btn" onClick={onOpenDemo}>
                  <span>Explore Features</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </button>
                <span className="cap-tag-pill">Enterprise</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .v3-cap-section {
          background: #f8fafc;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          
        }

        .v3-cap-header {
          margin-bottom: 56px;
        }
        .v3-cap-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #0f172a;
          margin: 12px 0 10px;
        }
        .text-brand-blue {
          color: #074193;
        }
        .text-emerald {
          color: #10b981;
        }
        .v3-cap-subtitle {
          font-size: 1.05rem;
          color: #475569;
          max-width: 680px;
          margin: 0 auto;
        }

        /* 3 Column Cards Grid */
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .cap-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 30px 24px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }
        .cap-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.1);
          border-color: #10b981;
        }

        .cap-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .icon-emerald { color: #10b981; }
        .icon-orange { color: #f97316; }
        .icon-blue { color: #074193; }
        .icon-purple { color: #8b5cf6; }
        .icon-cyan { color: #0284c7; }
        .icon-indigo { color: #6366f1; }

        .cap-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
        }
        .cap-card-sub {
          display: block;
          font-size: 0.78rem;
          font-weight: 700;
          color: #10b981;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .cap-card-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .cap-card-footer {
          border-top: 1px solid #f1f5f9;
          padding-top: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cap-action-btn {
          background: transparent;
          border: none;
          color: #074193;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .cap-action-btn:hover {
          color: #f97316;
        }
        .cap-action-btn:hover .arrow-icon {
          transform: translateX(4px);
        }
        .arrow-icon {
          transition: transform 0.2s ease;
        }

        .cap-tag-pill {
          background: #f1f5f9;
          color: #64748b;
          font-family: monospace;
          font-size: 0.72rem;
          padding: 2px 8px;
          border-radius: 6px;
        }

        @media (max-width: 992px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
          .v3-cap-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}

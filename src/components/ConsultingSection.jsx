import React, { useState } from 'react';
import { TrendingUp, Award, DollarSign, ShieldCheck, ArrowRight, BarChart3, Layers, Calculator, Clock, RefreshCw } from 'lucide-react';

export default function ConsultingSection({ onOpenDemo }) {
  // Form state can be added here if needed

  const industries = [];

  const services = [
    {
      title: "Strategic Sourcing",
      desc: "Category strategy, supplier discovery and negotiation to get the right price and terms.",
      icon: <TrendingUp className="icon-emerald" />
    },
    {
      title: "Category Management",
      desc: "Day-to-day management of your categories, from purchase orders to supplier relationships.",
      icon: <Layers className="icon-blue" />
    },
    {
      title: "360° Price Benchmarking",
      desc: "Compare what you pay against market rates, specifications and payment terms to find leakage.",
      icon: <BarChart3 className="icon-indigo" />
    },
    {
      title: "Spend Analytics & Standardisation",
      desc: "Item master clean-up, specification optimisation and tail-spend consolidation.",
      icon: <DollarSign className="icon-purple" />
    },
    {
      title: "E-Auctions",
      desc: "Reverse auctions to bring prices down and forward auctions to sell surplus assets.",
      icon: <RefreshCw className="icon-orange" />
    }
  ];



  return (
    <section className="v3-consulting-section section" id="consulting">
      <div className="container">
        
        {/* Header */}
        <div className="v3-section-header text-center">
          <div className="badge-tag-pill">
            <TrendingUp size={14} className="icon-emerald" /> Procurement Consulting
          </div>
          <h2 className="v3-section-title">
            Get the visibility of your procurement savings within 24-48 hours <br />
            <span className="serif-italic text-brand-blue">executed by industry experts</span>
          </h2>
          <p className="v3-section-desc">
            Our consultants work inside your procurement process to find savings and lock them in. With our gain-share model there is no upfront fee: we earn only when the savings are realised.
          </p>
        </div>

        {/* 5 Core Consulting Services Grid */}
        <div className="services-grid mb-16">
          {services.map((srv, idx) => (
            <div key={idx} className="srv-card">
              <div className="srv-icon-box">{srv.icon}</div>
              <h3 className="srv-title">{srv.title}</h3>
              <p className="srv-desc">{srv.desc}</p>
            </div>
          ))}

          {/* 6th Card: Gain Share Banner */}
          <div className="srv-card gain-share-card">
            <div>
              <span className="pill-tag green mb-2">Gain-Share Model</span>
              <h3 className="srv-title text-white">Zero Upfront Risk</h3>
              <p className="srv-desc text-light">
                We only charge a percentage of realized savings. If we don't deliver hard cost savings, you pay nothing.
              </p>
            </div>
            <button onClick={onOpenDemo} className="btn btn-green-pill w-full mt-4">
              Get a free savings assessment <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Savings Form Block */}
        <div className="calc-block">
          <div className="calc-header text-center mb-6">
            <h3 className="calc-block-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              How <img src="/aicev_logo.png" alt="aiCEV" style={{ height: '52px' }} /> can Help you do saving?
            </h3>
          </div>

          <form className="saving-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Enter your phone" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input type="text" placeholder="Enter your designation" />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" placeholder="Enter your company" />
              </div>
              <div className="form-group">
                <label>Upload File (Excel, JSON, Word, PDF)</label>
                <input type="file" multiple accept=".xlsx,.xls,.json,.doc,.docx,.pdf" className="file-input" />
              </div>
            </div>
            <div className="text-center mt-8">
              <button type="submit" className="btn btn-green-pill btn-lg">
                Submit <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>



      </div>

      <style>{`
        .v3-consulting-section {
          background: #ffffff;
          padding-bottom: 24px !important;
          border-top: 1px solid var(--border-light);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 64px;
        }
        .srv-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
        }
        .srv-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
          border-color: #10b981;
          background: #ffffff;
        }
        .gain-share-card {
          background: linear-gradient(135deg, #074193 0%, #04214a 100%);
          border: none;
          color: #ffffff;
        }

        .srv-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .icon-purple { color: #8b5cf6; }
        .icon-orange { color: #f97316; }

        .srv-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .srv-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.55;
        }
        .text-light { color: #cbd5e1 !important; }

        /* Calculator Block */
        .calc-block {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }
        .calc-header {
          margin-bottom: 32px;
        }
        .calc-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #d1fae5;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .calc-block-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
        }
        .calc-block-sub {
          font-size: 0.92rem;
          color: #64748b;
        }

        /* Form Styles */
        .saving-form {
          margin-top: 16px;
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }
        .form-group label {
          font-weight: 600;
          color: #334155;
          font-size: 0.9rem;
        }
        .form-group input {
          padding: 12px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
        }
        .form-group input:focus {
          border-color: #10b981;
        }
        .file-input {
          padding: 8px;
          border: 1px dashed #cbd5e1 !important;
          background: #f8fafc;
        }
        .b-line {
          padding: 4px 0;
          color: #475569;
        }
        .b-line strong {
          color: #0f172a;
        }

        @media (max-width: 992px) {
          .services-grid { grid-template-columns: 1fr; }
          .calc-split-grid { grid-template-columns: 1fr; }
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
      `}</style>
    </section>
  );
}

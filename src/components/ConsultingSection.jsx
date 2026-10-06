import React, { useState } from 'react';
import { TrendingUp, Award, DollarSign, ShieldCheck, ArrowRight, BarChart3, Layers, Calculator, Clock, RefreshCw } from 'lucide-react';

export default function ConsultingSection({ onOpenDemo }) {
  const [spend, setSpend] = useState(25);
  const [categoryRate, setCategoryRate] = useState(0.16);
  const [selectedCatName, setSelectedCatName] = useState('Packaging & Cartons');

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

  const handleCategoryChange = (e) => {
    const val = Number(e.target.value);
    setCategoryRate(val);
    const selectedObj = e.target.options[e.target.selectedIndex].text;
    setSelectedCatName(selectedObj.split(' (')[0]);
  };

  const estimatedSavings = (spend * categoryRate).toFixed(2);

  return (
    <section className="v3-consulting-section section" id="consulting">
      <div className="container">
        
        {/* Header */}
        <div className="v3-section-header text-center">
          <div className="badge-tag-pill">
            <TrendingUp size={14} className="icon-emerald" /> Procurement Consulting
          </div>
          <h2 className="v3-section-title">
            Savings you can see on the <br />
            <span className="serif-italic text-brand-blue">P&L Statement</span>
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

        {/* Savings Calculator Block */}
        <div className="calc-block">
          <div className="calc-header flex items-center gap-3">
            <div className="calc-icon-box">
              <Calculator size={22} className="icon-emerald" />
            </div>
            <div>
              <h3 className="calc-block-title">Interactive Savings Calculator</h3>
              <p className="calc-block-sub">Enter your annual procurement spend and main spend category to see your estimated annual savings.</p>
            </div>
          </div>

          <div className="calc-split-grid">
            
            {/* Input Controls */}
            <div className="calc-controls">
              
              <div className="range-box">
                <div className="range-header flex items-center justify-between">
                  <label className="range-label">Annual Procurement Spend (₹ Crore)</label>
                  <span className="spend-pill">₹{spend} Cr</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="500" 
                  value={spend} 
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="v3-range-input"
                />
                <div className="range-ticks flex justify-between">
                  <span>₹1 Cr</span>
                  <span>₹250 Cr</span>
                  <span>₹500 Cr</span>
                </div>
              </div>

              <div className="select-box">
                <label className="select-label">Main Spend Category</label>
                <select 
                  value={categoryRate} 
                  onChange={handleCategoryChange}
                  className="v3-select-input"
                >
                  <option value={0.16}>Packaging & Cartons (Est. 16% Savings)</option>
                  <option value={0.14}>Electrical Equipment & Cables (Est. 14% Savings)</option>
                  <option value={0.18}>Chemicals & Raw Ingredients (Est. 18% Savings)</option>
                  <option value={0.20}>MRO & Spares (Est. 20% Savings)</option>
                  <option value={0.15}>IT Consumables & Hardware (Est. 15% Savings)</option>
                  <option value={0.21}>Pharma & Lab Supplies (Est. 21% Savings)</option>
                </select>
              </div>

              <p className="disclaimer-text">
                * Estimates are indicative; actual savings depend on your spend profile.
              </p>
            </div>

            {/* Output Display Card */}
            <div className="calc-result-card">
              <div>
                <span className="res-tag">Estimated Annual Savings</span>
                <div className="res-amount">₹{estimatedSavings} Cr</div>
                <p className="res-sub">Direct hard savings added straight back to your P&L</p>

                <div className="res-breakdown-box">
                  <div className="b-line flex justify-between">
                    <span>Category:</span>
                    <strong>{selectedCatName}</strong>
                  </div>
                  <div className="b-line flex justify-between">
                    <span>Est. Savings Rate:</span>
                    <strong className="text-emerald">{(categoryRate * 100).toFixed(0)}%</strong>
                  </div>
                  <div className="b-line flex justify-between">
                    <span>Upfront Fee:</span>
                    <strong>₹0 (Gain-Share)</strong>
                  </div>
                </div>
              </div>

              <button onClick={onOpenDemo} className="btn btn-green-pill w-full btn-lg">
                Get a free savings assessment <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .v3-consulting-section {
          background: #ffffff;
          
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

        .calc-split-grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 40px;
          align-items: center;
        }

        .range-box {
          margin-bottom: 24px;
        }
        .range-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #334155;
        }
        .spend-pill {
          background: #d1fae5;
          color: #047857;
          font-weight: 800;
          font-size: 1rem;
          padding: 4px 12px;
          border-radius: 8px;
        }
        .v3-range-input {
          width: 100%;
          height: 8px;
          background: #cbd5e1;
          border-radius: 4px;
          accent-color: #10b981;
          margin: 12px 0 6px;
        }
        .range-ticks {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 600;
        }

        .select-box {
          margin-bottom: 16px;
        }
        .select-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 8px;
        }
        .v3-select-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          font-size: 0.92rem;
          font-weight: 600;
          color: #0f172a;
        }

        .disclaimer-text {
          font-size: 0.78rem;
          color: #94a3b8;
          font-style: italic;
        }

        /* Result Box */
        .calc-result-card {
          background: #ffffff;
          color: #0f172a;
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }
        .res-tag {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 4px 12px;
          border-radius: 999px;
          display: inline-block;
          margin-bottom: 12px;
        }
        .res-amount {
          font-size: 3.2rem;
          font-weight: 900;
          color: #10b981;
          margin-bottom: 4px;
        }
        .res-sub {
          font-size: 0.82rem;
          color: #475569;
          margin-bottom: 24px;
        }

        .res-breakdown-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px;
          text-align: left;
          font-size: 0.82rem;
          margin-bottom: 24px;
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
      `}</style>
    </section>
  );
}

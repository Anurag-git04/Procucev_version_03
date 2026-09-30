import React, { useState } from 'react';
import { Clock, ShieldCheck, ArrowRight, PiggyBank, Sparkles } from 'lucide-react';

export default function CalculatorSection({ onOpenDemo }) {
  const [spend, setSpend] = useState(25);
  const [categoryRate, setCategoryRate] = useState(0.16);

  const savingsAmount = (spend * categoryRate).toFixed(2);

  return (
    <section className="v3-calc-section section" id="calculator">
      <div className="container">
        
        <div className="calc-card-container">
          
          {/* Top Direct Profit Tagline */}
          <div className="calc-banner-tag">
            <PiggyBank size={22} className="text-emerald" />
            <p>
              <strong>Saving at procurement is direct profit for the company.</strong> Turn spend leakages into hard bottom-line earnings with Gain-Share ROI.
            </p>
          </div>

          <div className="calc-split-grid">
            
            {/* Left Inputs */}
            <div className="calc-left">
              <div className="badge-tag-pill">
                <Sparkles size={14} className="text-orange" /> Interactive ROI Model
              </div>

              <h2 className="calc-main-title">
                Calculate Projected Procurement Savings
              </h2>

              <p className="calc-lead">
                Adjust your annual procurement spend to estimate instant cash savings and turnaround cycle time reduction.
              </p>

              <div className="input-group">
                <div className="input-header">
                  <label>Annual Procurement Spend (₹ Crore)</label>
                  <span className="spend-value">₹{spend} Crore</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="500" 
                  value={spend} 
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="range-input"
                />
              </div>

              <div className="input-group">
                <label className="select-label">Primary Spend Category</label>
                <select 
                  value={categoryRate} 
                  onChange={(e) => setCategoryRate(Number(e.target.value))}
                  className="select-input"
                >
                  <option value={0.16}>Packaging & Cartons (Est. 16% Savings)</option>
                  <option value={0.14}>Industrial Steel & Raw Metals (Est. 14% Savings)</option>
                  <option value={0.18}>Chemicals & Agrochemical Ingredients (Est. 18% Savings)</option>
                  <option value={0.15}>Logistics & Freight Transportation (Est. 15% Savings)</option>
                  <option value={0.20}>MRO & Indirect Consumables (Est. 20% Savings)</option>
                </select>
              </div>

              <div className="no-risk-pill">
                <ShieldCheck size={18} className="text-emerald" />
                <span><strong>No Upfront Fee Model:</strong> Procucev only earns when hard spend savings are realized!</span>
              </div>
            </div>

            {/* Right Output Box */}
            <div className="calc-right">
              <div className="results-card">
                <span className="res-badge">Direct Profit Added Back to Company</span>
                <div className="res-amount-text">₹{savingsAmount} Crore</div>
                <p className="res-sub-text">Direct hard savings impact on bottom line</p>

                <div className="res-list-container">
                  <div className="res-line">
                    <span className="res-label">
                      <Clock size={16} className="text-emerald" /> Procurement TAT Saved:
                    </span>
                    <strong className="res-val">65% (~14 Days Faster)</strong>
                  </div>
                  <div className="res-line">
                    <span className="res-label">
                      <ShieldCheck size={16} className="text-orange" /> Service Fee Risk:
                    </span>
                    <strong className="res-val text-emerald">Zero Upfront (Gain-Share Only)</strong>
                  </div>
                </div>

                <button className="btn btn-orange-dribbble btn-lg btn-full mt-4" onClick={onOpenDemo}>
                  Claim These Savings Now <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .v3-calc-section {
          background: #ffffff;
          padding: 85px 0;
          border-bottom: 1px solid var(--border-light);
        }

        .calc-card-container {
          background: #f8fafc;
          border: 1px solid var(--border-light);
          border-radius: 28px;
          padding: 48px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }

        .calc-banner-tag {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #065f46;
          padding: 14px 20px;
          border-radius: 16px;
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
        }

        .calc-split-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }

        .calc-main-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0f172a;
          margin: 14px 0 10px;
        }
        .calc-lead {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 28px;
        }

        .input-group {
          margin-bottom: 24px;
        }
        .input-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 700;
          font-size: 0.88rem;
          color: #334155;
          margin-bottom: 8px;
        }
        .spend-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: #074193;
        }

        .range-input {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: #cbd5e1;
          outline: none;
          cursor: pointer;
          accent-color: #ff5722;
        }

        .select-label {
          display: block;
          font-weight: 700;
          font-size: 0.88rem;
          color: #334155;
          margin-bottom: 8px;
        }
        .select-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--border-light);
          background: #ffffff;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0f172a;
          outline: none;
        }

        .no-risk-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.85rem;
          color: #475569;
        }

        .results-card {
          background: #ffffff;
          color: #0f172a;
          border-radius: 24px;
          padding: 40px 32px;
          text-align: center;
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 45px rgba(7, 65, 147, 0.08);
        }
        .res-badge {
          font-size: 0.76rem;
          font-weight: 800;
          color: #059669;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .res-amount-text {
          font-family: var(--font-display);
          font-size: 3.2rem;
          font-weight: 800;
          color: #074193;
          margin: 10px 0 6px;
        }
        .res-sub-text {
          font-size: 0.85rem;
          color: #64748b;
          margin-bottom: 24px;
        }

        .res-list-container {
          border-top: 1px solid #f1f5f9;
          padding-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }
        .res-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.84rem;
        }
        .res-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #475569;
        }
        .res-val {
          color: #0f172a;
          font-weight: 700;
        }
        .text-emerald { color: #059669; }
        .text-orange { color: #f97316; }
        .btn-full { width: 100%; }
        .mt-4 { margin-top: 20px; }

        @media (max-width: 992px) {
          .calc-split-grid { grid-template-columns: 1fr; }
          .calc-card-container { padding: 24px; }
        }
      `}</style>
    </section>
  );
}

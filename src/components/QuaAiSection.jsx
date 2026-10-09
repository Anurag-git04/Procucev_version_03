import React, { useState } from 'react';
import { Cpu, Mail, Zap, ArrowRight, CheckCircle2, ShieldCheck, ShoppingBag, Package, Layers, Sparkles } from 'lucide-react';

export default function QuaAiSection({ onOpenDemo }) {
  const [activeForm, setActiveForm] = useState('buyer');

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



        {/* Split Layout: Info on Left, Form on Right */}
        <div className="qua-split-layout">
          
          {/* Left Column: Info Boxes */}
          <div className="qua-info-stack">
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

          {/* Right Column: Registration Form with Toggle */}
          <div className="qua-form-wrapper">
            <div className="form-toggle-bar">
              <button 
                className={`toggle-btn ${activeForm === 'buyer' ? 'active green' : ''}`}
                onClick={() => setActiveForm('buyer')}
              >
                Buyer Registration
              </button>
              <button 
                className={`toggle-btn ${activeForm === 'seller' ? 'active blue' : ''}`}
                onClick={() => setActiveForm('seller')}
              >
                Seller Registration
              </button>
            </div>

            <div className="qua-form-inner">
              {activeForm === 'buyer' && (
                <form className="qua-reg-form w-full" onSubmit={e => e.preventDefault()}>
                  <div className="qua-form-group">
                    <label>Your Name: *</label>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="qua-form-group">
                    <label>Company Name: *</label>
                    <input type="text" placeholder="Company Name" />
                  </div>
                  <div className="qua-form-group input-with-btn">
                    <div style={{ flex: 1 }}>
                      <label>PinCode: *</label>
                      <input type="text" placeholder="Enter PIN code" style={{ width: '100%' }} />
                    </div>
                    <button type="button" className="btn-small green">Validate</button>
                  </div>
                  <div className="qua-form-group">
                    <label>Mobile Number: *</label>
                    <input type="text" placeholder="IND +91 Mobile Number" />
                    <span className="form-hint">( You can access on WhatsApp with this number )</span>
                  </div>
                  <div className="qua-form-group">
                    <label>Company EMail Id: *</label>
                    <input type="email" placeholder="Company EMail Id" />
                  </div>
                  <div className="qua-form-actions">
                    <button type="button" className="btn-outline orange">Send OTPs</button>
                  </div>
                  <div className="qua-form-group">
                    <label>Mobile OTP: *</label>
                    <input type="text" placeholder="Enter Mobile OTP" />
                  </div>
                  <div className="qua-form-group">
                    <label>Email OTP: *</label>
                    <input type="text" placeholder="Enter EMail OTP" />
                  </div>
                  <div className="qua-form-actions">
                    <button type="button" className="btn-outline green-solid">Validate OTPs</button>
                  </div>
                  
                  <div className="qua-form-submit">
                    <button type="submit" className="submit-btn">SUBMIT</button>
                    <div className="form-note">Note : If Already Registered! Click here for <a href="#login">Login</a></div>
                    <button type="reset" className="reset-btn">Reset</button>
                  </div>
                </form>
              )}

              {activeForm === 'seller' && (
                <form className="qua-reg-form w-full" onSubmit={e => e.preventDefault()}>
                  <div className="qua-form-group">
                    <label>Company Name: *</label>
                    <input type="text" placeholder="Company Name" />
                  </div>
                  <div className="qua-form-group">
                    <label>Your Name: *</label>
                    <input type="text" placeholder="Enter Name" />
                  </div>
                  <div className="qua-form-group">
                    <label>GSTIN (Format: 88AAAAA8888A8AA)</label>
                    <input type="text" placeholder="GSTIN" />
                  </div>
                  <div className="qua-form-group">
                    <label>Product/Service Details: (Multiple products seperated by comma) *</label>
                    <input type="text" placeholder="Product/Service Details" />
                  </div>
                  <div className="qua-form-group input-with-btn">
                    <div style={{ flex: 1 }}>
                      <label>PinCode: *</label>
                      <input type="text" placeholder="Enter PIN code" style={{ width: '100%' }} />
                    </div>
                    <button type="button" className="btn-small green">Validate</button>
                  </div>
                  <div className="qua-form-group">
                    <label>EMail Id: *</label>
                    <input type="email" placeholder="EMail Id" />
                  </div>
                  <div className="qua-form-group">
                    <label>Mobile Number: *</label>
                    <input type="text" placeholder="IND +91 Mobile Number" />
                    <span className="form-hint">( You can access on WhatsApp with same Number )</span>
                  </div>
                  <div className="qua-form-actions">
                    <button type="button" className="btn-outline orange">Send OTPs</button>
                  </div>
                  <div className="qua-form-group">
                    <label>Email OTP: *</label>
                    <input type="text" placeholder="Enter Email OTP" />
                  </div>
                  <div className="qua-form-group">
                    <label>Mobile OTP: *</label>
                    <input type="text" placeholder="Enter Mobile OTP" />
                  </div>
                  <div className="qua-form-actions">
                    <button type="button" className="btn-outline green-solid">Validate OTPs</button>
                  </div>
                  
                  <div className="qua-form-submit">
                    <button type="submit" className="submit-btn">SUBMIT</button>
                    <div className="form-note">Note : If Already Registered! Click here for <a href="#login">Login</a></div>
                    <button type="reset" className="reset-btn">Reset</button>
                  </div>
                </form>
              )}
            </div>
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

        /* ── Split Layout ─────────────────────────── */
        .qua-split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
        }
        .qua-info-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .qua-info-stack .role-card { flex: 1; }

        /* ── Form Wrapper ────────────────────────── */
        .qua-form-wrapper {
          background: #ffffff;
          border: 1px solid #D1FAE5;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 4px 20px rgba(16,185,129,0.07);
          display: flex;
          flex-direction: column;
        }

        /* ── Toggle Bar ──────────────────────────── */
        .form-toggle-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #ECFDF5;
          border-radius: 12px;
          padding: 5px;
          margin-bottom: 22px;
          border: 1px solid #A7F3D0;
        }
        .toggle-btn {
          padding: 10px 0;
          border: none;
          background: transparent;
          border-radius: 9px;
          font-weight: 700;
          font-size: 0.85rem;
          color: #64748b;
          cursor: pointer;
          transition: all 0.25s;
          letter-spacing: 0.2px;
        }
        .toggle-btn.active {
          background: #ffffff;
          color: #064E3B;
          box-shadow: 0 2px 8px rgba(16,185,129,0.18);
        }
        .toggle-btn.active.green {
          background: #D1FAE5;
          color: #047857;
          box-shadow: 0 2px 8px rgba(16,185,129,0.2);
        }
        .toggle-btn.active.blue {
          background: #DBEAFE;
          color: #1d4ed8;
          box-shadow: 0 2px 8px rgba(29,78,216,0.15);
        }

        /* ── Role Cards ──────────────────────────── */
        .role-card {
          border-radius: 16px;
          padding: 26px 24px;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
        .buyer-bg {
          background: #F0FDF4;
          border-color: #BBF7D0;
        }
        .supplier-bg {
          background: #EFF6FF;
          border-color: #BFDBFE;
        }
        .role-tag {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          letter-spacing: 0.3px;
        }
        .role-tag.green { background: #D1FAE5; color: #047857; }
        .role-tag.blue { background: #DBEAFE; color: #1d4ed8; }
        .role-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }
        .role-desc {
          font-size: 0.87rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }

        /* ── Registration Form ───────────────────── */
        .qua-reg-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
        }
        .qua-form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .qua-form-group label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #334155;
          letter-spacing: 0.1px;
        }
        .qua-form-group input {
          padding: 9px 13px;
          border: 1.5px solid #CBD5E1;
          border-radius: 9px;
          font-family: inherit;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          background: #F8FAFC;
          color: #0f172a;
        }
        .qua-form-group input:focus {
          border-color: #10b981;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(16,185,129,0.12);
        }
        .qua-form-group input::placeholder { color: #94A3B8; }
        .form-hint {
          font-size: 0.7rem;
          color: #64748B;
          margin-top: 2px;
        }
        .input-with-btn {
          flex-direction: row;
          align-items: flex-end;
          gap: 10px;
        }
        .input-with-btn > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .btn-small {
          padding: 9px 16px;
          border: none;
          border-radius: 9px;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          height: 38px;
          white-space: nowrap;
        }
        .btn-small.green { background: #10b981; color: white; }

        .qua-form-actions { margin: 2px 0; }
        .btn-outline {
          padding: 8px 22px;
          border-radius: 9px;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s;
        }
        .btn-outline:hover { opacity: 0.88; }
        .btn-outline.orange { background: #1d4ed8; color: #fff; }
        .btn-outline.green-solid { background: #10b981; color: white; }

        .qua-form-submit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-top: 12px;
          padding-top: 14px;
          border-top: 1px solid #D1FAE5;
        }
        .submit-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #10b981 0%, #047857 100%);
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
        }
        .submit-btn:hover { opacity: 0.9; }
        .reset-btn {
          padding: 6px 28px;
          background: transparent;
          color: #94A3B8;
          border: 1.5px solid #CBD5E1;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.82rem;
          cursor: pointer;
          transition: 0.2s;
        }
        .reset-btn:hover { background: #F8FAFC; color: #64748B; }
        .form-note { font-size: 0.72rem; color: #94A3B8; font-weight: 500; }
        .form-note a { color: #10b981; text-decoration: underline; }

        .flex { display: flex; }
        .justify-between { justify-content: space-between; }
        .items-center { align-items: center; }
        .w-full { width: 100%; }

        .btn-blue-pill {
          background: #1d4ed8;
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

        @media (max-width: 992px) {
          .gmt-bfs-grid { grid-template-columns: 1fr; }
          .qua-split-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

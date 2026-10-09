import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    roleType: 'Buyer',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="v3-contact-section section" id="contact">
      <div className="container">

        {/* Header */}
        <div className="v3-section-header text-center">
          <div className="badge-tag-pill">
            <Mail size={14} className="icon-emerald" /> Contact Us
          </div>
          <h2 className="v3-section-title">
            Let's talk <span className="serif-italic text-brand-blue">procurement</span>
          </h2>
          <p className="v3-section-desc">
            Tell us what you need and the right team will get back to you within one working day.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left Info Box */}
          <div className="contact-info-card">
            <h3 className="card-title">Direct Contact Channels</h3>

            <div className="contact-lines-list">
              <div className="contact-item">
                <div className="item-icon-box bg-green">
                  <Mail size={18} className="icon-emerald" />
                </div>
                <div>
                  <span className="item-label">Enterprise (eQua AI) General Enquiries</span>
                  <a href="mailto:info@procucev.com" className="item-val">info@procucev.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="item-icon-box bg-blue">
                  <Send size={18} className="icon-blue" />
                </div>
                <div>
                  <span className="item-label">Send Buying Requirements</span>
                  <a href="mailto:RFQ@procucev.com" className="item-val">RFQ@procucev.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="item-icon-box bg-slate">
                  <Phone size={18} className="icon-slate" />
                </div>
                <div>
                  <span className="item-label">Phone Support</span>
                  <a href="tel:+918045678900" className="item-val">+91 80 4567 8900</a>
                </div>
              </div>
            </div>

            <div className="address-box">
              <MapPin size={20} className="icon-emerald" />
              <div>
                <strong>Head Office:</strong>
                <p>302, Sharada, AECS Layout, Kundalahalli, Bengaluru 560037, India</p>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="success-state text-center">
                <div className="success-icon-circle">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="success-heading">Enquiry Submitted!</h3>
                <p className="success-sub">
                  Thank you for reaching out to Procucev. Our procurement specialists will get back to you within one working day.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-green-pill mt-4">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">
                <h3 className="form-heading">Send an Enquiry</h3>

                <div className="form-row-2">
                  <div className="field-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="field-group">
                    <label>Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="field-group">
                    <label>Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="field-group">
                    <label>Company *</label>
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label>I am a *</label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                  >
                    <option value="Buyer">Buyer</option>
                    <option value="Supplier">Supplier</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Partner">Partner</option>
                  </select>
                </div>

                <div className="field-group">
                  <label>Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your requirement or procurement spend..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-green-pill w-full btn-lg">
                  Submit Enquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Footer Copyright */}
      <footer className="v3-bottom-footer">
        <div className="container flex items-center justify-between">
          <span>© 2026 Procucev Enterprise Solutions Pvt Ltd. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      <style>{`
        .v3-contact-section {
          background: #f8fafc;
          padding: 85px 0 0;
          border-top: 1px solid var(--border-light);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 36px;
          margin-bottom: 80px;
        }

        .contact-info-card {
          background: #ffffff;
          color: #0f172a;
          border-radius: 24px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }
        .card-title {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .contact-lines-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .item-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .bg-green { background: rgba(16, 185, 129, 0.1); }
        .bg-blue { background: rgba(14, 165, 233, 0.1); }
        .bg-indigo { background: rgba(99, 102, 241, 0.1); }
        .bg-slate { background: #f8fafc; border: 1px solid #e2e8f0; }
        .icon-slate { color: #94a3b8; }

        .item-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
        }
        .item-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
        }
        .item-val:hover { color: #10b981; }

        .address-box {
          border-top: 1px solid #e2e8f0;
          padding-top: 20px;
          display: flex;
          gap: 12px;
          font-size: 0.85rem;
          color: #475569;
        }

        /* Form Card */
        .contact-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }
        .form-heading {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .field-group {
          margin-bottom: 18px;
        }
        .field-group label {
          display: block;
          font-size: 0.75rem;
          font-weight: 800;
          color: #334155;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .field-group input,
        .field-group select,
        .field-group textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          font-size: 0.9rem;
          color: #0f172a;
          outline: none;
        }
        .field-group input:focus,
        .field-group select:focus,
        .field-group textarea:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
        }

        .success-state {
          padding: 40px 20px;
        }
        .success-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #d1fae5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .success-heading {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .success-sub {
          font-size: 0.92rem;
          color: #64748b;
        }

        /* Bottom Footer */
        .v3-bottom-footer {
          background: #ffffff;
          color: #475569;
          font-size: 0.82rem;
          padding: 24px 0;
          border-top: 1px solid var(--border-light);
        }
        .v3-bottom-footer a {
          color: #0f172a;
          font-weight: 600;
        }
        .v3-bottom-footer a:hover {
          color: #10b981;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

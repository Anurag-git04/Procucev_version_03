import React from 'react';
import { ArrowUpRight, Heart, ShieldCheck, Mail, Phone, MapPin, Globe, Share2, FileText } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="v3-footer-light">
      <div className="container">
        
        {/* Banner inside Footer */}
        <div className="footer-cta-banner-light">
          <div className="banner-left-info">
            <span className="banner-pill-badge-mint">
              <Heart size={12} className="fill-mint" /> Made with the Love of Procurement
            </span>
            <h3 className="banner-main-heading">
              Ready to automate your source-to-pay workflow?
            </h3>
            <p className="banner-sub-text">
              Saving at procurement is the direct profit for company. Join 500+ Cr enterprise leaders operating with zero human intervention.
            </p>
          </div>
          <button className="btn btn-green-pill btn-lg banner-action-btn" onClick={onOpenDemo}>
            Join Marketplace Now <ArrowUpRight size={18} />
          </button>
        </div>

        {/* 5 Column Grid matching Light Theme */}
        <div className="footer-columns-grid">
          
          <div className="col-brand-wide">
            <div className="brand-logo-container">
              <img src="/procucev-logo.png" alt="Procucev Logo" className="footer-logo-img" />
            </div>
            <p className="brand-description-text">
              Procucev is India's premier autonomous procurement & sourcing platform. We empower retail, e-commerce, and consumer brands with AI-driven PR-to-Comparison automation.
            </p>
            <div className="brand-contacts-list">
              <div className="contact-line">
                <MapPin size={14} className="icon-mint" />
                <span>Kundalahalli, Bengaluru • Gurugram • Mumbai</span>
              </div>
              <div className="contact-line">
                <Mail size={14} className="icon-mint" />
                <a href="mailto:info@procucev.com">info@procucev.com</a>
              </div>
              <div className="contact-line">
                <Phone size={14} className="icon-mint" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Platform</h4>
            <ul className="footer-links-list">
              <li><a href="#">Procucev Overview</a></li>
              <li><a href="#marketplace">QUA AI Agent</a></li>
              <li><a href="#marketplace">Autonomous RFQ</a></li>
              <li><a href="#calculator">ROI & Profit Calculator</a></li>
              <li><a href="#industries">Integrations & API</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links-list">
              <li><a href="#marketplace">Intake & Orchestration</a></li>
              <li><a href="#marketplace">Strategic Sourcing</a></li>
              <li><a href="#marketplace">Supplier Management</a></li>
              <li><a href="#marketplace">Contract Analysis</a></li>
              <li><a href="#marketplace">Risk & Compliance</a></li>
              <li><a href="#marketplace">Invoice Duplicate Check</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title text-blue">Tech & Company</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Procucev</a></li>
              <li><a href="#capabilities">Consulting Services</a></li>
              <li><a href="#marketplace">QUA AI Platform</a></li>
              <li><a href="#industries">Retail & E-commerce</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-app-box-light">
            <span className="app-badge-mint">Get the app</span>
            <h5 className="app-heading-dark">Procucev Mobile</h5>
            <p className="app-text-muted">
              Download the mobile app to have visibility across all RFQs, contract approvals, and supplier quotes anywhere.
            </p>
            <button className="btn btn-green-pill app-cta-btn" onClick={onOpenDemo}>
              Join Marketplace
            </button>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom-row-light">
          <div className="copyright-left">
            <span>© Procucev 2026. All rights reserved.</span>
            <span className="bottom-divider">|</span>
            <span className="cert-span">
              <ShieldCheck size={14} className="icon-mint" /> Enterprise ISO/IEC 27001 Certified
            </span>
          </div>

          <div className="policy-links-mid">
            <a href="#security">Security</a>
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Settings</a>
          </div>

          <div className="social-icons-right">
            <a href="#" className="social-circle-light" aria-label="Globe"><Globe size={16} /></a>
            <a href="#" className="social-circle-light" aria-label="Share"><Share2 size={16} /></a>
            <a href="#" className="social-circle-light" aria-label="Docs"><FileText size={16} /></a>
          </div>
        </div>

      </div>

      <style>{`
        .v3-footer-light {
          background: #ffffff;
          color: #0f172a;
          padding: 65px 0 30px;
          border-top: 1px solid var(--border-light);
        }

        .footer-cta-banner-light {
          background: linear-gradient(135deg, #074193 0%, #04285c 100%);
          border-radius: 24px;
          padding: 36px 40px;
          margin-bottom: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border: 1px solid rgba(7, 65, 147, 0.2);
          box-shadow: 0 20px 45px rgba(7, 65, 147, 0.15);
        }

        .banner-left-info {
          max-width: 660px;
        }
        .banner-pill-badge-mint {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          border-radius: 20px;
          background: rgba(52, 211, 153, 0.2);
          color: #34d399;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }
        .fill-mint { fill: #34d399; }

        .banner-main-heading {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: #ffffff;
          font-weight: 400;
          margin-bottom: 8px;
        }
        .banner-sub-text {
          color: #cbd5e1;
          font-size: 0.92rem;
        }

        /* 5 Columns Grid */
        .footer-columns-grid {
          display: grid;
          grid-template-columns: 2fr repeat(3, 1fr) 1.5fr;
          gap: 36px;
          padding-bottom: 45px;
          border-bottom: 1px solid #e2e8f0;
        }

        .col-brand-wide {
          display: flex;
          flex-direction: column;
        }
        .brand-logo-container {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 6px 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          width: fit-content;
          box-shadow: var(--shadow-sm);
        }
        .footer-logo-img {
          height: 30px;
          width: auto;
          object-fit: contain;
        }

        .brand-description-text {
          color: #64748b;
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .brand-contacts-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.8rem;
        }
        .contact-line {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
        }
        .contact-line a {
          color: #334155;
          text-decoration: none;
        }
        .contact-line a:hover { color: #074193; }
        .icon-mint { color: #10b981; }

        .footer-col {
          display: flex;
          flex-direction: column;
        }
        .footer-col-title {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0f172a;
          margin-bottom: 16px;
        }
        .footer-col-title.text-blue { color: #074193; }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links-list a {
          color: #64748b;
          font-size: 0.82rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .footer-links-list a:hover {
          color: #074193;
        }

        .col-app-box-light {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .app-badge-mint {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #059669;
          font-weight: 700;
        }
        .app-heading-dark {
          font-size: 0.95rem;
          color: #0f172a;
          margin: 4px 0 6px;
          font-weight: 800;
        }
        .app-text-muted {
          font-size: 0.76rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 14px;
        }
        .app-cta-btn {
          width: 100%;
          font-size: 0.8rem;
          padding: 8px;
        }

        .footer-bottom-row-light {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          font-size: 0.78rem;
          color: #64748b;
          flex-wrap: wrap;
          gap: 16px;
        }
        .copyright-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .bottom-divider { color: #cbd5e1; }
        .cert-span {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #334155;
        }

        .policy-links-mid {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .policy-links-mid a {
          color: #64748b;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .policy-links-mid a:hover { color: #074193; }

        .social-icons-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .social-circle-light {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .social-circle-light:hover {
          background: #10b981;
          color: #ffffff;
          border-color: #10b981;
        }

        @media (max-width: 992px) {
          .footer-cta-banner-light {
            flex-direction: column;
            text-align: center;
          }
          .footer-columns-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-bottom-row-light {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

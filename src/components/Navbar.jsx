import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X, Sparkles, Globe } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="v3-header-container">
      {/* Floating Pill Capsule Navbar */}
      <div className="v3-pill-nav-wrapper">
        <div className="v3-pill-nav">

          {/* Logo */}
          <a href="#" className="brand-logo-link">
            <img
              src="/procucev-logo.png"
              alt="Procucev Logo"
              className="brand-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="brand-fallback-light" style={{ display: 'none' }}>
              <span className="p-badge-icon">P</span>
              <span className="p-brand-text">PROCUCEV</span>
            </div>
          </a>

          {/* Desktop Nav Links - Single Line Pill Navigation */}
          <nav className="pill-menu-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About us</a>
            <a href="#qua-ai" className="nav-link">Qua AI</a>
            <a href="#equa-ai" className="nav-link">eQua AI</a>
            <a href="#dpsnxt" className="nav-link">DPSNXT</a>
            <a href="#procpx" className="nav-link">proCPX</a>
            <a href="#consulting" className="nav-link">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><img src="/aicev_logo.png" alt="aiCEV" style={{ height: '28px' }} /></span>
            </a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#contact" className="nav-link">Contact us</a>
          </nav>

          {/* Right Action Button: Mint Green Pill */}
          <div className="pill-actions">
            <button className="btn btn-green-pill" onClick={onOpenDemo}>
              Raise an RFQ <ArrowUpRight size={15} />
            </button>
            <button className="mobile-menu-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About us</a>
          <a href="#qua-ai" onClick={() => setMobileMenuOpen(false)}>Qua AI</a>
          <a href="#equa-ai" onClick={() => setMobileMenuOpen(false)}>eQua AI</a>
          <a href="#dpsnxt" onClick={() => setMobileMenuOpen(false)}>DPSNXT</a>
          <a href="#procpx" onClick={() => setMobileMenuOpen(false)}>proCPX</a>
          <a href="#consulting" onClick={() => setMobileMenuOpen(false)}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><img src="/aicev_logo.png" alt="aiCEV" style={{ height: '28px' }} /></span>
          </a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)}>Team</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact us</a>
          <button className="btn btn-green-pill mt-2" onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}>
            Raise an RFQ, it's free <ArrowUpRight size={15} />
          </button>
        </div>
      )}

      <style>{`
        .v3-header-container {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          padding-top: 8px;
        }

        .v3-top-strip {
          padding: 4px 0;
          font-size: 0.78rem;
          color: #64748b;
          margin-bottom: 8px;
        }
        .strip-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .strip-left {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }
        .text-orange { color: #f97316; }
        .strip-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          padding: 2px 10px;
          border-radius: 12px;
          font-size: 0.72rem;
          font-weight: 700;
        }

        /* Floating Pill Navbar Capsule */
        .v3-pill-nav-wrapper {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .v3-pill-nav {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
          border-radius: 999px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .brand-logo-link {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .brand-img {
          height: 38px;
          width: auto;
          object-fit: contain;
        }
        .brand-fallback-light {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .p-badge-icon {
          width: 32px;
          height: 32px;
          background: #10b981;
          color: #fff;
          font-weight: 800;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .p-brand-text {
          font-family: var(--font-display);
          font-weight: 800;
          color: #0f172a;
          font-size: 1.2rem;
        }

        /* Nav links in pill */
        .pill-menu-links {
          display: flex;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
        }
        .nav-link {
          color: #475569;
          font-weight: 700;
          font-size: 0.8rem;
          text-decoration: none;
          letter-spacing: 0.3px;
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid transparent;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover {
          color: #f97316;
          background: rgba(249, 115, 22, 0.08);
          border-color: rgba(249, 115, 22, 0.2);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.12);
        }
        .nav-link.active {
          color: #ffffff;
          background: linear-gradient(135deg, #f97316 0%, #ff5722 100%);
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.3);
        }

        .nav-dd-container {
          position: relative;
        }
        .nav-dd-btn {
          background: transparent;
          border: 1px solid transparent;
          color: #475569;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.3px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          border-radius: 20px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-dd-btn:hover, .nav-dd-container:hover .nav-dd-btn {
          color: #f97316;
          background: rgba(249, 115, 22, 0.08);
          border-color: rgba(249, 115, 22, 0.2);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.12);
        }

        .dd-popup-light {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 260px;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 16px;
          padding: 10px;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: popFade 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes popFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dd-item {
          padding: 9px 12px;
          border-radius: 12px;
          text-decoration: none;
          color: #334155;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .dd-item:hover {
          background: rgba(249, 115, 22, 0.06);
          border-color: rgba(249, 115, 22, 0.15);
          transform: translateX(4px);
        }
        .dd-item strong {
          display: block;
          font-size: 0.82rem;
          color: #0f172a;
          transition: color 0.2s ease;
        }
        .dd-item:hover strong {
          color: #f97316;
        }
        .dd-item small {
          display: block;
          font-size: 0.72rem;
          color: #64748b;
        }

        .pill-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .mobile-menu-trigger {
          display: none;
          background: transparent;
          border: none;
          color: #0f172a;
          cursor: pointer;
          padding: 4px;
        }

        .mobile-nav-drawer {
          background: #ffffff;
          margin: 8px 24px;
          padding: 16px;
          border-radius: 20px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mobile-nav-drawer a {
          color: #334155;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.88rem;
        }

        @media (max-width: 1080px) {
          .pill-menu-links { display: none; }
          .mobile-menu-trigger { display: block; }
        }
      `}</style>
    </header>
  );
}

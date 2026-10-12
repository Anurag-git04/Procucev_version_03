import React, { useState } from 'react';
import {
  FileText,
  Send,
  Gavel,
  TrendingDown,
  Users,
  CheckCircle2,
  Receipt,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Cloud,
  Layers,
  BarChart3,
  Check,
  Building2,
  Clock,
  Coins,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  Zap,
  Cpu,
  RefreshCw,
  Sliders,
  DollarSign
} from 'lucide-react';

export default function DigitalProcurementPage({ onOpenDemo, onNavigateHome }) {
  const [activeModule, setActiveModule] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const modules = [
    {
      id: 'pr-workbench',
      name: 'PR Workbench',
      tag: 'Requisition Intelligence',
      icon: FileText,
      color: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      headline: 'Automated Purchase Requisition & Approval Automation',
      desc: 'Centralize and accelerate purchase requests from every department. Eliminate manual paperwork, enforce budget controls, and automatically map requests to pre-approved categories.',
      highlights: [
        'Multi-tiered dynamic approval hierarchies based on cost centers & thresholds',
        'Direct catalog lookup and automated category taxonomy mapping',
        'Instant 1-click conversion of approved PRs into competitive RFQs or POs',
        'Zero duplicate data entry with real-time audit logging for complete compliance'
      ],
      metrics: { primary: '80% Faster', label: 'PR Approval Turnaround' }
    },
    {
      id: 'rfq-management',
      name: 'RFQ Management',
      tag: 'Strategic Dispatch',
      icon: Send,
      color: '#F97316',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      headline: 'Automated Multi-Supplier Quote Orchestration',
      desc: 'Effortlessly launch, track, and analyze multi-item Requests for Quotation (RFQs). Distribute specs to qualified vendor panels and evaluate quotes through automated side-by-side matrices.',
      highlights: [
        'Pre-configured templates for Raw Materials, Capex, MRO, and Services',
        'Automated dispatch to verified category suppliers with encrypted bids',
        'Side-by-side automated comparison matrices for technical and commercial bids',
        'Real-time response tracking with automated deadline countdowns and alerts'
      ],
      metrics: { primary: '3x More', label: 'Competitive Supplier Bids' }
    },
    {
      id: 'e-auctions',
      name: 'E-Auctions',
      tag: 'Real-Time Dynamic Bidding',
      icon: Gavel,
      color: '#8B5CF6',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      headline: 'Forward & Reverse Auctions for Accelerated Price Discovery',
      desc: 'Drive real-time competitive bidding in high-stakes procurement. Enable qualified suppliers to compete transparently, driving maximum cost reduction within a compressed timeframe.',
      highlights: [
        'Supports English, Dutch, Japanese reverse auctions and sealed-bid formats',
        'Live dynamic rank ticker, real-time bid decrements, and overtime extensions',
        'Strict compliance rules preventing collusion with masked supplier identities',
        'Instant award letters and contract generation upon auction completion'
      ],
      metrics: { primary: '8-18%', label: 'Additional Cost Savings' }
    },
    {
      id: 'dynamic-pricing',
      name: 'Dynamic Pricing',
      tag: 'Proprietary Market Intelligence',
      icon: TrendingDown,
      color: '#059669',
      bgColor: 'rgba(5, 150, 105, 0.1)',
      headline: 'Price Discovery & Market Benchmark Intelligence',
      desc: 'A unique signature feature of Procucev facilitating transparent Price Discovery. Real-time updated pricing from our qualified vendor panel shields businesses from commodity volatility and eliminates repetitive negotiations.',
      highlights: [
        'Real-time market benchmark analysis across 50,000+ pan-India verified suppliers',
        'Protects operational margins against sudden raw material price surges',
        'Eliminates repeated quotations with pre-negotiated, index-linked price baskets',
        'Actionable price trend forecasting powered by category intelligence'
      ],
      metrics: { primary: 'Real-Time', label: 'Updated Price Benchmarks' }
    },
    {
      id: 'sourcing-supplier',
      name: 'Sourcing & Supplier Management',
      tag: '360° Supplier Ecosystem',
      icon: Users,
      color: '#0EA5E9',
      bgColor: 'rgba(14, 165, 233, 0.1)',
      headline: 'End-to-End Onboarding, Vetting & Category Mapping',
      desc: 'Access a vetted panel of reliable enterprise suppliers. Manage digital onboarding, statutory compliance checks, quality certifications, and performance scorecards from a single dashboard.',
      highlights: [
        'Rigorous technical, financial, and regulatory compliance screening (GST, MSME, ISO)',
        'Centralized digital document vault with automated expiry alerts',
        'Dynamic vendor performance scorecards tracking OTIF delivery, quality, and responsiveness',
        'Dedicated category specialists providing proactive supplier development'
      ],
      metrics: { primary: '50,000+', label: 'Verified Vendor Network' }
    },
    {
      id: 'po-management',
      name: 'PO Management',
      tag: 'Order Execution',
      icon: Sliders,
      color: '#EA580C',
      bgColor: 'rgba(234, 88, 12, 0.1)',
      headline: 'Streamlined Purchase Order Generation & Lifecycle Tracking',
      desc: 'Convert awarded quotes into formal legal Purchase Orders with zero friction. Enable digital supplier acknowledgments, delivery milestone schedules, and live shipment tracking.',
      highlights: [
        'Single-click automated PO generation directly from approved RFQ or auction outcome',
        'Digital vendor acknowledgment tracking with delivery timeline commitments',
        'Milestone-based delivery scheduling and advance payment linkage',
        'Real-time dispatch, transit, and warehouse gate-in tracking'
      ],
      metrics: { primary: '65% Less', label: 'Order Processing Time' }
    },
    {
      id: 'invoice-matching',
      name: 'Invoice Matching & Payment',
      tag: '3-Way Reconciliation',
      icon: Receipt,
      color: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      headline: 'Automated 3-Way Reconciliation (PO vs. GRN vs. Invoice)',
      desc: 'Eliminate billing disputes and fraudulent invoices. Our intelligent engine matches line items, quantities, and pricing between Purchase Orders, Goods Receipt Notes (GRN), and vendor invoices.',
      highlights: [
        'Automated tolerance checks for quantity and unit price variance',
        'Automated routing of exceptions to category managers for instant clearance',
        'Seamless bidirectional sync with ERPs (SAP, Oracle, Tally, Zoho) for automated payment runs',
        'Audit-ready electronic records ensuring 100% tax and GST compliance'
      ],
      metrics: { primary: '100%', label: 'Reconciliation Accuracy' }
    }
  ];

  const differentiators = [
    {
      icon: TrendingDown,
      color: '#10B981',
      title: 'Dynamic Pricing',
      desc: 'Its unique feature facilitates you with Price Discovery. Real-time updated prices by our qualified vendor panel avoid repeated quotations, negotiations, and volatility surprises.'
    },
    {
      icon: Coins,
      color: '#F97316',
      title: 'Cost Optimization',
      desc: 'Achieve significant cost savings through Strategic Sourcing, Expert Negotiation, and rigorous Category Management excellence tailored to your spend categories.'
    },
    {
      icon: Zap,
      color: '#8B5CF6',
      title: 'Category Expertise',
      desc: 'Our team of seasoned procurement professionals supports you in vendor sourcing, technical negotiation, and ongoing supplier performance diagnostics.'
    },
    {
      icon: ShieldCheck,
      color: '#059669',
      title: 'Verified Vendor Network',
      desc: 'Suppliers are validated on defined technical, commercial, and statutory compliance criteria, ensuring trustworthy partnerships and on-time fulfillment.'
    },
    {
      icon: Cloud,
      color: '#0EA5E9',
      title: 'Cloud-Based In-House Tech',
      desc: 'Procucev uses an in-house proprietary cloud platform to ensure streamlined processes, customized to your internal controls without compromising data security.'
    },
    {
      icon: Layers,
      color: '#EA580C',
      title: 'Seamless ERP Integration',
      desc: 'Pre-built connectors integrate smoothly with major ERPs and accounting systems (SAP, Oracle, Tally, Microsoft Dynamics) for frictionless data flow.'
    }
  ];

  const benefits = [
    {
      title: 'Boosted Procurement Efficiency',
      metric: '75%',
      sub: 'Faster Cycle',
      desc: 'Eliminate bottlenecks across the source-to-pay lifecycle with automated workflows, instant quote comparisons, and digital approvals.'
    },
    {
      title: 'Significant Cost Optimization',
      metric: '12-25%',
      sub: 'Cumulative Savings',
      desc: 'Leverage competitive bidding, real-time e-auctions, and commodity price benchmarks to achieve bottom-line financial impact.'
    },
    {
      title: 'Access to Trusted Vendor Base',
      metric: '50,000+',
      sub: 'Pre-Vetted Suppliers',
      desc: 'Expand your supply chain reach with pre-screened manufacturers and distributors validated for quality and financial stability.'
    },
    {
      title: 'Automated Price Discovery',
      metric: '100%',
      sub: 'Transparent Market Rates',
      desc: 'Gain instant visibility into prevailing market rates and benchmark prices across raw materials, packaging, and indirect categories.'
    },
    {
      title: 'Improved Sourcing Speed & Accuracy',
      metric: '48h',
      sub: 'Quote Turnaround Time',
      desc: 'Standardized RFQ specifications ensure zero miscommunication, leading to highly accurate quotes and rapid order execution.'
    },
    {
      title: 'Data-Driven Decision Making',
      metric: '360°',
      sub: 'Spend Visibility',
      desc: 'Actionable executive dashboards reveal spend patterns, vendor rating trends, and savings opportunities across business units.'
    }
  ];

  const faqs = [
    {
      q: 'What is Digital Procurement Services (DPS)?',
      a: 'DPS is a cloud-based, end-to-end procurement solution combined with expert managed services that digitizes and optimizes your entire Source-to-Procure-to-Pay (S2P2P) cycle.'
    },
    {
      q: 'How is DPS different from other S2P platforms?',
      a: 'DPS is a tailor-made solution built for strategic procurement. It enables smarter sourcing decisions through analytics, competitive bidding (e-auctions), Dynamic Pricing, a pre-vetted quality vendor base, and human category expertise—capabilities most standard ERPs do not offer out-of-the-box.'
    },
    {
      q: 'Can DPS integrate with our existing ERP or finance system?',
      a: 'Yes. DPS is engineered for seamless bidirectional integration with major enterprise ERP platforms including SAP, Oracle, Microsoft Dynamics, Tally, and Zoho, ensuring procurement data flows effortlessly across accounting systems.'
    },
    {
      q: 'Is there expert support included or is it just a platform?',
      a: 'DPS includes dedicated expert-led services along with the software platform. Our procurement specialists help configure sourcing strategies, run complex e-auctions, onboard suppliers, and guide your team through cost-saving initiatives. It’s software plus elite expertise.'
    },
    {
      q: 'Do we need to train our team to use DPS?',
      a: 'Minimal training is required. DPS features an intuitive, consumer-grade user interface. We provide hands-on onboarding workshops, role-based walkthroughs, and ongoing technical support to ensure rapid adoption.'
    },
    {
      q: 'What kind of savings can we expect?',
      a: 'Organizations using DPS typically report 12% to 25% cost savings through heightened sourcing competition, transparency, and benchmark intelligence. Exact results depend on category spend volume and initial procurement maturity.'
    },
    {
      q: 'Is DPS suitable for all sizes of enterprises?',
      a: 'DPS is scalable across mid-market and enterprise organizations. Whether you operate decentralized regional procurement or centralized multi-location sourcing, DPS adapts flexibly to your organizational structure.'
    },
    {
      q: 'Is vendor onboarding included?',
      a: 'Yes. DPS includes complete vendor onboarding support. We assist in qualifying, vetting, and training your suppliers using a structured onboarding protocol backed by our pan-India network.'
    }
  ];

  const currentMod = modules[activeModule];

  return (
    <div className="v3-dps-page">
      {/* Hero Section */}
      <section className="v3-dps-hero">
        <div className="container v3-dps-hero-inner">
          <div className="v3-dps-hero-capsule">
            <span className="dot-pulse"></span>
            <span>Integrated S2P Technology & Service Platform</span>
          </div>

          <h1 className="v3-dps-hero-title">
            Digital Procurement Services <span className="gradient-pill-text">DPS (S2P)</span>
          </h1>

          <p className="v3-dps-hero-subtitle">
            Make your procurement a strategic driver. Faster Procurement. Smarter Insights. Lower Costs.
          </p>

          <p className="v3-dps-hero-desc">
            DPS automates your entire Source-to-Pay cycle, enhances operational efficiency with its 7 specialized modules,
            real-time dynamic pricing, and an elite network of 50,000+ verified suppliers.
          </p>

          <div className="v3-dps-hero-actions">
            <button className="btn btn-green-pill v3-dps-btn-main" onClick={onOpenDemo}>
              Schedule Platform Demo <ArrowUpRight size={16} />
            </button>
            <a href="#dps-modules" className="v3-pill-ghost-btn">
              Explore 7 Modules <ChevronDown size={16} />
            </a>
          </div>

          {/* Key Value Stat Strip */}
          <div className="v3-dps-stats-strip">
            <div className="v3-dps-stat-pill">
              <div className="stat-number">12-25%</div>
              <div className="stat-label">Cumulative Savings</div>
            </div>
            <div className="v3-dps-stat-pill">
              <div className="stat-number">65%</div>
              <div className="stat-label">Cycle Time Reduction</div>
            </div>
            <div className="v3-dps-stat-pill">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Verified Suppliers</div>
            </div>
            <div className="v3-dps-stat-pill">
              <div className="stat-number">100%</div>
              <div className="stat-label">3-Way Match Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Core Modules Interactive Showcase */}
      <section id="dps-modules" className="v3-dps-modules-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="v3-section-badge">End-to-End Orchestration</span>
            <h2 className="v3-section-title">The 7 Specialized Modules of DPS</h2>
            <p className="v3-section-subtitle">
              Comprehensive Source-to-Pay digitization designed to maximize transparency, automate approvals, and deliver measurable procurement ROI.
            </p>
          </div>

          {/* Module Selector Pill Bar */}
          <div className="v3-dps-pills-bar">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              const isActive = index === activeModule;
              return (
                <button
                  key={mod.id}
                  className={`v3-dps-module-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveModule(index)}
                >
                  <Icon size={16} className="pill-icon" />
                  <span>{mod.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Module Detail Card */}
          <div className="v3-dps-module-card">
            <div className="module-left">
              <div className="module-tag-capsule" style={{ background: currentMod.bgColor, color: currentMod.color }}>
                <currentMod.icon size={15} />
                <span>{currentMod.tag}</span>
              </div>

              <h3 className="module-heading">{currentMod.headline}</h3>
              <p className="module-paragraph">{currentMod.desc}</p>

              <div className="module-subheading">Core Architectural Capabilities:</div>
              <div className="module-features-list">
                {currentMod.highlights.map((h, i) => (
                  <div key={i} className="module-feature-item">
                    <div className="check-bubble" style={{ background: currentMod.bgColor, color: currentMod.color }}>
                      <Check size={13} />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="module-footer-action">
                <button className="btn btn-green-pill" onClick={onOpenDemo}>
                  Request {currentMod.name} Demo <ArrowUpRight size={15} />
                </button>
                <div className="metric-tag">
                  <span className="metric-val">{currentMod.metrics.primary}</span>
                  <span className="metric-lbl">{currentMod.metrics.label}</span>
                </div>
              </div>
            </div>

            <div className="module-right">
              <div className="v3-mockup-frame">
                <div className="v3-mockup-top">
                  <div className="v3-mockup-lights">
                    <span className="light light-1"></span>
                    <span className="light light-2"></span>
                    <span className="light light-3"></span>
                  </div>
                  <span className="v3-mockup-tag">DPS NXT // {currentMod.name}</span>
                </div>

                <div className="v3-mockup-content">
                  <div className="v3-step-row">
                    <div className="v3-step-badge" style={{ background: currentMod.color }}>01</div>
                    <div>
                      <div className="v3-step-heading">Automated Ingestion & Validation</div>
                      <div className="v3-step-caption">System parses requisitions, line items & specs instantly</div>
                    </div>
                  </div>

                  <div className="v3-step-row">
                    <div className="v3-step-badge" style={{ background: currentMod.color }}>02</div>
                    <div>
                      <div className="v3-step-heading">Real-Time Rule-Based Execution</div>
                      <div className="v3-step-caption">Threshold matching, automated dispatch & workflow validation</div>
                    </div>
                  </div>

                  <div className="v3-step-row">
                    <div className="v3-step-badge" style={{ background: currentMod.color }}>03</div>
                    <div>
                      <div className="v3-step-heading">Audit Log & ERP Synchronization</div>
                      <div className="v3-step-caption">Secure transactional sync with financial systems</div>
                    </div>
                  </div>

                  <div className="v3-highlight-box" style={{ borderColor: currentMod.color }}>
                    <div className="v3-h-tag">Enterprise Measured Benchmark</div>
                    <div className="v3-h-num" style={{ color: currentMod.color }}>{currentMod.metrics.primary}</div>
                    <div className="v3-h-sub">{currentMod.metrics.label} achieved with standard DPS rollout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* S2P Visual Flow Diagram */}
          <div className="v3-dps-flow-panel">
            <h4 className="flow-panel-title">End-to-End Source-to-Pay Lifecycle</h4>
            <div className="v3-flow-pills">
              {modules.map((m, idx) => (
                <div key={m.id} className="flow-pill-item" onClick={() => setActiveModule(idx)}>
                  <span className="flow-idx">{idx + 1}</span>
                  <m.icon size={16} style={{ color: m.color }} />
                  <span className="flow-label">{m.name}</span>
                  {idx < modules.length - 1 && <ChevronRight size={14} className="flow-chevron" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Differentiators Section */}
      <section className="v3-dps-diff-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="v3-section-badge">Why Enterprises Choose Procucev</span>
            <h2 className="v3-section-title">Strategic Value & Unique Capabilities</h2>
            <p className="v3-section-subtitle">
              Unlike generic standalone software tools, DPS pairs high-performance cloud technology with seasoned category specialists.
            </p>
          </div>

          <div className="v3-dps-diff-cards">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="v3-diff-card">
                  <div className="diff-pill-icon" style={{ background: `${d.color}15`, color: d.color }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="diff-card-name">{d.title}</h3>
                  <p className="diff-card-text">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Benefits Grid */}
      <section className="v3-dps-benefits-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="v3-section-badge">Tangible ROI</span>
            <h2 className="v3-section-title">DPS Customer Benefits</h2>
            <p className="v3-section-subtitle">
              Measured results delivered across manufacturing, engineering, retail, infrastructure, and services enterprises.
            </p>
          </div>

          <div className="v3-benefits-cards">
            {benefits.map((b, i) => (
              <div key={i} className="v3-benefit-card">
                <div className="benefit-metric-pill">
                  <span className="b-num">{b.metric}</span>
                  <span className="b-sub-text">{b.sub}</span>
                </div>
                <h4 className="benefit-card-heading">{b.title}</h4>
                <p className="benefit-card-caption">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="v3-dps-faq-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="v3-section-badge">Got Questions?</span>
            <h2 className="v3-section-title">Frequently Asked Questions</h2>
            <p className="v3-section-subtitle">
              Everything you need to know about implementing Digital Procurement Services (DPS) for your organization.
            </p>
          </div>

          <div className="v3-faq-container">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`v3-faq-accordion ${isOpen ? 'active' : ''}`}>
                  <button
                    className="v3-faq-toggle"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="v3-faq-title">{faq.q}</span>
                    <ChevronDown size={18} className={`v3-faq-icon ${isOpen ? 'open' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="v3-faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="v3-dps-cta-section">
        <div className="container">
          <div className="v3-dps-cta-banner">
            <div className="v3-cta-info">
              <span className="v3-cta-mini-badge">Accelerate Your Procurement</span>
              <h2 className="v3-cta-title">Ready to Transform Your Procurement Process?</h2>
              <p className="v3-cta-body">
                Partner with Procucev and unlock Smarter, Faster and cost-effective B2B Procurement Solutions.
                From AI Enabled Sourcing to optimized Supply Chain Management, we help you stay ahead of the curve.
              </p>
            </div>
            <div className="v3-cta-btns">
              <button className="btn btn-green-pill v3-cta-primary-btn" onClick={onOpenDemo}>
                Book Platform Demo <ArrowUpRight size={17} />
              </button>
              <a href="mailto:info@procucev.com" className="v3-cta-ghost-btn">
                Email Our Specialists
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Styles for Digital Procurement Services Page (V3 Theme) */}
      <style>{`
        .v3-dps-page {
          background: #f8fafc;
          color: #1e293b;
          font-family: inherit;
          padding-bottom: 60px;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero */
        .v3-dps-hero {
          padding: 60px 0 45px;
          text-align: center;
          background: radial-gradient(circle at 50% 15%, rgba(16, 185, 129, 0.08) 0%, transparent 60%);
        }
        .v3-dps-hero-capsule {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #059669;
          padding: 6px 18px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.08);
          margin-bottom: 20px;
        }
        .dot-pulse {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
        }
        .v3-dps-hero-title {
          font-size: 2.85rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .gradient-pill-text {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .v3-dps-hero-subtitle {
          font-size: 1.22rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 12px;
        }
        .v3-dps-hero-desc {
          font-size: 1rem;
          color: #64748b;
          max-width: 800px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }
        .v3-dps-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }
        .v3-dps-btn-main {
          padding: 12px 28px;
          font-size: 0.95rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .v3-pill-ghost-btn {
          padding: 12px 24px;
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #334155;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .v3-pill-ghost-btn:hover {
          border-color: #10b981;
          color: #10b981;
          background: rgba(16, 185, 129, 0.05);
        }

        /* Stats Strip */
        .v3-dps-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .v3-dps-stat-pill {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 20px 16px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .v3-dps-stat-pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.12);
        }
        .v3-dps-stat-pill .stat-number {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }
        .v3-dps-stat-pill .stat-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
        }

        /* Section Headers */
        .section-head {
          margin-bottom: 40px;
        }
        .v3-section-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 10px;
        }
        .v3-section-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          letter-spacing: -0.3px;
        }
        .v3-section-subtitle {
          font-size: 1rem;
          color: #64748b;
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.55;
        }

        /* Modules Section */
        .v3-dps-modules-section {
          padding: 70px 0;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }
        .v3-dps-pills-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 36px;
        }
        .v3-dps-module-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          font-size: 0.86rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .v3-dps-module-pill:hover {
          color: #10b981;
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.06);
        }
        .v3-dps-module-pill.active {
          color: #ffffff;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-color: #059669;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
        }
        .v3-dps-module-pill.active .pill-icon {
          color: #ffffff !important;
        }

        /* Active Module Card */
        .v3-dps-module-card {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 40px;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 42px;
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.05);
          margin-bottom: 36px;
        }
        .module-tag-capsule {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .module-heading {
          font-size: 1.7rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 12px;
        }
        .module-paragraph {
          font-size: 0.96rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 22px;
        }
        .module-subheading {
          font-size: 0.86rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .module-features-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 26px;
        }
        .module-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: #334155;
        }
        .check-bubble {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .module-footer-action {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .metric-tag {
          display: flex;
          flex-direction: column;
          padding: 6px 16px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
        }
        .metric-val {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
        }
        .metric-lbl {
          font-size: 0.72rem;
          color: #64748b;
          font-weight: 600;
        }

        /* Mockup */
        .v3-mockup-frame {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
        }
        .v3-mockup-top {
          background: #f1f5f9;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        .v3-mockup-lights {
          display: flex;
          gap: 6px;
        }
        .light {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .light-1 { background: #ef4444; }
        .light-2 { background: #f59e0b; }
        .light-3 { background: #10b981; }
        .v3-mockup-tag {
          font-size: 0.75rem;
          font-family: monospace;
          color: #64748b;
          font-weight: 700;
        }
        .v3-mockup-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .v3-step-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
        }
        .v3-step-badge {
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 4px 8px;
          border-radius: 8px;
          flex-shrink: 0;
        }
        .v3-step-heading {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
        }
        .v3-step-caption {
          font-size: 0.76rem;
          color: #64748b;
        }
        .v3-highlight-box {
          margin-top: 8px;
          padding: 16px;
          background: #ffffff;
          border: 2px dashed #cbd5e1;
          border-radius: 16px;
          text-align: center;
        }
        .v3-h-num {
          font-size: 1.65rem;
          font-weight: 800;
          margin: 4px 0 2px;
        }

        /* Flow panel */
        .v3-dps-flow-panel {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          text-align: center;
        }
        .flow-panel-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .v3-flow-pills {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .flow-pill-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 0.84rem;
          font-weight: 700;
          color: #1e293b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .flow-pill-item:hover {
          border-color: #10b981;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
        }
        .flow-idx {
          width: 18px;
          height: 18px;
          background: #f1f5f9;
          color: #475569;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.68rem;
          font-weight: 800;
        }
        .flow-chevron {
          color: #94a3b8;
          margin-left: 2px;
        }

        /* Differentiators Grid */
        .v3-dps-diff-section {
          padding: 70px 0;
        }
        .v3-dps-diff-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .v3-diff-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .v3-diff-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
          border-color: #a7f3d0;
        }
        .diff-pill-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .diff-card-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
        }
        .diff-card-text {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* Benefits Grid */
        .v3-dps-benefits-section {
          padding: 70px 0;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }
        .v3-benefits-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .v3-benefit-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .v3-benefit-card:hover {
          transform: translateY(-4px);
          border-color: #10b981;
          background: #ffffff;
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.1);
        }
        .benefit-metric-pill {
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 18px;
        }
        .b-num {
          font-size: 1.45rem;
          font-weight: 800;
          color: #10b981;
        }
        .b-sub-text {
          font-size: 0.74rem;
          font-weight: 700;
          color: #64748b;
        }
        .benefit-card-heading {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .benefit-card-caption {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* FAQ */
        .v3-dps-faq-section {
          padding: 70px 0;
        }
        .v3-faq-container {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .v3-faq-accordion {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .v3-faq-accordion.active {
          border-color: #10b981;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.08);
        }
        .v3-faq-toggle {
          width: 100%;
          background: transparent;
          border: none;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          gap: 16px;
        }
        .v3-faq-title {
          font-size: 1.02rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
        }
        .v3-faq-icon {
          color: #10b981;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .v3-faq-icon.open {
          transform: rotate(180deg);
        }
        .v3-faq-body {
          padding: 0 24px 22px;
          color: #475569;
          font-size: 0.94rem;
          line-height: 1.65;
          border-top: 1px solid rgba(226, 232, 240, 0.6);
          padding-top: 14px;
        }

        /* CTA */
        .v3-dps-cta-section {
          padding: 30px 0 40px;
        }
        .v3-dps-cta-banner {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #ffffff;
          border-radius: 32px;
          padding: 56px 48px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .v3-cta-mini-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          padding: 4px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 14px;
        }
        .v3-cta-title {
          font-size: 2.15rem;
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 14px;
          color: #ffffff;
        }
        .v3-cta-body {
          font-size: 0.96rem;
          color: #94a3b8;
          line-height: 1.6;
        }
        .v3-cta-btns {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .v3-cta-primary-btn {
          padding: 14px 28px;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .v3-cta-ghost-btn {
          padding: 14px 28px;
          font-size: 0.95rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          color: #ffffff;
          text-align: center;
          text-decoration: none;
          transition: background 0.2s;
        }
        .v3-cta-ghost-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .v3-dps-hero-title { font-size: 2.2rem; }
          .v3-dps-stats-strip { grid-template-columns: repeat(2, 1fr); }
          .v3-dps-module-card { grid-template-columns: 1fr; }
          .v3-dps-diff-cards { grid-template-columns: repeat(2, 1fr); }
          .v3-benefits-cards { grid-template-columns: repeat(2, 1fr); }
          .v3-dps-cta-banner { grid-template-columns: 1fr; text-align: center; }
          .v3-cta-btns { max-width: 380px; margin: 0 auto; width: 100%; }
        }

        @media (max-width: 640px) {
          .v3-dps-hero-title { font-size: 1.85rem; }
          .v3-dps-stats-strip { grid-template-columns: 1fr; }
          .v3-dps-diff-cards { grid-template-columns: 1fr; }
          .v3-benefits-cards { grid-template-columns: 1fr; }
          .v3-dps-hero-actions { flex-direction: column; width: 100%; }
          .v3-dps-hero-actions button, .v3-dps-hero-actions a { width: 100%; justify-content: center; }
          .v3-dps-cta-banner { padding: 36px 24px; }
        }
      `}</style>
    </div>
  );
}

import React, { useState } from 'react';
import {
  FileText,
  DollarSign,
  BarChart3,
  Gavel,
  MessageSquare,
  Zap,
  Users,
  ShieldCheck,
  Layers,
  Sparkles,
  Store,
  Factory,
  Warehouse,
  HardHat,
  Building2,
  Landmark,
  Check,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  Clock,
  Coins
} from 'lucide-react';

export default function ProCpxPage({ onOpenDemo, onNavigateHome }) {
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const keyFeatures = [
    {
      id: 'pr-po',
      num: '01',
      title: 'Simplified PR to PO Process',
      subtitle: 'Workflow Orchestration',
      icon: FileText,
      color: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      desc: 'Streamline your procurement workflow with streamlined approvals and document management.',
      details: [
        'Centralize requisitions for factory expansions, site setups, and retail rollouts',
        'Multi-level authorization matrix based on CAPEX project budgets and thresholds',
        'Zero manual data re-entry with direct conversion of approved BOQs to POs',
        'Complete audit trails and milestone payment release checkpoints'
      ],
      mockupData: {
        stage: 'PR-to-PO Authorization',
        status: 'Audit Compliant',
        metric: '70% Faster',
        metricLbl: 'Cycle Time Reduction'
      }
    },
    {
      id: 'cost-optimization',
      num: '02',
      title: 'Optimize Costs',
      subtitle: 'Commercial Leverage',
      icon: DollarSign,
      color: '#F97316',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      desc: 'Negotiate better deals through automatic quote comparisons and dynamic price discovery.',
      details: [
        'Side-by-side commercial comparison matrices normalize tax, freight, and payment terms',
        'Identify cost outliers across line items before final award',
        'Consolidated volume negotiation across multi-site ongoing CAPEX projects',
        'Proven 15% to 28% total Capex outlay reduction across key categories'
      ],
      mockupData: {
        stage: 'Dynamic Price Discovery',
        status: 'Rate Benchmarked',
        metric: '15-28%',
        metricLbl: 'Average Capex Savings'
      }
    },
    {
      id: 'enhanced-transparency',
      num: '03',
      title: 'Enhanced Transparency',
      subtitle: 'Complete Spend Visibility',
      icon: BarChart3,
      color: '#8B5CF6',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      desc: 'Gain real-time visibility into your Capex spend across every plant, facility, and outlet.',
      details: [
        'Live dashboard of ongoing projects, committed funds, and actual disbursements',
        'Compare actual vendor quotes against estimated baseline engineering budgets',
        'Eliminate blind spots and cost escalations through granular milestone tracking',
        'Executive reports exportable to ERP and financial management platforms'
      ],
      mockupData: {
        stage: 'Live Multi-Site Telemetry',
        status: 'Real-Time Visibility',
        metric: '360°',
        metricLbl: 'Capex Spend Governance'
      }
    },
    {
      id: 'e-auctions',
      num: '04',
      title: 'User-Friendly E-Auction Module',
      subtitle: 'Dynamic Digital Bidding',
      icon: Gavel,
      color: '#06B6D4',
      bgColor: 'rgba(6, 182, 212, 0.1)',
      desc: 'Easily conduct E-Auctions (Forward and Reverse), Dutch, and Sealed bids for high-value Capex.',
      details: [
        'Tailored bidding rules for complex package contracting and turnkey works',
        'Real-time decremental bidding room with masked vendor rankings',
        'Eliminates vendor collusion while delivering true market price discovery',
        'Automated auction reports with complete compliance and bid logs'
      ],
      mockupData: {
        stage: 'Live Bidding Room',
        status: 'Reverse Auction Active',
        metric: '8-18%',
        metricLbl: 'Incremental Savings'
      }
    },
    {
      id: 'vendor-comm',
      num: '05',
      title: 'Effortless Vendor Communication',
      subtitle: 'Real-Time Collaboration',
      icon: MessageSquare,
      color: '#EC4899',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      desc: 'Communicate with vendors easily with built-in chat support and direct clarification logs.',
      details: [
        'In-line technical queries and clarifications on drawings and BOQ specs',
        'Timestamped communication history avoiding post-award project disputes',
        'Automated alerts to suppliers for pending quotes, revisions, and deadlines',
        'Single communication channel eliminating scattered emails and WhatsApp threads'
      ],
      mockupData: {
        stage: 'Direct Vendor Clarifications',
        status: 'Audit Logged',
        metric: '< 2 Hrs',
        metricLbl: 'Clarification Turnaround'
      }
    },
    {
      id: 'accelerate-decisions',
      num: '06',
      title: 'Accelerate Decision-Making',
      subtitle: 'Actionable Intelligence',
      icon: Zap,
      color: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      desc: 'Make informed decisions with real-time data, cost analytics, and timeline tracking.',
      details: [
        'Compress Capex sourcing cycles from months into days',
        'Automated vendor scoring combining commercial rank, lead time, and technical capability',
        'Comparative evaluation summaries prepared instantly for Capex committee review',
        'Prevent project launch delays with milestone countdown telemetry'
      ],
      mockupData: {
        stage: 'Committee Decision Matrix',
        status: '1-Click PO Award',
        metric: '3x Faster',
        metricLbl: 'Final Vendor Selection'
      }
    },
    {
      id: 'expert-support',
      num: '07',
      title: 'Expert Support',
      subtitle: 'Domain Engineering',
      icon: Users,
      color: '#F59E0B',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      desc: 'Our team of procurement experts is available to assist you with vendor selection, negotiation, and value engineering.',
      details: [
        'Dedicated category specialists with deep Capex industry engineering experience',
        'Value engineering assistance to optimize bill of quantities without compromising quality',
        'Hands-on negotiation backing for high-ticket machine bought-outs and turnkey civil packages',
        'Comprehensive market benchmark rate validations before PO issuance'
      ],
      mockupData: {
        stage: 'Category Specialist Advisory',
        status: 'Value Engineering',
        metric: '55,000+',
        metricLbl: 'Pre-Vetted Capex Network'
      }
    }
  ];

  const uniqueCapabilities = [
    {
      title: 'Standard Technical BOQs',
      tag: 'Precision Specifications',
      desc: 'Facilitates Complex Technical BOQs ensuring smooth comparisons and Transparent Vendor Quotes. Eliminates ambiguity between engineering specs and contractor deliverables.',
      icon: FileText,
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.1)'
    },
    {
      title: 'PAN INDIA Capex Vendor Network',
      tag: '55,000+ Pre-Vetted Partners',
      desc: 'Access verified Capex vendors across every Indian state for Turnkey Projects, Bought-outs, Civil works, MEP, and specialized technical services.',
      icon: Users,
      color: '#F97316',
      bg: 'rgba(249, 115, 22, 0.1)'
    },
    {
      title: 'In-Built Project Cost Controls',
      tag: 'Budget Governance',
      desc: 'Consolidate diverse estimates with real market rates, ensuring full cost visibility, milestone spending caps, and stronger financial discipline.',
      icon: ShieldCheck,
      color: '#06B6D4',
      bg: 'rgba(6, 182, 212, 0.1)'
    },
    {
      title: 'Comparisons for Exhaustive BOQs',
      tag: 'Deep Item Analytics',
      desc: 'Side-by-side line item analytics for multi-page complex BOQs. Normalize deviations, item rates, and add-on charges in a single unified view.',
      icon: BarChart3,
      color: '#8B5CF6',
      bg: 'rgba(139, 92, 246, 0.1)'
    },
    {
      title: 'Unified Approval Workflows',
      tag: 'Governance & SOPs',
      desc: 'Unified Approval Workflows ensure SOP Compliance, Accountability, and Complete Transparency across project managers, procurement, and CXOs.',
      icon: Layers,
      color: '#059669',
      bg: 'rgba(5, 150, 105, 0.1)'
    },
    {
      title: 'Category-Wise Rate Cards',
      tag: 'Instant Benchmarks',
      desc: 'Standardized Capex Pricing Benchmarks enable faster Vendor Finalization with complete cost transparency based on historical market trends.',
      icon: DollarSign,
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.1)'
    },
    {
      title: 'Extended Category Expertise',
      tag: 'End-to-End Alignment',
      desc: 'Procucev enables optimized Sourcing by aligning Cost analysis, Technical specifications, and Supplier capabilities across complex capital expenditures.',
      icon: Sparkles,
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.1)'
    }
  ];

  const sectors = [
    {
      name: 'Retail Chains',
      icon: Store,
      color: '#F97316',
      desc: 'Store fitouts, kitchen setups, commercial refrigeration, signage, and pan-India multi-outlet rollouts on tight schedules.'
    },
    {
      name: 'Manufacturing & Industrial',
      icon: Factory,
      color: '#10B981',
      desc: 'Plant machinery procurement, industrial utilities, cleanroom setups, heavy fabrication, and factory commissioning.'
    },
    {
      name: 'Logistics & Warehousing',
      icon: Warehouse,
      color: '#06B6D4',
      desc: 'High-density storage racking systems, prefabricated PEB sheds, dock levellers, and automated material handling equipment.'
    },
    {
      name: 'Construction & Real Estate',
      icon: HardHat,
      color: '#8B5CF6',
      desc: 'Turnkey interior packages, civil engineering contractors, structural steel fabrication, MEP, and HVAC contracts.'
    },
    {
      name: 'Hospitality',
      icon: Building2,
      color: '#F59E0B',
      desc: 'Commercial kitchen equipment, hotel furniture fitouts, MEP infrastructure, and luxury guest facility finishing.'
    },
    {
      name: 'Banking & Insurance',
      icon: Landmark,
      color: '#059669',
      desc: 'Rapid multi-location branch office setups, ATM infrastructure, secure vaults, modular furnishings, and network wiring.'
    }
  ];

  const customerBenefits = [
    {
      title: 'Consolidates Multi-Project Procurement',
      metric: 'Multi-Site',
      sub: 'Spend Aggregation',
      desc: 'Aggregate purchasing power across multiple upcoming facilities or renovation sites to secure volume-tier price discounts.'
    },
    {
      title: 'Automates Indent-to-Order Cycle',
      metric: '70%',
      sub: 'TAT Compression',
      desc: 'Compress Capex requisition-to-contract cycle time with standardized digital approvals and ready technical templates.'
    },
    {
      title: 'Pre-Qualified Vendors Across Locations',
      metric: '55,000+',
      sub: 'Verified Network',
      desc: 'Tap into verified suppliers with verified delivery track records, GST compliance, and local footprint in Tier 1, 2, and 3 cities.'
    },
    {
      title: 'Vendor Performance Scorecards',
      metric: '100%',
      sub: 'SOP Conformance',
      desc: 'Track quality conformance, timeline adherence, safety standards, and post-installation support with automated scorecards.'
    },
    {
      title: 'Built for Multi-Location Enterprises',
      metric: 'Pan-India',
      sub: 'Decentralized Scale',
      desc: 'Enable centralized Capex strategy with distributed on-ground execution, giving regional managers agility while headquarters retains control.'
    },
    {
      title: 'ERP & Systems Integration',
      metric: '2-Way',
      sub: 'Direct Sync',
      desc: 'Bidirectional sync with SAP, Oracle, and Microsoft Dynamics ensures seamless purchase orders, milestone payments, and asset capitalization.'
    }
  ];

  const faqs = [
    {
      q: 'What is proCPX?',
      a: 'proCPX is a digital procurement platform and service purpose-built for Capex procurement. It streamlines the entire PR-to-PO journey, bringing transparency, control, and cost efficiency to high-value purchases such as retail fitouts, factory setups, prefab structures, and storage solutions. It combines advanced tools like e-auctions and technical bid comparisons with access to category experts and a quality vendor ecosystem.'
    },
    {
      q: 'What kind of vendor base does proCPX offer access to?',
      a: 'proCPX connects you to a curated network of over 55,000+ pre-vetted vendors across Capex categories ranging from interior contractors and MEP vendors to structural steel fabricators, OEMs, and turnkey solution providers. Each vendor is evaluated on quality, compliance, and delivery track record, making sourcing for projects like restaurant fitouts or warehouse setups both faster and more reliable.'
    },
    {
      q: 'How is proCPX unique compared to general procurement tools?',
      a: 'proCPX stands apart by blending technology, domain expertise, and vendor intelligence. Unlike general procurement tools, proCPX is designed for the complexities of Capex procurement—handling technical BOQs, multi-vendor comparisons, milestone-based delivery, and prefab sourcing. Our expert-led model ensures better outcomes, even for lean procurement teams.'
    },
    {
      q: 'Can proCPX integrate with our existing ERP system?',
      a: 'Yes. proCPX supports seamless integration with ERP systems including SAP, Oracle, and Microsoft Dynamics. We offer both API-based and file-based integration to ensure smooth data flow for PRs, POs, and approvals without disrupting your existing financial and accounting systems.'
    },
    {
      q: 'What specific Capex categories can proCPX handle?',
      a: 'proCPX is category-agnostic and highly configurable. It routinely handles: Retail and restaurant fitouts, Multi-location office setups, Factory and warehouse infrastructure, IT and automation systems, Prefabricated steel structures, Storage racking & material handling, and HVAC, electricals & civil work. Each category is supported by relevant workflows, documentation, and technical evaluation stages.'
    },
    {
      q: 'What are the core features of proCPX?',
      a: 'Key features include PR-to-PO digitization, Standard technical BOQs, E-auctions (reverse, forward, Dutch, sealed bid), Interactive negotiations & Price discovery, Real-time vendor chat and clarifications, Multi-tiered approval routing and audit trail, PAN India Capex vendor network, and Hands-on support from domain experts.'
    },
    {
      q: 'Does proCPX support vendor onboarding and management?',
      a: 'Yes. proCPX includes a robust vendor onboarding module covering documentation, statutory compliance checks (GST, PAN, MSME, ISO), category qualification, and past performance tracking. You can also tap into our pre-vetted vendor network to source faster without compromising quality.'
    },
    {
      q: 'Do we need a large team to run proCPX?',
      a: 'No. proCPX is purpose-designed for lean, agile procurement teams. It automates repetitive steps, enables centralized controls, and brings in category experts when needed. Even companies with limited internal resources can manage high-value Capex projects with confidence.'
    },
    {
      q: 'How does proCPX help reduce Capex costs?',
      a: 'Clients using proCPX typically see 15% to 28% savings on Capex through competitive e-bidding, structured negotiations, and data-driven supplier selection. For example, in prefab or storage procurement, our cost benchmarking and vendor leverage lead to superior pricing and significantly faster turnaround times.'
    },
    {
      q: 'Is proCPX suitable for multi-location projects or central Capex teams?',
      a: 'Yes. proCPX supports centralized planning with decentralized execution. PRs, RFQs, and approvals can be routed as per your organisation structure, be it regional or centralized. Ideal for multi-location retail rollouts, factory expansions, or pan-India infrastructure projects.'
    },
    {
      q: 'Which industries benefit most from proCPX?',
      a: 'Industries with recurring or project-based capital expenditure benefit most, including Retail chains (store fitouts, kitchen setups), Manufacturing & Industrial (plant & machinery procurement), Logistics & Warehousing (storage systems, prefab sheds), Construction & Real Estate (turnkey interiors, civil works), and Energy & Utilities (equipment, infrastructure assets).'
    },
    {
      q: 'Beyond software, what managed services are included with proCPX?',
      a: 'Beyond our software platform, we deliver comprehensive managed procurement services including PAN India Vendor On-boarding and Management (leveraging our 50,000+ pre-vetted network) and Category Negotiation Support where senior industry specialists assist in negotiating high-ticket packages to maximize commercial savings.'
    }
  ];

  const currentFeature = keyFeatures[activeFeatureTab];

  return (
    <div className="v3-cpx-page">

      {/* HERO SECTION */}
      <section className="v3-cpx-hero">
        <div className="container v3-cpx-hero-inner">
          
          {/* Pill Capsule Badge with Pulsing Dot */}
          <div className="v3-cpx-hero-capsule">
            <span className="dot-pulse"></span>
            <span>Integrated Capex Sourcing Platform & Service</span>
          </div>

          {/* Main Headline */}
          <h1 className="v3-cpx-hero-title">
            End-to-End Capex Sourcing <span className="gradient-pill-text">Powered by Technology</span>, Backed by Experts
          </h1>

          {/* Value Rotating Highlights Pill Bar */}
          <div className="v3-cpx-value-pills">
            <span className="v3-cpx-tag-pill">🏭 Factory Set-up</span>
            <span className="v3-cpx-tag-pill">🏗️ New Sites & Infrastructure</span>
            <span className="v3-cpx-tag-pill">🏪 Retail Outlets</span>
            <span className="v3-cpx-tag-pill">🏢 Branch Offices</span>
          </div>

          {/* Subtitle Description */}
          <p className="v3-cpx-hero-desc">
            <strong>proCPX</strong> is a state-of-the-art software and service designed to streamline your Capex Procurement.
            With immense Capex Procurement experience over the years, we understand the challenges you face.
            By simplifying your tasks, we empower you to achieve operational efficiency along with significant cost savings.
          </p>

          {/* CTAs */}
          <div className="v3-cpx-hero-actions">
            <button className="btn btn-green-pill v3-cpx-btn-main" onClick={onOpenDemo}>
              Schedule proCPX Demo <ArrowUpRight size={16} />
            </button>
            <a href="#cpx-features" className="v3-pill-ghost-btn">
              Explore Key Features <ChevronDown size={16} />
            </a>
          </div>

          {/* Stats Strip */}
          <div className="v3-cpx-stats-strip">
            <div className="v3-cpx-stat-pill">
              <div className="stat-number">55,000+</div>
              <div className="stat-label">Pre-Vetted Capex Vendors</div>
            </div>
            <div className="v3-cpx-stat-pill">
              <div className="stat-number">15-28%</div>
              <div className="stat-label">Capex Cost Savings</div>
            </div>
            <div className="v3-cpx-stat-pill">
              <div className="stat-number">70% Faster</div>
              <div className="stat-label">Turnaround Time</div>
            </div>
            <div className="v3-cpx-stat-pill">
              <div className="stat-number">100%</div>
              <div className="stat-label">SOP & Audit Compliance</div>
            </div>
          </div>

        </div>
      </section>

      {/* 7 KEY FEATURES OF proCPX (INTERACTIVE SHOWCASE) */}
      <section id="cpx-features" className="v3-cpx-features-section">
        <div className="container">
          
          <div className="section-head text-center">
            <span className="v3-section-badge">Intelligent Capex Workflows</span>
            <h2 className="v3-section-title">Key Features of proCPX</h2>
            <p className="v3-section-subtitle">
              Purpose-built tools designed to tackle high-ticket capital expenditure, exhaustive technical specifications, and distributed multi-site projects.
            </p>
          </div>

          {/* Feature Selector Pill Bar */}
          <div className="v3-cpx-pills-bar">
            {keyFeatures.map((feat, index) => {
              const Icon = feat.icon;
              const isActive = index === activeFeatureTab;
              return (
                <button
                  key={feat.id}
                  className={`v3-cpx-feature-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveFeatureTab(index)}
                >
                  <Icon size={16} className="pill-icon" />
                  <span>{feat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Feature Detail Card */}
          <div className="v3-cpx-feature-card">
            <div className="feature-left">
              <div className="feature-tag-capsule" style={{ background: currentFeature.bgColor, color: currentFeature.color }}>
                <currentFeature.icon size={15} />
                <span>Feature {currentFeature.num} • {currentFeature.subtitle}</span>
              </div>

              <h3 className="feature-heading">{currentFeature.title}</h3>
              <p className="feature-paragraph">{currentFeature.desc}</p>

              <div className="feature-subheading">Key Workflow Capabilities</div>
              <div className="feature-points-list">
                {currentFeature.details.map((pt, i) => (
                  <div key={i} className="feature-point-item">
                    <span className="check-bubble" style={{ background: currentFeature.color }}>
                      <Check size={13} color="#FFFFFF" />
                    </span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="feature-footer-action">
                <button className="btn btn-green-pill" onClick={onOpenDemo}>
                  Schedule Demo for {currentFeature.title} <ArrowRight size={15} />
                </button>
                <div className="metric-tag">
                  <span className="metric-val">{currentFeature.mockupData.metric}</span>
                  <span className="metric-lbl">{currentFeature.mockupData.metricLbl}</span>
                </div>
              </div>
            </div>

            {/* Right Mockup Terminal */}
            <div className="v3-mockup-frame">
              <div className="v3-mockup-top">
                <div className="v3-mockup-lights">
                  <span className="light light-1"></span>
                  <span className="light light-2"></span>
                  <span className="light light-3"></span>
                </div>
                <span className="v3-mockup-tag">proCPX // Capex Engine</span>
              </div>

              <div className="v3-mockup-content">
                <div className="v3-step-row">
                  <div className="v3-step-badge" style={{ background: currentFeature.color }}>01</div>
                  <div>
                    <div className="v3-step-heading">Operational Phase</div>
                    <div className="v3-step-caption">{currentFeature.mockupData.stage}</div>
                  </div>
                </div>

                <div className="v3-step-row">
                  <div className="v3-step-badge" style={{ background: '#059669' }}>02</div>
                  <div>
                    <div className="v3-step-heading">Network Coverage</div>
                    <div className="v3-step-caption">55,000+ Pre-Vetted National Network</div>
                  </div>
                </div>

                <div className="v3-step-row">
                  <div className="v3-step-badge" style={{ background: '#F97316' }}>03</div>
                  <div>
                    <div className="v3-step-heading">Governance Status</div>
                    <div className="v3-step-caption">{currentFeature.mockupData.status}</div>
                  </div>
                </div>

                <div className="v3-highlight-box">
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                    Demonstrated Impact
                  </div>
                  <div className="v3-h-num" style={{ color: currentFeature.color }}>
                    {currentFeature.mockupData.metric}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#334155', fontWeight: 600 }}>
                    {currentFeature.mockupData.metricLbl}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* UNIQUE CAPABILITIES SECTION */}
      <section className="v3-cpx-caps-section">
        <div className="container">
          
          <div className="section-head text-center">
            <span className="v3-section-badge">Engineered for Complex Spend</span>
            <h2 className="v3-section-title">Unique Capabilities of proCPX</h2>
            <p className="v3-section-subtitle">
              Unlike generic procurement tools, proCPX addresses the unique engineering, contracting, and rate benchmarking challenges inherent to capital expenditure.
            </p>
          </div>

          <div className="v3-cpx-caps-grid">
            {uniqueCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="v3-cap-card">
                  <div className="cap-top">
                    <div className="cap-pill-icon" style={{ background: cap.bg, color: cap.color }}>
                      <Icon size={24} />
                    </div>
                    <span className="cap-tag-pill" style={{ background: cap.bg, color: cap.color }}>
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="cap-card-name">{cap.title}</h3>
                  <p className="cap-card-text">{cap.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BEYOND SOFTWARE (EXPERT MANAGED SOURCING) */}
      <section className="v3-cpx-managed-section">
        <div className="container">
          <div className="v3-managed-grid">
            
            <div className="managed-left">
              <span className="managed-badge">Strategic Extension</span>
              <h2 className="managed-title">
                Beyond Software... <br />
                <span className="text-emerald-300">Expert Managed Sourcing</span>
              </h2>
              <p className="managed-desc">
                Beyond our robust software platform, we deliver comprehensive procurement services customized to your requirements. We act as an agile extension of your procurement and project management teams.
              </p>
              <button className="btn btn-green-pill" onClick={onOpenDemo}>
                Consult Capex Specialists <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="managed-right">
              <div className="v3-glass-managed-card">
                <div className="card-header-flex">
                  <div className="icon-capsule bg-emerald-500">
                    <Users size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <h3 className="glass-card-title">Vendor On-boarding & Management</h3>
                    <span className="glass-card-sub">55,000+ Pre-Qualified Enterprise Network</span>
                  </div>
                </div>
                <p className="glass-card-desc">
                  Leverage our extensive 50,000+ qualified and diversified vendor network and expertise. We handle contractor background verifications, GST statutory checks, machine shop inspections, and past project track records.
                </p>
              </div>

              <div className="v3-glass-managed-card">
                <div className="card-header-flex">
                  <div className="icon-capsule bg-amber-500">
                    <DollarSign size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <h3 className="glass-card-title">Negotiation Support</h3>
                    <span className="glass-card-sub">Category Specialists With Decades of Experience</span>
                  </div>
                </div>
                <p className="glass-card-desc">
                  Benefit from our skilled category experts with years of experience in your specific industry. We assist in complex commercial negotiations, warranty terms, SLA definition, and payment milestone structuring to secure the best deals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER BENEFITS GRID */}
      <section className="v3-cpx-benefits-section">
        <div className="container">
          
          <div className="section-head text-center">
            <span className="v3-section-badge">Measurable Business Impact</span>
            <h2 className="v3-section-title">proCPX Customer Benefits</h2>
            <p className="v3-section-subtitle">
              Why India's leading enterprises, fast-growing retail chains, and industrial houses rely on proCPX.
            </p>
          </div>

          <div className="v3-benefits-cards">
            {customerBenefits.map((ben, idx) => (
              <div key={idx} className="v3-benefit-card">
                <div className="benefit-metric-pill">
                  <span className="b-num">{ben.metric}</span>
                  <span className="b-sub-text">{ben.sub}</span>
                </div>
                <h3 className="benefit-card-heading">{ben.title}</h3>
                <p className="benefit-card-caption">{ben.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROVEN SECTOR EXPERIENCE */}
      <section className="v3-cpx-sectors-section">
        <div className="container">
          
          <div className="section-head text-center">
            <span className="v3-section-badge">Cross-Domain Versatility</span>
            <h2 className="v3-section-title">Our Proven Sector Experience</h2>
            <p className="v3-section-subtitle">
              Extensive track record deploying Capex procurement engines across specialized industry verticals.
            </p>
          </div>

          <div className="v3-sectors-grid">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="v3-sector-card">
                  <div className="sector-icon-box" style={{ background: `${sec.color}15`, color: sec.color }}>
                    <Icon size={24} />
                  </div>
                  <h4 className="sector-name">{sec.name}</h4>
                  <p className="sector-desc">{sec.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TESTIMONIAL HIGHLIGHT */}
      <section className="v3-cpx-testimonial-section">
        <div className="container">
          <div className="v3-testimonial-card">
            <span className="testimonial-badge">Retail Expansion Success Story</span>
            <p className="testimonial-quote">
              “For our retail expansion, procurement was getting messy across multiple locations. With proCPX by Procucev, they handled technical BOQs and supported in sourcing and finalizing civil, electrical, HVAC, and other vendors PAN India. This helped us open stores on time without delays and made the entire process much smoother and more manageable.”
            </p>
            <div className="testimonial-author">Ankit</div>
            <div className="testimonial-role">Procurement Manager, Retail Industry • 5.0 ★ Client Rating</div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="v3-cpx-faq-section">
        <div className="container">
          
          <div className="section-head text-center">
            <span className="v3-section-badge">Got Questions?</span>
            <h2 className="v3-section-title">Frequently Asked Questions</h2>
            <p className="v3-section-subtitle">
              Everything you need to know about proCPX software and our managed Capex procurement services.
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
                    <ChevronDown size={20} className={`v3-faq-icon ${isOpen ? 'open' : ''}`} />
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

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="v3-cpx-cta-section">
        <div className="container">
          <div className="v3-cpx-cta-banner">
            <div className="v3-cta-left">
              <span className="v3-cta-mini-badge">Accelerate Capex Sourcing</span>
              <h2 className="v3-cta-title">Ready to Streamline Your Capex Sourcing?</h2>
              <p className="v3-cta-body">
                Scale up your factories, warehouses, retail stores, and offices with zero procurement chaos.
                Let our platform and category experts save you 15-28% on high-ticket capital expenditure.
              </p>
            </div>
            <div className="v3-cta-btns">
              <button className="btn btn-green-pill v3-cta-primary-btn" onClick={onOpenDemo}>
                Schedule proCPX Walkthrough <ArrowUpRight size={18} />
              </button>
              <button className="v3-cta-ghost-btn" onClick={onNavigateHome}>
                Return to Homepage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES FOR proCPX (VERSION 3 THEME MATCH) */}
      <style>{`
        .v3-cpx-page {
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
        .v3-cpx-hero {
          padding: 36px 0 45px;
          text-align: center;
          background: radial-gradient(circle at 50% 15%, rgba(16, 185, 129, 0.08) 0%, transparent 60%);
        }
        .v3-cpx-hero-capsule {
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
          margin-bottom: 18px;
        }
        .dot-pulse {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
        }
        .v3-cpx-hero-title {
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
        .v3-cpx-value-pills {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        .v3-cpx-tag-pill {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.84rem;
          font-weight: 600;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }
        .v3-cpx-hero-desc {
          font-size: 1rem;
          color: #64748b;
          max-width: 820px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        .v3-cpx-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 42px;
        }
        .v3-cpx-btn-main {
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
        .v3-cpx-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 1040px;
          margin: 0 auto;
        }
        .v3-cpx-stat-pill {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 20px 16px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .v3-cpx-stat-pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.12);
        }
        .v3-cpx-stat-pill .stat-number {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }
        .v3-cpx-stat-pill .stat-label {
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

        /* Features Section */
        .v3-cpx-features-section {
          padding: 70px 0;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }
        .v3-cpx-pills-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 36px;
        }
        .v3-cpx-feature-pill {
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
        .v3-cpx-feature-pill:hover {
          color: #10b981;
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.06);
        }
        .v3-cpx-feature-pill.active {
          color: #ffffff;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-color: #059669;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
        }
        .v3-cpx-feature-pill.active .pill-icon {
          color: #ffffff !important;
        }

        /* Feature Card */
        .v3-cpx-feature-card {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 40px;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 42px;
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.05);
        }
        .feature-tag-capsule {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .feature-heading {
          font-size: 1.7rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 12px;
        }
        .feature-paragraph {
          font-size: 0.96rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 22px;
        }
        .feature-subheading {
          font-size: 0.86rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .feature-points-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 26px;
        }
        .feature-point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.5;
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
        .feature-footer-action {
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

        /* Capabilities Grid */
        .v3-cpx-caps-section {
          padding: 70px 0;
        }
        .v3-cpx-caps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .v3-cap-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .v3-cap-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
          border-color: #a7f3d0;
        }
        .cap-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .cap-pill-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cap-tag-pill {
          font-size: 0.74rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 999px;
        }
        .cap-card-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
        }
        .cap-card-text {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* Managed Section (Forest Gradient) */
        .v3-cpx-managed-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #064e3b 0%, #022c22 100%);
          color: #ffffff;
        }
        .v3-managed-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .managed-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #6ee7b7;
          background: rgba(110, 231, 183, 0.12);
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 14px;
        }
        .managed-title {
          font-size: 2.3rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 18px;
        }
        .managed-desc {
          font-size: 1.02rem;
          color: #d1fae5;
          line-height: 1.65;
          margin-bottom: 28px;
        }
        .managed-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .v3-glass-managed-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 26px;
        }
        .card-header-flex {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }
        .icon-capsule {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .glass-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }
        .glass-card-sub {
          font-size: 0.78rem;
          color: #a7f3d0;
          font-weight: 600;
        }
        .glass-card-desc {
          font-size: 0.9rem;
          color: #d1fae5;
          line-height: 1.6;
          margin: 0;
        }

        /* Benefits Grid */
        .v3-cpx-benefits-section {
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

        /* Sectors Grid */
        .v3-cpx-sectors-section {
          padding: 70px 0;
        }
        .v3-sectors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .v3-sector-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
          transition: transform 0.2s ease;
        }
        .v3-sector-card:hover {
          transform: translateY(-3px);
          border-color: #10b981;
        }
        .sector-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .sector-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .sector-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
        }

        /* Testimonial */
        .v3-cpx-testimonial-section {
          padding: 50px 0;
          background: #f1f5f9;
        }
        .v3-testimonial-card {
          max-width: 860px;
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 42px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }
        .testimonial-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          background: #fef3c7;
          color: #b45309;
          padding: 4px 16px;
          border-radius: 999px;
          margin-bottom: 18px;
        }
        .testimonial-quote {
          font-size: 1.12rem;
          line-height: 1.7;
          color: #1e293b;
          font-style: italic;
          margin-bottom: 20px;
        }
        .testimonial-author {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
        }
        .testimonial-role {
          font-size: 0.85rem;
          color: #64748b;
          margin-top: 2px;
        }

        /* FAQ */
        .v3-cpx-faq-section {
          padding: 70px 0;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
        }
        .v3-faq-container {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .v3-faq-accordion {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .v3-faq-accordion.active {
          border-color: #10b981;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.08);
          background: #ffffff;
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
        .v3-cpx-cta-section {
          padding: 30px 0 40px;
        }
        .v3-cpx-cta-banner {
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
          color: #ffffff !important;
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
          cursor: pointer;
          transition: background 0.2s;
        }
        .v3-cta-ghost-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .v3-cpx-hero-title { font-size: 2.2rem; }
          .v3-cpx-stats-strip { grid-template-columns: repeat(2, 1fr); }
          .v3-cpx-feature-card { grid-template-columns: 1fr; }
          .v3-cpx-caps-grid { grid-template-columns: repeat(2, 1fr); }
          .v3-managed-grid { grid-template-columns: 1fr; }
          .v3-benefits-cards { grid-template-columns: repeat(2, 1fr); }
          .v3-sectors-grid { grid-template-columns: repeat(2, 1fr); }
          .v3-cpx-cta-banner { grid-template-columns: 1fr; text-align: center; }
          .v3-cta-btns { max-width: 380px; margin: 0 auto; width: 100%; }
        }

        @media (max-width: 640px) {
          .v3-cpx-hero-title { font-size: 1.85rem; }
          .v3-cpx-stats-strip { grid-template-columns: 1fr; }
          .v3-cpx-caps-grid { grid-template-columns: 1fr; }
          .v3-benefits-cards { grid-template-columns: 1fr; }
          .v3-sectors-grid { grid-template-columns: 1fr; }
          .v3-cpx-hero-actions { flex-direction: column; width: 100%; }
          .v3-cpx-hero-actions button, .v3-cpx-hero-actions a { width: 100%; justify-content: center; }
          .v3-cpx-cta-banner { padding: 36px 24px; }
        }
      `}</style>

    </div>
  );
}

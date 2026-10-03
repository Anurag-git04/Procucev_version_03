import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, Heart, CheckCircle2, ShieldCheck, TrendingUp, RefreshCw, Laptop, Zap, Package, Wrench, FlaskConical, Pill } from 'lucide-react';
import * as THREE from 'three';

export default function GlobeHero({ onOpenDemo }) {
  const canvasRef = useRef(null);

  // 5 Core Rotating Slides (4 original headlines + 1 grouped 5-statement value chain slide)
  const orbitalStatements = [
    {
      id: 0,
      titlePrefix: "Made with the ",
      titleHighlight: "Love of Procurement",
      titleSuffix: ""
    },
    {
      id: 1,
      titlePrefix: "Saving at procurement is the ",
      titleHighlight: "direct profit for company",
      titleSuffix: ""
    },
    {
      id: 2,
      titlePrefix: "",
      titleHighlight: "Zero Human intervention",
      titleSuffix: " from PR to Comparison"
    },
    {
      id: 3,
      isGrouped: true,
      items: [
        "Raise RFQ easier",
        "Reach Vendors faster",
        "Get Quotations quicker",
        "Compare Quotations better",
        "Spend Time & Money lesser"
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  // Live running metrics state for department cards
  const [deptStats, setDeptStats] = useState({
    it: { registered: 1250, rfqs: 48, spend: "₹45.2 Cr", savings: "16.8%", pulse: false },
    electrical: { registered: 850, rfqs: 34, spend: "₹84.5 Cr", savings: "14.2%", pulse: false },
    packaging: { registered: 3200, rfqs: 112, spend: "₹62.0 Cr", savings: "18.4%", pulse: false },
    mro: { registered: 5400, rfqs: 95, spend: "₹120 Cr", savings: "19.1%", pulse: false },
    chemicals: { registered: 890, rfqs: 29, spend: "₹38.6 Cr", savings: "15.5%", pulse: false },
    pharma: { registered: 1850, rfqs: 67, spend: "₹210 Cr", savings: "21.0%", pulse: false }
  });

  // Auto-rotate headlines every 4.0 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % orbitalStatements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [orbitalStatements.length]);

  // Live simulation ticker: updates registered vendor counts randomly every 2.5s
  useEffect(() => {
    const keys = ['it', 'electrical', 'packaging', 'mro', 'chemicals', 'pharma'];
    const ticker = setInterval(() => {
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      setDeptStats((prev) => ({
        ...prev,
        [randomKey]: {
          ...prev[randomKey],
          registered: prev[randomKey].registered + Math.floor(Math.random() * 3) + 1,
          pulse: true
        }
      }));

      // Reset pulse effect after 600ms
      setTimeout(() => {
        setDeptStats((prev) => ({
          ...prev,
          [randomKey]: {
            ...prev[randomKey],
            pulse: false
          }
        }));
      }, 600);
    }, 2500);

    return () => clearInterval(ticker);
  }, []);

  // Three.js 3D Globe Animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 2.4;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(420, 420);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Globe Sphere
    const geometry = new THREE.SphereGeometry(0.9, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x0284c7,
      wireframe: false,
      transparent: true,
      opacity: 0.15,
      shininess: 90
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Outer Dots Grid Mesh
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsCount = 1800;
    const positions = new Float32Array(dotsCount * 3);

    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;
      const radius = 0.91;

      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    dotsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x074193,
      size: 0.016,
      transparent: true,
      opacity: 0.8
    });
    const dotsMesh = new THREE.Points(dotsGeometry, dotsMaterial);
    scene.add(dotsMesh);

    // Primary Orange Orbital Ring
    const ringGeo = new THREE.RingGeometry(1.15, 1.16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.3;
    ring.rotation.y = Math.PI / 6;
    scene.add(ring);

    // Secondary Cyan Orbital Ring
    const ringGeo2 = new THREE.RingGeometry(1.25, 1.258, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 1.8;
    ring2.rotation.y = -Math.PI / 4;
    scene.add(ring2);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0x0284c7, 2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      dotsMesh.rotation.y += 0.003;
      sphere.rotation.y += 0.003;
      ring.rotation.z += 0.001;
      ring2.rotation.z -= 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="v3-hero-section" id="home">
      <div className="container">
        
        {/* CLEAN ROTATING TEXT HEADER */}
        <div className="clean-hero-header text-center">
          
          {/* Tagline Badge */}
          <div className="badge-tag-pill mb-3 inline-flex items-center gap-2">
            <Sparkles size={14} className="text-emerald" /> B2B Procurement Marketplace & Consulting
          </div>

          {/* Active Statement Stage / Headline */}
          <div className="hero-text-stage mb-3">
            {orbitalStatements.map((item, idx) => {
              const isActive = idx === activeIndex;

              if (item.isGrouped) {
                return (
                  <div 
                    key={item.id}
                    className={`headline-slide ${isActive ? 'active' : 'inactive'}`}
                  >
                    <div className="v3-grouped-grid">
                      {item.items.map((stmt, sIdx) => (
                        <div key={sIdx} className="v3-grouped-item">
                          <span className="dot-orange"></span>
                          <span className="serif-title text-orange-gradient">{stmt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div 
                  key={item.id}
                  className={`headline-slide ${isActive ? 'active' : 'inactive'}`}
                >
                  <h1 className="v3-hero-title">
                    {item.titlePrefix}
                    <span className="serif-title text-orange-gradient">{item.titleHighlight}</span>
                    {item.titleSuffix}
                  </h1>
                </div>
              );
            })}
          </div>

          {/* Sub-headline */}
          <p className="v3-hero-subheadline max-w-3xl mx-auto text-slate-600 text-lg mb-6 leading-relaxed">
            Every rupee saved in procurement goes straight to your bottom line. Procucev brings AI, a verified supplier network and sourcing expertise together, so you raise RFQs faster, compare quotes better and buy at the right price.
          </p>

          {/* Highlights Strip */}
          <div className="v3-highlights-pill-strip">
            <span className="h-item">Raise RFQs easier</span>
            <span className="h-dot">·</span>
            <span className="h-item">Reach vendors faster</span>
            <span className="h-dot">·</span>
            <span className="h-item">Get quotations quicker</span>
            <span className="h-dot">·</span>
            <span className="h-item">Compare quotations better</span>
            <span className="h-dot">·</span>
            <span className="h-item">Spend less time and money</span>
          </div>

          {/* Hero CTAs */}
          <div className="v3-hero-ctas">
            <button className="btn btn-green-pill btn-lg" onClick={onOpenDemo}>
              Raise an RFQ, it's free <ArrowUpRight size={18} />
            </button>
            <button className="btn btn-orange-dribbble btn-lg" onClick={onOpenDemo}>
              Become a Supplier <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Key Numbers Banner */}
          <div className="v3-key-numbers-bar">
            <div className="stat-box">
              <span className="stat-num">45,000+</span>
              <span className="stat-label">Verified Suppliers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <span className="stat-num">1,800+</span>
              <span className="stat-label">Registered Buyers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <span className="stat-num text-emerald">Within 24 Hours</span>
              <span className="stat-label">Quote Turnaround</span>
            </div>
          </div>

        </div>

        {/* 3D Globe Stage with Orbiting Department Cards */}
        <div className="globe-interactive-stage">
          <div className="globe-canvas-wrapper">
            <canvas ref={canvasRef} className="globe-canvas"></canvas>
            <div className="globe-core-glow"></div>
          </div>

          {/* Floating Department Procurement Cards with Dynamic Running Metrics */}
          <div className={`floating-country-card card-it ${deptStats.it.pulse ? 'pulse-active' : ''}`}>
            <div className="card-flag-row">
              <div className="icon-badge bg-cyan-50">
                <Laptop size={18} className="text-cyan-600" />
              </div>
              <div>
                <h5 className="c-name">IT Consumables</h5>
                <span className="c-sub">Enterprise IT & Hardware</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line flex justify-between items-center">
                <span><strong className="count-num">{deptStats.it.registered.toLocaleString()}</strong> Registered</span>
                <span className="live-dot-green"></span>
              </div>
              <div className="m-line flex justify-between items-center text-sub">
                <span>{deptStats.it.rfqs} Active RFQs</span>
                <span className="status-tag green">99.2% SLA</span>
              </div>
            </div>
          </div>

          <div className={`floating-country-card card-electrical ${deptStats.electrical.pulse ? 'pulse-active' : ''}`}>
            <div className="card-flag-row">
              <div className="icon-badge bg-amber-50">
                <Zap size={18} className="text-amber-500" />
              </div>
              <div>
                <h5 className="c-name">Electrical Equipments</h5>
                <span className="c-sub">Panels & Power Grid</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line flex justify-between items-center">
                <span><strong>{deptStats.electrical.spend}</strong> Spend</span>
                <span className="live-dot-green"></span>
              </div>
              <div className="m-line flex justify-between items-center text-sub">
                <span><strong className="count-num">{deptStats.electrical.registered.toLocaleString()}</strong> Vendors</span>
                <span className="status-tag blue">Automated L1</span>
              </div>
            </div>
          </div>

          <div className={`floating-country-card card-packaging ${deptStats.packaging.pulse ? 'pulse-active' : ''}`}>
            <div className="card-flag-row">
              <div className="icon-badge bg-orange-50">
                <Package size={18} className="text-orange-500" />
              </div>
              <div>
                <h5 className="c-name">Packaging Material</h5>
                <span className="c-sub">Corrugated & Cartons</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line flex justify-between items-center">
                <span><strong className="count-num">{deptStats.packaging.registered.toLocaleString()}</strong> Registered</span>
                <span className="live-dot-green"></span>
              </div>
              <div className="m-line flex justify-between items-center text-sub">
                <span>{deptStats.packaging.rfqs} Live Bids</span>
                <span className="status-tag green">{deptStats.packaging.savings} Savings</span>
              </div>
            </div>
          </div>

          <div className={`floating-country-card card-mro ${deptStats.mro.pulse ? 'pulse-active' : ''}`}>
            <div className="card-flag-row">
              <div className="icon-badge bg-indigo-50">
                <Wrench size={18} className="text-indigo-600" />
              </div>
              <div>
                <h5 className="c-name">MRO</h5>
                <span className="c-sub">Maintenance & Spares</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line flex justify-between items-center">
                <span><strong>{deptStats.mro.spend}</strong> Managed</span>
                <span className="live-dot-green"></span>
              </div>
              <div className="m-line flex justify-between items-center text-sub">
                <span><strong className="count-num">{deptStats.mro.registered.toLocaleString()}</strong> Vendors</span>
                <span className="status-tag green">{deptStats.mro.savings} Saved</span>
              </div>
            </div>
          </div>

          <div className={`floating-country-card card-chemicals ${deptStats.chemicals.pulse ? 'pulse-active' : ''}`}>
            <div className="card-flag-row">
              <div className="icon-badge bg-emerald-50">
                <FlaskConical size={18} className="text-emerald-600" />
              </div>
              <div>
                <h5 className="c-name">Chemicals</h5>
                <span className="c-sub">Solvents & Additives</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line flex justify-between items-center">
                <span><strong className="count-num">{deptStats.chemicals.registered.toLocaleString()}</strong> Registered</span>
                <span className="live-dot-green"></span>
              </div>
              <div className="m-line flex justify-between items-center text-sub">
                <span>{deptStats.chemicals.rfqs} Active RFQs</span>
                <span className="status-tag blue">Compliant</span>
              </div>
            </div>
          </div>

          <div className={`floating-country-card card-pharma ${deptStats.pharma.pulse ? 'pulse-active' : ''}`}>
            <div className="card-flag-row">
              <div className="icon-badge bg-rose-50">
                <Pill size={18} className="text-rose-500" />
              </div>
              <div>
                <h5 className="c-name">Pharma</h5>
                <span className="c-sub">APIs & Lab Supplies</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line flex justify-between items-center">
                <span><strong>{deptStats.pharma.spend}</strong> Value</span>
                <span className="live-dot-green"></span>
              </div>
              <div className="m-line flex justify-between items-center text-sub">
                <span><strong className="count-num">{deptStats.pharma.registered.toLocaleString()}</strong> Registered</span>
                <span className="status-tag green">{deptStats.pharma.savings} Saved</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .v3-hero-section {
          padding: 20px 0 100px;
          position: relative;
          overflow: hidden;
        }

        .v3-highlights-pill-strip {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
        }
        .h-item {
          font-size: 0.85rem;
          font-weight: 700;
          color: #475569;
        }
        .h-dot {
          color: #cbd5e1;
          font-weight: 900;
        }

        .v3-key-numbers-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 32px;
          padding: 16px 32px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          max-width: 800px;
          margin: 0 auto 32px;
        }
        .stat-box {
          text-align: center;
        }
        .stat-num {
          display: block;
          font-size: 2.2rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 4px;
        }
        .stat-num.text-emerald {
          color: #10b981;
        }
        .stat-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .stat-divider {
          height: 32px;
          width: 1px;
          background: #e2e8f0;
        }
        @media (max-width: 768px) {
          .stat-divider { display: none; }
        }

        .icon-badge {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Clean Header Wrapper */
        .clean-hero-header {
          max-width: 920px;
          margin: 0 auto 10px;
        }

        .hero-text-stage {
          position: relative;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .v3-grouped-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 24px;
          justify-items: center;
          align-items: center;
          max-width: 780px;
          margin: 0 auto;
        }
        .v3-grouped-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.25rem;
          font-weight: 700;
        }
        .dot-orange {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f97316;
          box-shadow: 0 0 8px #f97316;
          flex-shrink: 0;
        }
        .text-orange-gradient {
          color: #f97316;
        }

        .headline-slide {
          position: absolute;
          width: 100%;
          transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1), transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .headline-slide.active {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
          z-index: 10;
        }

        .headline-slide.inactive {
          opacity: 0;
          transform: translateY(18px) scale(0.96);
          pointer-events: none;
          z-index: 1;
        }

        /* Node Badge Styles */
        .node-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 14px;
        }

        /* Active Hero Title */
        .v3-hero-title {
          font-size: 2.85rem;
          font-weight: 800;
          color: #074193;
          line-height: 1.2;
          letter-spacing: -0.8px;
          max-width: 880px;
          margin: 0 auto;
        }

        /* Orbit Selectors */
        .orbital-orbit-selectors {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 24px 0 28px;
          z-index: 10;
          position: relative;
        }
        .orbit-step-btn {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 4px 12px;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }
        .orbit-step-btn:hover {
          border-color: #074193;
        }
        .orbit-step-btn.active {
          background: #074193;
          border-color: #074193;
        }
        .step-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
        }
        .orbit-step-btn.active .step-dot {
          background: #10b981;
        }
        .step-label {
          font-size: 0.76rem;
          font-weight: 700;
          color: #475569;
        }
        .orbit-step-btn.active .step-label {
          color: #ffffff;
        }

        .v3-hero-ctas {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        /* Stage for 3D Globe and Floating Country Cards */
        .globe-interactive-stage {
          position: relative;
          width: 100%;
          max-width: 950px;
          height: 600px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .globe-canvas-wrapper {
          position: relative;
          width: 520px;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .globe-canvas {
          width: 520px;
          height: 520px;
          cursor: grab;
        }
        .globe-core-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }

        /* Floating Country Cards */
        .floating-country-card {
          position: absolute;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
          border-radius: 16px;
          padding: 12px 16px;
          min-width: 200px;
          z-index: 10;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: floatSlow 4s ease-in-out infinite alternate;
        }
        .floating-country-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.14);
          border-color: #10b981;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }

        .card-flag-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .flag-emoji {
          font-size: 1.5rem;
          line-height: 1;
        }
        .c-name {
          font-size: 0.88rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
        }
        .c-sub {
          font-size: 0.7rem;
          color: #64748b;
        }

        .floating-country-card.pulse-active {
          border-color: #f97316 !important;
          box-shadow: 0 0 24px rgba(249, 115, 22, 0.3) !important;
        }

        .count-num {
          color: #f97316;
          transition: all 0.3s ease;
        }

        .live-dot-green {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          display: inline-block;
          animation: blinkDot 1.5s infinite alternate;
        }

        @keyframes blinkDot {
          0% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        .c-metrics {
          font-size: 0.78rem;
          color: #334155;
          border-top: 1px solid #f1f5f9;
          padding-top: 6px;
        }
        .m-line { margin-bottom: 3px; }
        .text-sub {
          font-size: 0.7rem;
          color: #64748b;
        }

        .status-tag {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 6px;
        }
        .status-tag.green {
          background: #d1fae5;
          color: #065f46;
        }
        .status-tag.blue {
          background: #e0f2fe;
          color: #0369a1;
        }

        /* Card Absolute Positions */
        .card-it {
          top: 30px;
          left: 100px;
          animation-delay: 0s;
        }
        .card-electrical {
          top: 40px;
          right: 90px;
          animation-delay: 1s;
        }
        .card-packaging {
          bottom: 50px;
          right: 100px;
          animation-delay: 2s;
        }
        .card-mro {
          bottom: 30px;
          left: 110px;
          animation-delay: 1.5s;
          border-color: #f97316;
        }
        .card-chemicals {
          top: 200px;
          left: 65px;
          animation-delay: 0.5s;
        }
        .card-pharma {
          top: 210px;
          right: 65px;
          animation-delay: 2.5s;
        }

        /* 5-Step Value Chain Strip */
        .hero-value-chain-strip {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .v-step {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          padding: 6px 14px;
          border-radius: 30px;
          border: 1px solid var(--border-light);
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f172a;
          box-shadow: var(--shadow-sm);
        }
        .v-num {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f97316;
          color: #ffffff;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .v-arrow {
          color: #94a3b8;
          font-weight: 700;
        }
        .v-step.highlight {
          background: rgba(16, 185, 129, 0.1);
          border-color: #10b981;
          color: #065f46;
        }
        .v-num.highlight-num {
          background: #10b981;
          color: #ffffff;
        }

        @media (max-width: 992px) {
          .v3-hero-title { font-size: 2.1rem; }
          .orbit-node-card.pos-right { transform: translate3d(160px, -20px, 0) scale(0.68); }
          .orbit-node-card.pos-left { transform: translate3d(-160px, -20px, 0) scale(0.68); }
          .globe-interactive-stage { height: auto; flex-direction: column; }
          .floating-country-card { position: relative; top: auto; left: auto; right: auto; bottom: auto; margin-bottom: 10px; width: 100%; }
          .hero-value-chain-strip { flex-direction: column; align-items: flex-start; }
          .v-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}

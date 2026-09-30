import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, Heart, CheckCircle2, ShieldCheck, TrendingUp, RefreshCw } from 'lucide-react';
import * as THREE from 'three';

export default function GlobeHero({ onOpenDemo }) {
  const canvasRef = useRef(null);

  // 4 Core Client Statements rotating along the Orbital Circular Line
  const orbitalStatements = [
    {
      id: 0,
      badge: "Love of Procurement",
      shortTitle: "Love of Procurement",
      title: "Made with the Love of Procurement",
      icon: Heart,
      iconColor: "text-rose-500 fill-rose-500",
      pillBg: "bg-rose-50 border-rose-200 text-rose-700"
    },
    {
      id: 1,
      badge: "Direct Profit Impact",
      shortTitle: "Saving = Direct Profit",
      title: "Saving at procurement is the direct profit for company",
      icon: TrendingUp,
      iconColor: "text-emerald-500",
      pillBg: "bg-emerald-50 border-emerald-200 text-emerald-700"
    },
    {
      id: 2,
      badge: "500+ Cr Finance Hero",
      shortTitle: "Finance Hero 500+ Cr",
      title: "Procurement is the finance hero behind 500+ crores Retail, E-Commerce, Consumer brands",
      icon: ShieldCheck,
      iconColor: "text-blue-500",
      pillBg: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      id: 3,
      badge: "Zero Human Delay",
      shortTitle: "Zero Human Intervention",
      title: "Zero Human intervention from PR to Comparison",
      icon: CheckCircle2,
      iconColor: "text-amber-500",
      pillBg: "bg-amber-50 border-amber-200 text-amber-700"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 3.8 seconds along the circular line
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % orbitalStatements.length);
    }, 3800);
    return () => clearInterval(timer);
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
    <section className="v3-hero-section">
      <div className="container">
        
        {/* CLEAN ROTATING TEXT HEADER (NO BACKGROUND CLUTTER) */}
        <div className="clean-hero-header text-center">
          
          {/* Active Statement Stage */}
          <div className="hero-text-stage">
            {orbitalStatements.map((item, idx) => {
              const isActive = idx === activeIndex;
              const ItemIcon = item.icon;
              return (
                <div 
                  key={item.id}
                  className={`headline-slide ${isActive ? 'active' : 'inactive'}`}
                >
                  <div className="node-badge-pill">
                    <ItemIcon size={14} className={item.iconColor} />
                    <span>{item.badge}</span>
                  </div>

                  <h1 className="v3-hero-title">
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </div>

          {/* Clean Step Controls */}
          <div className="orbital-orbit-selectors">
            {orbitalStatements.map((item, idx) => (
              <button 
                key={idx} 
                className={`orbit-step-btn ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Select Statement ${idx + 1}`}
              >
                <span className="step-dot"></span>
                <span className="step-label">0{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Hero CTAs */}
          <div className="v3-hero-ctas">
            <button className="btn btn-orange-dribbble btn-lg" onClick={onOpenDemo}>
              Become a Supplier <ArrowUpRight size={18} />
            </button>
            <a href="#marketplace" className="btn btn-outline-dark btn-lg">
              Explore Products & Capabilities
            </a>
          </div>

        </div>

        {/* 3D Globe Stage with Orbiting Country Cards */}
        <div className="globe-interactive-stage">
          <div className="globe-canvas-wrapper">
            <canvas ref={canvasRef} className="globe-canvas"></canvas>
            <div className="globe-core-glow"></div>
          </div>

          {/* Floating Global Country Cards */}
          <div className="floating-country-card card-canada">
            <div className="card-flag-row">
              <span className="flag-emoji">🇨🇦</span>
              <div>
                <h5 className="c-name">Canada</h5>
                <span className="c-sub">North America Hub</span>
              </div>
            </div>
            <div className="c-metrics flex items-center justify-between">
              <span><strong>15.2k+</strong> Sales</span>
              <span className="status-tag green">120 Onboarded</span>
            </div>
          </div>

          <div className="floating-country-card card-singapore">
            <div className="card-flag-row">
              <span className="flag-emoji">🇸🇬</span>
              <div>
                <h5 className="c-name">Singapore</h5>
                <span className="c-sub">APAC Regional Axis</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line"><strong>18.5k+</strong> Sourcing Orders</div>
              <div className="m-line flex justify-between">
                <span>530 Onboarded</span>
                <span className="status-tag blue">125 Pending</span>
              </div>
            </div>
          </div>

          <div className="floating-country-card card-dubai">
            <div className="card-flag-row">
              <span className="flag-emoji">🇦🇪</span>
              <div>
                <h5 className="c-name">Dubai</h5>
                <span className="c-sub">MENA Trade Center</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line"><strong>94.8k+</strong> Delivered POs</div>
              <span className="status-tag green">502 Verified Vendors</span>
            </div>
          </div>

          <div className="floating-country-card card-india">
            <div className="card-flag-row">
              <span className="flag-emoji">🇮🇳</span>
              <div>
                <h5 className="c-name">India (HQ)</h5>
                <span className="c-sub">Bengaluru • Mumbai • Gurugram</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line"><strong>₹500+ Cr</strong> Managed Spend</div>
              <span className="status-tag green">50,000+ Supplier Network</span>
            </div>
          </div>

          <div className="floating-country-card card-usa">
            <div className="card-flag-row">
              <span className="flag-emoji">🇺🇸</span>
              <div>
                <h5 className="c-name">United States</h5>
                <span className="c-sub">Global Sourcing Node</span>
              </div>
            </div>
            <div className="c-metrics">
              <div className="m-line"><strong>Zero PR Friction</strong></div>
              <span className="status-tag blue">99.4% SLA</span>
            </div>
          </div>
        </div>

        {/* 5-Step Value Chain Strip */}
        <div className="hero-value-chain-strip">
          <div className="v-step">
            <div className="v-num">1</div>
            <span>Raise RFQ easier</span>
          </div>
          <div className="v-arrow">→</div>
          <div className="v-step">
            <div className="v-num">2</div>
            <span>Reach Vendors faster</span>
          </div>
          <div className="v-arrow">→</div>
          <div className="v-step">
            <div className="v-num">3</div>
            <span>Get Quotations quicker</span>
          </div>
          <div className="v-arrow">→</div>
          <div className="v-step">
            <div className="v-num">4</div>
            <span>Compare Quotations better</span>
          </div>
          <div className="v-arrow">→</div>
          <div className="v-step highlight">
            <div className="v-num highlight-num">5</div>
            <span>Spend Time & Money lesser</span>
          </div>
        </div>

      </div>

      <style>{`
        .v3-hero-section {
          padding: 20px 0 60px;
          position: relative;
          overflow: hidden;
        }

        /* Clean Header Wrapper */
        .clean-hero-header {
          max-width: 920px;
          margin: 0 auto 10px;
        }

        .hero-text-stage {
          position: relative;
          min-height: 230px;
          display: flex;
          align-items: center;
          justify-content: center;
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
          max-width: 900px;
          height: 480px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .globe-canvas-wrapper {
          position: relative;
          width: 420px;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .globe-canvas {
          width: 420px;
          height: 420px;
          cursor: grab;
        }
        .globe-core-glow {
          position: absolute;
          width: 320px;
          height: 320px;
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

        .c-metrics {
          font-size: 0.75rem;
          color: #334155;
          border-top: 1px solid #f1f5f9;
          padding-top: 6px;
        }
        .m-line { margin-bottom: 2px; }

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
        .card-canada {
          top: 40px;
          left: 40px;
          animation-delay: 0s;
        }
        .card-singapore {
          top: 60px;
          right: 30px;
          animation-delay: 1s;
        }
        .card-dubai {
          bottom: 60px;
          right: 40px;
          animation-delay: 2s;
        }
        .card-india {
          bottom: 40px;
          left: 60px;
          animation-delay: 1.5s;
          border-color: #10b981;
        }
        .card-usa {
          top: 220px;
          left: -10px;
          animation-delay: 0.5s;
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

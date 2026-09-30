import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GlobeHero from './components/GlobeHero';
import TrustLogoStrip from './components/TrustLogoStrip';
import CapabilitiesSection from './components/CapabilitiesSection';
import CalculatorSection from './components/CalculatorSection';
import Footer from './components/Footer';
import QuaAiWidget from './components/QuaAiWidget';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-emerald-500/20 selection:text-emerald-700">
      {/* Floating Pill Header Navbar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* 3D Globe Hero Section with Orbiting Global Country Cards */}
      <GlobeHero onOpenDemo={handleOpenDemo} />

      {/* Trusted Global Brands Ticker */}
      <TrustLogoStrip />

      {/* B2B Marketplace & Technology Solutions Section */}
      <CapabilitiesSection onOpenDemo={handleOpenDemo} />

      {/* Spend ROI Calculator Section */}
      <CalculatorSection onOpenDemo={handleOpenDemo} />

      {/* Modern Light/Dark Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Floating QUA AI Assistant */}
      <QuaAiWidget onOpenDemo={handleOpenDemo} />

      {/* Interactive Marketplace Onboarding Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}

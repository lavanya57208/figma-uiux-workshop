import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LearningOutcomes } from './components/LearningOutcomes';
import { Speakers } from './components/Speakers';
import { EventDetails } from './components/EventDetails';
import { AgendaTimeline } from './components/AgendaTimeline';
import { WhyAttend } from './components/WhyAttend';
import { GallerySection } from './components/GallerySection';
import { RegistrationSection } from './components/RegistrationSection';
import { CertificateSection } from './components/CertificateSection';
import { OrganizersSection } from './components/OrganizersSection';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { ShortcutsModal } from './components/ShortcutsModal';
import { Sparkles, ArrowUp } from 'lucide-react';

export default function App() {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [showFloatingRegister, setShowFloatingRegister] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowFloatingRegister(true);
      } else {
        setShowFloatingRegister(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegister = () => {
    const regSection = document.getElementById('register');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-sans selection:bg-[#38BDF8]/30 selection:text-[#0B1F5E] overflow-x-hidden">
      
      {/* Sticky Glass Navbar */}
      <Navbar
        onRegisterClick={scrollToRegister}
        onBrochureClick={() => setBrochureOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        {/* Full Screen Hero Section */}
        <Hero
          onRegisterClick={scrollToRegister}
          onBrochureClick={() => setBrochureOpen(true)}
        />

        {/* About Workshop Section */}
        <AboutSection />

        {/* Learning Outcomes Section */}
        <LearningOutcomes
          onShortcutsClick={() => setShortcutsOpen(true)}
        />

        {/* Speakers / Resource Persons */}
        <Speakers />

        {/* Event Key Particulars */}
        <EventDetails />

        {/* Workshop Agenda Timeline */}
        <AgendaTimeline />

        {/* Why Attend Section */}
        <WhyAttend />

        {/* Gallery Section */}
        <GallerySection />

        {/* Certificate Section */}
        <CertificateSection />

        {/* Registration Section */}
        <RegistrationSection />

        {/* Organizers Section */}
        <OrganizersSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast Register Button on Scroll */}
      {showFloatingRegister && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom duration-300">
          <button
            onClick={scrollToRegister}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#0B1F5E] via-[#2563EB] to-[#38BDF8] text-white font-btn font-bold text-xs shadow-2xl shadow-[#2563EB]/40 border border-[#38BDF8]/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8] animate-pulse" />
            <span>Register Now</span>
          </button>
        </div>
      )}

      {/* Modals */}
      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
        onRegisterClick={scrollToRegister}
      />

      <ShortcutsModal
        isOpen={shortcutsOpen}
        onClose={() => setShortcutsOpen(false)}
      />

    </div>
  );
}

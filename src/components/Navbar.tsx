import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

interface NavbarProps {
  onRegisterClick: () => void;
  onBrochureClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick, onBrochureClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Outcomes', href: '#outcomes' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Details', href: '#details' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Why Attend', href: '#why-attend' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Certificate', href: '#certificate' },
    { name: 'Organizers', href: '#organizers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-[#0B1F5E]/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Institution Logos & Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              {/* College Logo Badge */}
              <div className="w-10 h-10 rounded-xl bg-[#0B1F5E] p-1.5 flex items-center justify-center text-white font-heading font-black text-xs shadow-md border border-[#38BDF8]/30 group-hover:scale-105 transition-transform">
                PEC
              </div>
              {/* Department & Event Crest */}
              <div className="hidden sm:flex flex-col">
                <span className="font-heading font-extrabold text-[#0B1F5E] text-sm tracking-tight leading-none">
                  PANIMALAR
                </span>
                <span className="text-[10px] font-body text-[#2563EB] font-semibold tracking-wider uppercase">
                  Dept. of AI & ML
                </span>
              </div>
            </div>

            {/* Division Line */}
            <div className="hidden md:block h-6 w-px bg-slate-300"></div>

            {/* Partner Logos Pills */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-[#0B1F5E]/10 border border-[#0B1F5E]/20 text-[10px] font-btn font-bold text-[#0B1F5E]">
                IEEE
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[10px] font-btn font-bold text-[#2563EB]">
                IIC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-body font-medium text-slate-700 hover:text-[#2563EB] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#38BDF8] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBrochureClick}
              className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 rounded-xl text-xs font-btn font-medium text-[#0B1F5E] bg-white border border-slate-200 shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-all cursor-pointer"
            >
              Brochure
            </button>

            <button
              onClick={onRegisterClick}
              className="relative group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-btn font-bold text-white bg-gradient-to-r from-[#0B1F5E] via-[#2563EB] to-[#38BDF8] hover:opacity-95 shadow-md shadow-[#2563EB]/20 transition-all cursor-pointer overflow-hidden"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
              <span>Register Now</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-[#0B1F5E] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-card mt-2 mx-4 p-5 rounded-2xl border border-slate-200/80 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-body font-medium text-slate-800 hover:text-[#2563EB] py-2 px-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBrochureClick();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-btn font-semibold text-[#0B1F5E] bg-slate-100 hover:bg-slate-200 text-center transition-colors"
              >
                Download Brochure PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

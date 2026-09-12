import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Instagram, Youtube, Twitter, Github, ArrowUp, Sparkles } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07133B] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center font-heading font-black text-xs shadow-md">
                PEC
              </div>
              <div>
                <h3 className="font-heading font-black text-base text-white">
                  PANIMALAR ENGINEERING COLLEGE
                </h3>
                <div className="text-xs font-btn font-bold text-[#38BDF8]">
                  Department of Artificial Intelligence & Machine Learning
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-body leading-relaxed max-w-sm">
              An Autonomous Institution affiliated to Anna University, Chennai. Accredited by NAAC with 'A' Grade and NBA.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-[#2563EB] text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-pink-600 text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-red-600 text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-cyan-500 text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-slate-700 text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#38BDF8] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-body text-slate-300">
              <li><a href="#about" className="hover:text-[#38BDF8] transition-colors">About Workshop</a></li>
              <li><a href="#outcomes" className="hover:text-[#38BDF8] transition-colors">Learning Outcomes</a></li>
              <li><a href="#speakers" className="hover:text-[#38BDF8] transition-colors">Resource Persons</a></li>
              <li><a href="#details" className="hover:text-[#38BDF8] transition-colors">Event Details & Venue</a></li>
              <li><a href="#agenda" className="hover:text-[#38BDF8] transition-colors">Workshop Agenda</a></li>
              <li><a href="#why-attend" className="hover:text-[#38BDF8] transition-colors">Why Attend</a></li>
              <li><a href="#gallery" className="hover:text-[#38BDF8] transition-colors">Photo Gallery</a></li>
              <li><a href="#organizers" className="hover:text-[#38BDF8] transition-colors">Organizers Committee</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#38BDF8] uppercase tracking-wider">
              Contact & Venue
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-body">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{WORKSHOP_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>{WORKSHOP_INFO.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>{WORKSHOP_INFO.contactEmail}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-slate-400">
          <div>
            © 2026 Panimalar Engineering College. All rights reserved. Department of AI & ML.
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/10 hover:bg-[#2563EB] text-white transition-colors flex items-center gap-1.5 cursor-pointer font-btn text-xs"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

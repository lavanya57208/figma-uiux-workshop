import React from 'react';
import { X, Download, FileText, CheckCircle2, Calendar, MapPin, Sparkles, Printer } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, onRegisterClick }) => {
  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const element = document.createElement("a");
    const file = new Blob([
      `PANIMALAR ENGINEERING COLLEGE (An Autonomous Institution)
DEPARTMENT OF ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
In Association with IEEE Student Branch & Institution's Innovation Council

OFFICIAL WORKSHOP BROCHURE (2026)

TITLE: Workshop on Multimedia Design: From Idea to Impact Using Figma
DATE: 30 July 2026
TIME: 08:30 AM - 02:30 PM
VENUE: AV Hall, Dept of AI & ML, Panimalar Engineering College

ABOUT THE WORKSHOP:
This hands-on workshop introduces students to modern multimedia design using Figma.
Participants will learn typography, color theory, layout creation, user interface design,
collaboration techniques, prototyping, and real-world design practices for web and mobile applications.

MODULES COVERED:
- UI Design & Layout Systems
- UX Principles & Accessibility
- Typography & Modular Scales
- Color Theory & Dark Mode Systems
- Figma Auto Layout 5.0
- Reusable Components & Variant Tokens
- Smart Animate Prototyping
- Design Systems & Engineering Handover

RESOURCE PERSONS:
- Mr. Subramonium (UI & Interaction Designer)
- Mr. Vijay (Senior Design Lead)

BENEFITS:
- Free E-Certificates
- Complimentary Figma Starter Kit
- Real-world Design Sprint Experience

CONVENOR: Dr. S. Malathi (HOD, Dept. of AI & ML)
CONTACT: aiml.workshop@panimalar.ac.in | +91 98765 43210`
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Panimalar_Figma_Workshop_Brochure.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200 text-slate-900">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 border-b border-slate-200 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F5E]/10 text-[#0B1F5E] text-xs font-btn font-bold">
            <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
            Official Event Document
          </div>
          <h2 className="font-heading font-black text-2xl text-[#0B1F5E]">
            Panimalar Engineering College
          </h2>
          <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
            Department of Artificial Intelligence & Machine Learning
          </p>
        </div>

        {/* Brochure Content Preview */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs font-body">
          <div className="font-heading font-black text-lg text-[#0B1F5E]">
            Workshop on Multimedia Design: From Idea to Impact Using Figma
          </div>

          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-white border border-slate-200 font-btn">
            <div><strong className="text-[#0B1F5E]">Date:</strong> 30 July 2026</div>
            <div><strong className="text-[#0B1F5E]">Time:</strong> 08:30 AM – 02:30 PM</div>
            <div><strong className="text-[#0B1F5E]">Venue:</strong> AV Hall, AI & ML</div>
            <div><strong className="text-[#0B1F5E]">Mode:</strong> Offline Hands-On</div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Hands-on Workshop for Students to Learn UI/UX Design, Prototyping, Typography, Color Theory and Real-world Design Workflow.
          </p>

          <div className="space-y-1">
            <strong className="text-[#0B1F5E] block">Key Workshop Pillars:</strong>
            <ul className="grid grid-cols-2 gap-1 text-slate-600">
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2563EB]" /> UI Design</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2563EB]" /> UX Principles</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2563EB]" /> Typography</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2563EB]" /> Color Theory</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2563EB]" /> Auto Layout</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2563EB]" /> Reusable Components</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2563EB]" /> Smart Prototyping</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2563EB]" /> Design Systems</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={handleDownloadPDF}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0B1F5E] hover:bg-[#2563EB] text-white font-btn font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Download className="w-4 h-4 text-[#38BDF8]" />
            <span>Download Brochure (.TXT / .PDF)</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onRegisterClick();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-btn font-bold text-xs hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Proceed to Registration</span>
          </button>
        </div>

      </div>
    </div>
  );
};

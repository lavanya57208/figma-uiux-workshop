import React, { useState } from 'react';
import { 
  MousePointerClick, 
  Award, 
  FolderKanban, 
  MessageSquare, 
  Share2, 
  TrendingUp, 
  FileCheck, 
  DownloadCloud, 
  Check, 
  Sparkles,
  ExternalLink,
  Download
} from 'lucide-react';
import { WHY_ATTEND_POINTS } from '../data/workshopData';

const getWhyIcon = (iconName: string) => {
  switch (iconName) {
    case 'MousePointerClick': return <MousePointerClick className="w-5 h-5" />;
    case 'Award': return <Award className="w-5 h-5" />;
    case 'FolderKanban': return <FolderKanban className="w-5 h-5" />;
    case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
    case 'Share2': return <Share2 className="w-5 h-5" />;
    case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
    case 'FileCheck': return <FileCheck className="w-5 h-5" />;
    case 'DownloadCloud': return <DownloadCloud className="w-5 h-5" />;
    default: return <Sparkles className="w-5 h-5" />;
  }
};

export const WhyAttend: React.FC = () => {
  const [downloadedKit, setDownloadedKit] = useState(false);

  const handleDownloadStarterKit = () => {
    setDownloadedKit(true);
    // Simulate kit manifest download
    const element = document.createElement("a");
    const file = new Blob([
      `PANIMALAR ENGINEERING COLLEGE - MULTIMEDIA DESIGN WORKSHOP
FIGMA STARTER KIT & RESOURCES VAULT (2026)

Included Assets:
1. Panimalar Design Tokens (Colors, Typography, Elevations)
2. iOS & Android Responsive Wireframe Layouts
3. Auto Layout 5.0 Component Library
4. Figma Keyboard Shortcuts Cheat-sheet
5. UI/UX Case Study Presentation Template

Workshop Date: 30 July 2026
Venue: AV Hall, Dept. of AI & ML`
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Panimalar_Figma_Starter_Kit.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="why-attend" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            Unmatched Value Proposition
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0B1F5E] tracking-tight">
            Why You Should Attend
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Every participant gains practical skills, professional credentials, and lifetime design assets.
          </p>
        </div>

        {/* 8 Feature Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_ATTEND_POINTS.map((point) => (
            <div
              key={point.title}
              className="glass-card p-6 rounded-3xl border border-white/80 hover:border-[#38BDF8] shadow-lg hover:shadow-2xl hover:shadow-[#2563EB]/15 hover:-translate-y-2 transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <div className="p-2.5 rounded-2xl bg-[#0B1F5E] text-white shadow-md group-hover:bg-[#2563EB] transition-colors">
                    {getWhyIcon(point.iconName)}
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-lg text-[#0B1F5E] group-hover:text-[#2563EB] transition-colors">
                  {point.title}
                </h3>

                <p className="font-body text-xs text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center text-[11px] font-btn font-bold text-[#2563EB]">
                <span>Verified Benefit</span>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusive Design Resources Vault Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0B1F5E] via-[#2563EB] to-[#0B1F5E] text-white shadow-2xl border border-[#38BDF8]/40 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#38BDF8]/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-2 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-btn font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Complimentary Workshop Resource Vault</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Download the Figma Workshop UI Starter Kit
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 max-w-xl">
              Includes pre-built design tokens, responsive iOS/Android UI frames, auto layout component templates, and shortcut matrices.
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <button
              onClick={handleDownloadStarterKit}
              className={`px-7 py-3.5 rounded-2xl font-btn font-bold text-xs flex items-center gap-2 shadow-xl transition-all cursor-pointer ${
                downloadedKit
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#38BDF8] hover:bg-cyan-300 text-[#0B1F5E]'
              }`}
            >
              {downloadedKit ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Kit Downloaded Successfully!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Starter Kit (.ZIP)</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

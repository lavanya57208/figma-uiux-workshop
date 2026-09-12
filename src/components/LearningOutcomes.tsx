import React, { useState } from 'react';
import { 
  Lightbulb, 
  PenTool, 
  Sparkles, 
  PlayCircle, 
  Monitor, 
  Users, 
  Command, 
  Briefcase, 
  ChevronRight,
  Check,
  HelpCircle
} from 'lucide-react';
import { LEARNING_OUTCOMES } from '../data/workshopData';

const getOutcomeIcon = (iconName: string) => {
  switch (iconName) {
    case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
    case 'PenTool': return <PenTool className="w-6 h-6" />;
    case 'Sparkles': return <Sparkles className="w-6 h-6" />;
    case 'PlayCircle': return <PlayCircle className="w-6 h-6" />;
    case 'Monitor': return <Monitor className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'Command': return <Command className="w-6 h-6" />;
    case 'Briefcase': return <Briefcase className="w-6 h-6" />;
    default: return <Sparkles className="w-6 h-6" />;
  }
};

interface LearningOutcomesProps {
  onShortcutsClick: () => void;
}

export const LearningOutcomes: React.FC<LearningOutcomesProps> = ({ onShortcutsClick }) => {
  return (
    <section id="outcomes" className="py-20 md:py-28 bg-[#0B1F5E] text-white relative overflow-hidden circuit-bg">
      
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2563EB]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-[#38BDF8] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            Measurable Skill Acquisition
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            What Students Will Master
          </h2>
          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            Tangible design capabilities participants take home after completing the Panimalar Engineering College Multimedia Workshop.
          </p>
        </div>

        {/* Animated Outcomes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LEARNING_OUTCOMES.map((item, idx) => {
            const isShortcutsCard = item.title === 'Figma Shortcuts';
            return (
              <div
                key={item.title}
                className={`group relative p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between border ${
                  isShortcutsCard
                    ? 'glass-card-dark border-[#38BDF8] shadow-2xl shadow-[#38BDF8]/20 ring-2 ring-[#38BDF8]/30'
                    : 'glass-card-dark border-white/10 hover:border-[#38BDF8]/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2563EB]/20'
                }`}
              >
                <div className="space-y-4">
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-[#0B1F5E] font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {getOutcomeIcon(item.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-white/10 px-2.5 py-1 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#38BDF8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-slate-300 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-lg bg-white/10 text-[10px] font-btn font-semibold text-cyan-200 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  {isShortcutsCard ? (
                    <button
                      onClick={onShortcutsClick}
                      className="w-full py-2 px-3 rounded-xl bg-[#38BDF8] hover:bg-cyan-300 text-[#0B1F5E] font-btn font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Command className="w-3.5 h-3.5" />
                      <span>Open Shortcuts Matrix</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-btn text-cyan-300 font-semibold">
                      <Check className="w-4 h-4 text-[#38BDF8]" />
                      <span>Hands-on Project Output</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2563EB]/40 via-[#0B1F5E] to-[#2563EB]/40 border border-[#38BDF8]/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#38BDF8] flex items-center justify-center text-[#0B1F5E] shrink-0 font-bold">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Ready for Design Internships & Hackathons
              </h4>
              <p className="text-xs text-cyan-100">
                Participating students walk away with portfolio artifacts shareable directly on GitHub and LinkedIn.
              </p>
            </div>
          </div>
          <button
            onClick={onShortcutsClick}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-btn font-bold text-white transition-all shrink-0 cursor-pointer"
          >
            View Figma Hotkeys Guide
          </button>
        </div>

      </div>
    </section>
  );
};

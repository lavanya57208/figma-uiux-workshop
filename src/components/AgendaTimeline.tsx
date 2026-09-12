import React, { useState } from 'react';
import { Clock, User, ChevronDown, ChevronUp, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';
import { AGENDA_ITEMS, AgendaItem } from '../data/workshopData';

export const AgendaTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(3); // Default expand Figma Basics
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Core Session', 'Hands-on', 'Registration', 'Break', 'Keynote'];

  const filteredItems = activeFilter === 'All'
    ? AGENDA_ITEMS
    : AGENDA_ITEMS.filter(item => item.tag === activeFilter);

  return (
    <section id="agenda" className="py-20 md:py-28 bg-[#0B1F5E] text-white relative overflow-hidden circuit-bg">
      
      {/* Background Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-[#38BDF8] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
            Hour-by-Hour Learning Path
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Workshop Schedule Timeline
          </h2>
          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            Carefully structured 6-hour curriculum ensuring smooth transition from theory to hands-on Figma mastery.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-btn font-bold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#38BDF8] text-[#0B1F5E] shadow-lg shadow-[#38BDF8]/30 scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative space-y-6 before:content-[''] before:absolute before:left-4 sm:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#38BDF8] before:via-[#2563EB] before:to-cyan-400">
          
          {filteredItems.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.time + item.title}
                className="relative flex flex-col sm:flex-row items-start sm:items-center group"
              >
                
                {/* Center Timeline Node Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B1F5E] border-2 border-[#38BDF8] shadow-lg shadow-[#38BDF8]/40 flex items-center justify-center z-20 text-[#38BDF8] group-hover:scale-125 transition-transform">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]"></span>
                </div>

                {/* Timeline Card Wrapper */}
                <div className="ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] my-2">
                  <div
                    className={`glass-card-dark p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                      isExpanded
                        ? 'border-[#38BDF8] shadow-2xl shadow-[#38BDF8]/20 ring-1 ring-[#38BDF8]/30'
                        : 'border-white/15 hover:border-[#38BDF8]/50'
                    }`}
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  >
                    
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-2 pb-2">
                      <span className="px-3 py-1 rounded-full bg-[#2563EB]/40 border border-[#38BDF8]/30 font-btn font-extrabold text-xs text-cyan-200">
                        {item.time}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-btn font-bold ${
                        item.tag === 'Hands-on' ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' :
                        item.tag === 'Core Session' ? 'bg-[#38BDF8]/20 text-cyan-200 border border-[#38BDF8]/40' :
                        'bg-white/10 text-slate-300'
                      }`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-extrabold text-lg text-white mt-1 group-hover:text-[#38BDF8] transition-colors">
                      {item.title}
                    </h3>

                    {/* Speaker Info if available */}
                    {item.speaker && (
                      <div className="flex items-center gap-1.5 text-xs text-cyan-300 mt-1 font-body font-medium">
                        <User className="w-3.5 h-3.5" />
                        <span>Speaker: {item.speaker}</span>
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Expandable Key Takeaways */}
                    {isExpanded && item.highlights && (
                      <div className="mt-4 pt-3 border-t border-white/10 space-y-2 animate-in fade-in duration-200">
                        <div className="text-[11px] font-btn font-bold text-cyan-300 uppercase tracking-wider">
                          Key Session Highlights:
                        </div>
                        <ul className="space-y-1.5">
                          {item.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2 text-xs text-slate-200 font-body">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Expand Indicator Footer */}
                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-btn text-cyan-300">
                      <span>{isExpanded ? 'Hide Details' : 'View Session Topics'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

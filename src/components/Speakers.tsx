import React, { useState } from 'react';
import { Linkedin, Sparkles, Award, CheckCircle2, ArrowUpRight, X } from 'lucide-react';
import { SPEAKERS, Speaker } from '../data/workshopData';

export const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Lights */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            Industry Luminaries
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0B1F5E] tracking-tight">
            Meet the Resource Persons
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Learn directly from active industry design leads with real-world experience building enterprise digital products.
          </p>
        </div>

        {/* Speakers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative glass-card p-8 rounded-3xl border border-white/80 hover:border-[#38BDF8] shadow-xl hover:shadow-2xl hover:shadow-[#2563EB]/15 hover:-translate-y-2 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              {/* Top Row: Avatar & Badges */}
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="relative">
                    {/* Ring Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    {/* Avatar */}
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="relative w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                    />
                  </div>

                  {/* Experience Badge */}
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0B1F5E] text-white font-btn font-bold text-xs shadow-sm flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#38BDF8]" />
                      {speaker.experience}
                    </span>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-[#2563EB] text-slate-700 hover:text-white transition-colors"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Info Details */}
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-2xl text-[#0B1F5E] group-hover:text-[#2563EB] transition-colors">
                    {speaker.name}
                  </h3>
                  <div className="text-sm font-btn font-bold text-[#2563EB] tracking-wide">
                    {speaker.role}
                  </div>
                  <p className="font-body text-xs text-slate-600 leading-relaxed pt-1">
                    {speaker.bio}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {speaker.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-btn font-semibold text-[#0B1F5E]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#0B1F5E] text-[#0B1F5E] hover:text-white font-btn font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Speaker Profile & Topics</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Speaker Bio Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border border-slate-200">
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selectedSpeaker.image}
                alt={selectedSpeaker.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#2563EB]"
              />
              <div>
                <h3 className="font-heading font-extrabold text-xl text-[#0B1F5E]">
                  {selectedSpeaker.name}
                </h3>
                <div className="text-xs font-btn font-bold text-[#2563EB]">
                  {selectedSpeaker.role}
                </div>
                <div className="text-[11px] text-slate-500">{selectedSpeaker.experience}</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-btn font-bold text-[#0B1F5E] uppercase tracking-wider">
                Full Bio & Key Insights
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed font-body">
                {selectedSpeaker.bio}
              </p>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[11px] font-bold text-[#0B1F5E]">Workshop Focus Areas:</div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" /> Hands-on guidance during Figma component creation</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" /> Real-time feedback on student prototype interactions</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" /> Industry career Q&A & portfolio review</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="px-5 py-2 rounded-xl bg-[#0B1F5E] text-white font-btn font-bold text-xs hover:bg-[#2563EB] transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle2, ShieldCheck, Download, Edit3 } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const CertificateSection: React.FC = () => {
  const [sampleName, setSampleName] = useState('YOUR NAME HERE');

  return (
    <section id="certificate" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#2563EB]" />
            Official Recognition
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0B1F5E] tracking-tight">
            E-Certificate of Participation
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            E-Certificates will be provided to all participants upon successful completion of the workshop.
          </p>
        </div>

        {/* Certificate Preview Box & Interactive Name Customizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Customizer Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-xl space-y-4">
              
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#0B1F5E] text-white">
                  <Edit3 className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <h3 className="font-heading font-extrabold text-base text-[#0B1F5E]">
                  Certificate Live Preview
                </h3>
              </div>

              <p className="text-xs text-slate-600">
                Type your name below to see how your verified E-Certificate will look upon completing the lab session:
              </p>

              <div className="space-y-1.5">
                <label className="text-[11px] font-btn font-bold text-[#0B1F5E] uppercase">
                  Participant Full Name
                </label>
                <input
                  type="text"
                  value={sampleName}
                  onChange={(e) => setSampleName(e.target.value)}
                  placeholder="Type your name..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 font-heading font-bold text-sm outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <div className="pt-2 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Unique Verification Code Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Co-signed by HOD & Resource Persons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Panimalar, IEEE & IIC Seal Authenticated</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: High-End Certificate Design Frame */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border-8 border-[#0B1F5E] shadow-2xl space-y-6 text-center text-[#0B1F5E] relative overflow-hidden">
              
              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#38BDF8]"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#38BDF8]"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#38BDF8]"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#38BDF8]"></div>

              {/* Institution Crest */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B1F5E] text-white flex items-center justify-center font-heading font-black text-xs">
                  PEC
                </div>
                <div className="text-left">
                  <div className="text-xs font-heading font-black tracking-wider text-[#0B1F5E]">
                    PANIMALAR ENGINEERING COLLEGE
                  </div>
                  <div className="text-[10px] text-[#2563EB] font-bold">
                    DEPARTMENT OF ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
                  </div>
                </div>
              </div>

              <div className="py-2 border-y border-slate-200">
                <div className="text-xs font-btn font-extrabold uppercase tracking-widest text-[#2563EB]">
                  Certificate of Completion
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  This is to certify that
                </div>
                
                {/* Participant Name Line */}
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#0B1F5E] my-2 tracking-tight underline decoration-[#38BDF8] decoration-2 underline-offset-4">
                  {sampleName || 'Participant Name'}
                </div>

                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  has successfully attended and completed the hands-on workshop on <br />
                  <strong className="text-[#0B1F5E]">"Multimedia Design: From Idea to Impact Using Figma"</strong> held on 30 July 2026.
                </p>
              </div>

              {/* Signatures & Seal Row */}
              <div className="grid grid-cols-3 gap-2 text-[10px] font-btn pt-2">
                <div>
                  <div className="font-bold text-[#0B1F5E]">Mr. Subramonium</div>
                  <div className="text-slate-500">Resource Person</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#0B1F5E] text-white flex items-center justify-center font-bold text-[9px] shadow-md border-2 border-[#38BDF8]">
                    SEAL
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[#0B1F5E]">Dr. S. Malathi</div>
                  <div className="text-slate-500">HOD, Dept of AI & ML</div>
                </div>
              </div>

              <div className="text-[9px] font-mono text-slate-400">
                Verify Credential at: https://panimalar.ac.in/cert/PEC-FIGMA-2026
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

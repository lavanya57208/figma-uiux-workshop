import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Download, ArrowRight, Layers, Play, MousePointer, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

interface HeroProps {
  onRegisterClick: () => void;
  onBrochureClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onBrochureClick }) => {
  const [activeFigmaTab, setActiveFigmaTab] = useState<'canvas' | 'prototype' | 'tokens'>('canvas');
  const [activeLayer, setActiveLayer] = useState<string>('hero-card');

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0B1F5E] text-white circuit-bg">
      
      {/* Futuristic Background Lights & Glowing Particles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#38BDF8]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-10 right-1/3 w-64 h-64 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Hexagonal Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 hex-bg pointer-events-none"></div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-[#38BDF8] animate-ping opacity-75"></div>
        <div className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-[#2563EB] animate-bounce opacity-60"></div>
        <div className="absolute bottom-32 left-[20%] w-2.5 h-2.5 rounded-full bg-cyan-300 animate-pulse"></div>
        <div className="absolute top-1/3 right-[30%] w-1.5 h-1.5 rounded-full bg-blue-200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Institution & Organizational Crest Logos */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
          
          {/* Panimalar Logo Badge */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl hover:border-[#38BDF8]/50 transition-all">
            <div className="w-8 h-8 rounded-xl bg-[#2563EB] flex items-center justify-center font-heading font-black text-xs text-white">
              PEC
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-heading font-extrabold tracking-wide text-white">
                PANIMALAR ENGINEERING COLLEGE
              </span>
              <span className="text-[10px] text-cyan-200 font-medium">An Autonomous Institution</span>
            </div>
          </div>

          {/* IEEE Logo Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#38BDF8]/50 transition-all">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
            <span className="text-xs font-btn font-bold text-cyan-200">IEEE Student Branch</span>
          </div>

          {/* IIC Logo Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#38BDF8]/50 transition-all">
            <span className="text-xs font-btn font-bold text-blue-200">Institution's Innovation Council (IIC)</span>
          </div>

          {/* Dept of AI & ML Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-[#2563EB]/40 to-[#38BDF8]/30 backdrop-blur-md border border-[#38BDF8]/40">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-btn font-bold text-white tracking-wide">Dept. of AI & ML</span>
          </div>

        </div>

        {/* Hero Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-500/20 border border-[#38BDF8]/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
              </span>
              <span className="text-xs font-btn font-semibold text-cyan-200 uppercase tracking-wider">
                Hands-on Offline Workshop • Seats Limited ({WORKSHOP_INFO.seatsFilled}/{WORKSHOP_INFO.seatsTotal} Filled)
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-[1.15] tracking-tight">
              Workshop on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-white to-blue-300 neon-text-glow">
                Multimedia Design
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-cyan-100/90 font-heading">
                From Idea to Impact Using Figma
              </span>
            </h1>

            {/* Sub Heading */}
            <p className="font-body text-slate-200 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hands-on Workshop for Students to Learn UI/UX Design, Prototyping, Typography, Color Theory and Real-world Design Workflow.
            </p>

            {/* Event Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-cyan-200 font-semibold uppercase">Date</div>
                  <div className="text-xs font-bold text-white font-btn">{WORKSHOP_INFO.date}</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-cyan-200 font-semibold uppercase">Time</div>
                  <div className="text-xs font-bold text-white font-btn">{WORKSHOP_INFO.time}</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-cyan-200 font-semibold uppercase">Venue</div>
                  <div className="text-xs font-bold text-white font-btn">AV Hall, AI & ML</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-btn font-bold text-sm text-[#0B1F5E] bg-gradient-to-r from-[#38BDF8] via-cyan-200 to-white hover:from-white hover:to-[#38BDF8] shadow-xl shadow-[#38BDF8]/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-[#0B1F5E]" />
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 text-[#0B1F5E] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBrochureClick}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-btn font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#38BDF8]" />
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-slate-300 font-body">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Free E-Certificate
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Figma UI Starter Kit
              </span>
            </div>

          </div>

          {/* Right Column: Floating 3D Laptop Mockup displaying Figma Interface */}
          <div className="lg:col-span-5 relative">
            
            {/* Holographic Glowing Backdrop Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#38BDF8]/30 via-[#2563EB]/40 to-cyan-400/20 rounded-[32px] blur-xl opacity-80 animate-pulse-glow"></div>

            {/* Floating Container */}
            <div className="relative animate-float">
              
              {/* Laptop Shell */}
              <div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 shadow-2xl backdrop-blur-xl">
                
                {/* Laptop Camera & Top Bezel */}
                <div className="flex items-center justify-between pb-2 px-3 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Panimalar_Figma_Workshop.fig
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#2563EB] text-white">Live</span>
                  </div>
                </div>

                {/* Figma Toolbar */}
                <div className="bg-slate-900 p-2 flex items-center justify-between border-b border-slate-800 text-xs text-slate-300 font-body">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center font-bold text-white text-[11px]">
                      F
                    </div>
                    <button
                      onClick={() => setActiveFigmaTab('canvas')}
                      className={`px-2.5 py-1 rounded text-[11px] font-btn font-medium transition-colors ${
                        activeFigmaTab === 'canvas' ? 'bg-slate-800 text-white border border-slate-700' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Design Canvas
                    </button>
                    <button
                      onClick={() => setActiveFigmaTab('prototype')}
                      className={`px-2.5 py-1 rounded text-[11px] font-btn font-medium transition-colors ${
                        activeFigmaTab === 'prototype' ? 'bg-slate-800 text-[#38BDF8] border border-[#38BDF8]/40' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Prototype
                    </button>
                    <button
                      onClick={() => setActiveFigmaTab('tokens')}
                      className={`px-2.5 py-1 rounded text-[11px] font-btn font-medium transition-colors ${
                        activeFigmaTab === 'tokens' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/40' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Tokens
                    </button>
                  </div>

                  <div className="hidden sm:flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center text-[9px] font-bold text-white">M</span>
                    <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] font-bold text-white">V</span>
                    <span className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center text-[9px] font-bold text-white">+142</span>
                  </div>
                </div>

                {/* Main Interactive Screen Canvas */}
                <div className="relative min-h-[260px] sm:min-h-[300px] bg-slate-950 p-4 rounded-xl overflow-hidden border border-slate-800 flex flex-col justify-between">
                  
                  {/* Grid Lines in Figma Screen */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>

                  {activeFigmaTab === 'canvas' && (
                    <div className="relative z-10 space-y-3">
                      {/* Interactive Component Frame */}
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-[#38BDF8]/50 shadow-lg shadow-[#38BDF8]/10 space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-[#38BDF8] font-mono">
                          <span className="flex items-center gap-1">
                            <Layers className="w-3 h-3" /> Frame: App_Hero_Card
                          </span>
                          <span>Auto Layout [W: 100% | H: Hug]</span>
                        </div>
                        <div className="h-12 rounded-lg bg-gradient-to-r from-[#0B1F5E] to-[#2563EB] p-2 flex items-center justify-between border border-cyan-400/30">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#38BDF8] flex items-center justify-center text-[10px] text-[#0B1F5E] font-bold">
                              UI
                            </div>
                            <span className="text-xs font-heading font-bold text-white">Panimalar UX Design</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-white/20 text-[9px] font-btn text-white">Active Node</span>
                        </div>
                      </div>

                      {/* Figma Property Indicators */}
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          <span className="text-cyan-400">Border Radius:</span> 20px
                        </div>
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          <span className="text-cyan-400">Fill:</span> #0B1F5E (Navy)
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFigmaTab === 'prototype' && (
                    <div className="relative z-10 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 space-y-3">
                      <div className="flex items-center justify-between text-xs text-cyan-300 font-mono">
                        <span className="flex items-center gap-1"><Play className="w-3.5 h-3.5 text-cyan-400" /> Smart Animate Flow 1</span>
                        <span>Ease-In-Out 300ms</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                        <div className="text-emerald-400 font-semibold">Trigger: On Click / Tap</div>
                        <div className="text-slate-400 text-[11px]">Navigate to: Screen_2_Prototyping_Lab</div>
                      </div>
                    </div>
                  )}

                  {activeFigmaTab === 'tokens' && (
                    <div className="relative z-10 grid grid-cols-3 gap-2 p-2">
                      <div className="p-2 rounded bg-[#0B1F5E] border border-cyan-400/30 text-white text-[10px] font-mono">
                        <div className="font-bold">Primary</div>
                        <div>#0B1F5E</div>
                      </div>
                      <div className="p-2 rounded bg-[#2563EB] text-white text-[10px] font-mono">
                        <div className="font-bold">Secondary</div>
                        <div>#2563EB</div>
                      </div>
                      <div className="p-2 rounded bg-[#38BDF8] text-[#0B1F5E] text-[10px] font-mono">
                        <div className="font-bold">Accent</div>
                        <div>#38BDF8</div>
                      </div>
                    </div>
                  )}

                  {/* Simulated Live Cursors on Canvas */}
                  <div className="relative z-20 flex items-center justify-between pt-2 border-t border-slate-800/80">
                    <div className="flex items-center gap-1 text-[10px] text-pink-400 font-mono animate-bounce">
                      <MousePointer className="w-3 h-3 fill-pink-500 text-pink-500" />
                      <span>Subramonium (Editing)</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#38BDF8] font-mono">
                      <MousePointer className="w-3 h-3 fill-[#38BDF8] text-[#38BDF8]" />
                      <span>Vijay (Inspecting)</span>
                    </div>
                  </div>

                </div>

                {/* Laptop Base Stand */}
                <div className="mt-2 h-1.5 w-full rounded-b-xl bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700"></div>
              </div>

              {/* Floating Holographic Glass Badges around Laptop */}
              <div className="absolute -top-4 -left-4 px-3.5 py-2 rounded-2xl glass-card-dark text-white border border-[#38BDF8]/40 shadow-xl hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-btn font-bold text-cyan-200">Live Figma 5.0</span>
              </div>

              <div className="absolute -bottom-5 -right-4 px-4 py-2.5 rounded-2xl bg-white/90 text-[#0B1F5E] border border-slate-200 shadow-2xl hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Skill Level</div>
                  <div className="text-xs font-btn font-extrabold text-[#0B1F5E]">Beginner to Pro</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

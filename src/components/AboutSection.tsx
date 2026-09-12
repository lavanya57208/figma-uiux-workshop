import React, { useState } from 'react';
import { 
  Layout, 
  Compass, 
  Type, 
  Palette, 
  Maximize2, 
  Layers, 
  Smartphone, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Lightbulb,
  PenTool,
  PlayCircle,
  Globe
} from 'lucide-react';
import { FEATURE_CARDS } from '../data/workshopData';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Layout': return <Layout className="w-5 h-5" />;
    case 'Compass': return <Compass className="w-5 h-5" />;
    case 'Type': return <Type className="w-5 h-5" />;
    case 'Palette': return <Palette className="w-5 h-5" />;
    case 'Maximize2': return <Maximize2 className="w-5 h-5" />;
    case 'Layers': return <Layers className="w-5 h-5" />;
    case 'Smartphone': return <Smartphone className="w-5 h-5" />;
    case 'Cpu': return <Cpu className="w-5 h-5" />;
    default: return <Sparkles className="w-5 h-5" />;
  }
};

export const AboutSection: React.FC = () => {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(2);

  const workflowSteps = [
    {
      id: 0,
      title: '1. Empathy & Idea',
      desc: 'Framing problems, user needs & mental maps.',
      icon: <Lightbulb className="w-4 h-4 text-amber-500" />
    },
    {
      id: 1,
      title: '2. Wireframing',
      desc: 'Low-fi structural sketches & layout grids.',
      icon: <PenTool className="w-4 h-4 text-[#2563EB]" />
    },
    {
      id: 2,
      title: '3. UI Design in Figma',
      desc: 'High-fidelity visual polish, colors & type.',
      icon: <Palette className="w-4 h-4 text-[#38BDF8]" />
    },
    {
      id: 3,
      title: '4. Interactive Prototype',
      desc: 'Smart Animate transitions & gestures.',
      icon: <PlayCircle className="w-4 h-4 text-emerald-500" />
    },
    {
      id: 4,
      title: '5. Real-World Impact',
      desc: 'Developer handover & production launch.',
      icon: <Globe className="w-4 h-4 text-purple-500" />
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            Practical Multimedia Design
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0B1F5E] mt-3 tracking-tight">
            Bridging Creative Concept to Digital Product
          </h2>
        </div>

        {/* Two-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Interactive UI Design Workflow Illustration */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0B1F5E]"></div>
                  <h3 className="font-heading font-extrabold text-[#0B1F5E] text-lg">
                    UI/UX Design Workflow Blueprint
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-full font-semibold">
                  Figma Ecosystem
                </span>
              </div>

              {/* Workflow Stepper */}
              <div className="space-y-3">
                {workflowSteps.map((step) => {
                  const isActive = activeWorkflowStep === step.id;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveWorkflowStep(step.id)}
                      className={`p-3.5 rounded-2xl transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-[#0B1F5E] text-white border-[#38BDF8] shadow-lg shadow-[#0B1F5E]/20 translate-x-1'
                          : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-slate-100'}`}>
                            {step.icon}
                          </div>
                          <div>
                            <h4 className={`text-sm font-heading font-bold ${isActive ? 'text-white' : 'text-[#0B1F5E]'}`}>
                              {step.title}
                            </h4>
                            <p className={`text-xs ${isActive ? 'text-cyan-200' : 'text-slate-500'}`}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                        {isActive && <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Step Preview Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#0B1F5E] text-white space-y-1">
                <div className="text-[10px] font-btn font-bold text-cyan-300 uppercase">
                  Current Focus in Workshop
                </div>
                <div className="text-xs font-body text-slate-100">
                  Students will perform hands-on execution for all 5 stages directly on Figma cloud canvases.
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Title & Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-btn font-extrabold text-[#2563EB] uppercase tracking-wider">
                Comprehensive Learning
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1F5E] leading-snug">
                About the Workshop
              </h3>
            </div>

            <p className="font-body text-slate-700 text-base leading-relaxed">
              This hands-on workshop introduces students to modern multimedia design using Figma. Participants will learn typography, color theory, layout creation, user interface design, collaboration techniques, prototyping, and real-world design practices for web and mobile applications.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#2563EB]/10 text-[#2563EB] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#0B1F5E] text-sm">Industry-Aligned Methodology</h4>
                  <p className="text-xs text-slate-600">Learn design standards practiced by Silicon Valley product studios and top Indian tech companies.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#2563EB]/10 text-[#2563EB] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#0B1F5E] text-sm">Zero Prior Experience Required</h4>
                  <p className="text-xs text-slate-600">Tailored step-by-step for engineering students from all academic departments.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Cards Grid (8 Core Topics) */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-heading font-extrabold text-2xl text-[#0B1F5E]">
              Core Workshop Pillars
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              8 fundamental design modules covered during the intensive 6-hour laboratory session
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURE_CARDS.map((card) => (
              <div
                key={card.id}
                className="group relative p-6 rounded-3xl glass-card border border-white/80 hover:border-[#38BDF8] shadow-lg hover:shadow-2xl hover:shadow-[#2563EB]/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0B1F5E] to-[#2563EB] text-white shadow-md group-hover:scale-110 transition-transform">
                      {getIcon(card.iconName)}
                    </div>
                    {card.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-btn font-bold bg-[#38BDF8]/15 text-[#0B1F5E] border border-[#38BDF8]/30">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#0B1F5E] group-hover:text-[#2563EB] transition-colors">
                      {card.title}
                    </h4>
                    <p className="font-body text-xs text-slate-600 leading-relaxed mt-2">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-btn font-bold text-[#2563EB] group-hover:text-[#0B1F5E]">
                  <span>Module Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

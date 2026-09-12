import React from 'react';
import { Users, Mail, Sparkles, Shield, UserCheck, HeartHandshake } from 'lucide-react';
import { ORGANIZERS } from '../data/workshopData';

export const OrganizersSection: React.FC = () => {
  return (
    <section id="organizers" className="py-20 md:py-28 bg-[#0B1F5E] text-white relative overflow-hidden circuit-bg">
      
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-[#38BDF8] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
            Organizing Committee
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Patrons & Coordinators
          </h2>
          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            The dedicated academic leadership and student organizers driving the Panimalar Engineering College Multimedia Workshop.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {ORGANIZERS.map((group) => (
            <div key={group.category} className="space-y-6">
              
              {/* Category Subhead */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#2563EB]/30 border border-[#38BDF8]/30 text-[#38BDF8]">
                  {group.category === 'Chief Patrons' ? <Shield className="w-5 h-5" /> :
                   group.category === 'Convenor' ? <UserCheck className="w-5 h-5" /> :
                   group.category === 'Faculty Coordinators' ? <Users className="w-5 h-5" /> :
                   <HeartHandshake className="w-5 h-5" />}
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  {group.category}
                </h3>
                <div className="h-px bg-white/10 flex-grow"></div>
              </div>

              {/* Member Cards Grid */}
              <div className={`grid grid-cols-1 ${
                group.members.length === 1 ? 'max-w-md mx-auto' :
                group.members.length === 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' :
                'sm:grid-cols-2 lg:grid-cols-3'
              } gap-6`}>
                {group.members.map((member) => (
                  <div
                    key={member.name}
                    className="glass-card-dark p-6 rounded-3xl border border-white/15 hover:border-[#38BDF8] shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-[#0B1F5E] flex items-center justify-center font-bold text-sm shadow-md">
                        {member.name.charAt(0)}
                      </div>
                      <h4 className="font-heading font-extrabold text-lg text-white">
                        {member.name}
                      </h4>
                      <div className="text-xs font-btn font-bold text-[#38BDF8]">
                        {member.role}
                      </div>
                      {member.dept && (
                        <div className="text-xs text-slate-300 font-body">
                          {member.dept}
                        </div>
                      )}
                    </div>

                    {member.email && (
                      <div className="pt-3 border-t border-white/10">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-[11px] font-mono text-cyan-200 hover:text-white flex items-center gap-1.5 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>{member.email}</span>
                        </a>
                      </div>
                    )}

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

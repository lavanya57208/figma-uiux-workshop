import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2, QrCode, Download, User, Mail, Phone, School, Layers, Calendar, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const RegistrationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    department: 'Artificial Intelligence & Machine Learning',
    year: '2nd Year',
    college: 'Panimalar Engineering College',
    email: '',
    phone: '',
  });

  const [submittedPass, setSubmittedPass] = useState<{
    registrationId: string;
    fullName: string;
    department: string;
    year: string;
    college: string;
    email: string;
    phone: string;
    registeredAt: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const departmentsList = [
    'Artificial Intelligence & Machine Learning',
    'Computer Science & Engineering',
    'Information Technology',
    'Electronics & Communication Engineering',
    'Electrical & Electronics Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Other Institution',
  ];

  const yearsList = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields (Full Name, Email, Phone Number).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const regId = `PEC-FIGMA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const newPass = {
        ...formData,
        registrationId: regId,
        registeredAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setSubmittedPass(newPass);
      setIsSubmitting(false);

      // Trigger Confetti Burst
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0B1F5E', '#2563EB', '#38BDF8', '#ffffff'],
      });
    }, 600);
  };

  return (
    <section id="register" className="py-20 md:py-28 bg-[#0B1F5E] text-white relative overflow-hidden circuit-bg">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/25 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-[#38BDF8] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            Instant Seat Reservation
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Register For The Workshop
          </h2>
          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            Fill in your participant details to receive your official digital entry pass and seat confirmation.
          </p>
        </div>

        {/* Modern Glassmorphism Form Card */}
        <div className="glass-card-dark p-6 sm:p-10 rounded-3xl border border-[#38BDF8]/30 shadow-2xl space-y-8">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-btn font-bold text-cyan-200 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:border-[#38BDF8] text-white placeholder-slate-400 text-sm font-body outline-none transition-all focus:ring-2 focus:ring-[#38BDF8]/30"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-xs font-btn font-bold text-cyan-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ramesh.pec@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:border-[#38BDF8] text-white placeholder-slate-400 text-sm font-body outline-none transition-all focus:ring-2 focus:ring-[#38BDF8]/30"
                />
              </div>

              {/* Department */}
              <div className="space-y-2">
                <label className="text-xs font-btn font-bold text-cyan-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Department *
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/20 focus:border-[#38BDF8] text-white text-sm font-body outline-none transition-all"
                >
                  {departmentsList.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year */}
              <div className="space-y-2">
                <label className="text-xs font-btn font-bold text-cyan-200 uppercase tracking-wider flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Year of Study *
                </label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/20 focus:border-[#38BDF8] text-white text-sm font-body outline-none transition-all"
                >
                  {yearsList.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              {/* College */}
              <div className="space-y-2">
                <label className="text-xs font-btn font-bold text-cyan-200 uppercase tracking-wider flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5 text-[#38BDF8]" />
                  College / Institution *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Panimalar Engineering College"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:border-[#38BDF8] text-white placeholder-slate-400 text-sm font-body outline-none transition-all"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs font-btn font-bold text-cyan-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:border-[#38BDF8] text-white placeholder-slate-400 text-sm font-body outline-none transition-all"
                />
              </div>

            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-300">
              <input type="checkbox" defaultChecked required id="terms" className="rounded accent-[#38BDF8]" />
              <label htmlFor="terms">I confirm my availability for the offline session on 30 July 2026 at AV Hall.</label>
            </div>

            {/* Submit CTA Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl font-btn font-bold text-sm text-[#0B1F5E] bg-gradient-to-r from-[#38BDF8] via-white to-cyan-300 hover:opacity-95 shadow-xl shadow-[#38BDF8]/30 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              {isSubmitting ? (
                <span>Generating Digital Pass...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#0B1F5E]" />
                  <span>Register Now (Free Entry Pass)</span>
                  <ArrowRight className="w-4 h-4 text-[#0B1F5E] group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

          </form>

        </div>

      </div>

      {/* Digital Entry Pass Ticket Modal */}
      {submittedPass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-slate-900 border border-[#38BDF8] rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-6">
            
            <button
              onClick={() => setSubmittedPass(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-black text-2xl text-white">
                Registration Confirmed!
              </h3>
              <p className="text-xs text-cyan-200">
                Your workshop entry pass has been successfully generated.
              </p>
            </div>

            {/* Digital Pass Ticket Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0B1F5E] to-[#2563EB] border border-[#38BDF8]/40 space-y-4 shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-200 border-b border-white/20 pb-2">
                <span>Panimalar Engineering College</span>
                <span>ID: {submittedPass.registrationId}</span>
              </div>

              <div>
                <div className="text-xs text-slate-300 font-btn">Participant Name:</div>
                <div className="font-heading font-black text-lg text-white">{submittedPass.fullName}</div>
                <div className="text-xs text-cyan-200">{submittedPass.department} • {submittedPass.year}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 font-body">
                <div>
                  <span className="text-slate-300">Venue:</span>
                  <div className="font-bold text-white">AV Hall, AI & ML</div>
                </div>
                <div>
                  <span className="text-slate-300">Date & Time:</span>
                  <div className="font-bold text-white">30 July 2026 | 08:30 AM</div>
                </div>
              </div>

              {/* QR Code Simulation Box */}
              <div className="p-3 rounded-xl bg-white text-slate-900 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono font-bold text-slate-500">OFFICIAL GATE PASS</div>
                  <div className="text-xs font-extrabold text-[#0B1F5E]">{submittedPass.registrationId}</div>
                  <div className="text-[9px] text-slate-500">Present this QR at AV Hall entrance</div>
                </div>
                <div className="p-1 bg-slate-100 rounded border border-slate-300">
                  <QrCode className="w-10 h-10 text-slate-900" />
                </div>
              </div>

            </div>

            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setSubmittedPass(null)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-btn font-bold text-xs transition-colors"
              >
                Close Ticket
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

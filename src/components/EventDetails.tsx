import React, { useState } from 'react';
import { Calendar, Clock, MapPin, GraduationCap, Map, Download, CheckCircle2, Navigation, Sparkles, X } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const EventDetails: React.FC = () => {
  const [showMapModal, setShowMapModal] = useState(false);

  const eventDetailsList = [
    {
      id: 'date',
      title: 'Date',
      value: WORKSHOP_INFO.date,
      sub: 'Thursday, 2026',
      icon: <Calendar className="w-6 h-6 text-[#2563EB]" />,
      color: 'border-blue-200 bg-blue-50/50',
    },
    {
      id: 'time',
      title: 'Time',
      value: WORKSHOP_INFO.time,
      sub: '6 Hours Intensive Session',
      icon: <Clock className="w-6 h-6 text-[#2563EB]" />,
      color: 'border-cyan-200 bg-cyan-50/50',
    },
    {
      id: 'venue',
      title: 'Venue',
      value: 'AV Hall, Dept of AI & ML',
      sub: 'Panimalar Engineering College',
      icon: <MapPin className="w-6 h-6 text-[#2563EB]" />,
      color: 'border-indigo-200 bg-indigo-50/50',
    },
    {
      id: 'mode',
      title: 'Mode',
      value: WORKSHOP_INFO.mode,
      sub: 'In-person Practical Lab',
      icon: <GraduationCap className="w-6 h-6 text-[#2563EB]" />,
      color: 'border-teal-200 bg-teal-50/50',
    },
  ];

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(WORKSHOP_INFO.title);
    const details = encodeURIComponent('Hands-on Workshop on Multimedia Design using Figma organized by Department of AI & ML, Panimalar Engineering College.');
    const location = encodeURIComponent(WORKSHOP_INFO.venue);
    // July 30, 2026 08:30 to 14:30
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260730T030000Z/20260730T090000Z&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="details" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            Schedule & Venue
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0B1F5E] tracking-tight">
            Event Key Particulars
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Essential schedule logistics and campus location details for attending students.
          </p>
        </div>

        {/* Four Elegant Glassmorphism Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eventDetailsList.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 rounded-3xl border border-white/80 hover:border-[#38BDF8] shadow-lg hover:shadow-2xl hover:shadow-[#2563EB]/15 hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-[#0B1F5E] text-white w-fit shadow-md">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs font-btn font-extrabold text-[#2563EB] uppercase tracking-wider">
                    {item.title}
                  </span>
                  <h3 className="font-heading font-black text-lg text-[#0B1F5E] mt-1 leading-snug">
                    {item.value}
                  </h3>
                  <p className="font-body text-xs text-slate-500 mt-1">
                    {item.sub}
                  </p>
                </div>
              </div>

              {item.id === 'venue' && (
                <button
                  onClick={() => setShowMapModal(true)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-[#2563EB] text-[#0B1F5E] hover:text-white font-btn font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Campus Directions</span>
                </button>
              )}

              {item.id === 'date' && (
                <button
                  onClick={handleAddToCalendar}
                  className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-[#2563EB] text-[#0B1F5E] hover:text-white font-btn font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Add to Google Calendar</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Seat Availability Bar & Campus Map Link Banner */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-btn font-bold">
              <span className="text-[#0B1F5E] uppercase tracking-wider">Workshop Seat Allocation</span>
              <span className="text-[#2563EB]">142 / 150 Seats Reserved (95%)</span>
            </div>

            {/* Progress Bar */}
            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300/50">
              <div className="h-full bg-gradient-to-r from-[#0B1F5E] via-[#2563EB] to-[#38BDF8] rounded-full w-[95%] transition-all duration-1000"></div>
            </div>

            <p className="text-xs text-slate-600">
              Only <strong className="text-[#0B1F5E]">8 remaining seats</strong> available for the 30 July 2026 session. Early registration recommended!
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={handleAddToCalendar}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#0B1F5E] font-btn font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#2563EB]" />
              <span>Calendar Event</span>
            </button>

            <button
              onClick={() => setShowMapModal(true)}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#0B1F5E] hover:bg-[#2563EB] text-white font-btn font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#38BDF8]" />
              <span>View Map</span>
            </button>
          </div>

        </div>

      </div>

      {/* Map Directions Modal */}
      {showMapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border border-slate-200">
            <button
              onClick={() => setShowMapModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-btn font-bold text-[#2563EB] uppercase">Campus Logistics</span>
              <h3 className="font-heading font-black text-2xl text-[#0B1F5E]">
                Panimalar Engineering College Campus
              </h3>
              <p className="text-xs text-slate-600">{WORKSHOP_INFO.address}</p>
            </div>

            {/* Simulated Interactive Map Display */}
            <div className="relative h-64 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 circuit-bg opacity-30"></div>
              <div className="relative z-10 text-center space-y-3 p-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1F5E] text-white flex items-center justify-center mx-auto shadow-lg">
                  <MapPin className="w-6 h-6 text-[#38BDF8] animate-bounce" />
                </div>
                <div className="font-heading font-bold text-sm text-[#0B1F5E]">
                  Audio Visual (AV) Hall • Dept. of AI & ML
                </div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Located on the 2nd Floor, AI & ML Block. Signs will direct attendees from the main campus reception gate.
                </p>
                <a
                  href="https://maps.google.com/?q=Panimalar+Engineering+College"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] text-white font-btn font-bold text-xs hover:bg-[#0B1F5E] transition-colors shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Google Maps App</span>
                </a>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowMapModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-100 text-slate-700 font-btn font-bold text-xs hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/workshopData';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = ['All', 'Sessions', 'Interface', 'Projects', 'Studio', 'Workspace'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] font-btn font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-[#2563EB]" />
            Visual Highlights & Artifacts
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#0B1F5E] tracking-tight">
            Workshop & Design Gallery
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Snapshots of student design sprints, Figma canvas interfaces, AV Hall sessions, and UI/UX prototypes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-btn font-bold transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#0B1F5E] text-white shadow-md shadow-[#0B1F5E]/20 scale-105'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Image Grid with Hover Zoom Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-white cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F5E]/90 via-[#0B1F5E]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-btn font-bold bg-[#38BDF8] text-[#0B1F5E] shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Center Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-5 h-5 text-[#38BDF8]" />
                </div>
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white space-y-1">
                <h3 className="font-heading font-extrabold text-base text-white group-hover:text-[#38BDF8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 font-body line-clamp-2">
                  {item.caption}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 animate-in fade-in duration-200">
          
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div className="max-w-4xl w-full text-center space-y-4">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto mx-auto rounded-2xl object-contain shadow-2xl border border-white/20"
            />
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full text-[10px] font-btn font-bold bg-[#38BDF8] text-[#0B1F5E]">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="font-heading font-bold text-xl text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-300 font-body max-w-lg mx-auto">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};

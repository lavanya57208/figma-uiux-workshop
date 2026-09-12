import React, { useState } from 'react';
import { X, Command, Search, Sparkles, Check } from 'lucide-react';
import { FIGMA_SHORTCUTS } from '../data/workshopData';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredShortcuts = FIGMA_SHORTCUTS.filter(s =>
    s.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-[#38BDF8] rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-6 max-h-[85vh] flex flex-col justify-between">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] text-xs font-btn font-bold border border-[#38BDF8]/30">
            <Command className="w-3.5 h-3.5" />
            <span>Figma Power User Matrix</span>
          </div>
          <h3 className="font-heading font-black text-2xl text-white">
            Essential Figma Keyboard Hotkeys
          </h3>
          <p className="text-xs text-slate-300">
            Speed up your design workflow 10x with these keyboard shortcuts practiced during the workshop.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search hotkey e.g. Auto Layout, Duplicate, Component..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs font-body outline-none focus:border-[#38BDF8]"
          />
        </div>

        {/* Shortcuts List */}
        <div className="overflow-y-auto space-y-2 pr-1 max-h-80">
          {filteredShortcuts.map((item) => (
            <div
              key={item.key + item.action}
              className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between gap-3 text-xs"
            >
              <span className="font-body text-slate-200 font-medium">{item.action}</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#0B1F5E] text-[#38BDF8] font-mono font-bold text-[11px] border border-[#38BDF8]/30 shrink-0">
                {item.key}
              </span>
            </div>
          ))}
          {filteredShortcuts.length === 0 && (
            <div className="text-center py-6 text-xs text-slate-400">
              No shortcuts matching "{searchQuery}"
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#38BDF8] text-[#0B1F5E] font-btn font-bold text-xs hover:bg-cyan-300 transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};

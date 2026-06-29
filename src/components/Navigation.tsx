import React from 'react';
import { ChevronUp, ChevronDown, User, FileText, Database, Layers, RefreshCw } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  sections: { id: string; label: string; icon: any }[];
  onNavigate: (id: string) => void;
}

export default function Navigation({ activeSection, sections, onNavigate }: NavigationProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'hero': return <User className="w-4 h-4" />;
      case 'summary': return <FileText className="w-4 h-4" />;
      case 'sciencesoft': return <Layers className="w-4 h-4" />;
      case 'unqork': return <Database className="w-4 h-4" />;
      case 'yeti': return <RefreshCw className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const handleNextPrev = (direction: 'next' | 'prev') => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (direction === 'prev' && currentIndex > 0) {
      onNavigate(sections[currentIndex - 1].id);
    } else if (direction === 'next' && currentIndex < sections.length - 1) {
      onNavigate(sections[currentIndex + 1].id);
    }
  };

  return (
    <>
      {/* Vertical Navigation Dots (Right side) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 bg-slate-900/60 backdrop-blur-md p-3 rounded-full border border-slate-800 shadow-xl">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
            id={`nav-dot-${section.id}`}
          >
            {getIcon(section.id)}
            
            {/* Tooltip */}
            <span className="absolute right-12 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-slate-900 border border-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
              {section.label}
            </span>
          </button>
        ))}
      </div>

      {/* Floating Action Navigation (Bottom Left/Right for quick scroll) */}
      <div className="fixed bottom-6 right-6 md:right-1/2 md:translate-x-1/2 z-50 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-full shadow-2xl">
        <button
          onClick={() => handleNextPrev('prev')}
          disabled={activeSection === sections[0].id}
          className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          title="Scroll Up"
          id="scroll-prev-btn"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <span className="text-xs text-slate-500 font-mono select-none px-2 border-x border-slate-800">
          {sections.findIndex(s => s.id === activeSection) + 1} / {sections.length}
        </span>
        <button
          onClick={() => handleNextPrev('next')}
          disabled={activeSection === sections[sections.length - 1].id}
          className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          title="Scroll Down"
          id="scroll-next-btn"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}

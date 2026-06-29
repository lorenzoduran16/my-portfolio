import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import ScienceSoftSection from './components/ScienceSoftSection';
import UnqorkSection from './components/UnqorkSection';
import YetiSection from './components/YetiSection';
import Navigation from './components/Navigation';
import { Mail, ShieldCheck, Download, Code2, FileText } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Cover Slide', icon: 'User' },
    { id: 'summary', label: 'Executive Summary', icon: 'FileText' },
    { id: 'sciencesoft', label: 'ScienceSoft (AI Platform)', icon: 'Layers' },
    { id: 'unqork', label: 'Unqork (DB Scale)', icon: 'Database' },
    { id: 'yeti', label: 'YETI (High-Load Sync)', icon: 'RefreshCw' },
  ];

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the sweet spot of viewport
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white font-sans scroll-smooth">
      
      {/* Floating Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-slate-950/70 backdrop-blur-md border-b border-slate-900/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => handleNavigate('hero')}
            className="flex items-center gap-2 group text-left"
            id="header-brand-btn"
          >
            <span className="font-mono font-black text-xs text-white tracking-widest uppercase transition-colors group-hover:text-blue-400">
              Lorenzo Duran
            </span>
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">| SENIOR SYSTEM ARCHITECT</span>
          </button>

          {/* Quick Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
            {sections.slice(1).map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleNavigate(sec.id)}
                className={`transition-colors uppercase tracking-wider ${
                  activeSection === sec.id ? 'text-blue-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                id={`header-nav-${sec.id}`}
              >
                {sec.label.split(' ')[0]}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
          </div>
        </div>
      </header>

      {/* Main Sections (Scroll layout) */}
      <main className="w-full">
        <HeroSection onScrollToNext={() => handleNavigate('summary')} />
        <SummarySection />
        <ScienceSoftSection />
        <UnqorkSection />
        <YetiSection />
      </main>

      {/* Footer Details */}
      <footer className="bg-slate-950 py-12 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-xs font-bold text-slate-300">LORENZO DURAN</p>
            <p className="text-3xs text-slate-500 font-mono mt-1">© Lorenzo Duran. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="text-emerald-500 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> SECURE CONSOLE
            </span>
          </div>
        </div>
      </footer>

      {/* Vertical floating navigation buttons */}
      <Navigation 
        activeSection={activeSection} 
        sections={sections} 
        onNavigate={handleNavigate} 
      />

    </div>
  );
}


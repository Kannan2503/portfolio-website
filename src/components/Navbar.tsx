import React, { useState, useEffect } from 'react';
import { Cpu, Terminal, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [sysVoltage, setSysVoltage] = useState<number>(1.2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Fluctuating system voltage telemetry to look realistic
    const interval = setInterval(() => {
      setSysVoltage(() => {
        const delta = (Math.random() - 0.5) * 0.04;
        return parseFloat((1.2 + delta).toFixed(3));
      });
    }, 1500);

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'dashboard', 'contact'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const menuItems = [
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'DIAGNOSTICS', href: '#dashboard', id: 'dashboard' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-panel rounded-xl px-4 md:px-6 py-3 flex items-center justify-between border border-cyber-cyan/15">
        {/* Logo */}
        <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="flex items-center gap-2 group">
          <Cpu className="w-5 h-5 text-cyber-cyan group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-orbitron font-extrabold text-sm tracking-[0.2em] text-white">
            KANNAN <span className="text-cyber-cyan font-light">G R</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollTo(e, item.id)}
              className={`font-orbitron text-[11px] font-medium tracking-widest hover:text-cyber-cyan transition-colors relative py-1 ${
                activeSection === item.id ? 'text-cyber-cyan font-bold' : 'text-slate-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-cyan shadow-[0_0_8px_#00f2fe]" />
              )}
            </a>
          ))}
        </div>

        {/* ECE Telemetry Display */}
        <div className="hidden lg:flex items-center gap-4 border-l border-slate-800 pl-6 font-mono text-[10px]">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span>VDD:</span>
            <span className="text-cyber-cyan">{sysVoltage}V</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Terminal className="w-3 h-3 text-cyber-purple" />
            <span>CLK:</span>
            <span className="text-cyber-purple">100 MHz</span>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white p-1 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-panel rounded-xl border border-cyber-cyan/15 p-4 flex flex-col gap-4 animate-fade-in">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollTo(e, item.id)}
              className={`font-orbitron text-xs font-bold tracking-widest py-2 border-b border-slate-800/60 block hover:text-cyber-cyan transition-colors ${
                activeSection === item.id ? 'text-cyber-cyan' : 'text-slate-300'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex justify-between items-center font-mono text-[10px] pt-2">
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" />
              <span>VDD: {sysVoltage}V</span>
            </div>
            <div className="text-slate-400">
              <span>CLK: 100 MHz</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

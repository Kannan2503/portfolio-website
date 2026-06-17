import React from 'react';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-slate-900 bg-slate-950/40 relative overflow-hidden font-mono text-[10px] sm:text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 relative z-10">
        
        {/* Left copyright */}
        <div>
          <span>© 2026 KANNAN G R. ALL_SYSTEMS_RESERVED.</span>
        </div>

        {/* Center domains */}
        <div className="flex items-center gap-1.5 text-cyber-cyan border border-cyber-cyan/15 bg-cyber-cyan/5 px-3 py-1 rounded-full">
          <Cpu className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
          <span className="font-orbitron font-semibold tracking-widest text-[9px]">
            EMBEDDED SYSTEMS | FPGA | VLSI
          </span>
        </div>

        {/* Right technology stack */}
        <div>
          <span>DESIGNED_WITH: </span>
          <span className="text-slate-400 hover:text-cyber-cyan transition-colors">React + Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
};

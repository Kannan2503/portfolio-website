import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, Cpu, Layers, Radio, Orbit } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    { label: 'CGPA', val: '7.95 / 10' },
    { label: 'IETE MEMBER', val: 'ACTIVE' },
    { label: 'INTERNSHIP', val: 'COMPLETED' },
    { label: 'CERTIFICATIONS', val: '6+' },
    { label: 'MAJOR PROJECTS', val: '4+' },
    { label: 'CORE ROLE', val: 'OPEN' },
  ];

  const floatingIcons = [
    { icon: <Cpu className="w-6 h-6 text-cyber-cyan" />, label: 'FPGA', x: -140, y: -100, delay: 0 },
    { icon: <Layers className="w-6 h-6 text-cyber-purple" />, label: 'VLSI', x: 140, y: -80, delay: 1.5 },
    { icon: <Radio className="w-6 h-6 text-emerald-400" />, label: 'ESP32', x: -130, y: 110, delay: 0.7 },
    { icon: <Orbit className="w-6 h-6 text-amber-400" />, label: 'RPi 3B+', x: 130, y: 90, delay: 2.2 },
  ];

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Wafer grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none circuit-grid"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Profile Picture Panel (Mobile: Top / Desktop: Right side (cols 6-12)) */}
        {/* On Mobile devices, place the image above the text (which we achieve by ordering) */}
        <div className="lg:col-span-6 lg:order-2 flex flex-col items-center justify-center relative select-none">
          <div className="relative flex items-center justify-center">

            {/* Pulsating glowing background pools */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-cyber-cyan/15 to-cyber-purple/15 blur-3xl opacity-60 animate-pulse-glow" />

            {/* Float wrapper for profile image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] max-w-full rounded-full p-2 border-2 border-cyber-cyan/40 bg-slate-950/60 shadow-[0_0_40px_rgba(0,242,254,0.15)] flex items-center justify-center overflow-hidden"
            >
              {/* Profile Image with Cyan Neon Border */}
              <div className="w-full h-full rounded-full border-4 border-cyber-cyan glow-cyan overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src="/profile.png"
                  alt="Kannan G R Portrait"
                  className="w-full h-full object-cover scale-105"
                  onError={(e) => {
                    // Fallback to a styled ECE Chip vector if image fails to load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.getElementById('avatar-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback Vector */}
                <div
                  id="avatar-fallback"
                  className="hidden w-full h-full bg-gradient-to-tr from-slate-950 to-slate-900 flex-col items-center justify-center p-4 text-center font-mono"
                >
                  <Cpu className="w-20 h-20 text-cyber-cyan animate-pulse mb-3" />
                  <span className="text-cyber-cyan font-bold tracking-widest text-xs">SYSTEM_KANNAN</span>
                  <span className="text-[10px] text-slate-500 mt-1">EMBEDDED HARDWARE</span>
                </div>
              </div>
            </motion.div>

            {/* Floating technology icons surrounding the image */}
            {floatingIcons.map((item, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [item.y, item.y - 12, item.y],
                  x: [item.x, item.x + 8, item.x],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
                className="absolute hidden sm:flex flex-col items-center gap-1 z-20"
              >
                <div className="glass-panel p-3 rounded-xl border border-cyber-cyan/30 bg-slate-950/80 shadow-[0_0_15px_rgba(0,242,254,0.1)] hover:border-cyber-cyan transition-colors">
                  {item.icon}
                </div>
                <span className="text-[9px] font-mono text-slate-400 bg-slate-950/80 border border-slate-800 px-1.5 py-0.5 rounded tracking-wide uppercase">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text Details (Mobile: Bottom / Desktop: Left side (cols 1-6)) */}
        <div className="lg:col-span-6 lg:order-1 flex flex-col text-center lg:text-left items-center lg:items-start space-y-4">
          <div className="space-y-2">
            {/* Status indicator pin */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-[10px] tracking-wider uppercase mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-ping" />
              ECE Engineer | Semiconductor Spec
            </div>

            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              KANNAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue glow-text-cyan">G R</span>
            </h1>

            <h2 className="font-orbitron text-sm sm:text-base lg:text-lg font-bold tracking-widest text-cyber-purple uppercase">
              Embedded Systems Engineer | VLSI Enthusiast | FPGA Learner
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Passionate Electronics and Communication Engineering student with strong interests in Embedded Systems, Internet of Things (IoT), FPGA and VLSI technologies. Experienced in designing intelligent hardware-software systems using Raspberry Pi, ESP32 and STM32 platforms. Dedicated to contributing towards next-generation semiconductor technologies through innovation, research and continuous learning.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
            <a
              href="/Resume.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-cyber-darker px-5 py-3 rounded-lg font-orbitron text-xs font-bold tracking-widest hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              DOWNLOAD RESUME
            </a>

            <button
              onClick={handleScrollToContact}
              className="flex items-center gap-2 bg-transparent text-white border border-cyber-cyan/40 hover:bg-cyber-cyan/10 px-5 py-3 rounded-lg font-orbitron text-xs font-bold tracking-widest transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyber-cyan" />
              CONTACT ME
            </button>

            <div className="flex gap-2.5 mt-2 sm:mt-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-3 rounded-lg text-slate-400 hover:text-white hover:border-cyber-cyan transition-colors"
                title="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-3 rounded-lg text-slate-400 hover:text-white hover:border-cyber-cyan transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Stats Bar styled as dynamic hardware pins / wafertiles */}
          <div className="w-full pt-6 border-t border-slate-900 mt-2">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-slate-900/30 p-2.5 rounded-lg border border-slate-800 text-center font-mono hover:border-cyber-cyan/30 transition-all duration-300"
                >
                  <span className="text-[8px] text-slate-500 block truncate">{h.label}</span>
                  <span className="text-[11px] font-orbitron font-bold text-cyber-cyan tracking-tight block mt-0.5">
                    {h.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Cpu, Target, BookOpen, GraduationCap, Terminal } from 'lucide-react';

const interests = [
  'VLSI Design',
  'Digital IC Design',
  'FPGA Development',
  'Embedded Systems',
  'Internet of Things (IoT)',
  'Semiconductor Technologies',
  'AI in Edge Devices',
  'Hardware-Software Co-design',
  'Computer Vision',
  'Firmware Development',
];

export const About: React.FC = () => {

  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedHistory, setTypedHistory] = useState<string[]>([]);

  useEffect(() => {
    let timer: number;
    const currentFullText = interests[currentIdx];

    if (isDeleting) {
      if (displayText === '') {
        // If fully deleted, switch to typing next word (deferred)
        timer = window.setTimeout(() => {
          setIsDeleting(false);
          setTypedHistory((prev) => {
            const next = [currentFullText, ...prev];
            return next.slice(0, 5);
          });
          setCurrentIdx((prev) => (prev + 1) % interests.length);
        }, 100);
      } else {
        // Deleting characters
        timer = window.setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        }, 30);
      }
    } else {
      if (displayText === currentFullText) {
        // If fully typed, wait and switch to deleting
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      } else {
        // Typing characters
        timer = window.setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, 70);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIdx, interests]);

  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-extrabold tracking-widest text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyber-cyan" /> ABOUT_ME
        </h2>
        <span className="h-0.5 w-16 bg-cyber-cyan mt-2 shadow-[0_0_8px_#00f2fe]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Core Profile Narrative & Education */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="glass-panel p-6 rounded-2xl border border-cyber-blue/20 flex-1 flex flex-col justify-center">
            <h3 className="font-orbitron text-lg font-bold text-cyber-cyan mb-4 tracking-wider">HARDWARE-SOFTWARE INTEGRATION</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              I am KANNAN G R, an Electronics and Communication Engineering student at Dr. N.G.P Institute of Technology. I have a strong passion for Embedded Systems, FPGA design, VLSI and Semiconductor Technologies.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Through practical experience with Raspberry Pi, ESP32, STM32 and computer vision technologies, I have developed skills in solving real-world engineering problems and implementing intelligent embedded solutions.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-cyber-purple/20 flex items-center gap-4">
            <div className="p-3 bg-cyber-purple/10 border border-cyber-purple/30 rounded-xl text-cyber-purple">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 block">EDUCATION</span>
              <h4 className="font-orbitron text-sm font-bold text-white tracking-wider">B.E. Electronics & Communication</h4>
              <p className="text-xs text-slate-400">Dr. N.G.P Institute of Technology | CGPA: 7.95/10</p>
            </div>
          </div>
        </div>

        {/* Future Goals block */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-cyber-cyan/5 blur-2xl pointer-events-none"></div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyber-cyan/15 rounded-lg text-cyber-cyan">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-orbitron text-base font-bold text-white tracking-wider">FUTURE GOAL</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-mono">
                To become a Semiconductor Engineer specializing in VLSI and Embedded Systems, contributing to innovative technologies that drive the future of intelligent electronic systems.
              </p>
            </div>
            
            <div className="border-t border-slate-900 pt-6 mt-6 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-cyber-purple animate-pulse" />
              <div className="font-mono text-[10px]">
                <span className="text-slate-500 block">SEMICONDUCTOR CAREER CORE</span>
                <span className="text-cyber-purple font-semibold">LOADED & ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Sci-Fi Typing Console for Areas of Interest */}
      <div className="mt-12">
        <h3 className="font-orbitron text-sm font-bold text-slate-400 mb-6 tracking-widest text-center uppercase flex items-center justify-center gap-2">
          <Terminal className="w-4 h-4 text-cyber-cyan animate-pulse" /> CORE_INTERESTS_LOADER
        </h3>
        
        <div className="max-w-3xl mx-auto glass-panel p-6 rounded-2xl border border-cyber-cyan/20 bg-slate-950/70 font-mono relative overflow-hidden">
          {/* Decorative terminal elements */}
          <div className="flex items-center gap-1.5 border-b border-slate-900 pb-3 mb-4 text-[10px] text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            <span className="ml-2">SYS_QUERY: INTERESTS_DATABASE</span>
          </div>

          <div className="space-y-3 min-h-[160px] flex flex-col justify-end text-xs sm:text-sm">
            {/* History of typed interests */}
            {typedHistory.slice().reverse().map((hist, idx) => (
              <div key={idx} className="flex gap-2 items-center text-slate-500">
                <span>[LOADED]</span>
                <span>I am interested in</span>
                <span className="text-slate-300 font-semibold">{hist}</span>
              </div>
            ))}

            {/* Current Active Typewriter Line */}
            <div className="flex gap-2 items-center text-cyber-cyan font-semibold">
              <span className="animate-pulse">&gt;&gt; [TYPING]</span>
              <span>I am interested in</span>
              <span className="text-white bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/30 shadow-[0_0_10px_rgba(0,242,254,0.1)]">
                {displayText}
              </span>
              <span className="w-2 h-4 bg-cyber-cyan animate-pulse"></span>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-900 pt-3 flex justify-between text-[9px] text-slate-500">
            <span>INDEX_POINTER: {currentIdx + 1} / {interests.length}</span>
            <span>DIAG_FEED: STREAM_STABLE</span>
          </div>
        </div>
      </div>

    </section>
  );
};

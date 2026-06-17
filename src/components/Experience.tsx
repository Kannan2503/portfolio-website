import React from 'react';
import { Calendar, Briefcase, Award, Sparkles, BookOpen } from 'lucide-react';

export const Experience: React.FC = () => {
  const certifications = [
    'MIT RISC-V on FPGA: Application and Porting',
    'NIT Synopsys SystemVerilog for Semiconductor Design & Verification',
    'Maven Silicon Digital Design',
    'Analog Electronics Certification (Udemy)',
    'PCB Designing & Fabrication Workshop',
    'Embedded Systems Internship Certification',
  ];

  const currentLearnings = [
    'SystemVerilog',
    'Cadence Virtuoso',
    'ASIC Design Flow',
    'RTL to GDSII Flow',
    'Physical Design',
    'Firmware Development',
    'Semiconductor Verification',
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-extrabold tracking-widest text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-cyber-cyan" /> EXPERIENCE_TIMELINE
        </h2>
        <span className="h-0.5 w-16 bg-cyber-cyan mt-2 shadow-[0_0_8px_#00f2fe]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Internship & Leadership */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Internship */}
          <div>
            <h3 className="font-orbitron text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">
              // INTERNSHIP_RECORD
            </h3>
            
            <div className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 border-b border-slate-900 pb-3">
                <div>
                  <h4 className="font-orbitron text-base font-bold text-white tracking-wide">
                    Enthu Technology Solutions India Pvt. Ltd.
                  </h4>
                  <p className="text-xs text-cyber-cyan font-mono mt-0.5">Embedded Systems & IoT Intern</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-800 shrink-0">
                  <Calendar className="w-3.5 h-3.5" /> COIMBATORE
                </div>
              </div>

              <ul className="space-y-2.5 text-slate-300 text-xs md:text-sm list-disc pl-4">
                <li>Worked with Raspberry Pi, ESP32, and STM32 microcontroller platforms.</li>
                <li>Interfaced ultrasonic, IR, and temperature sensors for hardware telemetry.</li>
                <li>Gained practical exposure to firmware scripting, embedded loops, and IoT client integrations.</li>
              </ul>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="font-orbitron text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">
              // LEADERSHIP_COORDINATION
            </h3>
            
            <div className="space-y-4">
              <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-900 flex items-start gap-4">
                <div className="p-2 bg-cyber-purple/10 border border-cyber-purple/20 rounded-lg text-cyber-purple shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-orbitron text-xs sm:text-sm font-bold text-white tracking-wider">
                    ASIC Digital Design Flow Workshop Coordinator
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">KANAM'25 Event Coordinator</p>
                  <p className="text-slate-400 text-xs mt-1">
                    Organized technical workshop focusing on ASIC front-to-back semiconductor stages, toolkits, and cell libraries.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-900 flex items-start gap-4">
                <div className="p-2 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-cyber-cyan shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-orbitron text-xs sm:text-sm font-bold text-white tracking-wider">
                    "TRACK TACTIX" Technical Event Coordinator
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">KANAM'26 Event Lead</p>
                  <p className="text-slate-400 text-xs mt-1">
                    Coordinated ECE student circuits and robotics tracking challenges, showcasing event management, collaboration, and delegation.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Certifications & Current Learnings */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Certifications */}
          <div>
            <h3 className="font-orbitron text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">
              // REG_CERTIFICATIONS
            </h3>
            
            <div className="glass-panel p-5 rounded-2xl border border-cyber-purple/20 space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/80 hover:border-cyber-purple/40 transition-colors"
                >
                  <Award className="w-4 h-4 text-cyber-purple shrink-0" />
                  <span className="font-mono text-xs text-slate-300 leading-tight">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div>
            <h3 className="font-orbitron text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">
              // SYS_CURRENT_LEARNINGS
            </h3>
            
            <div className="glass-panel p-5 rounded-2xl border border-cyber-cyan/20">
              <div className="flex flex-wrap gap-2">
                {currentLearnings.map((item, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1.5 font-mono text-xs text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/15 px-3 py-1.5 rounded-lg hover:border-cyber-cyan/40 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

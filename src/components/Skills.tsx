import React, { useState } from 'react';
import { Terminal, Shield, Cpu, Network, BrainCircuit, Activity } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL_SYSTEMS', icon: <Activity className="w-3.5 h-3.5" /> },
    { id: 'languages', label: 'LANGUAGES', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'embedded', label: 'EMBEDDED', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'protocols', label: 'PROTOCOLS', icon: <Network className="w-3.5 h-3.5" /> },
    { id: 'vlsi', label: 'VLSI & FPGA', icon: <Shield className="w-3.5 h-3.5" /> },
    { id: 'ai', label: 'AI & ML', icon: <BrainCircuit className="w-3.5 h-3.5" /> },
  ];

  const skillData = [
    // Languages
    { name: 'C Programming', cat: 'languages', level: 90 },
    { name: 'Embedded C', cat: 'languages', level: 85 },
    { name: 'Python', cat: 'languages', level: 80 },
    { name: 'Verilog HDL', cat: 'languages', level: 75 },
    { name: 'MATLAB', cat: 'languages', level: 70 },
    // Embedded Systems
    { name: 'Raspberry Pi', cat: 'embedded', level: 90 },
    { name: 'ESP32', cat: 'embedded', level: 85 },
    { name: 'STM32', cat: 'embedded', level: 75 },
    { name: 'Arduino', cat: 'embedded', level: 90 },
    { name: 'Sensor Interfacing', cat: 'embedded', level: 85 },
    { name: 'IoT Development', cat: 'embedded', level: 80 },
    // Protocols
    { name: 'UART', cat: 'protocols', level: 90 },
    { name: 'SPI', cat: 'protocols', level: 80 },
    { name: 'I2C', cat: 'protocols', level: 85 },
    { name: 'GPIO', cat: 'protocols', level: 90 },
    // VLSI
    { name: 'Xilinx Vivado', cat: 'vlsi', level: 75 },
    { name: 'Quartus Prime', cat: 'vlsi', level: 70 },
    { name: 'ModelSim', cat: 'vlsi', level: 70 },
    { name: 'FPGA Design Flow', cat: 'vlsi', level: 75 },
    { name: 'RTL Design', cat: 'vlsi', level: 75 },
    { name: 'Digital Electronics', cat: 'vlsi', level: 85 },
    // AI & ML
    { name: 'TensorFlow Lite', cat: 'ai', level: 75 },
    { name: 'YOLOv5', cat: 'ai', level: 80 },
    { name: 'OpenCV', cat: 'ai', level: 80 },
    { name: 'Roboflow', cat: 'ai', level: 75 },
    { name: 'Google Colab', cat: 'ai', level: 80 },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillData
    : skillData.filter(s => s.cat === activeCategory);

  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-extrabold tracking-widest text-white flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyber-cyan" /> TECHNICAL_SKILLS
        </h2>
        <span className="h-0.5 w-16 bg-cyber-cyan mt-2 shadow-[0_0_8px_#00f2fe]" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-orbitron text-[10px] sm:text-xs font-bold tracking-widest border transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-cyber-cyan text-cyber-darker border-cyber-cyan shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                : 'bg-transparent text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => {
          // Determine neon color class based on category
          let colorClass = 'bg-cyber-blue shadow-cyber-blue/30';
          let borderGlow = 'hover:border-cyber-blue/50';
          let textGlow = 'text-cyber-blue';
          
          if (skill.cat === 'vlsi' || skill.cat === 'languages') {
            colorClass = 'bg-cyber-purple shadow-cyber-purple/30';
            borderGlow = 'hover:border-cyber-purple/50';
            textGlow = 'text-cyber-purple';
          } else if (skill.cat === 'ai') {
            colorClass = 'bg-emerald-400 shadow-emerald-400/30';
            borderGlow = 'hover:border-emerald-400/50';
            textGlow = 'text-emerald-400';
          } else if (skill.cat === 'protocols') {
            colorClass = 'bg-amber-400 shadow-amber-400/30';
            borderGlow = 'hover:border-amber-400/50';
            textGlow = 'text-amber-400';
          }

          return (
            <div
              key={index}
              className={`glass-panel p-4 rounded-xl border border-slate-800/80 transition-all duration-300 ${borderGlow} flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-white tracking-wide">{skill.name}</span>
                <span className={`font-orbitron text-[10px] font-bold ${textGlow}`}>{skill.level}%</span>
              </div>
              
              {/* Progress bar representing register register percentage */}
              <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-900">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${colorClass}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Compiler-like feedback footer */}
      <div className="mt-8 bg-slate-950/80 p-3 rounded-lg border border-slate-900 font-mono text-[10px] text-slate-500 text-center">
        <span>SYS_LOG: Compilation successful. No logical faults found in technical subsystems.</span>
      </div>

    </section>
  );
};

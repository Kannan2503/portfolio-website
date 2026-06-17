import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Activity, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SemiconductorDashboard: React.FC = () => {
  const [clockSpeed, setClockSpeed] = useState<number>(100);
  const [isOverclocked, setIsOverclocked] = useState<boolean>(false);
  const [voltage, setVoltage] = useState<number>(1.2);
  const [temp, setTemp] = useState<number>(38);
  const [binaryPulse, setBinaryPulse] = useState<string>('01010011');

  useEffect(() => {
    const interval = setInterval(() => {
      // Small fluctuations in temp and binary pulse
      setTemp(() => {
        const base = isOverclocked ? 68 : 38;
        const diff = (Math.random() - 0.5) * 2;
        return parseFloat((base + diff).toFixed(1));
      });

      setBinaryPulse(() => {
        return Array.from({ length: 8 }, () => (Math.random() > 0.5 ? '1' : '0')).join('');
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOverclocked]);

  const handleOverclock = () => {
    if (!isOverclocked) {
      setIsOverclocked(true);
      setClockSpeed(999);
      setVoltage(1.8);
      // Trigger neon confetti!
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f2fe', '#0072ff', '#a015fa'],
      });
    } else {
      setIsOverclocked(false);
      setClockSpeed(100);
      setVoltage(1.2);
    }
  };

  return (
    <div className={`glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-500 border ${isOverclocked ? 'border-cyber-cyan glow-cyan' : 'border-cyber-blue/30'}`}>
      {/* Semiconductor Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none circuit-grid"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10 border-b border-cyber-cyan/20 pb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isOverclocked ? 'bg-cyber-cyan/15 text-cyber-cyan animate-pulse' : 'bg-cyber-blue/15 text-cyber-blue'}`}>
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-orbitron text-lg font-bold tracking-wider text-white">WAFER DIAGNOSTICS</h3>
            <p className="text-xs text-slate-400 font-mono">SYS_STATUS: ACTIVE | CORE: ECE_KANNAN</p>
          </div>
        </div>
        <button
          onClick={handleOverclock}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-orbitron text-sm font-bold tracking-widest border transition-all duration-300 ${
            isOverclocked
              ? 'bg-cyber-cyan text-cyber-dark border-cyber-cyan shadow-lg shadow-cyber-cyan/30 animate-pulse'
              : 'bg-transparent text-cyber-cyan border-cyber-cyan/50 hover:bg-cyber-cyan/10'
          }`}
        >
          <Zap className={`w-4 h-4 ${isOverclocked ? 'fill-cyber-dark' : ''}`} />
          {isOverclocked ? 'OVERCLOCKED' : 'OVERCLOCK'}
        </button>
      </div>

      {/* System stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 relative z-10">
        <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800 font-mono">
          <span className="text-[10px] text-slate-500 block">CORE CLOCK</span>
          <span className="text-xl font-orbitron font-bold text-white">{clockSpeed}</span>
          <span className="text-xs text-cyber-cyan ml-1">MHz</span>
        </div>
        <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800 font-mono">
          <span className="text-[10px] text-slate-500 block">CORE VOLTAGE</span>
          <span className="text-xl font-orbitron font-bold text-white">{voltage}</span>
          <span className="text-xs text-cyber-blue ml-1">V</span>
        </div>
        <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800 font-mono">
          <span className="text-[10px] text-slate-500 block">DIE TEMPERATURE</span>
          <span className={`text-xl font-orbitron font-bold transition-colors ${temp > 60 ? 'text-red-400' : 'text-emerald-400'}`}>
            {temp}
          </span>
          <span className="text-xs text-slate-400 ml-1">°C</span>
        </div>
        <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800 font-mono">
          <span className="text-[10px] text-slate-500 block">LOGIC REGISTER</span>
          <span className="text-sm font-bold text-cyber-purple">{binaryPulse}</span>
          <span className="text-[10px] text-slate-500 block mt-1">HEX: 0x{parseInt(binaryPulse, 2).toString(16).toUpperCase()}</span>
        </div>
      </div>

      {/* Semiconductor wafer map (visual representation) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Analog Signal Display */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
            <span className="text-xs font-orbitron font-semibold text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyber-cyan" /> SIGNAL AMPLITUDE (CGPA)
            </span>
            <span className="text-xs font-mono text-cyber-cyan font-bold">7.95 / 10.0</span>
          </div>
          {/* Waveform graphic */}
          <div className="h-24 flex items-end gap-1 px-1 border-b border-l border-slate-800">
            {Array.from({ length: 24 }).map((_, i) => {
              const baseHeight = Math.sin((i / 24) * Math.PI * 2) * 35 + 45;
              // Generate a deterministic random-like factor using binaryPulse and index i to comply with purity rules
              const seed = parseInt(binaryPulse, 2) + i;
              const sinVal = Math.sin(seed) * 10000;
              const randomFactor = (sinVal - Math.floor(sinVal)) - 0.5;
              const randomHeight = baseHeight + randomFactor * (isOverclocked ? 20 : 6);
              const heightPercent = Math.max(10, Math.min(95, randomHeight));
              return (
                <div
                  key={i}
                  style={{ height: `${heightPercent}%` }}
                  className={`w-full rounded-t-sm transition-all duration-300 ${
                    isOverclocked ? 'bg-cyber-cyan' : 'bg-cyber-blue/60 hover:bg-cyber-cyan'
                  }`}
                />
              );
            })}
          </div>
          <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1">
            <span>0.00ms</span>
            <span>Ref: VDD_7.95</span>
            <span>10.0ms</span>
          </div>
        </div>

        {/* Registers / Hardware Blocks */}
        <div className="space-y-3">
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
            <span className="text-xs font-orbitron font-semibold text-slate-400 block mb-3 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-cyber-purple" /> SYSTEM REGISTERS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-slate-500">REG_CERT:</span>
                <span className="text-cyber-cyan font-bold">0x06</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-slate-500">REG_PROJ:</span>
                <span className="text-cyber-cyan font-bold">0x04</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-slate-500">IETE_MBR:</span>
                <span className="text-emerald-400 font-bold">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-slate-500">INTERN:</span>
                <span className="text-emerald-400 font-bold">DONE</span>
              </div>
            </div>
          </div>

          {/* Opportunities and Domain */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center h-[calc(100%-120px)]">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-orbitron text-white">STATUS: OPEN TO CORE OPPORTUNITIES</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              Specialized in VLSI Design, FPGA Development, and Embedded Solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

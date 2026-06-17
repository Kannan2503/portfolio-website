import React, { useState } from 'react';
import { Mail, Send, Radio, Terminal, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [txStatus, setTxStatus] = useState<'IDLE' | 'TRANSMITTING' | 'SUCCESS'>('IDLE');
  const [consoleLogs, setConsoleLogs] = useState<string[]>(['TX_MODEM: READY', 'RF_CARRIER: STANDBY']);

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setTxStatus('TRANSMITTING');
    setConsoleLogs((prev) => [...prev, 'PACKETIZING DATA...', 'CONNECTING TO ANTENNA ARRAY...']);

    setTimeout(() => {
      setConsoleLogs((prev) => [...prev, 'FREQ: 2.45 GHz | POWER: +22dBm', 'MODULATION: QPSK ACTIVE']);
    }, 800);

    setTimeout(() => {
      setTxStatus('SUCCESS');
      setConsoleLogs((prev) => [...prev, 'TX_STATUS: SENT SUCCESS_200', 'CARRIER RELEASED']);
      setFormData({ name: '', email: '', message: '' });
      
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#00f2fe', '#0072ff'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#a015fa', '#00f2fe'],
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-extrabold tracking-widest text-white flex items-center gap-2">
          <Radio className="w-5 h-5 text-cyber-cyan animate-pulse" /> TRANSMITTER_CONSOLE
        </h2>
        <span className="h-0.5 w-16 bg-cyber-cyan mt-2 shadow-[0_0_8px_#00f2fe]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact Form Console */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 h-full relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none circuit-grid"></div>

            <form onSubmit={handleTransmit} className="space-y-5 relative z-10 font-mono text-xs">
              <div className="space-y-2">
                <label className="text-slate-400 font-bold tracking-wider uppercase block">NAME_REG:</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={txStatus === 'TRANSMITTING'}
                  placeholder="INPUT NAME..."
                  className="w-full bg-slate-950/80 border border-slate-800 text-white rounded-lg p-3 focus:outline-none focus:border-cyber-cyan transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-slate-400 font-bold tracking-wider uppercase block">EMAIL_REG:</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={txStatus === 'TRANSMITTING'}
                  placeholder="INPUT EMAIL..."
                  className="w-full bg-slate-950/80 border border-slate-800 text-white rounded-lg p-3 focus:outline-none focus:border-cyber-cyan transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-slate-400 font-bold tracking-wider uppercase block">PAYLOAD_MSG:</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={txStatus === 'TRANSMITTING'}
                  placeholder="WRITE TRANSMISSION..."
                  className="w-full bg-slate-950/80 border border-slate-800 text-white rounded-lg p-3 focus:outline-none focus:border-cyber-cyan transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={txStatus === 'TRANSMITTING'}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-orbitron text-xs font-bold tracking-widest border transition-all duration-300 cursor-pointer ${
                  txStatus === 'TRANSMITTING'
                    ? 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/30 animate-pulse'
                    : 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-cyber-darker border-transparent hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:scale-[1.01]'
                }`}
              >
                {txStatus === 'TRANSMITTING' ? (
                  <>
                    <Radio className="w-4 h-4 animate-spin" />
                    TRANSMITTING SIGNAL...
                  </>
                ) : txStatus === 'SUCCESS' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    TRANSMISSION COMPLETE!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    TRANSMIT MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Telemetry log & details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* RF Telemetry Display */}
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-900 font-mono text-[11px] space-y-3 flex-1 flex flex-col">
            <div className="flex items-center gap-2 border-b border-slate-900 pb-2.5 text-slate-400 font-bold">
              <Terminal className="w-4 h-4 text-cyber-purple animate-pulse" />
              <span>RF_MODEM_CONSOLE</span>
            </div>
            
            <div className="flex-1 space-y-1.5 overflow-y-auto font-mono text-slate-400 max-h-[160px] md:max-h-none">
              {consoleLogs.map((log, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-cyber-cyan select-none">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
              {txStatus === 'TRANSMITTING' && (
                <div className="text-cyber-cyan animate-pulse">&gt; SYS: CARRIER PULSING...</div>
              )}
            </div>
          </div>

          {/* Social connections */}
          <div className="glass-panel p-5 rounded-2xl border border-cyber-purple/20 space-y-4">
            <h3 className="font-orbitron text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyber-purple" /> DIRECT_CHANNELS
            </h3>
            
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <p>
                Email: <a href="mailto:kannangr@example.com" className="text-cyber-cyan hover:underline">kannangr@example.com</a> (Mock)
              </p>
              <p>
                Location: Dr. N.G.P Institute of Technology, Coimbatore, Tamil Nadu, India
              </p>
              <p>
                Domain Core: VLSI Analog/Digital Design & FPGA Verification
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

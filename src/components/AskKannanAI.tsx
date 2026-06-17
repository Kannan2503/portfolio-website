/* eslint-disable react-hooks/purity */
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu, User, Terminal } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const AskKannanAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "System initialized. Greetings, I am the AI Core of KANNAN G R. Ask me anything about his qualifications, projects, or ECE background.",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputVal, setInputVal] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const presets = [
    { label: "Who is Kannan?", value: "who_is_kannan" },
    { label: "What are his projects?", value: "projects" },
    { label: "His technical skills?", value: "skills" },
    { label: "Certifications held?", value: "certifications" },
    { label: "What tools does he use?", value: "tools" },
    { label: "Research interests?", value: "interests" },
    { label: "How to contact him?", value: "contact" },
  ];

  const db: Record<string, string> = {
    who_is_kannan: "KANNAN G R is an Electronics and Communication Engineering student at Dr. N.G.P Institute of Technology specializing in Embedded Systems, FPGA, and VLSI. He holds a CGPA of 7.95/10 and is an active IETE Member.",
    projects: "Kannan has designed 4 major projects:\n1. AI Based River Waste Cleaning System (Raspberry Pi, YOLOv5, OpenCV, ESP32)\n2. Plastic Classification and Sorting (TensorFlow Lite, Python, Raspberry Pi 3B+)\n3. Smart Dustbin Monitoring (IoT, Ultrasonic sensors, Raspberry Pi, automatic email alerts)\n4. Li-Fi Low Power Transmission (Laser diodes, solar panels, analog design).",
    skills: "His programming skills include C, Embedded C, Python, Verilog HDL, and MATLAB. He is skilled in embedded development (Raspberry Pi, ESP32, STM32, Arduino) and communication protocols (UART, SPI, I2C, GPIO).",
    certifications: "Kannan holds 6+ certifications including:\n- MIT RISC-V on FPGA: Application and Porting\n- NIT Synopsys SystemVerilog for Semiconductor Design & Verification\n- Maven Silicon Digital Design\n- Analog Electronics (Udemy)\n- PCB Design & Fabrication Workshop\n- Embedded Systems Internship.",
    tools: "He regularly works with Xilinx Vivado, Quartus Prime, ModelSim, Cadence Virtuoso, TensorFlow Lite, YOLOv5, OpenCV, Roboflow, and Google Colab.",
    interests: "His research and technical interests lie in VLSI Design, Digital IC Design, FPGA Development, Edge AI (TensorFlow Lite / YOLO), Hardware-Software Co-design, and Firmware Development.",
    contact: "You can reach Kannan G R through:\n- Email: (Available via the contact form below)\n- LinkedIn: linkedin.com/in/kannangr (Simulated link)\n- GitHub: github.com/kannangr (Simulated link)\nHe is actively seeking internship and entry-level core opportunities in the semiconductor industry.",
  };

  const getResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('who') || q.includes('kannan') || q.includes('profile') || q.includes('about')) {
      return db.who_is_kannan;
    }
    if (q.includes('project') || q.includes('river') || q.includes('waste') || q.includes('plastic') || q.includes('lifi') || q.includes('dustbin')) {
      return db.projects;
    }
    if (q.includes('skill') || q.includes('programming') || q.includes('embedded') || q.includes('c ') || q.includes('python') || q.includes('verilog')) {
      return db.skills;
    }
    if (q.includes('cert') || q.includes('mit') || q.includes('synopsys') || q.includes('maven')) {
      return db.certifications;
    }
    if (q.includes('tool') || q.includes('vivado') || q.includes('quartus') || q.includes('virtuoso')) {
      return db.tools;
    }
    if (q.includes('interest') || q.includes('vlsi') || q.includes('fpga') || q.includes('semiconductor') || q.includes('asic')) {
      return db.interests;
    }
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('linkedin') || q.includes('github') || q.includes('resume')) {
      return db.contact;
    }
    return "Query did not match standard ECE registers. Try clicking one of the diagnostic buttons or asking about his VLSI, FPGA, or Embedded Systems experience.";
  };

  const handleSend = (text: string, type: 'user' | 'preset' = 'user') => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    const lookupKey = type === 'preset' ? presets.find(p => p.label === text)?.value || '' : '';
    const answer = lookupKey && db[lookupKey] ? db[lookupKey] : getResponse(text);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: answer,
          sender: 'ai',
          timestamp: new Date(),
        },
      ]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-cyber-blue to-cyber-cyan text-cyber-darker rounded-full shadow-lg hover:shadow-cyber-cyan/50 hover:scale-105 transition-all duration-300 border border-cyber-cyan/40 cursor-pointer"
        >
          <MessageSquare className="w-6 h-6 animate-pulse-glow" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[380px] h-[500px] glass-panel rounded-2xl flex flex-col overflow-hidden border border-cyber-cyan shadow-2xl transition-all duration-300">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-cyber-dark to-slate-900 px-4 py-3 border-b border-cyber-cyan/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyber-cyan animate-spin-slow" />
              <div>
                <span className="font-orbitron text-xs font-bold text-white tracking-widest block">ASK KANNAN AI</span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping"></span> ONLINE
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white hover:bg-slate-800 p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border text-[10px] shrink-0 ${
                    msg.sender === 'user'
                      ? 'border-cyber-purple bg-cyber-purple/10 text-cyber-purple'
                      : 'border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Terminal className="w-3.5 h-3.5" />}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed font-mono ${
                    msg.sender === 'user'
                      ? 'bg-cyber-purple/15 text-purple-200 border border-cyber-purple/20'
                      : 'bg-cyber-blue/10 text-cyan-50 border border-cyber-cyan/20'
                  } whitespace-pre-line`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center border border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan shrink-0">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <div className="bg-cyber-blue/10 text-cyber-cyan rounded-2xl px-3.5 py-2 text-xs border border-cyber-cyan/20 flex gap-1 items-center font-mono">
                  <span className="h-1.5 w-1.5 bg-cyber-cyan rounded-full animate-bounce"></span>
                  <span className="h-1.5 w-1.5 bg-cyber-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="h-1.5 w-1.5 bg-cyber-cyan rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Preset Buttons */}
          <div className="px-3 py-2 bg-slate-950/60 border-t border-slate-900 overflow-x-auto flex gap-1.5 scrollbar-thin whitespace-nowrap">
            {presets.map((preset) => (
              <button
                key={preset.value}
                onClick={() => handleSend(preset.label, 'preset')}
                className="text-[10px] font-mono border border-cyber-blue/30 bg-slate-900/60 hover:bg-cyber-blue/15 hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan px-2.5 py-1 rounded-full transition-all cursor-pointer inline-block"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Input Panel */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputVal);
            }}
            className="p-3 bg-slate-950 border-t border-slate-900 flex gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask AI Core..."
              className="flex-1 bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-cyber-cyan transition-all"
            />
            <button
              type="submit"
              className="bg-cyber-cyan text-cyber-darker hover:bg-cyan-400 p-2 rounded-lg transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

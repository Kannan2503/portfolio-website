import React from 'react';
import { Layers, Cpu, Eye, Radio, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  category: 'AI_Edge' | 'IoT' | 'Analog';
}

export const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      title: 'AI Based River Waste Cleaning System',
      desc: 'Developed an AI-powered river waste cleaning system using Raspberry Pi and YOLOv5 for real-time waste detection and intelligent segregation. The system promotes environmental sustainability through automation and computer vision.',
      tags: ['Python', 'YOLOv5', 'OpenCV', 'Raspberry Pi', 'ESP32'],
      icon: <Eye className="w-5 h-5 text-cyber-cyan animate-pulse" />,
      category: 'AI_Edge',
    },
    {
      title: 'Plastic Classification and Sorting System',
      desc: 'Developed a plastic classification system using Raspberry Pi 3B+ and TensorFlow Lite for image-based plastic identification and automated pneumatic sorting mechanisms.',
      tags: ['Raspberry Pi', 'TensorFlow Lite', 'Python', 'Edge AI'],
      icon: <Cpu className="w-5 h-5 text-cyber-purple" />,
      category: 'AI_Edge',
    },
    {
      title: 'Smart Dustbin Monitoring System',
      desc: 'Designed an IoT-enabled waste monitoring system using ultrasonic sensors and Raspberry Pi. Implemented automated email alerts and dynamic database uploads when the dustbin reaches full capacity.',
      tags: ['Raspberry Pi', 'Python', 'Sensors', 'IoT', 'SMTP'],
      icon: <Radio className="w-5 h-5 text-emerald-400" />,
      category: 'IoT',
    },
    {
      title: 'Li-Fi Based Low Power Transmission System',
      desc: 'Designed and implemented a Light Fidelity (Li-Fi) communication system using laser diodes and solar panels for wireless audio/data transmission through visible light communication channels.',
      tags: ['Li-Fi', 'Laser Diode', 'Solar Panel', 'Analog Electronics'],
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      category: 'Analog',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="font-orbitron text-2xl md:text-3xl font-extrabold tracking-widest text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyber-cyan" /> MAJOR_PROJECTS
        </h2>
        <span className="h-0.5 w-16 bg-cyber-cyan mt-2 shadow-[0_0_8px_#00f2fe]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsList.map((project, i) => (
          <div
            key={i}
            className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyber-cyan/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Background trace glow */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-cyber-cyan/5 blur-2xl group-hover:bg-cyber-cyan/10 transition-all pointer-events-none"></div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-slate-500 border border-slate-800 px-2 py-0.5 rounded uppercase tracking-wider">
                  SYS_MODULE // {project.category}
                </span>
                <div className="p-2 bg-slate-900/60 border border-slate-800 rounded-lg group-hover:border-cyber-cyan/30 transition-colors">
                  {project.icon}
                </div>
              </div>

              <h3 className="font-orbitron text-base md:text-lg font-bold text-white tracking-wide group-hover:text-cyber-cyan transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="mt-6 border-t border-slate-900 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] sm:text-[10px] font-mono text-cyber-cyan/80 bg-cyber-cyan/5 border border-cyber-cyan/15 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

import { SemiconductorBackground } from './components/SemiconductorBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { SemiconductorDashboard } from './components/SemiconductorDashboard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AskKannanAI } from './components/AskKannanAI';
import { Cpu } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen bg-[#010208] text-slate-100 overflow-x-hidden selection:bg-cyber-cyan/30 selection:text-white">
      {/* Background Interactive Canvas */}
      <SemiconductorBackground />

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Hero Entrance Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Grid */}
      <Skills />

      {/* Projects Grid */}
      <Projects />

      {/* Experience Timeline */}
      <Experience />

      {/* Diagnostics / Semiconductor Dashboard */}
      <section id="dashboard" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-900">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="font-orbitron text-2xl md:text-3xl font-extrabold tracking-widest text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyber-cyan" /> WAFER_DIAGNOSTICS
          </h2>
          <span className="h-0.5 w-16 bg-cyber-cyan mt-2 shadow-[0_0_8px_#00f2fe]" />
        </div>
        <SemiconductorDashboard />
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Ask Kannan AI - Chatbot */}
      <AskKannanAI />
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Cpu, Zap, Moon, Sun, Monitor, Lock, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * SMNB - Matrix Activation Suite (Visual Redesign)
 * A professional concept interface for system tools.
 */

interface ActivationMethod {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
}

export default function App() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "[READY] System initialized...",
    "[INFO] Waiting for user command..."
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState('HWID');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const addLog = (msg: string) => {
    setTerminalLines(prev => [...prev, `> ${msg}`]);
  };

  const simulateActivation = (methodId: string) => {
    if (isProcessing) return;
    setIsProcessing(true);
    setTerminalLines([]);
    
    const method = methods.find(m => m.id === methodId);
    
    const steps = [
      `Initializing SMNB ${method?.name || methodId} Engine...`,
      "Connecting to local Microsoft registry...",
      "Gathering hardware identity tokens...",
      "Applying digital license bypass...",
      "Verifying system integrity...",
      `[SUCCESS] SMNB ${method?.name || methodId} activation completed.`,
      "System is now permanently activated."
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        addLog(step);
        if (index === steps.length - 1) setIsProcessing(false);
      }, (index + 1) * 800);
    });
  };

  const methods: ActivationMethod[] = [
    { 
      id: 'HWID', 
      name: 'HWID Activation', 
      desc: 'Permanent digital entitlement for Windows 10/11 platforms. Registry-level binding.',
      icon: <Shield className="w-4 h-4" />
    },
    { 
      id: 'Ohook', 
      name: 'Ohook Method', 
      desc: 'Injects hooks for Microsoft Office 365/2021. Bypasses subscription verification.',
      icon: <Lock className="w-4 h-4" />
    },
    { 
      id: 'KMS38', 
      name: 'KMS38 License', 
      desc: 'Extends system validity until the year 2038 using simulated KMS server logic.',
      icon: <Zap className="w-4 h-4" />
    },
  ];

  return (
    <div className="bg-[#020617] text-[#94a3b8] min-h-screen p-8 font-mono overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#10b9810a_0%,transparent_50%)]" />
      </div>

      {/* Header Area */}
      <motion.header 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end mb-10 gap-6 relative z-10"
      >
        <div>
          <span className="inline-block text-[10px] uppercase tracking-[2px] border border-emerald-500 text-emerald-500 px-2 py-0.5 rounded-sm mb-2 font-bold">
            System Secure
          </span>
          <h1 className="text-2xl font-black tracking-[4px] text-slate-50">
            SMNB <span className="text-emerald-500">MATRIX</span> SUITE
          </h1>
          <p className="text-[10px] opacity-50 mt-1 uppercase tracking-widest font-mono">
            DEPLOYMENT KERNEL V4.0.2 // ARCH: X64
          </p>
        </div>
        
        <div className="text-right hidden md:block">
          <p className="text-emerald-500 text-[12px] flex items-center justify-end gap-2 font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            ENCRYPTED CONNECTION
          </p>
          <p className="text-[#475569] text-[10px] mt-1 font-mono tracking-widest">
            ID: 882-X9A-01L
          </p>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 relative z-10 min-h-[500px]">
        
        {/* Sidebar Controls */}
        <motion.div 
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {methods.map((m) => (
            <motion.div 
              key={m.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(m.id)}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                activeTab === m.id 
                ? 'border-emerald-500 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.05)]' 
                : 'border-[#1e293b] bg-[#0f172a] hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-1">
                <div className={`${activeTab === m.id ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {m.icon}
                </div>
                <h3 className="text-[12px] font-black uppercase tracking-wider text-slate-50">{m.name}</h3>
              </div>
              <p className="text-[11px] leading-relaxed opacity-70">{m.desc}</p>
            </motion.div>
          ))}

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { label: 'CPU', value: '14%' },
              { label: 'RAM', value: '4.2GB' },
              { label: 'NET', value: '112ms' }
            ].map(stat => (
              <div key={stat.label} className="p-3 border border-[#1e293b] rounded-lg text-center bg-[#0f172a]/50">
                <span className="block text-[9px] text-[#475569] uppercase tracking-tighter mb-1">{stat.label}</span>
                <span className="text-[11px] font-bold text-slate-50">{stat.value}</span>
              </div>
            ))}
          </div>

          <button 
            disabled={isProcessing}
            onClick={() => simulateActivation(activeTab)}
            className={`w-full py-5 mt-auto rounded-xl font-black uppercase tracking-[2px] transition-all flex items-center justify-center gap-2
              ${isProcessing 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' 
                : 'bg-emerald-500 hover:bg-emerald-400 text-[#020617] shadow-[0_0_30px_rgba(16,185,129,0.2)] active:scale-95 hover:-translate-y-0.5'
              }
            `}
          >
            {isProcessing ? 'Executing...' : 'Execute Suite'}
          </button>
        </motion.div>

        {/* Terminal Window */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col border border-[#1e293b] rounded-xl overflow-hidden bg-[#020617] h-[550px] shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-[#1e293b] p-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            </div>
            <span className="text-[10px] opacity-40 uppercase tracking-[2px] font-bold">
              BASH — admin@smnb-matrix-suite
            </span>
          </div>
          
          {/* Console Area */}
          <div 
            ref={scrollRef}
            className="p-8 overflow-y-auto flex-1 font-mono text-[13px] leading-relaxed scrollbar-thin scrollbar-thumb-emerald-500/20"
          >
            <AnimatePresence mode="popLayout">
              {terminalLines.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-1 ${
                    line.startsWith('>') ? 'text-emerald-500' :
                    line.includes('[INFO]') ? 'text-slate-500' :
                    line.includes('SUCCESS') ? 'text-emerald-400 font-bold' :
                    'text-slate-400'
                  }`}
                >
                  {line}
                  {line.includes('SUCCESS') && <CheckCircle2 className="w-3.5 h-3.5 inline ml-2 text-emerald-400 align-middle mb-0.5" />}
                </motion.div>
              ))}
            </AnimatePresence>
            {isProcessing && (
              <div className="inline-block w-2 H-5 bg-emerald-500 animate-pulse ml-0.5 align-middle" />
            )}
          </div>
          
          {/* Footer Info */}
          <div className="p-4 border-t border-[#1e293b] text-[10px] flex justify-between bg-[#0f172a]/30 px-8">
            <span className="text-emerald-500 uppercase tracking-widest font-black">
              Ready to deploy
            </span>
            <span className="text-[#475569] uppercase tracking-widest italic">
              Mode: High-Contrast Technical
            </span>
          </div>
        </motion.div>

      </main>

      {/* Page Footer */}
      <footer className="max-w-6xl mx-auto mt-16 text-[10px] flex flex-col md:flex-row justify-between items-center text-[#475569] uppercase tracking-[2px] pt-4 border-t border-[#1e293b] gap-4">
        <div>Concept UI for SMNB Portfolio // Build 2024.11</div>
        <div className="font-bold">Auth: Administrator Privileges Verified</div>
        <div className="opacity-60 italic">Inspired by MAS / Redesigned by SMNB</div>
      </footer>
    </div>
  );
}

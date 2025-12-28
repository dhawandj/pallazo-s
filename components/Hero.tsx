
import React from 'react';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 px-6 bg-slate-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]"></div>
      
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-500/5 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-slate-800/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
          Shaping Bangalore's Skyline
        </div>
        
        <h1 className="text-6xl md:text-[8rem] lg:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          WE BUILD <br />
          <span className="text-amber-500 inline-block drop-shadow-[0_0_20px_rgba(251,191,36,0.2)]">LEGACIES</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 max-w-4xl mx-auto">
          <p className="text-slate-400 text-lg md:text-xl text-left leading-relaxed animate-in fade-in duration-1000 delay-500 border-l-4 border-amber-500/50 pl-8">
            Superior architectural intelligence fused with industrial strength to create Bangalore's most iconic commercial and residential landmarks.
          </p>
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-8 duration-1000 delay-700">
            <a href="#portfolio" className="w-full px-10 py-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 group transition-all transform hover:-translate-y-1 shadow-xl shadow-amber-500/20 rounded-full">
              VIEW PROJECTS <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center md:justify-start gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-2">
              <MousePointer2 className="w-4 h-4 text-amber-500 animate-bounce" />
              Building the Silicon Valley of India
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12 w-full max-w-7xl perspective-1000 px-6 animate-in zoom-in-95 duration-1000 delay-1000">
        <div className="relative w-full aspect-[21/9] bg-slate-900 border border-slate-800 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] preserve-3d group rounded-[3rem]">
          <img 
            src="https://images.unsplash.com/photo-1590483734724-388174405962?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Construction in Bangalore" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-[2s] ease-out rounded-[3rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 rounded-[3rem]"></div>
          
          <div className="absolute bottom-10 left-10 text-left border-l-4 border-amber-500 pl-6">
            <p className="text-amber-500 font-bold text-[10px] tracking-[0.3em] mb-2 uppercase">ONGOING PROJECT</p>
            <h3 className="text-3xl font-bold font-oswald text-white">ORION TECH PARK, WHITEFIELD</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

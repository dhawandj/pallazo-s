
import React from 'react';
import { PallazoProjects } from '../mockData';

interface WorkProps {
  onSelectProject: (id: number) => void;
}

export const Work: React.FC<WorkProps> = ({ onSelectProject }) => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Our Work</span>
          <h1 className="text-5xl md:text-7xl font-bold font-sync mb-10 uppercase">PORTFOLIO</h1>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
            From minor upgrades to major transformations, we breathe new life into existing spaces, making them better than ever.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
          {PallazoProjects.map(p => (
            <div key={p.id} className="group cursor-pointer" onClick={() => onSelectProject(p.id)}>
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 relative shadow-xl">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute top-6 left-6 flex gap-2">
                   <span className="glass px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">{p.tag}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                   <p className="text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-2">{p.service}</p>
                   <h3 className="text-3xl font-bold font-sync uppercase text-white">{p.title}</h3>
                </div>
              </div>
              <div className="flex justify-between items-start px-4">
                 <div className="space-y-2">
                   <h3 className="text-2xl font-bold font-sync group-hover:text-amber-500 transition-colors uppercase">{p.title}</h3>
                   <div className="flex flex-wrap items-center gap-4 text-slate-500">
                     <span className="text-[10px] font-bold uppercase tracking-widest">{p.location}</span>
                     <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/50">{p.spec}</span>
                   </div>
                 </div>
                 <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
                   <span className="text-xl">→</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

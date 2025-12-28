
import React, { useState } from 'react';

const categories = ["ALL", "CORPORATE", "LIVING", "RETAIL"];
const projects = [
  { id: 1, name: "The Zenith Whitefield", category: "CORPORATE", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Indiranagar Meadows", category: "LIVING", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Brigade Retail Hub", category: "RETAIL", img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Koramangala Lofts", category: "LIVING", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Electronics City Hub", category: "CORPORATE", img: "https://images.unsplash.com/photo-1558231031-030f88998529?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "UB City Expansion", category: "RETAIL", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const filtered = activeTab === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-48 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">PORTFOLIO</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-white">BANGALORE'S NEW <br /> BENCHMARKS</h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 bg-slate-900/50 p-2 rounded-full w-fit mx-auto border border-slate-800">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] font-bold tracking-[0.2em] px-8 py-3 rounded-full transition-all ${
                  activeTab === cat 
                  ? 'text-slate-950 bg-amber-500 shadow-lg shadow-amber-500/20' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <div 
              key={proj.id} 
              className="relative group overflow-hidden aspect-[4/5] bg-slate-900 animate-in fade-in zoom-in duration-500 rounded-[3rem]"
            >
              <img 
                src={proj.img} 
                alt={proj.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[100%] group-hover:grayscale-0 opacity-40 group-hover:opacity-100 rounded-[3rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12 translate-y-4 group-hover:translate-y-0">
                <span className="text-amber-500 text-[10px] font-bold tracking-widest mb-3 uppercase">{proj.category}</span>
                <h3 className="text-3xl font-bold text-white mb-8 font-oswald">{proj.name}</h3>
                <div className="w-14 h-14 bg-amber-500 text-slate-950 flex items-center justify-center hover:bg-white transition-colors cursor-pointer rounded-2xl shadow-xl">
                  <span className="text-3xl font-bold">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

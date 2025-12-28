
import React from 'react';
import { Layers, Compass, Zap, CheckCircle2, Hammer, Landmark } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: "Project Management",
    description: "Holistic oversight of complex construction lifecycles with rigorous financial controls."
  },
  {
    icon: Compass,
    title: "Master Planning",
    description: "Expert site selection, zoning navigation, and long-term urban scalability analysis."
  },
  {
    icon: Zap,
    title: "High-Tech Industrial",
    description: "Specialized facilities for data centers, energy grids, and advanced manufacturing."
  },
  {
    icon: Landmark,
    title: "Commercial Icons",
    description: "Crafting monumental business hubs that define global skylines and work cultures."
  },
  {
    icon: CheckCircle2,
    title: "Safety Compliance",
    description: "Zero-incident priority through AI monitoring and elite-level training protocols."
  },
  {
    icon: Hammer,
    title: "Legacy Renovations",
    description: "Bespoke revitalization of historic structures using modern carbon-neutral materials."
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-slate-950 section-curve-top">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">EXPERTISE</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] text-white">
              UNCOMPROMISING <br />
              <span className="text-slate-500">STANDARDS</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg border-l-4 border-amber-500 pl-8 pt-4">
            We deliver high-fidelity engineering solutions across every vertical of the modern built environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="group p-12 bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 transition-all duration-700 relative overflow-hidden rounded-[2.5rem]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 -mr-16 -mt-16 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-slate-800 text-amber-500 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 transform group-hover:scale-110">
                <svc.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-5 font-oswald tracking-tight group-hover:text-amber-500 transition-colors">{svc.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                {svc.description}
              </p>
              
              <div className="inline-flex items-center gap-4 bg-slate-800/50 px-6 py-2 rounded-full border border-slate-700/50 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 cursor-pointer">
                <span className="text-[10px] font-bold tracking-widest uppercase">View Details</span>
                <div className="h-px w-6 bg-current opacity-30"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

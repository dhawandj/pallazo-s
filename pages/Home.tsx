
import React from 'react';
import { ArrowRight, MoveUpRight, Compass, Hammer, Paintbrush, ShieldCheck, Box, Target, Zap, Building2, HardHat, Ruler } from 'lucide-react';
import { PallazoBrand, PallazoApproach, PallazoServices } from '../mockData';

interface HomeProps {
  setPage: (page: string) => void;
}

const iconMap: any = {
  Compass, Hammer, Paintbrush, ShieldCheck, Box, Target, Zap
};

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="pt-24 pb-20">
      {/* HERO SECTION */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass border border-amber-500/20 rounded-full w-fit">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500">
                Precision in every cornerstone
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-sync leading-[0.9] tracking-tighter uppercase">
              {PallazoBrand.name} <br /> <span className="text-amber-500">LEGACIES</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              {PallazoBrand.description}
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setPage('work')} 
                className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all flex items-center gap-3"
              >
                VIEW PROJECTS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative group">
            <img 
              src="https://www.buildahome.in/images/landing-page/nikhil-kulkarni-dream-home.webp" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
              alt="Elite Architecture"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10">
               <span className="text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase">Featured 2026 Milestone</span>
               <h3 className="text-2xl font-sync font-bold text-white mt-1 uppercase">Kulkarni Residence Phase II</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION SHOWCASE */}
      <section className="px-6 mb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-amber-500 font-bold tracking-widest text-[10px] uppercase mb-2 block">Building Excellence</span>
              <h2 className="text-3xl font-bold font-sync uppercase">Construction in Action</h2>
            </div>
            <button 
              onClick={() => setPage('work')}
              className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 hover:text-amber-500 transition-colors"
            >
              Explore 2026 Portfolio <MoveUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 rounded-[3rem] overflow-hidden border border-white/5 group relative shadow-2xl">
              <img 
                src="https://www.buildahome.in/images/landing-page/chidanand-dream-home.webp" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[3s]"
                alt="Construction progress 2026"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute top-10 left-10">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <HardHat className="w-4 h-4 text-amber-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white">Structural Phase 2026</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden border border-white/5 group relative">
                <img 
                  src="https://www.buildahome.in/images/landing-page/roopa-dream-home.webp" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s]"
                  alt="Modern foundation"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-[8px] font-bold text-amber-500 uppercase tracking-widest block mb-1">Architecture</span>
                  <p className="text-white font-sync text-xs uppercase font-bold">The Roopa Estate</p>
                </div>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden border border-white/5 group relative">
                <img 
                  src="https://www.buildahome.in/images/landing-page/sumalatha-dream-home.webp" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s]"
                  alt="Construction Detail"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-[8px] font-bold text-amber-500 uppercase tracking-widest block mb-1">Expertise</span>
                  <p className="text-white font-sync text-xs uppercase font-bold">Technical Precision</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
             {[
               { url: "https://www.buildahome.in/images/landing-page/sudhir-dream-home.webp", title: "Sudhir Residence" },
               { url: "https://www.buildahome.in/images/landing-page/vishak-dream-home.webp", title: "Vishak Modern" },
               { url: "https://www.buildahome.in/images/landing-page/chethan-dream-home.webp", title: "Chethan Villa" }
             ].map((item, i) => (
                <div key={i} className="rounded-[2.5rem] overflow-hidden border border-white/5 group relative aspect-square">
                  <img src={item.url} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                    <p className="text-white font-sync text-xs uppercase font-bold tracking-widest">{item.title}</p>
                    <span className="text-[8px] font-bold text-amber-500 uppercase tracking-widest mt-2">Completed 2026</span>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* APPROACH SYSTEM */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-amber-500 font-bold tracking-widest text-[10px] uppercase mb-2 block">Our 2026 Strategy</span>
            <h2 className="text-3xl font-bold font-sync uppercase">From Vision to Reality</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PallazoApproach.map((step, idx) => {
              const IconComp = iconMap[step.icon];
              return ( step && 
                <div key={idx} className="glass p-8 rounded-[2rem] border border-white/5 hover:border-amber-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-3xl font-sync font-bold text-slate-800 group-hover:text-amber-500/20 transition-colors">{step.id}</span>
                    {IconComp && <IconComp className="w-6 h-6 text-amber-500" />}
                  </div>
                  <h3 className="text-[10px] font-bold tracking-widest text-amber-500 uppercase mb-2">{step.subtitle}</h3>
                  <h4 className="text-lg font-bold font-sync uppercase mb-4">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 mb-32 bg-slate-900/30 py-24 rounded-[4rem]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-amber-500 font-bold tracking-widest text-[10px] uppercase mb-2 block">Excellence in 2026</span>
              <h2 className="text-4xl font-bold font-sync uppercase">WHAT WE OFFER</h2>
              <p className="text-slate-400 mt-4 leading-relaxed">
                Expertise that extends beyond walls and floors. We transform spaces into experiences, reflecting your unique style in 2026.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PallazoServices.map((svc, i) => {
               const IconComp = iconMap[svc.icon];
               return (
                <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:bg-slate-900/80 transition-all group">
                  <div className="w-12 h-12 bg-slate-900 border border-white/5 text-amber-500 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    {IconComp && <IconComp className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold font-sync uppercase mb-4">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto relative group cursor-pointer" onClick={() => setPage('company')}>
          <div className="absolute -inset-1 bg-amber-500 rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-black border border-white/10 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-sync mb-8 tracking-tighter uppercase">
              Join Us in Building <br /> <span className="text-amber-500">2026 and Beyond.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
              Let’s create spaces that inspire, transform, and endure. Your dream home is just one consultation away in 2026.
            </p>
            <div className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-amber-500 transition-colors">
              Request 2026 Consultation
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

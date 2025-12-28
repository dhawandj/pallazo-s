
import React from 'react';
import { ArrowLeft, MapPin, Building2, Calendar, ShieldCheck, Box } from 'lucide-react';
import { ProjectDetail as IProjectDetail, PallazoBrand } from '../mockData';

interface ProjectDetailProps {
  project: IProjectDetail;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const whatsappBaseUrl = `https://wa.me/${PallazoBrand.whatsapp}`;
  
  const caseStudyMessage = encodeURIComponent(`Hi Pallazo's! I'm interested in receiving the detailed Case Study for the "${project.title}" project in ${project.location}.`);
  const generalInquiryMessage = encodeURIComponent(`Hi! I saw the "${project.title}" project on your portfolio and would like to discuss a similar construction project.`);

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto px-6">
        {/* BACK BUTTON */}
        <button 
          onClick={onBack}
          className="group mb-12 flex items-center gap-4 text-slate-400 hover:text-amber-500 transition-all"
        >
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Back to Portfolio</span>
        </button>

        {/* HERO HEADER */}
        <header className="mb-20">
          <div className="flex flex-col gap-8 mb-12">
            <div className="flex flex-wrap gap-3">
              <span className="glass px-5 py-2 rounded-full text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] border border-amber-500/30">
                {project.tag}
              </span>
              <span className="glass px-5 py-2 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] border border-white/10">
                {project.service}
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-sync tracking-tighter uppercase leading-[0.85] break-words max-w-4xl">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              
              <div className="lg:text-right">
                <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] block mb-3">Location</span>
                <div className="flex items-center gap-3 lg:justify-end text-white font-sync text-xl tracking-tight">
                  <MapPin className="w-6 h-6 text-amber-500" />
                  {project.location.toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[50vh] md:h-[70vh] rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl relative">
            <img 
              src={project.img} 
              className="w-full h-full object-cover" 
              alt={project.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 hidden md:block">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-2">Primary Perspective</p>
              <h4 className="text-white font-sync font-bold text-2xl uppercase tracking-tighter">Architectural Masterpiece</h4>
            </div>
          </div>
        </header>

        {/* SPECS STRIP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { label: 'Client', val: project.client, icon: ShieldCheck },
            { label: 'Scale', val: project.spec.split('•')[0], icon: Building2 },
            { label: 'Timeline', val: project.spec.split('•')[1] || 'Completed', icon: Calendar },
            { label: 'Scope', val: 'End-to-End', icon: Box },
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/20 transition-all group">
              <item.icon className="w-7 h-7 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] block mb-2">{item.label}</span>
              <span className="text-sm font-bold text-white uppercase font-sync leading-tight">{item.val}</span>
            </div>
          ))}
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-24">
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-px bg-amber-500"></div>
                <h2 className="text-2xl font-sync font-bold uppercase tracking-tighter">Project Narrative</h2>
              </div>
              <p className="text-2xl md:text-3xl text-slate-300 leading-snug font-light italic">
                "{project.description}"
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 bg-slate-900/40 rounded-[3rem] border border-white/5 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-bold uppercase tracking-widest">Complexities</div>
                <h3 className="text-lg font-bold font-sync uppercase text-white">The Challenge</h3>
                <p className="text-slate-400 text-base leading-relaxed">{project.challenges}</p>
              </div>
              <div className="p-12 bg-amber-500/5 rounded-[3rem] border border-amber-500/20 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-bold uppercase tracking-widest">Execution</div>
                <h3 className="text-lg font-bold font-sync uppercase text-white">Our Solution</h3>
                <p className="text-slate-400 text-base leading-relaxed">{project.solutions}</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-px bg-amber-500"></div>
                <h2 className="text-2xl font-sync font-bold uppercase tracking-tighter">Visual Archive</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.map((img, i) => (
                  <div key={i} className={`rounded-[3rem] overflow-hidden border border-white/5 group ${i === 2 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}>
                    <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt={`Gallery ${i}`} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="glass p-12 rounded-[3.5rem] border border-white/5 shadow-3xl">
                <h3 className="text-xl font-bold font-sync mb-10 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  Technical DNA
                </h3>
                <div className="space-y-4">
                  {project.technicalDetails.map((td, i) => (
                    <div key={i} className="group py-5 border-b border-white/5 last:border-0">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] block mb-2 group-hover:text-amber-500 transition-colors">{td.label}</span>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{td.value}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={`${whatsappBaseUrl}?text=${caseStudyMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-12 py-6 bg-amber-500 text-black font-bold uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-white transition-all shadow-xl shadow-amber-500/10 flex items-center justify-center"
                >
                  Request Case Study
                </a>
              </div>

              <div className="p-10 border border-white/5 rounded-[3rem] bg-slate-900/20 text-center">
                 <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Have a similar project?</p>
                 <a 
                   href={`${whatsappBaseUrl}?text=${generalInquiryMessage}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white font-sync text-sm underline hover:text-amber-500 transition-colors uppercase"
                 >
                   Get in touch now
                 </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

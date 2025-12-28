
import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Zap, Users, Target } from 'lucide-react';
import { PallazoBrand } from '../mockData';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const Company: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PallazoBrand.whatsapp}?text=${encodeURIComponent("Hi, I'd like to discuss a new build.")}`;

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* BRAND IDENTITY */}
        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Who are we?</span>
              <h1 className="text-5xl md:text-7xl font-bold font-sync leading-tight mb-8 uppercase">
                Young Professionals. <br /> <span className="text-amber-500">Excellence.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                At {PallazoBrand.name}, we’re a team of young and passionate professionals dedicated to innovation and excellence. We can enhance any space through our proven design processes and our ability to understand our client’s unique vision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4 group">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 border border-white/5 group-hover:border-amber-500 transition-colors">
                      <Target className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold uppercase font-sync text-sm">Vision Enabled</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Transforming spaces into experiences reflecting your unique vision and style.</p>
                 </div>
                 <div className="space-y-4 group">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 border border-white/5 group-hover:border-amber-500 transition-colors">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold uppercase font-sync text-sm">Design Driven</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">From minor upgrades to major transformations, we breathe new life into existing spaces.</p>
                 </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <img src="https://www.buildahome.in/images/landing-page/badri-and-dheeraj-dream-home.webp" className="w-full h-full object-cover grayscale-[20%]" alt="Pallazo Team Leadership" />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[2.5rem] border border-amber-500/20 max-w-[260px]">
                <div className="flex items-center gap-3 mb-4">
                   <Users className="text-amber-500 w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Our Experts</span>
                </div>
                <p className="text-sm font-bold text-white leading-relaxed uppercase font-sync">Seasoned Professionals at your service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PILLARS */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { title: 'CONSTRUCTION', label: 'Turnkey Solutions' },
             { title: 'MANAGEMENT', label: 'Project Oversight' },
             { title: 'DESIGN', label: 'Interior Execution' }
           ].map((item, i) => (
             <div key={i} className="bg-slate-900/50 border border-white/5 p-12 rounded-[3rem] text-center group hover:bg-amber-500 transition-all cursor-default">
               <h3 className="text-4xl font-bold font-sync mb-2 group-hover:text-black transition-colors">{item.title}</h3>
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-black/60 transition-colors">{item.label}</p>
             </div>
           ))}
        </section>

        {/* CONTACT EXPERIENCE */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 bg-slate-900/30 p-8 md:p-12 rounded-[4rem] border border-white/5">
          <div className="bg-white text-black p-10 md:p-14 rounded-[3rem]">
            <h2 className="text-3xl font-bold font-sync mb-10 uppercase tracking-tighter">Start your inquiry</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="text" className="w-full bg-slate-100 border-none px-6 py-4 rounded-full focus:ring-2 ring-amber-500 transition-all outline-none text-sm font-bold" placeholder="Your Name" />
                 <input type="email" className="w-full bg-slate-100 border-none px-6 py-4 rounded-full focus:ring-2 ring-amber-500 transition-all outline-none text-sm font-bold" placeholder="Email Address" />
               </div>
               <select className="w-full bg-slate-100 border-none px-6 py-4 rounded-full focus:ring-2 ring-amber-500 transition-all outline-none text-sm font-bold appearance-none">
                 <option>Turnkey Construction Solution</option>
                 <option>Project Management Consulting</option>
                 <option>Residential Remodeling</option>
                 <option>Interior Design & Execution</option>
               </select>
               <textarea className="w-full bg-slate-100 border-none px-6 py-6 rounded-[2rem] focus:ring-2 ring-amber-500 transition-all outline-none min-h-[120px] text-sm font-bold" placeholder="Tell us about your dream home..."></textarea>
               <button className="w-full bg-black text-white font-bold py-5 rounded-full uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-black transition-all">
                 Request Consultation
               </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h2 className="text-3xl font-bold font-sync mb-12 uppercase">CONTACT DETAILS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex gap-6 items-start group">
                   <div className="w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm mb-1 uppercase font-sync">Head Office</h4>
                     <p className="text-slate-500 text-xs leading-relaxed">
                       {PallazoBrand.hq}
                     </p>
                   </div>
                </div>
                <div className="flex gap-6 items-start group">
                   <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-900/20 border border-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all"
                   >
                     <WhatsAppIcon className="w-5 h-5" />
                   </a>
                   <div>
                     <h4 className="font-bold text-sm mb-1 uppercase font-sync text-green-500">WhatsApp</h4>
                     <p className="text-slate-500 text-xs leading-relaxed">
                       Direct Executive Chat <br /> 
                       Available 24/7
                     </p>
                   </div>
                </div>
                <div className="flex gap-6 items-start group">
                   <div className="w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                     <Phone className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm mb-1 uppercase font-sync">Direct Line</h4>
                     <p className="text-slate-500 text-xs leading-relaxed">
                       {PallazoBrand.phone}
                     </p>
                   </div>
                </div>
                <div className="flex gap-6 items-start group">
                   <div className="w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                     <Mail className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm mb-1 uppercase font-sync">Email</h4>
                     <p className="text-slate-500 text-xs leading-relaxed">
                       {PallazoBrand.email}
                     </p>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-[2.5rem] flex items-center justify-between border border-white/5">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Active Consultation</span>
               </div>
               <ExternalLink className="w-4 h-4 text-amber-500" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

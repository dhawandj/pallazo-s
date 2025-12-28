
import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-slate-950 section-curve-top">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">INQUIRIES</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white">READY FOR THE NEXT LEVEL?</h2>
            <p className="text-slate-400 mb-16 max-w-md text-lg leading-relaxed">
              Contact our executive team at our Bangalore headquarters to discuss your next breakthrough project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { icon: MapPin, title: "BANGALORE HQ", desc: "10th Floor, Apex Towers, Koramangala 4th Block, Bengaluru, 560034" },
                { icon: Phone, title: "DIRECT LINE", desc: "+91 80 555 0900\n+91 80 555 0911" },
                { icon: Mail, title: "DIGITAL", desc: "bangalore@apexdynamics.com\ncareers@apexdynamics.com" },
                { icon: Globe, title: "LOCAL OFFICES", desc: "Whitefield | Indiranagar | Jayanagar\nHSR Layout | Electronic City" }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 bg-slate-900/30 rounded-[2rem] border border-slate-800/50 hover:border-amber-500/30 transition-all">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 text-amber-500 flex items-center justify-center mb-6 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold mb-3 font-oswald text-lg tracking-wide uppercase">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500 opacity-10 blur-3xl"></div>
            <div className="relative bg-slate-900 p-10 md:p-14 border border-slate-800 shadow-3xl rounded-[3rem]">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 pl-4">Full Name</label>
                    <input type="text" required className="w-full bg-slate-950 border border-slate-800 px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 rounded-full" placeholder="e.g. Rahul Sharma" />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 pl-4">Contact Email</label>
                    <input type="email" required className="w-full bg-slate-950 border border-slate-800 px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 rounded-full" placeholder="rahul@company.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 pl-4">Project Category</label>
                  <div className="relative">
                    <select className="w-full bg-slate-950 border border-slate-800 px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-all appearance-none cursor-pointer rounded-full">
                      <option>Tech Park / Corporate Office</option>
                      <option>Residential Villa / Apartment</option>
                      <option>Commercial Mall / Retail</option>
                      <option>Industrial Warehouse</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 pl-4">Tell us about your requirements</label>
                  <textarea required className="w-full bg-slate-950 border border-slate-800 px-6 py-6 text-white focus:outline-none focus:border-amber-500 transition-all min-h-[160px] placeholder:text-slate-700 rounded-[2rem]" placeholder="Provide a brief summary of your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-5 uppercase tracking-[0.3em] text-[10px] transition-all transform hover:-translate-y-1 rounded-full shadow-lg shadow-amber-500/20">
                  INITIATE CONSULTATION
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

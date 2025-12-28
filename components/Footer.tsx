
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Shield } from 'lucide-react';
import { PallazoBrand } from '../mockData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PallazoBrand.whatsapp}`;

  return (
    <footer className="bg-slate-950 py-24 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-amber-500 flex items-center justify-center rounded-xl rotate-12">
                <Shield className="w-6 h-6 text-slate-950 -rotate-12" />
              </div>
              <span className="font-sync text-2xl font-bold tracking-tighter">
                {PallazoBrand.name.toUpperCase()}
              </span>
            </div>
            <p className="text-slate-500 max-w-md text-lg leading-relaxed">
              {PallazoBrand.description}
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 glass border border-white/5 rounded-2xl flex items-center justify-center hover:bg-amber-500 transition-all text-slate-600 hover:text-slate-950 group">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass border border-green-500/20 rounded-2xl flex items-center justify-center hover:bg-green-500 transition-all text-green-500 hover:text-slate-950 group">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-amber-500 pl-4 border-l-2 border-amber-500">HEADQUARTERS</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {PallazoBrand.hq}
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-slate-400 text-xs font-bold">{PallazoBrand.phone}</p>
              <p className="text-slate-400 text-xs font-bold">WA: +91 96063 03999</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-amber-500 pl-4 border-l-2 border-amber-500">CONNECT</h4>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Join our executive bulletin for market analysis.</p>
            <div className="flex flex-col gap-4">
              <input type="email" placeholder="Corporate Email" className="bg-slate-900 border border-slate-800 px-6 py-4 text-sm focus:outline-none focus:border-amber-500 transition-colors rounded-full" />
              <button className="bg-amber-500 px-8 py-4 text-slate-950 font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors rounded-full">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col lg:flex-row justify-between items-center gap-8 text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2026 {PallazoBrand.name.toUpperCase()} CONSTRUCTION GROUP. BENGALURU.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


import React from 'react';
import { PallazoBrand } from '../mockData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("Hello Pallazo's! I'm interested in discussing a construction project.");
  const url = `https://wa.me/${PallazoBrand.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
        <div className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-2xl whitespace-nowrap border border-black/5">
          Chat with an Expert
        </div>
      </div>

      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
      
      {/* Main Button */}
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-green-500 hover:bg-white text-white hover:text-green-500 rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all duration-500 hover:scale-110 active:scale-95 border border-green-400/20"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
};


import React from 'react';

const stats = [
  { val: "500+", label: "ASSETS DELIVERED" },
  { val: "$2.4B", label: "PROJECT VALUE" },
  { val: "22", label: "COUNTRIES ACTIVE" },
  { val: "0", label: "SAFETY LAPSES" },
];

export const Stats: React.FC = () => {
  return (
    <div className="px-6 -mb-24 relative z-20">
      <section className="py-20 bg-amber-500 relative overflow-hidden rounded-[4rem] shadow-2xl shadow-amber-500/10">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cube.png')]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl md:text-7xl font-bold text-slate-950 mb-3 leading-none font-oswald tracking-tighter group-hover:scale-110 transition-transform">
                {s.val}
              </div>
              <div className="text-[10px] font-black text-slate-800 tracking-[0.3em] uppercase opacity-70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

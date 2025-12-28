
import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { PallazoBrand } from '../mockData';

interface HeaderProps {
  currentPage: string;
  setPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navs = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Portfolio' },
    { id: 'company', label: 'Who we are' }
  ];

  return (
    <header className="fixed top-6 left-0 w-full z-[100] px-6">
      <div className="max-w-6xl mx-auto glass rounded-full px-8 py-4 flex justify-between items-center border border-white/5">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform">
            <Shield className="w-4 h-4 text-black -rotate-45 group-hover:rotate-0 transition-transform" />
          </div>
          <span className="font-sync text-sm font-bold tracking-tighter">
            {PallazoBrand.name}<span className="text-amber-500">.</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navs.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all relative ${
                currentPage === n.id ? 'text-amber-500' : 'text-slate-400 hover:text-white'
              }`}
            >
              {n.label}
              {currentPage === n.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setPage('company')}
          className="hidden md:block px-6 py-2 bg-white text-black text-[10px] font-bold tracking-widest rounded-full hover:bg-amber-500 transition-colors"
        >
          GET IN TOUCH
        </button>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 glass rounded-[2rem] p-8 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4">
          {navs.map((n) => (
            <button
              key={n.id}
              onClick={() => { setPage(n.id); setIsOpen(false); }}
              className={`text-2xl font-sync font-bold text-left ${
                currentPage === n.id ? 'text-amber-500' : 'text-white'
              }`}
            >
              {n.label}
            </button>
          ))}
          <button 
            onClick={() => { setPage('company'); setIsOpen(false); }}
            className="w-full py-4 bg-amber-500 text-black font-bold uppercase tracking-widest text-xs rounded-full mt-4"
          >
            CONTACT
          </button>
        </div>
      )}
    </header>
  );
};

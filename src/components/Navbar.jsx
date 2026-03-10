import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { useContactAction } from '../hooks/useContactAction';

export default function Navbar({ openModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleCall = useContactAction(openModal, 'tel:+918660627034');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg group-hover:shadow-cyan-500/40 transition-all duration-300">
              <Zap className="w-4.5 h-4.5 text-white fill-white" size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-white">AIDev</span>
              <span className="gradient-text-cyan"> Labs</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200">Services</a>
            <a href="#how-it-works" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200">Process</a>
            <a href="#about" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200">About</a>
            <a
              id="navbar-cta"
              href="#"
              onClick={handleCall}
              className="btn-secondary text-sm"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 py-4 space-y-3 bg-slate-950/95 backdrop-blur-xl">
            <a href="#services" className="block text-sm text-slate-400 hover:text-cyan-400 py-2 px-2 transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#how-it-works" className="block text-sm text-slate-400 hover:text-cyan-400 py-2 px-2 transition-colors" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#about" className="block text-sm text-slate-400 hover:text-cyan-400 py-2 px-2 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            <a
              href="#"
              onClick={(e) => { handleCall(e); setMenuOpen(false); }}
              className="btn-secondary text-sm block text-center mx-2"
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, PhoneCall, Calendar } from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'BMI Tool', href: '#bmi' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 text-slate-950 font-black" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white block leading-tight">
                Shree <span className="text-cyan-400">Health Point</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block">
                Co-Ed Gym • Sirsi
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${gymInfo.phone.replace(/\s+/g, '')}`}
              className="p-2.5 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all text-xs flex items-center gap-1.5"
              title="Call Reception"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span className="hidden xl:inline">{gymInfo.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking('Free Trial')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking('Free Trial')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-400 text-slate-950"
            >
              Trial Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('Free Trial');
                }}
                className="w-full py-2.5 rounded-xl font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors text-center"
              >
                Book Free Trial Pass
              </button>
              <a
                href={`tel:${gymInfo.phone.replace(/\s+/g, '')}`}
                className="w-full py-2 text-center text-xs text-slate-400 hover:text-cyan-400 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                Call reception: {gymInfo.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

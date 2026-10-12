import React, { useState } from 'react';
import { Dumbbell, Instagram, Facebook, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function Footer({ onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterEmail('');
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Subscribed! You will receive weekly fitness tips & workout splits.'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20">
                <Dumbbell className="w-5 h-5 text-slate-950 font-black" />
              </div>
              <span className="text-xl font-extrabold text-white">
                Shree <span className="text-cyan-400">Health Point</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Sirsi's premier co-ed health club designed to push physical potential with cutting-edge equipment, certified coaching, and motivating atmosphere.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-cyan-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-cyan-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-cyan-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services & Programs</a></li>
              <li><a href="#schedule" className="hover:text-cyan-400 transition-colors">Class Schedule</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Membership Plans</a></li>
              <li><a href="#bmi" className="hover:text-cyan-400 transition-colors">BMI & Calorie Tool</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Weight Training</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">CrossFit Conditioning</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Indoor Spin Cycling</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">1-on-1 Coaching</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Yoga & Mobility</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">HIIT Bootcamps</a></li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Weekly Fitness Digest</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get free nutritional macros, workout splits, and announcements directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors shrink-0"
              >
                Join
              </button>
            </form>
            <div className="text-[11px] text-slate-500">
              Open 6:00 AM – 10:30 PM • Sirsi, Karnataka 581401
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {gymInfo.name} (Co-Ed Gym). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

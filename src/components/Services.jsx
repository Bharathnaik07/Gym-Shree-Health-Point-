import React, { useState } from 'react';
import { Dumbbell, Flame, Activity, UserCheck, HeartPulse, Zap, Check, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/gymData';

export default function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Strength', 'Endurance', 'Cardio', 'Coaching', 'Wellness'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-cyan-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-rose-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-amber-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-purple-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-300" />;
      default: return <Dumbbell className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
            Engineered For Progression
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 mb-4">
            Our Elite Fitness <span className="text-cyan-400">Programs</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether your objective is hypertrophy, cardiovascular conditioning, or functional mobility, explore training architectures crafted by expert coaches.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border-white/5 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/40"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {getIcon(service.icon)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                      {service.intensity}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom burn rate & CTA */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Est. Burn Rate</span>
                  <span className="text-xs font-bold text-emerald-400">{service.burnRate}</span>
                </div>
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="px-3.5 py-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400 text-cyan-400 hover:text-slate-950 font-semibold text-xs transition-all flex items-center gap-1 group/btn"
                >
                  <span>Select</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

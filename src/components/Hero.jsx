import React from 'react';
import { Star, ArrowRight, ShieldCheck, Flame, Dumbbell, Award, Users } from 'lucide-react';
import { gymInfo, statsData } from '../data/gymData';

export default function Hero({ onOpenBooking }) {
  const iconMap = {
    Users: <Users className="w-5 h-5 text-cyan-400" />,
    Award: <Award className="w-5 h-5 text-emerald-400" />,
    Dumbbell: <Dumbbell className="w-5 h-5 text-amber-400" />,
    Star: <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Graphic & Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Gym Atmosphere"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105 transform animate-pulse-glow"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14] via-transparent to-[#0a0d14]/70" />
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-cyan-500/30 text-xs sm:text-sm font-medium text-slate-200 mb-8 animate-fade-in shadow-lg shadow-cyan-950/40">
          <div className="flex items-center text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="font-bold text-white">{gymInfo.rating} / 5.0</span>
          <span className="text-slate-400">({gymInfo.totalReviews} Google Reviews)</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="hidden sm:inline text-cyan-400 font-semibold">Sirsi's #1 Rated Co-Ed Fitness Destination</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-tight mb-6">
          Build Strength.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 glow-cyan">
            Stay Fit.
          </span>{' '}
          Stay Healthy.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Welcome to <span className="text-white font-semibold">{gymInfo.name}</span> in Sirsi. 
          Experience a high-octane neon ambiance, elite strength equipment, and certified coaches who elevate your fitness game daily.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            onClick={() => onOpenBooking('Free Trial')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-950 font-bold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <span>Book Free Trial</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-base glass-card hover:bg-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2"
          >
            <span>View Membership Plans</span>
          </a>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-4 sm:p-5 rounded-2xl border-white/5 hover:border-cyan-500/30 transition-all text-center group hover:bg-slate-900/60"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                {iconMap[stat.icon]}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

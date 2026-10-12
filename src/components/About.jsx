import React from 'react';
import { CheckCircle2, Shield, Sparkles, Target, Zap } from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function About({ onOpenBooking }) {
  const features = [
    {
      title: "Certified Coaching Staff",
      desc: "Our trainers hold international CSCS, ACE, and ISSA credentials, providing scientifically sound guidance."
    },
    {
      title: "Hygienic & Well-Ventilated",
      desc: "Sanitized continuously with state-of-the-art airflow, sanitization stations, and pristine locker rooms."
    },
    {
      title: "Complete Strength & Cardio Fleet",
      desc: "From heavy Olympic barbells and squat cages to touch-screen treadmills and magnetic spin bikes."
    },
    {
      title: "Inclusive Co-Ed Community",
      desc: "A positive, zero-intimidation environment empowering beginners and competitive lifters alike."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Shree Health Point</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Empowering Sirsi’s Fitness Revolution With{' '}
              <span className="text-cyan-400">Excellence</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              At <strong className="text-white font-semibold">{gymInfo.name}</strong>, we believe fitness is not a seasonal challenge—it is an enduring lifestyle. Situated conveniently in the heart of Sirsi, our co-educational fitness center is custom-engineered to foster motivation, discipline, and measurable physical transformation.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are taking your very first steps off the couch to lose body fat, or looking to break your personal deadlift record, our high-energy neon facility offers the gear, guidance, and community you need to thrive.
            </p>

            {/* Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{feat.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking('Free Trial')}
                className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                Experience Free 1-Day Trial
              </button>
              <a
                href="#services"
                className="px-6 py-3 rounded-xl glass-card text-white hover:text-cyan-400 text-sm font-medium transition-colors"
              >
                Explore Training Programs →
              </a>
            </div>
          </div>

          {/* Right Visual Image + Floater */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/50">
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Gym Floor"
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Sirsi, Karnataka</div>
                  <div className="text-lg font-bold text-white mt-0.5">Top-Grade Biomechanical Machinery</div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 glass-card border-cyan-400/30 p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-4 bg-slate-900/90 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shrink-0 font-black">
                  <Zap className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">100% Results</div>
                  <div className="text-xs text-slate-300">Customized Macro & Routine Tracking</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

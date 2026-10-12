import React from 'react';
import { Award, Calendar, CheckCircle2, Dumbbell, Instagram, MessageSquare } from 'lucide-react';
import { trainersData } from '../data/gymData';

export default function Trainers({ onOpenBooking }) {
  return (
    <section id="trainers" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
            Certified Master Coaches
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 mb-3">
            Train With Sirsi's <span className="text-cyan-400">Best</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Backed by international certifications, injury prevention science, and dedicated 1-on-1 mentorship.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              className="glass-card rounded-3xl overflow-hidden border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Trainer Image */}
                <div className="relative h-80 overflow-hidden bg-slate-900">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-cyan-400">
                    {trainer.experience}
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mt-0.5">{trainer.role}</p>
                  </div>
                </div>

                {/* Trainer Details */}
                <div className="p-6">
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {trainer.bio}
                  </p>

                  {/* Certifications */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5">Certifications</span>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-500/20 px-2 py-0.5 rounded-md"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5">Specialties</span>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-0.5 rounded-md"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(`Consultation with ${trainer.name}`)}
                  className="w-full py-3 rounded-xl bg-cyan-400/10 hover:bg-cyan-400 text-cyan-400 hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 border border-cyan-400/20"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

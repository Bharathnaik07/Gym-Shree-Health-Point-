import React, { useState } from 'react';
import { Calendar, Clock, User, Users, Flame, ChevronRight } from 'lucide-react';
import { classScheduleData } from '../data/gymData';

export default function ClassSchedule({ onOpenBooking }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'CrossFit', 'Strength', 'Endurance', 'Wellness', 'Cardio'];

  const filteredClasses = classScheduleData.filter((item) => {
    const matchesDay = item.day === selectedDay;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  return (
    <section id="schedule" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
            Weekly Lineup
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 mb-3">
            Training <span className="text-cyan-400">Schedule</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            High-voltage group circuits, functional sessions, and technique clinics led by our head coaches.
          </p>

          {/* Day Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedDay === day
                    ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 font-bold'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Classes Table / Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredClasses.length === 0 ? (
            <div className="glass-card p-12 text-center rounded-2xl text-slate-400">
              No sessions scheduled for this category on {selectedDay}. Select another day or category.
            </div>
          ) : (
            filteredClasses.map((session, idx) => (
              <div
                key={idx}
                className="glass-card p-5 sm:p-6 rounded-2xl border-white/5 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-slate-900/60"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex flex-col items-center justify-center text-center shrink-0">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-cyan-400">{session.time}</span>
                      <span className="text-slate-500 text-xs">•</span>
                      <span className="text-xs text-slate-400 font-medium">{session.duration}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 ml-2">
                        {session.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">
                      {session.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      <span>Coach: {session.coach}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Availability</span>
                    <span className="text-xs font-bold text-amber-400">{session.spots} slots open</span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(`${session.title} (${session.day} ${session.time})`)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
                  >
                    <span>Reserve</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}

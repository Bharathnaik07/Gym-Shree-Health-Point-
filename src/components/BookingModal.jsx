import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, Dumbbell } from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function BookingModal({ isOpen, onClose, initialItem, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    slot: 'Morning (6:00 AM - 9:00 AM)',
    date: new Date().toISOString().split('T')[0],
    item: initialItem || 'Free 1-Day Trial Pass',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialItem) {
      setFormData((prev) => ({ ...prev, item: initialItem }));
    }
  }, [initialItem]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: `Booking confirmed for ${formData.item}! Check your phone for details.`
        });
      }
    }, 600);
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border-cyan-500/30 shadow-2xl bg-slate-950 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Booking Confirmed!</h3>
            <p className="text-sm text-slate-300 mt-2 max-w-sm mx-auto">
              Your request for <strong className="text-cyan-400 font-semibold">{formData.item}</strong> has been registered.
            </p>
            <div className="glass-card p-4 rounded-2xl border-white/5 my-6 text-left text-xs space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">Name:</span>
                <span className="font-semibold text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time Window:</span>
                <span className="font-semibold text-white">{formData.slot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Gym Location:</span>
                <span className="font-semibold text-white">{gymInfo.address}</span>
              </div>
            </div>
            <button
              onClick={handleModalClose}
              className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/20 text-cyan-400 flex items-center justify-center">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Quick Registration</span>
            </div>
            
            <h3 className="text-2xl font-black text-white tracking-tight mb-1">
              Book Your Spot
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Complete your reservation for <strong className="text-white">{formData.item}</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Preferred Time Slot</label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 h-[42px]"
                  >
                    <option value="Morning (6:00 AM - 9:00 AM)">Morning (6 AM - 9 AM)</option>
                    <option value="Mid-Day (10:00 AM - 1:00 PM)">Mid-Day (10 AM - 1 PM)</option>
                    <option value="Evening (4:30 PM - 7:30 PM)">Evening (4:30 PM - 7:30 PM)</option>
                    <option value="Night (7:30 PM - 10:30 PM)">Night (7:30 PM - 10:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Program / Package</label>
                <input
                  type="text"
                  value={formData.item}
                  onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-cyan-300 font-medium text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Special Goals or Notes (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Any injuries, specific fitness target, or preferred coach..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50 mt-2"
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

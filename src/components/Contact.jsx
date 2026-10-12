import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, MessageCircle, PhoneCall, CheckCircle } from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Weight Loss',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', goal: 'Weight Loss', message: '' });
      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: 'Message sent! Our reception team will reach out to you shortly.'
        });
      }
    }, 700);
  };

  const whatsappUrl = `https://wa.me/${gymInfo.whatsapp}?text=Hi%20Shree%20Health%20Point%20Team!%20I%20am%20interested%20in%20joining%20the%20gym.`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
            Reach Out
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 mb-3">
            Visit & <span className="text-cyan-400">Connect With Us</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Located conveniently in Sirsi. Drop by during operating hours or send us a quick inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="glass-card p-6 rounded-2xl border-white/5 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Location Address</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{gymInfo.name} (Co-Ed Gym)</p>
                  <p className="text-xs text-slate-400">{gymInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Operating Hours</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{gymInfo.timings}</p>
                  <p className="text-xs text-emerald-400 font-semibold">Open 7 Days A Week</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Phone</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{gymInfo.phone}</p>
                  <p className="text-xs text-slate-400">Reception Desk</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${gymInfo.phone.replace(/\s+/g, '')}`}
                className="py-3 px-4 rounded-xl glass-card text-white hover:text-cyan-400 hover:border-cyan-400/40 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Call Directly</span>
              </a>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border-cyan-500/20 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-1">Send an Instant Message</h3>
            <p className="text-xs text-slate-400 mb-6">Have questions regarding pricing, personal trainers, or membership options?</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Hegde"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Primary Fitness Objective</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                >
                  <option value="Weight Loss">Weight & Fat Loss</option>
                  <option value="Muscle Building">Muscle Building & Hypertrophy</option>
                  <option value="Strength & Powerlifting">Powerlifting & Pure Strength</option>
                  <option value="CrossFit / HIIT">CrossFit & Functional Conditioning</option>
                  <option value="General Health">General Health & Mobility</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Message or Questions</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Tell us what you are looking for, your previous training experience, or any questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Google Map Embed */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 relative">
          <iframe
            src={gymInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shree Health Point Sirsi Location Map"
            className="w-full h-full grayscale contrast-125 invert-[0.9]"
          />
        </div>

      </div>
    </section>
  );
}

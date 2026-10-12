import React, { useState } from 'react';
import { Check, X, Sparkles, Shield, Zap, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/gymData';

export default function Pricing({ onOpenBooking }) {
  const [billingCycle, setBillingCycle] = useState('quarterly'); // 'monthly', 'quarterly', 'yearly'

  return (
    <section id="pricing" className="py-24 relative bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
            Transparent Memberships
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 mb-3">
            Choose Your <span className="text-cyan-400">Fitness Plan</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Simple, honest pricing with zero hidden registration fees. Upgrade or pause anytime.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-white/10 mt-8 shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Flex
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Quarterly</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-md font-extrabold">
                Popular
              </span>
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-md font-extrabold">
                Save 33%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            let price = plan.priceMonthly;
            let period = '/ month';
            if (billingCycle === 'quarterly') {
              price = plan.priceQuarterly;
              period = '/ 3 months';
            } else if (billingCycle === 'yearly') {
              price = plan.priceYearly;
              period = '/ year';
            }

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'glass-card border-2 border-cyan-400 shadow-2xl shadow-cyan-950/60 transform md:-translate-y-2'
                    : 'glass-card border-white/5 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-cyan-500/30 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-black text-white">{plan.name}</h3>
                    {plan.saveAmount && (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                        {plan.saveAmount}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm mb-6 min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        ₹{price.toLocaleString()}
                      </span>
                      <span className="text-slate-400 text-xs sm:text-sm font-medium">{period}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Included:</div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 pt-3">Not included:</div>
                        {plan.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-500">
                            <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {/* Select CTA */}
                <button
                  onClick={() => onOpenBooking(`${plan.name} (${billingCycle.toUpperCase()})`)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 hover:bg-cyan-400 text-white hover:text-slate-950 border border-white/10'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="text-center mt-12 text-xs text-slate-500">
          * All memberships include basic orientation, locker facility, and sanitary shower privileges. Student discounts available on producing valid ID at reception.
        </div>

      </div>
    </section>
  );
}

import React, { useState, useMemo } from 'react';
import { Calculator, Scale, Activity, Droplet, Flame, RotateCcw, ArrowRight } from 'lucide-react';

export default function BMICalculator({ onOpenBooking }) {
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' (kg, cm) or 'imperial' (lbs, inches)
  const [weight, setWeight] = useState(70); // kg or lbs
  const [height, setHeight] = useState(175); // cm or inches
  const [activityLevel, setActivityLevel] = useState('moderate'); // 'light', 'moderate', 'intense'
  const [fitnessGoal, setFitnessGoal] = useState('maintain'); // 'loss', 'maintain', 'muscle'

  // Convert to metric internally for math
  const metricValues = useMemo(() => {
    if (unitSystem === 'metric') {
      return { weightKg: Number(weight), heightM: Number(height) / 100 };
    } else {
      // lbs to kg, inches to m
      return {
        weightKg: Number(weight) * 0.453592,
        heightM: (Number(height) * 2.54) / 100
      };
    }
  }, [unitSystem, weight, height]);

  // BMI result
  const bmiData = useMemo(() => {
    const { weightKg, heightM } = metricValues;
    if (!heightM || heightM <= 0 || !weightKg || weightKg <= 0) {
      return { bmi: 0, category: 'Enter values', color: 'text-slate-400', progress: 0 };
    }

    const calculatedBmi = Number((weightKg / (heightM * heightM)).toFixed(1));
    let category = '';
    let color = '';
    let gaugePosition = 0; // percentage 0 - 100 for gauge

    if (calculatedBmi < 18.5) {
      category = 'Underweight';
      color = 'text-cyan-400';
      gaugePosition = Math.min(Math.max(((calculatedBmi - 12) / (18.5 - 12)) * 25, 5), 25);
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      category = 'Healthy / Normal';
      color = 'text-emerald-400';
      gaugePosition = 25 + ((calculatedBmi - 18.5) / (25 - 18.5)) * 25;
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      category = 'Overweight';
      color = 'text-amber-400';
      gaugePosition = 50 + ((calculatedBmi - 25) / (30 - 25)) * 25;
    } else {
      category = 'Obese Range';
      color = 'text-rose-400';
      gaugePosition = Math.min(75 + ((calculatedBmi - 30) / (40 - 30)) * 25, 95);
    }

    // Healthy weight range for height
    const minHealthyKg = (18.5 * heightM * heightM).toFixed(1);
    const maxHealthyKg = (24.9 * heightM * heightM).toFixed(1);

    // Rough BMR / TDEE maintenance
    const bmr = 10 * weightKg + 6.25 * (heightM * 100) - 5 * 25 + 5;
    const activityMultipliers = { light: 1.375, moderate: 1.55, intense: 1.725 };
    const tdee = Math.round(bmr * (activityMultipliers[activityLevel] || 1.55));

    let recommendedCalories = tdee;
    if (fitnessGoal === 'loss') recommendedCalories = tdee - 450;
    if (fitnessGoal === 'muscle') recommendedCalories = tdee + 350;

    const recommendedWaterLiters = (weightKg * 0.035).toFixed(1);

    return {
      bmi: calculatedBmi,
      category,
      color,
      gaugePosition,
      minHealthyKg,
      maxHealthyKg,
      recommendedCalories,
      recommendedWaterLiters
    };
  }, [metricValues, activityLevel, fitnessGoal]);

  const handleUnitChange = (newUnit) => {
    if (newUnit === unitSystem) return;
    if (newUnit === 'imperial') {
      // metric to imperial
      setWeight(Math.round(weight * 2.20462));
      setHeight(Math.round(height / 2.54));
    } else {
      // imperial to metric
      setWeight(Math.round(weight * 0.453592));
      setHeight(Math.round(height * 2.54));
    }
    setUnitSystem(newUnit);
  };

  const handleReset = () => {
    if (unitSystem === 'metric') {
      setWeight(70);
      setHeight(175);
    } else {
      setWeight(154);
      setHeight(69);
    }
    setFitnessGoal('maintain');
  };

  return (
    <section id="bmi" className="py-24 relative bg-slate-950/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Fitness Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Smart BMI & <span className="text-cyan-400">Calorie Calculator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Calculate your Body Mass Index, target weight window, daily caloric requirements, and optimal hydration needs in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Card */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border-white/5 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <span className="text-sm font-bold text-slate-300 uppercase tracking-wider">Select Unit System</span>
              <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-white/10">
                <button
                  onClick={() => handleUnitChange('metric')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    unitSystem === 'metric' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Metric (kg / cm)
                </button>
                <button
                  onClick={() => handleUnitChange('imperial')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    unitSystem === 'imperial' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Imperial (lbs / in)
                </button>
              </div>
            </div>

            {/* Weight Slider / Input */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="bmi-weight-slider" className="font-semibold text-slate-300 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-cyan-400" />
                  <span>Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})</span>
                </label>
                <input
                  type="number"
                  aria-label={`Weight in ${unitSystem === 'metric' ? 'kg' : 'lbs'}`}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-20 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-right font-bold text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <input
                id="bmi-weight-slider"
                type="range"
                min={unitSystem === 'metric' ? 30 : 66}
                max={unitSystem === 'metric' ? 160 : 350}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Height Slider / Input */}
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="bmi-height-slider" className="font-semibold text-slate-300 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Height ({unitSystem === 'metric' ? 'cm' : 'inches'})</span>
                </label>
                <input
                  type="number"
                  aria-label={`Height in ${unitSystem === 'metric' ? 'cm' : 'inches'}`}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-20 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-right font-bold text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <input
                id="bmi-height-slider"
                type="range"
                min={unitSystem === 'metric' ? 120 : 48}
                max={unitSystem === 'metric' ? 220 : 86}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Goal Selector */}
            <div className="mb-6">
              <label className="text-xs uppercase font-bold text-slate-400 block mb-2 tracking-wider">Your Primary Goal</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'loss', label: 'Fat Loss', sub: '-450 kcal' },
                  { id: 'maintain', label: 'Maintain', sub: 'TDEE' },
                  { id: 'muscle', label: 'Build Muscle', sub: '+350 kcal' }
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setFitnessGoal(g.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      fitnessGoal === g.id
                        ? 'border-cyan-400 bg-cyan-400/10 text-white'
                        : 'border-white/5 bg-slate-900/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold">{g.label}</div>
                    <div className="text-[10px] text-cyan-400 font-medium mt-0.5">{g.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <div className="flex justify-end">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>
          </div>

          {/* Results Display Card */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border-cyan-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Primary BMI Score */}
            <div className="text-center pb-6 border-b border-white/10">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Calculated Body Mass Index</span>
              <div className="text-5xl sm:text-6xl font-black text-white mt-2 tracking-tight">
                {bmiData.bmi > 0 ? bmiData.bmi : '--'}
              </div>
              <div className={`text-lg font-bold mt-1 ${bmiData.color}`}>
                {bmiData.category}
              </div>
            </div>

            {/* Visual Gauge Bar */}
            <div className="py-6 border-b border-white/10">
              <div className="flex justify-between text-[11px] text-slate-400 mb-2 font-medium">
                <span>Underweight (&lt;18.5)</span>
                <span>Normal (18.5-24.9)</span>
                <span>Overweight (25-29.9)</span>
                <span>Obese (30+)</span>
              </div>
              <div className="relative h-3 w-full rounded-full bg-slate-800 overflow-hidden flex">
                <div className="w-1/4 bg-cyan-400/70" />
                <div className="w-1/4 bg-emerald-400/70" />
                <div className="w-1/4 bg-amber-400/70" />
                <div className="w-1/4 bg-rose-400/70" />
              </div>
              {/* Dynamic Needle */}
              <div className="relative w-full h-4 mt-1">
                <div
                  className="absolute top-0 transform -translate-x-1/2 transition-all duration-300"
                  style={{ left: `${bmiData.gaugePosition}%` }}
                >
                  <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-cyan-300 mx-auto" />
                  <span className="block text-[10px] font-bold text-cyan-300 text-center whitespace-nowrap">You</span>
                </div>
              </div>
            </div>

            {/* Smart Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-4 py-6 border-b border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Target Calories</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">
                  {bmiData.recommendedCalories}{' '}
                  <span className="text-xs font-normal text-slate-400">kcal/day</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Based on {fitnessGoal} objective</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                  <Droplet className="w-4 h-4 text-cyan-400" />
                  <span>Water Intake</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">
                  {bmiData.recommendedWaterLiters}{' '}
                  <span className="text-xs font-normal text-slate-400">Liters/day</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Hydration baseline</div>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Ideal Weight Range: <strong className="text-white font-semibold">{bmiData.minHealthyKg} kg - {bmiData.maxHealthyKg} kg</strong>
              </div>
              <button
                onClick={() => onOpenBooking(`Consultation (BMI: ${bmiData.bmi})`)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Get Coach Advice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

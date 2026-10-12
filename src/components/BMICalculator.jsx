import React, { useState, useMemo } from 'react';
import { Calculator, Scale, Activity, Droplet, Flame, RotateCcw, ArrowRight, Bookmark, History } from 'lucide-react';
import {
  calculateBMI,
  getBMICategory,
  getHealthyWeightRange,
  calculateTargetCalories,
  calculateDailyWaterLiters
} from '../utils/healthCalculators';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function BMICalculator({ onOpenBooking }) {
  // Persist unit preference and calculation history across reloads using custom hook
  const [unitSystem, setUnitSystem] = useLocalStorage('shp_bmi_unit', 'metric');
  const [savedHistory, setSavedHistory] = useLocalStorage('shp_bmi_history', null);

  const [weight, setWeight] = useState(70); // kg or lbs
  const [height, setHeight] = useState(175); // cm or inches
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [fitnessGoal, setFitnessGoal] = useState('maintain');
  const [isSaved, setIsSaved] = useState(false);

  // Derive metric values for calculations
  const metricValues = useMemo(() => {
    if (unitSystem === 'metric') {
      return { weightKg: Number(weight), heightCm: Number(height) };
    }
    // Imperial conversion: lbs to kg, inches to cm
    return {
      weightKg: Number((Number(weight) * 0.453592).toFixed(1)),
      heightCm: Number((Number(height) * 2.54).toFixed(1))
    };
  }, [unitSystem, weight, height]);

  // Derived health statistics
  const healthStats = useMemo(() => {
    const { weightKg, heightCm } = metricValues;
    const bmi = calculateBMI(weightKg, heightCm);
    const categoryInfo = getBMICategory(bmi);
    const weightRange = getHealthyWeightRange(heightCm);
    const calories = calculateTargetCalories(weightKg, heightCm, activityLevel, fitnessGoal);
    const waterLiters = calculateDailyWaterLiters(weightKg);

    return {
      bmi,
      ...categoryInfo,
      weightRange,
      recommendedCalories: calories,
      recommendedWaterLiters: waterLiters
    };
  }, [metricValues, activityLevel, fitnessGoal]);

  const handleUnitChange = (newUnit) => {
    if (newUnit === unitSystem) return;
    if (newUnit === 'imperial') {
      setWeight(Math.round(weight * 2.20462));
      setHeight(Math.round(height / 2.54));
    } else {
      setWeight(Math.round(weight * 0.453592));
      setHeight(Math.round(height * 2.54));
    }
    setUnitSystem(newUnit);
  };

  const handleSaveResult = () => {
    setSavedHistory({
      bmi: healthStats.bmi,
      category: healthStats.category,
      weight: `${weight} ${unitSystem === 'metric' ? 'kg' : 'lbs'}`,
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
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
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Health Tracker</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Smart BMI & <span className="text-cyan-400">Calorie Calculator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Input your metrics to check your Body Mass Index, recommended weight window, and custom calorie blueprint.
          </p>

          {/* Persisted History Pill */}
          {savedHistory && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/20 text-xs text-slate-300 mt-4 animate-in fade-in">
              <History className="w-3.5 h-3.5 text-cyan-400" />
              <span>Last saved on {savedHistory.date}:</span>
              <strong className="text-cyan-300">{savedHistory.bmi} ({savedHistory.category})</strong>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Card */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border-white/5 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unit Measurement</span>
              <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-white/10">
                <button
                  type="button"
                  onClick={() => handleUnitChange('metric')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    unitSystem === 'metric' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Metric (kg / cm)
                </button>
                <button
                  type="button"
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
                <label htmlFor="bmi-weight-range" className="font-semibold text-slate-300 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-cyan-400" />
                  <span>Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})</span>
                </label>
                <input
                  type="number"
                  aria-label="Weight input"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value) || '')}
                  className="w-20 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-right font-bold text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <input
                id="bmi-weight-range"
                type="range"
                min={unitSystem === 'metric' ? 35 : 75}
                max={unitSystem === 'metric' ? 160 : 350}
                value={weight || 70}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Height Slider / Input */}
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="bmi-height-range" className="font-semibold text-slate-300 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Height ({unitSystem === 'metric' ? 'cm' : 'inches'})</span>
                </label>
                <input
                  type="number"
                  aria-label="Height input"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value) || '')}
                  className="w-20 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-right font-bold text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <input
                id="bmi-height-range"
                type="range"
                min={unitSystem === 'metric' ? 120 : 48}
                max={unitSystem === 'metric' ? 220 : 86}
                value={height || 175}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Goal Selector */}
            <div className="mb-6">
              <label className="text-xs uppercase font-bold text-slate-400 block mb-2 tracking-wider">Target Objective</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'loss', label: 'Fat Loss', sub: '-450 kcal' },
                  { id: 'maintain', label: 'Maintain', sub: 'TDEE' },
                  { id: 'muscle', label: 'Build Muscle', sub: '+350 kcal' }
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
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

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleSaveResult}
                className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{isSaved ? 'Saved to Browser!' : 'Save Result'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Results Display Card */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border-cyan-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Primary BMI Score */}
            <div className="text-center pb-6 border-b border-white/10">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Your Calculated BMI</span>
              <div className="text-5xl sm:text-6xl font-black text-white mt-2 tracking-tight">
                {healthStats.bmi > 0 ? healthStats.bmi : '--'}
              </div>
              <div className={`text-lg font-bold mt-1 ${healthStats.color}`}>
                {healthStats.category}
              </div>
            </div>

            {/* Visual Gauge Bar */}
            <div className="py-6 border-b border-white/10">
              <div className="flex justify-between text-[11px] text-slate-400 mb-2 font-medium">
                <span>&lt;18.5 Under</span>
                <span>18.5-24.9 Normal</span>
                <span>25-29.9 Over</span>
                <span>30+ Obese</span>
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
                  style={{ left: `${healthStats.gaugePosition}%` }}
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
                  <span>Daily Calories</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">
                  {healthStats.recommendedCalories}{' '}
                  <span className="text-xs font-normal text-slate-400">kcal</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Based on {fitnessGoal} goal</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                  <Droplet className="w-4 h-4 text-cyan-400" />
                  <span>Hydration</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">
                  {healthStats.recommendedWaterLiters}{' '}
                  <span className="text-xs font-normal text-slate-400">Liters/day</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Baseline water target</div>
              </div>
            </div>

            {/* Bottom Advice */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Healthy weight for your height:{' '}
                <strong className="text-white font-semibold">
                  {healthStats.weightRange.minKg} - {healthStats.weightRange.maxKg} kg
                </strong>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking(`Consultation (BMI: ${healthStats.bmi})`)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Consult Coach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

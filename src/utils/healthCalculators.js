/**
 * Health & Fitness Calculation Utilities
 * References standard WHO BMI classifications and the Mifflin-St Jeor BMR equation.
 */

/**
 * Calculates Body Mass Index (BMI)
 * @param {number} weightKg - Body weight in kilograms
 * @param {number} heightCm - Height in centimeters
 * @returns {number} BMI rounded to 1 decimal place
 */
export function calculateBMI(weightKg, heightCm) {
  if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) return 0;
  const heightM = heightCm / 100;
  return Number((weightKg / (heightM * heightM)).toFixed(1));
}

/**
 * Returns WHO BMI classification, styling colors, and gauge position percentage
 * @param {number} bmi
 */
export function getBMICategory(bmi) {
  if (!bmi || bmi <= 0) {
    return {
      category: 'Enter your details',
      color: 'text-slate-400',
      badgeBg: 'bg-slate-800',
      gaugePosition: 0
    };
  }

  if (bmi < 18.5) {
    // Underweight (12 to 18.5 maps to 5% - 25% on gauge)
    const gaugePosition = Math.min(Math.max(((bmi - 12) / (18.5 - 12)) * 25, 5), 25);
    return {
      category: 'Underweight',
      color: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/20',
      gaugePosition
    };
  } else if (bmi >= 18.5 && bmi < 25) {
    // Normal / Healthy (18.5 to 25 maps to 25% - 50% on gauge)
    const gaugePosition = 25 + ((bmi - 18.5) / (25 - 18.5)) * 25;
    return {
      category: 'Healthy Weight',
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/20',
      gaugePosition
    };
  } else if (bmi >= 25 && bmi < 30) {
    // Overweight (25 to 30 maps to 50% - 75% on gauge)
    const gaugePosition = 50 + ((bmi - 25) / (30 - 25)) * 25;
    return {
      category: 'Overweight',
      color: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/20',
      gaugePosition
    };
  } else {
    // Obese (30 to 40+ maps to 75% - 95% on gauge)
    const gaugePosition = Math.min(75 + ((bmi - 30) / (40 - 30)) * 25, 95);
    return {
      category: 'Obese Range',
      color: 'text-rose-400',
      badgeBg: 'bg-rose-500/10 border-rose-500/20',
      gaugePosition
    };
  }
}

/**
 * Returns healthy weight range bounds (kg) for a given height in cm (BMI 18.5 to 24.9)
 */
export function getHealthyWeightRange(heightCm) {
  if (!heightCm || heightCm <= 0) return { minKg: 0, maxKg: 0 };
  const heightM = heightCm / 100;
  const minKg = Number((18.5 * heightM * heightM).toFixed(1));
  const maxKg = Number((24.9 * heightM * heightM).toFixed(1));
  return { minKg, maxKg };
}

/**
 * Estimates Total Daily Energy Expenditure (TDEE) using Mifflin-St Jeor formula
 * @param {number} weightKg
 * @param {number} heightCm
 * @param {string} activityLevel - 'light' | 'moderate' | 'intense'
 * @param {string} goal - 'loss' | 'maintain' | 'muscle'
 * @returns {number} Target daily calories in kcal
 */
export function calculateTargetCalories(weightKg, heightCm, activityLevel = 'moderate', goal = 'maintain') {
  if (!weightKg || !heightCm) return 2000;
  
  // Basal Metabolic Rate (BMR) - baseline average
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * 25 + 5;
  
  const multipliers = {
    light: 1.375,
    moderate: 1.55,
    intense: 1.725
  };
  const tdee = Math.round(bmr * (multipliers[activityLevel] || 1.55));

  if (goal === 'loss') return tdee - 450;
  if (goal === 'muscle') return tdee + 350;
  return tdee;
}

/**
 * Calculates baseline hydration requirements (roughly 35ml per kg of bodyweight)
 */
export function calculateDailyWaterLiters(weightKg) {
  if (!weightKg || weightKg <= 0) return 2.5;
  return Number((weightKg * 0.035).toFixed(1));
}

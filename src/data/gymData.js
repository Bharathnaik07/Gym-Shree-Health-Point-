export const gymInfo = {
  name: "Shree Health Point",
  subtitle: "Co-Ed Premium Fitness Hub",
  tagline: "Build Strength. Stay Fit. Stay Healthy.",
  address: "Sirsi, Karnataka 581401",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "contact@shreehealthpoint.com",
  timings: "Monday - Sunday: 6:00 AM – 10:30 PM",
  rating: 4.8,
  totalReviews: 66,
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61821.57147775586!2d74.80556214041793!3d14.611130454316973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cc2743952ba5%3A0xc39281a6fa3ea6ab!2sSirsi%2C%20Karnataka%20581401!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const statsData = [
  { value: "500+", label: "Active Members", icon: "Users" },
  { value: "15+", label: "Certified Coaches", icon: "Award" },
  { value: "50+", label: "Modern Equipment", icon: "Dumbbell" },
  { value: "4.8 ★", label: "Google Rating", icon: "Star" }
];

export const servicesData = [
  {
    id: "strength",
    title: "Weight Training",
    category: "Strength",
    icon: "Dumbbell",
    description: "Build raw muscle mass, optimize bone density, and sculpt your physique with our Olympic-grade barbells and isolation machines.",
    highlights: ["Olympic Barbells & Bumper Plates", "Isolation Machines for Target Muscle Groups", "Dedicated Squat & Deadlift Platforms"],
    intensity: "High",
    burnRate: "450 - 650 kcal/hr"
  },
  {
    id: "crossfit",
    title: "CrossFit & Conditioning",
    category: "Endurance",
    icon: "Flame",
    description: "High-intensity functional movements designed to test your cardiovascular thresholds, agility, and explosive endurance.",
    highlights: ["Kettlebell Circuits", "Battle Ropes & Plyo Boxes", "Sprint Intervals & Core Conditioning"],
    intensity: "Extreme",
    burnRate: "600 - 850 kcal/hr"
  },
  {
    id: "cycling",
    title: "Spin & Cardio Studio",
    category: "Cardio",
    icon: "Activity",
    description: "High-energy indoor cycling sessions with heart-rate monitoring and rhythm-based resistance workouts.",
    highlights: ["Magnetic Flywheel Spin Bikes", "Real-time Cadence Tracking", "Stamina & Calorie Torch Circuits"],
    intensity: "Moderate - High",
    burnRate: "500 - 750 kcal/hr"
  },
  {
    id: "pt",
    title: "1-on-1 Personal Coaching",
    category: "Coaching",
    icon: "UserCheck",
    description: "Tailored workout routines, progressive overload tracking, biometric assessments, and personalized nutritional blueprints.",
    highlights: ["Body Composition Analysis", "Custom Macro & Nutrition Guidance", "Posture Correction & Mobility"],
    intensity: "Customized",
    burnRate: "Goal Dependent"
  },
  {
    id: "yoga",
    title: "Yoga & Flexibility",
    category: "Wellness",
    icon: "HeartPulse",
    description: "Restore muscle length, enhance spinal mobility, lower cortisol levels, and optimize post-workout recovery.",
    highlights: ["Vinyasa Flow & Dynamic Stretching", "Breathwork & Mindful Reset", "Injury Prevention Training"],
    intensity: "Low - Moderate",
    burnRate: "200 - 350 kcal/hr"
  },
  {
    id: "fatloss",
    title: "HIIT Fat Loss Bootcamps",
    category: "Weight Loss",
    icon: "Zap",
    description: "Fast-paced metabolic conditioning circuits structured to trigger maximal post-exercise oxygen consumption (EPOC).",
    highlights: ["Tabata & AMRAP Protocols", "Full-body Functional Drills", "Progress Tracking & Body Fat Checks"],
    intensity: "High",
    burnRate: "550 - 800 kcal/hr"
  }
];

export const pricingPlans = [
  {
    id: "monthly",
    name: "Monthly Flex",
    priceMonthly: 1500,
    priceQuarterly: 4000,
    priceYearly: 12000,
    description: "Perfect for beginners exploring their fitness journey with no long-term commitment.",
    popular: false,
    badge: "Flexible",
    features: [
      "Full access to gym equipment & free weights",
      "Locker room & shower access",
      "Initial fitness assessment & induction",
      "General floor trainer guidance",
      "Access during all operating hours (6 AM - 10:30 PM)"
    ],
    notIncluded: [
      "Custom Diet & Nutrition Consultation",
      "1-on-1 Personal Training sessions",
      "Body Composition Scans (monthly)"
    ]
  },
  {
    id: "quarterly",
    name: "Pro Quarterly",
    priceMonthly: 1400,
    priceQuarterly: 4000,
    priceYearly: 11000,
    saveAmount: "Save ₹500",
    description: "Our most popular package for serious lifters aiming for consistent transformations.",
    popular: true,
    badge: "Most Popular",
    features: [
      "Full access to all gym equipment & cardio zone",
      "Personalized workout split design",
      "Certified Diet & Nutrition blueprint",
      "Locker & dedicated changing facilities",
      "Bi-weekly progress check-ins",
      "Discounted guest passes (2 per quarter)"
    ],
    notIncluded: [
      "1-on-1 Personal Training sessions included free"
    ]
  },
  {
    id: "yearly",
    name: "Elite Annual Pass",
    priceMonthly: 1000,
    priceQuarterly: 3200,
    priceYearly: 12000,
    saveAmount: "Save ₹6,000",
    description: "The ultimate value for dedicated athletes seeking comprehensive lifestyle coaching.",
    popular: false,
    badge: "Best Value",
    features: [
      "All Pro benefits + 365 days unlimited access",
      "1 Week complimentary 1-on-1 Personal Training",
      "Personalized sports nutrition & macro tracking",
      "Monthly 3D Body Composition Analysis",
      "Free Gym Shree merchandise kit (T-shirt & Shaker)",
      "Freeze membership for up to 30 days (travel/exams)"
    ],
    notIncluded: []
  }
];

export const trainersData = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "Head Coach & CrossFit Specialist",
    experience: "8+ Years Experience",
    certifications: ["CSCS Certified", "CrossFit L2 Coach", "CPR/AED"],
    specialties: ["CrossFit", "Olympic Lifting", "Functional Conditioning"],
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    bio: "Passionate about pushing athletes past their mental and physical barriers through disciplined athletic training."
  },
  {
    id: 2,
    name: "Sunil Sharma",
    role: "Senior Coach & Sports Nutritionist",
    experience: "6+ Years Experience",
    certifications: ["ACE Personal Trainer", "ISSA Sports Nutritionist"],
    specialties: ["Hypertrophy", "Body Recomposition", "Diet Planning"],
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    bio: "Believes in sustainable nutrition and biomechanically sound lifting principles to deliver lifelong health."
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Powerlifting & Strength Specialist",
    experience: "7+ Years Experience",
    certifications: ["IPF Strength Coach", "Mobility & Rehab Specialist"],
    specialties: ["Powerlifting", "Deadlift/Squat Mechanics", "Injury Prevention"],
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=800&auto=format&fit=crop",
    bio: "Specializes in helping beginners and competitive powerlifters build immense raw strength safely."
  }
];

export const classScheduleData = [
  { day: "Monday", time: "06:30 AM", title: "Morning CrossFit Blitz", coach: "Ravi Kumar", category: "CrossFit", duration: "45 min", spots: 4 },
  { day: "Monday", time: "06:00 PM", title: "Hypertrophy Chest & Triceps", coach: "Sunil Sharma", category: "Strength", duration: "60 min", spots: 6 },
  { day: "Tuesday", time: "07:00 AM", title: "HIIT Endurance Circuit", coach: "Ravi Kumar", category: "Endurance", duration: "45 min", spots: 2 },
  { day: "Tuesday", time: "06:30 PM", title: "Powerlifting Deadlift Clinic", coach: "Vikram Singh", category: "Strength", duration: "60 min", spots: 3 },
  { day: "Wednesday", time: "06:30 AM", title: "Spine & Core Mobility Yoga", coach: "Sunil Sharma", category: "Wellness", duration: "50 min", spots: 8 },
  { day: "Wednesday", time: "07:00 PM", title: "Cardio Cycling Rhythm", coach: "Ravi Kumar", category: "Cardio", duration: "45 min", spots: 5 },
  { day: "Thursday", time: "06:30 AM", title: "Olympic Clean & Jerk", coach: "Vikram Singh", category: "Strength", duration: "60 min", spots: 4 },
  { day: "Thursday", time: "06:00 PM", title: "Metabolic Calorie Meltdown", coach: "Sunil Sharma", category: "CrossFit", duration: "45 min", spots: 7 },
  { day: "Friday", time: "07:00 AM", title: "Leg Day Functional Blast", coach: "Vikram Singh", category: "Strength", duration: "60 min", spots: 5 },
  { day: "Friday", time: "06:30 PM", title: "Full Body Functional Circuit", coach: "Ravi Kumar", category: "CrossFit", duration: "50 min", spots: 3 },
  { day: "Saturday", time: "08:00 AM", title: "Weekend Warrior Bootcamp", coach: "All Coaches", category: "CrossFit", duration: "75 min", spots: 1 }
];

export const galleryData = [
  {
    id: 1,
    title: "Heavy Dumbbells & Free Weight Zone",
    category: "Weights",
    image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1470&auto=format&fit=crop",
    caption: "Urethane dumbbells from 2.5kg to 50kg with commercial incline benches."
  },
  {
    id: 2,
    title: "Cardio & Stamina Lineup",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop",
    caption: "Interactive touch-screen treadmills, cross-trainers, and air bikes."
  },
  {
    id: 3,
    title: "Functional Training & CrossFit Turf",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1470&auto=format&fit=crop",
    caption: "Prowler sleds, wall ball targets, battle ropes, and pull-up rig."
  },
  {
    id: 4,
    title: "Dedicated Squat & Power Racks",
    category: "Weights",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    caption: "Heavy duty power racks with safety spotter arms and chalk stations."
  },
  {
    id: 5,
    title: "Coached Workout Session",
    category: "Community",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
    caption: "Our community of motivated athletes supporting each other's fitness journey."
  },
  {
    id: 6,
    title: "Premium Gym Floor Atmosphere",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=1470&auto=format&fit=crop",
    caption: "Vibrant neon ambiance, climate-controlled airflow, and high-energy acoustics."
  }
];

export const initialReviews = [
  {
    id: 1,
    name: "Rahul Deshmukh",
    role: "Member for 1.5 Years",
    rating: 5,
    date: "2 weeks ago",
    comment: "Hands down the best gym in Sirsi! The neon aesthetic and top-of-the-line equipment keep you locked in. Ravi sir helped me lose 14kg in 5 months safely.",
    tag: "Weight Loss"
  },
  {
    id: 2,
    name: "Sneha Venkat",
    role: "Member for 8 Months",
    rating: 5,
    date: "1 month ago",
    comment: "As a woman, finding a welcoming, respectful, and hygienic gym was my priority. Shree Health Point excels in all of these. The trainers are always attentive without being intrusive.",
    tag: "Cleanliness & Safety"
  },
  {
    id: 3,
    name: "Kiran Kulakarni",
    role: "Member for 2 Years",
    rating: 5,
    date: "3 months ago",
    comment: "The powerlifting equipment is superb. Solid barbells that don't bend under heavy load, ample plates, and solid chalk etiquette. Membership plans are exceptionally fair.",
    tag: "Strength Training"
  },
  {
    id: 4,
    name: "Akash Patil",
    role: "Member for 6 Months",
    rating: 5,
    date: "Just recently",
    comment: "Great atmosphere, spacious changing rooms, and very disciplined management. The BMI tracking and workout guidance given during onboarding made a world of difference.",
    tag: "General Fitness"
  }
];

export const faqsData = [
  {
    id: 1,
    category: "General",
    question: "What are your operating hours?",
    answer: "We are open 7 days a week from 6:00 AM to 10:30 PM. Members can train anytime during these hours, whether early morning before work or late evening."
  },
  {
    id: 2,
    category: "Training",
    question: "Is personal training included in regular membership?",
    answer: "All members receive complimentary onboarding posture assessment, machine usage walkthrough, and general guidance from our floor trainers. Dedicated 1-on-1 private personal training packages are available as add-ons, or included in our Elite Annual Pass."
  },
  {
    id: 3,
    category: "Facilities",
    question: "Are locker rooms and parking available?",
    answer: "Yes! We provide safe individual lockers, clean changing spaces, hygienic restrooms, water stations, and dedicated parking spots for both 2-wheelers and 4-wheelers."
  },
  {
    id: 4,
    category: "Trial",
    question: "Can I try out the gym before committing to a membership?",
    answer: "Absolutely! We provide a free 1-Day Trial Pass so you can experience the equipment, meet our trainers, and soak in the atmosphere before choosing a plan."
  },
  {
    id: 5,
    category: "Payment",
    question: "Can I freeze or pause my membership if I travel?",
    answer: "Yes, members on our Quarterly and Annual passes can freeze their membership for up to 15 to 30 days respectively with prior notice at the reception desk."
  }
];

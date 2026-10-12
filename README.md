# 🏋️‍♂️ Shree Health Point — React Fitness App

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)

A modern, responsive single-page web application built for **Shree Health Point (Co-ed Gym)** located in **Sirsi, Karnataka**. 

---

## 💡 About This Project

I built this project to solve a real need: our local gym in Sirsi had a basic static HTML/CSS webpage that lacked interactivity. Prospective and existing gym members had to manually ask trainers about membership pricing, weekly classes, and personalized fitness goals.

I rebuilt the entire platform using **React 18**, **Vite**, and **Tailwind CSS**, introducing interactive tools like a live **BMI & Calorie Target Engine**, dynamic **Class Schedule filters**, and an easy **Free Trial booking system**.

---

## ✨ Features

- **📊 Smart BMI & Calorie Tracker:**
  - Real-time calculations with support for both **Metric** (kg/cm) and **Imperial** (lbs/inches) units.
  - Interactive visual gauge indicating underweight, normal, overweight, and obese brackets.
  - Provides personalized daily calorie targets (Fat Loss, Maintenance, Muscle Gain) based on Mifflin-St Jeor BMR math, plus recommended hydration intake.
  - Uses a custom `useLocalStorage` hook to save previous calculations so users can review their progress on return visits.
- **📅 Weekly Class Schedule:**
  - Filter classes by day of the week (Monday to Saturday) and training style (CrossFit, Strength, Cardio, Wellness).
  - Displays remaining slot availability and links directly to a reservation modal.
- **💳 Transparent Pricing & Membership Switcher:**
  - Toggle between Monthly, Quarterly, and Annual passes with dynamic discount calculation.
- **🖼️ Photo Gallery with Keyboard Lightbox:**
  - Categorized gym equipment showcase.
  - Fullscreen lightbox supporting `Escape`, `ArrowLeft`, and `ArrowRight` keyboard controls.
- **⭐ Community Reviews:**
  - Displays Google reviews and includes an interactive modal allowing members to post new reviews with live state updates.
- **📱 Responsive Neon Dark Theme:**
  - Optimized for mobile, tablet, and desktop viewing with an accessible slide-out mobile menu.

---

## 🧠 Key Technical Decisions & Learnings

1. **Separation of Concerns:** 
   - Moved all math formulas (BMI, Mifflin-St Jeor TDEE, hydration formulas) out of UI components and into pure utility functions in [`src/utils/healthCalculators.js`](./src/utils/healthCalculators.js). This makes the code modular, easy to read, and unit-testable.
2. **Custom Hook (`useLocalStorage`):**
   - Built a reusable custom hook in [`src/hooks/useLocalStorage.js`](./src/hooks/useLocalStorage.js) to sync state with the browser's storage safely with fallback handling.
3. **State Optimization with `useMemo`:**
   - Memoized derived health metrics in `BMICalculator.jsx` to prevent unnecessary recalculations when unrelated UI state updates.
4. **Lifecycle & Event Cleanup:**
   - Attached keydown and scroll listeners inside `useEffect` with clean `removeEventListener` calls to prevent memory leaks on component unmounts.

---

## 📁 Directory Structure

```text
src/
├── components/          # Reusable UI components
│   ├── About.jsx
│   ├── BMICalculator.jsx
│   ├── BookingModal.jsx
│   ├── ClassSchedule.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Gallery.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Pricing.jsx
│   ├── Services.jsx
│   ├── Testimonials.jsx
│   ├── Toast.jsx
│   └── Trainers.jsx
├── data/
│   └── gymData.js       # Central data model for gym info, plans & schedules
├── hooks/
│   └── useLocalStorage.js # Custom hook for localStorage persistence
├── utils/
│   └── healthCalculators.js # Pure math & health calculation utilities
├── App.jsx              # Main application layout & global modal state
├── index.css            # Tailwind styles & custom glassmorphism utilities
└── main.jsx             # React DOM entry point
```

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bharathnaik07/Gym-Shree-Health-Point-.git
   cd Gym-Shree-Health-Point-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Developer

**Bharath Naik**  
- GitHub: [@Bharathnaik07](https://github.com/Bharathnaik07)  
- Location: Sirsi, Karnataka  

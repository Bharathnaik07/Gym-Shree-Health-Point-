# 🏋️‍♂️ Shree Health Point — Modern React Web Application

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

A high-performance, responsive single-page web application engineered for **Shree Health Point (Co-ed Gym)** located in Sirsi, Karnataka. Re-architected with **React 18**, **Vite**, and **Tailwind CSS**, featuring dark cyberpunk/neon aesthetics, glassmorphic UI components, and real-time state-driven interactivity.

---

## 🌟 Key Features & React Engineering Highlights

This project was built to demonstrate modern React best practices, component modularity, clean code structure, and UX performance:

### ⚡ 1. Interactive BMI & Caloric Requirement Engine (`BMICalculator.jsx`)
- **Dual-Unit Converter:** Instant switching between **Metric** (kg / cm) and **Imperial** (lbs / inches) with dynamic synchronized sliders and inputs.
- **Dynamic Visual Gauge:** Calculates BMI in real time using `useMemo` and repositions a visual indicator across Underweight, Normal, Overweight, and Obese brackets.
- **Smart Recommendations:** Calculates ideal target weight range, daily hydration volume (liters/day), and goal-adjusted maintenance calories (Fat Loss, Maintain, Muscle Gain).

### 📅 2. Dynamic Class Schedule & Slot Filter (`ClassSchedule.jsx`)
- Filter classes by **Day of the Week** (Monday – Saturday) and **Training Category** (CrossFit, Strength, Endurance, Wellness, Cardio).
- Real-time slot availability indicators with direct reservation hooks connecting to the booking modal.

### 💳 3. Multi-Tier Membership Selector (`Pricing.jsx`)
- Interactive billing duration switcher (**Monthly Flex**, **Pro Quarterly**, and **Elite Annual**) with live savings calculation badges.
- Detailed feature checklists distinguishing included privileges from premium tiers.
- Integrated modal trigger passing the pre-selected package directly to registration.

### 🖼️ 4. Accessible Fullscreen Lightbox Gallery (`Gallery.jsx`)
- Interactive category filtering (Facilities, Weights, Cardio, Community).
- Fullscreen Lightbox modal with **keyboard navigation support** (`ArrowLeft`, `ArrowRight`, `Escape`) and responsive touch-friendly navigation.

### ⭐ 5. Live Community Reviews & Testimonial Creator (`Testimonials.jsx`)
- Displays verified Google reviews with star rating metrics.
- **Interactive Review Submission Form:** Members can submit their name, star rating, workout focus tag, and feedback, updating application state instantly with feedback toasts.

### 🔍 6. Real-Time FAQ Search Engine (`FAQ.jsx`)
- Live query search that dynamically filters questions and answers as the user types.
- Accessible animated accordion with smooth expanding/collapsing logic.

### 📝 7. Booking & Free Trial Modal System (`BookingModal.jsx` & `Toast.jsx`)
- Universal modal supporting Free Trial passes, Personal Training consultations, and Plan signups.
- Controlled inputs, field validation, submission simulation, and global floating toast notifications.

---

## 🛠️ Tech Stack & Architecture

- **Core Library:** [React 18](https://reactjs.org/) (Hooks: `useState`, `useEffect`, `useMemo`)
- **Build Tool:** [Vite](https://vitejs.dev/) (Lightning-fast HMR and optimized production bundling)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom neon glow utilities, glassmorphism, responsive grid)
- **Iconography:** [Lucide React](https://lucide.dev/) (Crisp, tree-shakable SVG icons)
- **Deployment Ready:** Easily deployable to Vercel, Netlify, or GitHub Pages.

---

## 📁 Project Structure

```text
Gym-Shree-Health-Point-/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx             # Gym story, credentials & equipment overview
│   │   ├── BMICalculator.jsx     # Dual-unit BMI, target calories & hydration tool
│   │   ├── BookingModal.jsx      # Universal reservation & free trial modal
│   │   ├── ClassSchedule.jsx     # Weekly timetable with category & day filters
│   │   ├── Contact.jsx           # Controlled contact form, WhatsApp & map embed
│   │   ├── FAQ.jsx               # Searchable accordion FAQ component
│   │   ├── Footer.jsx            # Social links, quick navigation & newsletter
│   │   ├── Gallery.jsx           # Filterable gallery & keyboard lightbox
│   │   ├── Hero.jsx              # High-impact neon hero with live stats
│   │   ├── Navbar.jsx            # Sticky glassmorphism navbar & mobile drawer
│   │   ├── Pricing.jsx           # Membership tiers with billing cycle toggle
│   │   ├── Services.jsx          # Workout programs with intensity & burn metrics
│   │   ├── Testimonials.jsx      # Google reviews & live feedback submission
│   │   ├── Toast.jsx             # Floating notification component
│   │   └── Trainers.jsx          # Certified coach profiles & credentials
│   ├── data/
│   │   └── gymData.js            # Structured data models for services, plans & FAQs
│   ├── App.jsx                   # Main orchestration component & state bridge
│   ├── index.css                 # Tailwind directives & glow/glassmorphism utilities
│   └── main.jsx                  # React DOM entry point
├── index.html                    # HTML5 template with Google Fonts (Outfit & Poppins)
├── package.json                  # Dependencies & scripts
├── postcss.config.js             # PostCSS Tailwind config
├── tailwind.config.js            # Custom color palette & theme extensions
└── vite.config.js                # Vite build configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed:
```bash
node -v
npm -v
```

### 2. Clone Repository
```bash
git clone https://github.com/Bharathnaik07/Gym-Shree-Health-Point-.git
cd Gym-Shree-Health-Point-
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite).

### 5. Build for Production
To create an optimized, minified production build:
```bash
npm run build
```
The output will be generated inside the `dist/` directory, ready for deployment.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel / Netlify

This project is zero-config ready for modern hosting platforms:

### Option 1: Deploy on Vercel
1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"New Project"**.
3. Import `Gym-Shree-Health-Point-`.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**.

### Option 2: Deploy on Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## 👨‍💻 Author

**Bharath Naik**
- GitHub: [@Bharathnaik07](https://github.com/Bharathnaik07)
- Repository: [Gym-Shree-Health-Point-](https://github.com/Bharathnaik07/Gym-Shree-Health-Point-)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

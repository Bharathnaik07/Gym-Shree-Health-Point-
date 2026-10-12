import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BMICalculator from './components/BMICalculator';
import ClassSchedule from './components/ClassSchedule';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { gymInfo } from './data/gymData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState('');
  const [toast, setToast] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (item = 'Free Trial Pass') => {
    setSelectedBookingItem(item);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const showToast = (toastData) => {
    setToast(toastData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0a0d14] text-slate-100 overflow-x-hidden selection:bg-cyan-400 selection:text-slate-950">
      
      {/* Ambient background glow points */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-1/3 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <About onOpenBooking={handleOpenBooking} />
        <Services onOpenBooking={handleOpenBooking} />
        <BMICalculator onOpenBooking={handleOpenBooking} />
        <ClassSchedule onOpenBooking={handleOpenBooking} />
        <Pricing onOpenBooking={handleOpenBooking} />
        <Trainers onOpenBooking={handleOpenBooking} />
        <Gallery />
        <Testimonials onShowToast={showToast} />
        <FAQ />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onShowToast={showToast} />

      {/* Modals & Overlays */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialItem={selectedBookingItem}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-30 flex flex-col gap-3">
        <a
          href={`https://wa.me/${gymInfo.whatsapp}?text=Hi%20Shree%20Health%20Point%20Team!%20I%20have%20an%20inquiry.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full glass-card border-white/20 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}

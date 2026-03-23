import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';

const App = () => {
  return (
    <div className="selection:bg-primary selection:text-white">
      {/* GLOBAL FIXED BACKGROUND */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-hero-gradient"></div>
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-primary/20 blur-[120px] rounded-full z-[-1] opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.3, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Navbar />
      
      <PageTransition>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default App;
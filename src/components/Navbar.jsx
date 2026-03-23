import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MagneticButton } from './Animations';

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let isTicking = false;

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 50);
      isTicking = false;
    };

    const handleScroll = () => {
      if (isTicking) return;
      isTicking = true;
      requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-60 bg-transparent"
          >
            <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-center pr-10 md:pr-4">
              <p className="text-xs md:text-sm text-gray-400 text-center">
                <span className="hidden sm:inline">A 3-month practical course — live classes, real projects, and a job-ready portfolio.</span>
                <span className="sm:hidden">3-month practical course — real projects.</span>{' '}
                <a href="#" className="text-white font-medium hover:text-primary transition-colors inline-flex items-center gap-1">
                  Learn more
                  <span className="material-symbols-outlined text-xs md:text-sm">chevron_right</span>
                </a>
              </p>
              <motion.button
                onClick={() => setShowAnnouncement(false)}
                className="absolute right-2 md:right-8 text-gray-500 hover:text-white transition-colors p-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="material-symbols-outlined text-lg md:text-xl">close</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${
          showAnnouncement ? 'top-12' : 'top-4'
        }`}
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto flex items-center justify-between py-3 md:py-4 px-2 rounded-2xl"
        >
          {/* Logo */}
          <MagneticButton>
            <Link to="/" onClick={handleHomeClick}>
              <motion.div
              className="flex items-center gap-1.5 md:gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="size-7 md:size-9 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Beta Symbol Logo */}
                <svg viewBox="0 0 100 120" className="w-6 h-8 md:w-8 md:h-10 fill-white">
                  <path d="M25 110 L25 10 C25 10 25 0 40 0 C55 0 65 10 65 25 C65 35 58 42 50 45 C62 48 75 58 75 75 C75 95 60 105 40 105 L40 110 L25 110 Z M40 40 C50 40 55 32 55 25 C55 18 50 12 40 12 L40 40 Z M40 95 C55 95 62 87 62 75 C62 63 55 52 40 52 L40 95 Z" />
                </svg>
              </motion.div>
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white">
                BetaStack
              </span>
              </motion.div>
            </Link>
          </MagneticButton>

          {/* Center Navigation Links - Pill Container */}
          <motion.div 
            className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full border border-white/10 bg-white/3 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                whileHover={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${
                      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`
                  }
                  onClick={() => {
                    if (link.to === '/') handleHomeClick();
                  }}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <MagneticButton>
            <motion.a
              className="hidden md:flex bg-white hover:bg-gray-100 text-black text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 items-center gap-2 group"
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="material-symbols-outlined text-[18px]"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                auto_awesome
              </motion.span>
              <span>Get Started</span>
            </motion.a>
          </MagneticButton>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed left-4 right-4 z-40 md:hidden ${
              showAnnouncement ? 'top-28' : 'top-20'
            }`}
          >
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-3 text-lg transition-colors ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`
                    }
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (link.to === '/') handleHomeClick();
                    }}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                href="/contact"
                className="mt-4 w-full bg-white text-black text-center py-3 rounded-full font-bold flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  navigate('/contact');
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="material-symbols-outlined text-lg">auto_awesome</span>
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroBackgroundCreative from '../components/HeroBackgroundCreative';
import GlowingArc from '../components/GlowingArc';
import ProjectShowcase from '../components/ProjectShowcase';
import StackingCards from '../components/StackingCards';
import {
  FadeUp,
  FadeIn,
  BlurIn,
  ScaleUp,
  SlideLeft,
  SlideRight,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  MagneticButton,
  Parallax,
  AnimatedCounter,
  RotateIn,
  LineReveal,
} from '../components/Animations';

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-8 md:pb-12 px-4 sm:px-6 overflow-hidden"
      >
        {/* Creative Animated Background */}
        <HeroBackgroundCreative />
        
        <div className="relative z-10 text-center max-w-4xl flex flex-col items-center gap-4 md:gap-6 px-2">
          {/* Main Heading - Two Line Style like in image */}
          <motion.h1
            className="flex flex-col items-center gap-1 md:gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* First line - Italic elegant style */}
            <motion.span
              className="font-serif italic text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Learn & Build
            </motion.span>
            {/* Second line - Bold sans-serif with gradient */}
            <motion.span
              className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-violet-300 to-purple-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Future
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <BlurIn delay={0.6}>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mt-2 md:mt-4 px-2">
              From Graphic Design to Video Editing to UI/UX — <span className="text-primary">BetaStack</span>{' '}
              helps you master practical skills to boost <span className="italic">your</span> career.
            </p>
          </BlurIn>

          {/* Single CTA Button */}
          <motion.div
            className="mt-4 md:mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <MagneticButton>
              <motion.button
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium h-10 md:h-11 px-5 md:px-6 rounded-full flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
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
                Enroll now
              </motion.button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Glowing Arc at bottom of hero */}
        <GlowingArc />
      </motion.section>

      {/* Services Section - Stacking Cards */}
      <StackingCards />

      {/* Portfolio Section with Blend Animation */}
      <ProjectShowcase />

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center text-white mb-4">
              <TextReveal text="What our partners say" />
            </h2>
            <LineReveal className="max-w-xs mx-auto mb-10 md:mb-16" delay={0.5} />
          </FadeUp>

          <StaggerContainer staggerDelay={0.15} className="flex flex-wrap justify-center gap-6">
            {[
              {
                quote: '"BetaStack transformed our startup\'s digital presence. The attention to detail and strategic insight was worth every penny."',
                name: 'Alex Morgan',
                role: 'CEO, FinTech Co.',
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
              },
              {
                quote: '"The UI/UX design they delivered was not just beautiful, but incredibly intuitive. Our conversion rates doubled in a month."',
                name: 'Sarah Jenkins',
                role: 'Product Lead, Sphere',
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
              },
              {
                quote: '"World-class development team. They tackled complex backend challenges with ease. Highly recommended."',
                name: 'David Chen',
                role: 'CTO, DataFlow',
                image: 'https://randomuser.me/api/portraits/men/85.jpg',
              },
            ].map((testimonial) => (
              <StaggerItem key={testimonial.name} className="w-full sm:w-[320px] md:w-87.5">
                <motion.div
                  className="p-4 sm:p-6 rounded-2xl bg-white/3 border border-white/10 backdrop-blur-md"
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.06)', y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="material-symbols-outlined text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        star
                      </motion.span>
                    ))}
                  </motion.div>
                  <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        src={testimonial.image}
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <Parallax offset={30} className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-purple-500/20 blur-3xl" />
        </Parallax>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScaleUp>
            <motion.div
              className="text-center p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl"
              whileHover={{ scale: 1.02, borderColor: 'rgba(103, 100, 242, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="material-symbols-outlined text-4xl md:text-6xl text-primary mb-4 md:mb-6 block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                rocket_launch
              </motion.span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-3 md:mb-4">
                <TextReveal text="Ready to Launch?" />
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto px-2">
                Let's create something extraordinary together. Your digital empire awaits.
              </p>
              <MagneticButton>
                <motion.button
                  className="bg-primary text-white text-base md:text-lg font-bold h-12 md:h-14 px-6 md:px-10 rounded-full relative overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(103, 100, 242, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-linear-to-r from-primary via-purple-500 to-primary"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '200%' }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <motion.span
                      className="material-symbols-outlined"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      arrow_forward
                    </motion.span>
                  </span>
                </motion.button>
              </MagneticButton>
            </motion.div>
          </ScaleUp>
        </div>
      </section>
    </>
  );
};

export default Home;
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const expertiseCards = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'Crafting intuitive interfaces with modern aesthetics that drive user engagement and satisfaction.',
    icon: 'brush',
    color: '#6764f2',
    bgColor: 'bg-primary/20',
    borderColor: 'hover:border-primary/50',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Building robust, scalable web applications with cutting-edge technologies and clean code architecture.',
    icon: 'terminal',
    color: '#22d3ee',
    bgColor: 'bg-cyan-500/20',
    borderColor: 'hover:border-cyan-500/50',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Growth Marketing',
    description: 'Data-driven marketing strategies that scale your business and maximize ROI across all channels.',
    icon: 'trending_up',
    color: '#ec4899',
    bgColor: 'bg-pink-500/20',
    borderColor: 'hover:border-pink-500/50',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Brand Identity',
    description: 'Forging memorable brands that resonate with audiences worldwide and stand the test of time.',
    icon: 'diamond',
    color: '#f97316',
    bgColor: 'bg-orange-500/20',
    borderColor: 'hover:border-orange-500/50',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2000&auto=format&fit=crop',
  },
];

const StackingCard = ({ card, index, totalCards, progress }) => {
  const cardRef = useRef(null);
  
  // Calculate when this card should start and end its animation
  const cardStart = index / totalCards;
  const cardEnd = (index + 1) / totalCards;
  
  // Transform values based on scroll progress
  const y = useTransform(
    progress,
    [cardStart, cardEnd],
    ['100vh', '0vh']
  );
  
  const scale = useTransform(
    progress,
    [cardStart, cardEnd, cardEnd + 0.1],
    [0.9, 1, 0.95]
  );
  
  const opacity = useTransform(
    progress,
    [cardStart - 0.1, cardStart, cardEnd],
    [0, 1, 1]
  );

  return (
    <motion.div
      ref={cardRef}
      className="absolute inset-x-0 top-0 w-full"
      style={{
        y: index === 0 ? 0 : y,
        scale,
        opacity: index === 0 ? 1 : opacity,
        zIndex: index + 1,
      }}
    >
      <div 
        className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-[#0a0a15]/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 lg:p-12 min-h-100 md:min-h-125 ${card.borderColor} transition-colors duration-500`}
        style={{
          boxShadow: `0 -10px 40px -10px ${card.color}20`,
        }}
      >
        {/* Background gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 80% 20%, ${card.color}40 0%, transparent 50%)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-start gap-4 md:gap-8 h-full">
          {/* Left side - Text content */}
          <div className="flex-1 flex flex-col justify-center w-full">
            {/* Icon */}
            <motion.div
              className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${card.bgColor} flex items-center justify-center mb-4 md:mb-6`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              style={{ color: card.color }}
            >
              <span className="material-symbols-outlined text-2xl md:text-3xl">{card.icon}</span>
            </motion.div>
            
            {/* Card number */}
            <span 
              className="text-5xl md:text-8xl font-display font-bold opacity-10 absolute top-3 right-3 md:top-4 md:right-4"
              style={{ color: card.color }}
            >
              0{index + 1}
            </span>
            
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2 md:mb-4">
              {card.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg leading-relaxed">
              {card.description}
            </p>
            
            {/* CTA Button */}
            <motion.a
              className="mt-4 md:mt-8 px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 text-white text-sm md:text-base font-medium flex items-center gap-2 w-fit hover:bg-white/10 transition-colors"
              href="https://devbyanas.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </motion.a>
          </div>
          
          {/* Right side - Image */}
          <div className="flex-1 relative h-full min-h-50 md:min-h-75 hidden sm:block w-full">
            <motion.div
              className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden"
              initial={{ opacity: 0.5, scale: 0.95 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover rounded-xl md:rounded-2xl"
              />
              {/* Image overlay */}
              <div 
                className="absolute inset-0 rounded-xl md:rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${card.color}40 0%, transparent 50%, ${card.color}20 100%)`,
                  mixBlendMode: 'overlay',
                }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Bottom glow line */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
            width: '60%',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
};

const StackingCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="relative" id="services">
      {/* Section header - Fixed at top */}
      <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <motion.span
            className="text-primary font-bold tracking-widest text-xs md:text-sm uppercase mb-2 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-xl text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We provide a comprehensive suite of digital services designed to
            elevate your brand presence.
          </motion.p>
        </div>
      </div>

      {/* Stacking cards container */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: `${(expertiseCards.length + 1) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 h-full">
            <div className="relative h-112.5 sm:h-125 md:h-150">
              {expertiseCards.map((card, index) => (
                <StackingCard
                  key={card.id}
                  card={card}
                  index={index}
                  totalCards={expertiseCards.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackingCards;

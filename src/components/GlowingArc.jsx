import React from 'react';
import { motion } from 'framer-motion';

const GlowingArc = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-10">
      {/* Main Arc Container */}
      <div className="relative w-full h-[150px] md:h-[250px] flex items-end justify-center">
        
        {/* Large glow behind the arc */}
        <motion.div
          className="absolute bottom-[-60px] md:bottom-[-100px] left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] h-[120px] md:h-[200px] rounded-[100%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.4) 0%, rgba(103, 100, 242, 0.2) 30%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* SVG Arc - Clean curved line like in the image */}
        <svg
          className="absolute bottom-[50px] md:bottom-[80px] w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ height: '80px' }}
        >
          <defs>
            {/* Main gradient for the arc line */}
            <linearGradient id="arcLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="15%" stopColor="rgba(147, 51, 234, 0.3)" />
              <stop offset="30%" stopColor="rgba(147, 51, 234, 0.6)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="70%" stopColor="rgba(147, 51, 234, 0.6)" />
              <stop offset="85%" stopColor="rgba(147, 51, 234, 0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="arcGlow" x="-50%" y="-100%" width="200%" height="300%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Stronger glow filter */}
            <filter id="arcGlowStrong" x="-50%" y="-100%" width="200%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background glow arc */}
          <motion.path
            d="M 0 100 Q 720 0 1440 100"
            fill="none"
            stroke="rgba(147, 51, 234, 0.3)"
            strokeWidth="20"
            filter="url(#arcGlowStrong)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          {/* Main arc line */}
          <motion.path
            d="M 0 100 Q 720 0 1440 100"
            fill="none"
            stroke="url(#arcLineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#arcGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          />

          {/* Bright center highlight */}
          <motion.path
            d="M 400 60 Q 720 10 1040 60"
            fill="none"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#arcGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0.7] }}
            transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
          />
        </svg>

        {/* Animated light traveling along the arc */}
        <motion.div
          className="absolute bottom-[80px] md:bottom-[120px] w-3 h-3 md:w-4 md:h-4 rounded-full bg-white"
          style={{
            boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.5), 0 0 40px 20px rgba(147, 51, 234, 0.5)',
          }}
          animate={{
            x: ['-300px', '0px', '300px'],
            y: ['30px', '-20px', '30px'],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 1,
          }}
        />
      </div>
    </div>
  );
};

export default GlowingArc;
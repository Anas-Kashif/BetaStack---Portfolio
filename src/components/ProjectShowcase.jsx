import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'UI/UX • Development',
    description: 'A comprehensive financial analytics platform with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    color: '#6764f2',
    year: '2024',
  },
  {
    id: 2,
    title: 'Nebula Mobile App',
    category: 'Product Design',
    description: 'Award-winning mobile experience for space exploration enthusiasts.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop',
    color: '#22d3ee',
    year: '2024',
  },
  {
    id: 3,
    title: 'Growth Analytics',
    category: 'Marketing • Strategy',
    description: 'Data-driven marketing platform that scaled user acquisition by 300%.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#ec4899',
    year: '2023',
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    description: 'Modern shopping experience with AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop',
    color: '#f97316',
    year: '2023',
  },
];

const ProjectCard = ({ project, index, setActiveIndex }) => {
  const cardRef = useRef(null);
  
  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative cursor-pointer group"
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setActiveIndex(index)}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image container with blend effect */}
        <div className="relative aspect-16/10 overflow-hidden">
          {/* Base image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
          
          {/* Color overlay with blend mode */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundColor: project.color,
              mixBlendMode: 'overlay',
            }}
            initial={{ opacity: 0.3 }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Gradient blend overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}40 0%, transparent 50%, ${project.color}20 100%)`,
              mixBlendMode: 'color-dodge',
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay',
            }}
          />
          
          {/* Dark gradient from bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
          
          {/* Project number */}
          <motion.div
            className="absolute top-4 md:top-6 left-4 md:left-6 z-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            <span 
              className="text-5xl md:text-7xl font-display font-bold opacity-20"
              style={{ 
                WebkitTextStroke: `1px ${project.color}`,
                color: 'transparent',
              }}
            >
              0{index + 1}
            </span>
          </motion.div>
          
          {/* Year badge */}
          <motion.div
            className="absolute top-4 md:top-6 right-4 md:right-6 z-10"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.4, type: 'spring' }}
          >
            <span 
              className="px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold backdrop-blur-md border"
              style={{ 
                backgroundColor: `${project.color}20`,
                borderColor: `${project.color}40`,
                color: project.color,
              }}
            >
              {project.year}
            </span>
          </motion.div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2 }}
            >
              <motion.p 
                className="text-[10px] sm:text-xs md:text-sm font-medium mb-1 md:mb-2 tracking-wider uppercase"
                style={{ color: project.color }}
              >
                {project.category}
              </motion.p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-1 md:mb-2">
                {project.title}
              </h3>
              <motion.p 
                className="text-gray-400 text-xs sm:text-sm max-w-md hidden sm:block"
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: 'auto' }}
              >
                {project.description}
              </motion.p>
            </motion.div>
            
            {/* View button */}
            <motion.div
              className="mt-3 md:mt-4 inline-flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              <motion.button
                className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium backdrop-blur-md border transition-all"
                style={{ 
                  backgroundColor: `${project.color}20`,
                  borderColor: `${project.color}40`,
                  color: 'white',
                }}
                whileHover={{ 
                  backgroundColor: project.color,
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <motion.span
                  className="material-symbols-outlined text-lg"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  arrow_forward
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
          style={{
            background: `radial-gradient(circle at center, ${project.color}40 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden" id="work">
      {/* Background animated gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: activeIndex !== null
            ? `radial-gradient(circle at 50% 50%, ${projects[activeIndex]?.color}10 0%, transparent 50%)`
            : 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%)',
        }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.span
              className="text-primary font-bold tracking-widest text-xs md:text-sm uppercase mb-2 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Selected Work
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Featured
              </motion.span>{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-400"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Projects
              </motion.span>
            </h2>
          </div>
          
          <motion.a
            className="group flex items-center gap-2 md:gap-3 text-white hover:text-primary transition-colors"
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm md:text-lg font-medium">View all projects</span>
            <motion.div
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                className="material-symbols-outlined text-sm md:text-base"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                arrow_forward
              </motion.span>
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Projects grid with masonry-like layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={index % 3 === 1 ? 'sm:mt-8 lg:mt-16' : ''}
            >
              <ProjectCard
                project={project}
                index={index}
                setActiveIndex={setActiveIndex}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="mt-12 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6">Want to see more of our work?</p>
          <motion.button
            className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-bold text-sm md:text-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-linear-to-r from-primary to-cyan-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 text-black transition-colors">
              Explore Full Portfolio
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

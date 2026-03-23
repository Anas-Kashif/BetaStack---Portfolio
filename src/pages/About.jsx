import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp, LineReveal } from '../components/Animations';

const values = [
  {
    title: 'Practical Learning',
    description: 'We focus on project-based training so students build real portfolio work, not just theory.',
  },
  {
    title: 'Industry Mentors',
    description: 'Our mentors are active professionals who teach current tools and workflows used by top teams.',
  },
  {
    title: 'Career Growth',
    description: 'From resume support to interview practice, we help learners become job-ready with confidence.',
  },
];

const About = () => {
  return (
    <section className="min-h-screen pt-36 md:pt-44 pb-16 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight text-center">
            About BetaStack
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto text-center mt-5">
            BetaStack is a skill-first learning platform helping creatives and builders master modern digital careers.
            We combine live mentorship, practical assignments, and portfolio-driven coaching.
          </p>
          <LineReveal className="max-w-sm mx-auto mt-8" />
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-10 md:mt-14">
          {values.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.24)' }}
            >
              <h2 className="text-white font-display text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-400 mt-3 text-sm md:text-base leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

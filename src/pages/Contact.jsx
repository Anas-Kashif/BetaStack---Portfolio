import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp, LineReveal } from '../components/Animations';

const Contact = () => {
  return (
    <section className="min-h-screen pt-36 md:pt-44 pb-16 md:pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight text-center">
            Contact Us
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto text-center mt-5">
            Tell us what you want to learn or build. Our team will reach out with a personalized roadmap.
          </p>
          <LineReveal className="max-w-sm mx-auto mt-8" />
        </FadeUp>

        <motion.div
          className="mt-10 md:mt-14 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form className="grid gap-4 md:grid-cols-2">
            <label className="md:col-span-1">
              <span className="text-sm text-gray-300">Full Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-primary"
              />
            </label>

            <label className="md:col-span-1">
              <span className="text-sm text-gray-300">Email Address</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-primary"
              />
            </label>

            <label className="md:col-span-2">
              <span className="text-sm text-gray-300">Message</span>
              <textarea
                rows="5"
                placeholder="Tell us about your goals"
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-primary resize-none"
              />
            </label>

            <div className="md:col-span-2 flex flex-wrap items-center gap-4 justify-between mt-2">
              <p className="text-xs text-gray-400">Or email directly: hello@betastack.com</p>
              <button
                type="submit"
                className="rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FadeUp, StaggerContainer, StaggerItem, MagneticButton, LineReveal } from './Animations';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Help Center', href: '#' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: 'public', href: '#' },
    { icon: 'alternate_email', href: '#' },
    { icon: 'rss_feed', href: '#' },
  ];

  return (
    <footer className="bg-black pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <FadeUp className="col-span-2 sm:col-span-2 md:col-span-1">
            <MagneticButton>
              <motion.div
                className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <svg viewBox="0 0 100 120" className="w-6 h-8 md:w-8 md:h-10 fill-white">
                <path d="M25 110 L25 10 C25 10 25 0 40 0 C55 0 65 10 65 25 C65 35 58 42 50 45 C62 48 75 58 75 75 C75 95 60 105 40 105 L40 110 L25 110 Z M40 40 C50 40 55 32 55 25 C55 18 50 12 40 12 L40 40 Z M40 95 C55 95 62 87 62 75 C62 63 55 52 40 52 L40 95 Z" />
              </svg>
                <span className="font-display font-bold text-lg md:text-xl tracking-tight">
                  BetaStack
                </span>
              </motion.div>
            </MagneticButton>
            <motion.p
              className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Empowering businesses with cutting-edge digital solutions. We
              turn vision into reality through design and technology.
            </motion.p>
            <motion.p
              className="text-gray-300 text-xs md:text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Developed by{' '}
              <a
                href="https://devbyanas.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline decoration-primary/70 underline-offset-4 hover:text-primary transition-colors"
              >
                Anas Kashif
              </a>
            </motion.p>
            <motion.p
              className="text-gray-300 text-xs md:text-sm mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
            >
              © 2026 BetaStack Digital Agency. All rights reserved.
            </motion.p>
          </FadeUp>

          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h5 className="font-bold mb-4 md:mb-6 text-sm md:text-base text-white">Company</h5>
            </StaggerItem>
            <ul className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-gray-500">
              {footerLinks.company.map((link) => (
                <StaggerItem key={link.name}>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    {link.href.startsWith('/') ? (
                      <Link className="hover:text-primary transition-colors inline-flex items-center gap-2 group" to={link.href}>
                        <motion.span
                          className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"
                        />
                        {link.name}
                      </Link>
                    ) : (
                      <a className="hover:text-primary transition-colors inline-flex items-center gap-2 group" href={link.href}>
                        <motion.span
                          className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"
                        />
                        {link.name}
                      </a>
                    )}
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>

          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h5 className="font-bold mb-4 md:mb-6 text-sm md:text-base text-white">Resources</h5>
            </StaggerItem>
            <ul className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-gray-500">
              {footerLinks.resources.map((link) => (
                <StaggerItem key={link.name}>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a className="hover:text-primary transition-colors inline-flex items-center gap-2 group" href={link.href}>
                      <motion.span
                        className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"
                      />
                      {link.name}
                    </a>
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>

          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h5 className="font-bold mb-4 md:mb-6 text-sm md:text-base text-white">Legal</h5>
            </StaggerItem>
            <ul className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-gray-500">
              {footerLinks.legal.map((link) => (
                <StaggerItem key={link.name}>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a className="hover:text-primary transition-colors inline-flex items-center gap-2 group" href={link.href}>
                      <motion.span
                        className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"
                      />
                      {link.name}
                    </a>
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
        </div>

        <LineReveal className="mb-6 md:mb-8" />

        <FadeUp>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <MagneticButton key={social.icon}>
                  <motion.a
                    className="text-gray-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="material-symbols-outlined">{social.icon}</span>
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
};

export default Footer;
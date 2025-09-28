'use client';

import Link from 'next/link';
import colors from './../../helpers/colors';
import ImageDisplay from '../ImageDisplay';
import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  School,
  Business,
  Support,
  Language,
  WhatsApp
} from '@mui/icons-material';

export default function Footer() {
  const color = colors();
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.1
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-br from-[#002448] to-[#1a365d] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#FF9257] rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-[#EC651B] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-16 w-12 h-12 bg-[#FF9257] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        className="container relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 py-16">

          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3">
              <ImageDisplay
                src="/Edufy-Icon.png"
                alt="Edufy Logo"
                className="w-12 h-12"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Edufy Overseas</h3>
                <p className="text-sm text-gray-300">Medical Education Specialists</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for medical education in Georgia, Uzbekistan, and Russia.
              We specialize in MBBS, Nursing, and medical courses with 98% success rate.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com/edufyoverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF9257] transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="text-white" />
              </motion.a>
              <motion.a
                href="https://instagram.com/edufyoverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF9257] transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/edufyoverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF9257] transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkedIn className="text-white" />
              </motion.a>
              <motion.a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsApp className="text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <School className="mr-2 text-[#FF9257]" />
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link href="#about" className="block text-gray-300 hover:text-[#FF9257] transition-colors duration-300 hover:translate-x-2 transform">
                About Us
              </Link>
              <Link href="#course" className="block text-gray-300 hover:text-[#FF9257] transition-colors duration-300 hover:translate-x-2 transform">
                Medical Programs
              </Link>
              <Link href="#testimonials" className="block text-gray-300 hover:text-[#FF9257] transition-colors duration-300 hover:translate-x-2 transform">
                Student Stories
              </Link>
              <Link href="#process" className="block text-gray-300 hover:text-[#FF9257] transition-colors duration-300 hover:translate-x-2 transform">
                Our Process
              </Link>
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Business className="mr-2 text-[#FF9257]" />
              Our Programs
            </h3>
            <div className="space-y-3">
              <div className="text-gray-300 hover:text-[#FF9257] transition-colors duration-300 cursor-pointer">
                MBBS in Georgia
              </div>
              <div className="text-gray-300 hover:text-[#FF9257] transition-colors duration-300 cursor-pointer">
                Nursing in Uzbekistan
              </div>
              <div className="text-gray-300 hover:text-[#FF9257] transition-colors duration-300 cursor-pointer">
                Medical Courses in Russia
              </div>
              <div className="text-gray-300 hover:text-[#FF9257] transition-colors duration-300 cursor-pointer">
                MBA Programs
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Support className="mr-2 text-[#FF9257]" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <LocationOn className="text-[#FF9257] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Medical Education Hub<br />
                    Tbilisi, Georgia 0100
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#FF9257] flex-shrink-0" />
                <a href="tel:+919999999999" className="text-gray-300 hover:text-[#FF9257] transition-colors duration-300">
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Email className="text-[#FF9257] flex-shrink-0" />
                <a href="mailto:info@edufyoverseas.co.in" className="text-gray-300 hover:text-[#FF9257] transition-colors duration-300">
                  info@edufyoverseas.co.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Language className="text-[#FF9257] flex-shrink-0" />
                <span className="text-gray-300">Available 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest updates on medical education opportunities</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF9257] transition-colors duration-300 flex-1 md:flex-none md:w-64"
              />
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-[#FF9257] to-[#EC651B] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} Edufy Overseas Pvt Ltd. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Specialized in Medical Education | Georgia • Uzbekistan • Russia
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-[#FF9257] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-[#FF9257] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-[#FF9257] transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
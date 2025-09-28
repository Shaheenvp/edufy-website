'use client';

import Image from "next/image";
import NavBar from './../components/Links/NavBar';
import HomePage from "@/components/Home/HomePage";
import HomeAbout from "@/components/Home/About";
import OpportunityCard from './../components/Home/OpportunityCard';
import Footer from './../components/Links/Footer';
import HomeCourses from "@/components/Home/Courses";
import InstagramIcon from '@mui/icons-material/Instagram';
import Steps from "@/components/Home/Steps";
import ScrollToTop from "@/components/ScrollToTop";
import ParticleBackground from "@/components/ParticleBackground";
import ProgressIndicator from "@/components/ProgressIndicator";
import PremiumTestimonialsSection from "@/components/Home/Testimonials";
import StatsSection from "@/components/Home/Stats";
import CTASection from "@/components/Home/CTASection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-montserrat)] relative">
      <ProgressIndicator />
      <ParticleBackground />
      <NavBar />
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <HomeAbout />
      </section>
      <section id="course">
        <HomeCourses />
      </section>
      <StatsSection />
      <PremiumTestimonialsSection />
      <CTASection />
      <Steps />
      <OpportunityCard />
      <Footer />

      {/* Enhanced Social Media Icons - Right Side */}
      <div className="fixed z-50 top-1/2 right-3 md:right-4 transform -translate-y-1/2 flex flex-col gap-2 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
        {/* Facebook */}
        <div className="social-group relative group">
          <button
            onClick={() => window.open('https://facebook.com/edufyoverseas', '_blank')}
            className="social-icon social-facebook w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#1877F2] to-[#0D5FCC] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm"
            aria-label="Facebook"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <div className="social-tooltip-compact">
            Facebook
          </div>
        </div>

        {/* Instagram */}
        <div className="social-group relative group">
          <button
            onClick={() => window.open('https://instagram.com/edufyoverseas', '_blank')}
            className="social-icon social-instagram w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#E4405F] via-[#C13584] to-[#833AB4] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 relative overflow-hidden"
            aria-label="Instagram"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </button>
          <div className="social-tooltip-compact">
            Instagram
          </div>
        </div>

        {/* YouTube */}
        <div className="social-group relative group">
          <button
            onClick={() => window.open('https://youtube.com/@edufyoverseas', '_blank')}
            className="social-icon social-youtube w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#FF0000] to-[#CC0000] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 relative overflow-hidden"
            aria-label="YouTube"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </button>
          <div className="social-tooltip-compact">
            YouTube
          </div>
        </div>

        {/* X (Twitter) */}
        <div className="social-group relative group">
          <button
            onClick={() => window.open('https://x.com/edufyoverseas', '_blank')}
            className="social-icon social-twitter w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#000000] to-[#333333] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 relative overflow-hidden"
            aria-label="X (Twitter)"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
          <div className="social-tooltip-compact">
            X
          </div>
        </div>

        {/* LinkedIn */}
        <div className="social-group relative group">
          <button
            onClick={() => window.open('https://linkedin.com/company/edufyoverseas', '_blank')}
            className="social-icon social-linkedin w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#0077B5] to-[#005885] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 relative overflow-hidden"
            aria-label="LinkedIn"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
          <div className="social-tooltip-compact">
            LinkedIn
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Bottom Right */}
      <ScrollToTop />
    </div>
  );
}
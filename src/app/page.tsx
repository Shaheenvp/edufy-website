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


      {/* Scroll to Top Button - Bottom Right */}
      <ScrollToTop />
    </div>
  );
}
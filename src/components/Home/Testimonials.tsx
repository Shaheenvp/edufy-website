'use client';

import { useRef, useState, useEffect } from 'react';
import { useGsapReveal } from '@/helpers/useGsapReveal';

export default function PremiumTestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, { selector: '[data-reveal]', stagger: 0.08 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Aisha Khan",
      role: "MBBS Student",
      university: "Tbilisi State Medical University",
      country: "Georgia",
      image: "/Bg1.png",
      rating: 5,
      text: "Edufy made my MBBS journey in Georgia smooth and stress-free. From university selection to documentation, they guided me at every step.",
      achievement: "Admission Secured"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Nursing Student",
      university: "Tashkent Medical Academy",
      country: "Uzbekistan",
      image: "/Bg2.png",
      rating: 5,
      text: "The team helped me choose the right Nursing program and handled my application end-to-end. Their support before and after arrival was excellent.",
      achievement: "Visa Approved"
    },
    {
      id: 3,
      name: "Fatima Noor",
      role: "Medical Student",
      university: "Charité - Universitätsmedizin Berlin",
      country: "Germany",
      image: "/Bg1.png",
      rating: 5,
      text: "I got clarity on requirements and timelines, and Edufy helped me stay on track. Their counseling made the process organized and confident.",
      achievement: "Offer Letter Received"
    },
    {
      id: 4,
      name: "Omar Ali",
      role: "MBBS Student",
      university: "Sechenov University",
      country: "Russia",
      image: "/Bg2.png",
      rating: 5,
      text: "From shortlisting universities to preparing documents, Edufy supported me throughout. I’m grateful for the guidance and quick responses.",
      achievement: "University Enrollment Completed"
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
      <div className="container">
        <div data-reveal className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#FF9257]/20 text-[#FF9257] font-medium text-sm">
            <span className="w-2 h-2 bg-[#FF9257] rounded-full mr-2 animate-pulse"></span>
            Success Stories
          </div>

          <h2 className="heading-lg text-[#002448]">
            What Our <span className="gradient-text">Students Say</span>
          </h2>

          <p className="text-body max-w-2xl mx-auto">
            Hear from our successful students who have achieved their dreams
            of studying MBBS and Nursing at trusted universities abroad.
          </p>
        </div>

        {/* Premium Testimonial Carousel */}
        <div data-reveal className="relative">
          <div className="card-premium p-8 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FF9257]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-xl text-[#002448] font-medium leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF9257] to-[#EC651B] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002448]">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-sm text-[#64748B]">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-[#FF9257] rounded-full"></span>
                      <span className="text-[#64748B]">{testimonials[currentTestimonial].university}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-[#EC651B] rounded-full"></span>
                      <span className="text-[#64748B]">{testimonials[currentTestimonial].country}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center px-3 py-1 bg-[#FF9257]/10 rounded-full text-[#FF9257] text-sm font-medium">
                    🏆 {testimonials[currentTestimonial].achievement}
                  </div>
                </div>
              </div>

              {/* University Showcase */}
              <div className="relative">
                <div className="card-premium p-6 bg-gradient-to-br from-[#FF9257]/5 to-[#EC651B]/5">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF9257] to-[#EC651B] rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      {testimonials[currentTestimonial].university.split(' ').map(w => w[0]).join('')}
                    </div>
                    <h3 className="heading-sm text-[#002448]">{testimonials[currentTestimonial].university}</h3>
                    <p className="text-[#64748B]">{testimonials[currentTestimonial].country}</p>
                    <div className="flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-[#FF9257] rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-[#EC651B] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-2 h-2 bg-[#002448] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                  ? 'bg-[#FF9257] scale-125'
                  : 'bg-[#E2E8F0] hover:bg-[#FF9257]/50'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div data-reveal className="mt-16">
          <div className="text-center space-y-4">
            <p className="text-sm text-[#64748B] font-medium">Trusted by students from</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-semibold text-[#002448]">🇬🇪 Georgia</div>
              <div className="text-sm font-semibold text-[#002448]">🇺🇿 Uzbekistan</div>
              <div className="text-sm font-semibold text-[#002448]">🇩🇪 Germany</div>
              <div className="text-sm font-semibold text-[#002448]">🇷🇺 Russia</div>
              <div className="text-sm font-semibold text-[#002448]">Eurasian countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
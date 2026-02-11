'use client';

import ImageDisplay from './../ImageDisplay';
import ButtonDisplay from '../ButtonDisplay';
import TypewriterText from '../TypewriterText';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getGsap } from '@/helpers/gsapClient';

export default function HomePage() {
    const [currentUniversityIndex, setCurrentUniversityIndex] = useState(0);
    const heroRef = useRef<HTMLElement>(null);

    const universities = [
        {
            name: 'Tbilisi State Medical University',
            location: 'Tbilisi, Georgia',
            image: '/Bg2.png',
            alt: 'Tbilisi State Medical University campus'
        },
        {
            name: 'Tashkent Medical Academy',
            location: 'Tashkent, Uzbekistan',
            image: '/Bg1.png',
            alt: 'Tashkent Medical Academy campus'
        },
        {
            name: 'Charité - Universitätsmedizin Berlin',
            location: 'Berlin, Germany',
            image: '/Bg2.png',
            alt: 'Charité Berlin medical university campus'
        },
        {
            name: 'Sechenov University',
            location: 'Moscow, Russia',
            image: '/Bg1.png',
            alt: 'Sechenov University campus'
        }
    ];

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const reduce =
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
        if (reduce) return;

        const gsap = getGsap();
        const rect = () => hero.getBoundingClientRect();

        const setMX = gsap.quickSetter(hero, '--mx');
        const setMY = gsap.quickSetter(hero, '--my');

        const onMove = (e: MouseEvent) => {
            const r = rect();
            const xPct = ((e.clientX - r.left) / r.width) * 100;
            const yPct = ((e.clientY - r.top) / r.height) * 100;
            setMX(`${Math.max(0, Math.min(100, xPct))}%`);
            setMY(`${Math.max(0, Math.min(100, yPct))}%`);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    useLayoutEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const reduce =
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
        if (reduce) return;

        const gsap = getGsap();
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from('[data-hero="title"]', { autoAlpha: 0, y: 18, duration: 0.6 })
              .from('[data-hero="desc"]', { autoAlpha: 0, y: 16, duration: 0.6 }, '-=0.35')
              .from('[data-hero="cta"] > *', { autoAlpha: 0, y: 14, duration: 0.45, stagger: 0.08 }, '-=0.35')
              .from('[data-hero="trust"]', { autoAlpha: 0, y: 12, duration: 0.5 }, '-=0.25')
              .from('[data-hero="media"]', { autoAlpha: 0, y: 16, scale: 0.98, duration: 0.65 }, '-=0.6')
              .from('[data-hero="badge-float"]', { autoAlpha: 0, y: 10, scale: 0.9, duration: 0.45 }, '-=0.35');
        }, hero);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentUniversityIndex((prevIndex) => 
                (prevIndex + 1) % universities.length
            );
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [universities.length]);

    return (
        <section ref={heroRef} className="hero-section relative overflow-hidden pt-20">
            {/* Ultra-Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Interactive Mouse Following Gradient */}
                <div className="hero-mouse-glow" />

                {/* Floating Geometric Shapes */}
                <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-[#FF9257] to-[#EC651B] rounded-full opacity-8 animate-float blur-sm" />
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-[#FF9257]/20 to-[#EC651B]/20 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />

                {/* Premium Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF9257' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                {/* Luxury Accent Lines */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9257]/30 to-transparent" />
                <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#EC651B]/30 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center min-h-[75vh] py-6 lg:py-8">
                    {/* Left Content */}
                    <div className="space-y-6">

                        {/* Main Heading */}
                        <div className="space-y-5">
                            <h1 data-hero="title" className="text-[#002448] leading-tight">
                                <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                                    Study MBBS & Nursing in
                                </span>
                                <span className="block min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] flex items-center">
                                    <span className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-bold">
                                        <TypewriterText
                                            texts={['Georgia', 'Uzbekistan', 'Russia', 'Germany', 'Eurasian countries']}
                                            speed={150}
                                            deleteSpeed={75}
                                            pauseTime={2500}
                                        />
                                    </span>
                                </span>
                </h1>

                            <p data-hero="desc" className="text-lg sm:text-xl text-[#64748B] max-w-2xl leading-relaxed">
                                Specialized in MBBS, Nursing, and medical courses in Georgia, Uzbekistan, Russia, and Germany.
                                From application to graduation, we guide you every step of the way to
                                achieve your medical career dreams at top universities in Eurasian countries.
                            </p>
                        </div>


                        {/* CTA Buttons */}
                        <div data-hero="cta" className="flex flex-col sm:flex-row gap-4">
                <ButtonDisplay
                                text="Start Your Journey"
                                px="px-8 py-4"
                    onclick="Contact Us"
                />
                            <button className="btn-secondary">
                                Watch Our Story
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div data-hero="trust" className="pt-8 border-t border-[#E2E8F0]">
                            <p className="text-sm text-[#64748B] mb-4">Trusted by leading universities worldwide</p>
                            <div className="flex items-center space-x-8 opacity-60">
                                <div className="text-sm font-medium">Tbilisi Medical</div>
                                <div className="text-sm font-medium">Tashkent Medical</div>
                                <div className="text-sm font-medium">Charité Berlin</div>
                                <div className="text-sm font-medium">Sechenov University</div>
                            </div>
                        </div>
            </div>

                    {/* Right Content - Premium Image Showcase */}
                    <div data-hero="media" className="relative flex justify-end items-center">
                        <div className="relative w-full max-w-2xl group -mr-4 sm:-mr-8 lg:-mr-12 xl:-mr-16">
                            {/* Main Image Container - Carousel */}
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover:scale-105">
                                <div className="relative w-full h-96 sm:h-[28rem] lg:h-[32rem] overflow-hidden">
                                    {universities.map((university, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                                index === currentUniversityIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        >
                                            <ImageDisplay
                                                src={university.image}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                alt={university.alt}
                                                width={600}
                                                height={500}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white transition-opacity duration-1000">
                                    <h3 className="text-xl font-semibold mb-2">{universities[currentUniversityIndex].name}</h3>
                                    <p className="text-sm opacity-90">{universities[currentUniversityIndex].location}</p>
                                </div>
                                
                                {/* Carousel Indicators */}
                                <div className="absolute bottom-6 right-6 flex gap-2">
                                    {universities.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentUniversityIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                index === currentUniversityIndex 
                                                    ? 'bg-white w-8' 
                                                    : 'bg-white/50 hover:bg-white/75'
                                            }`}
                                            aria-label={`Go to ${universities[index].name}`}
                                        />
                                    ))}
                                </div>

                                {/* Interactive Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9257]/20 to-[#EC651B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <div className="text-2xl font-bold mb-2">🎓</div>
                                        <div className="text-sm font-medium">Click to Learn More</div>
                                    </div>
                                </div>
                            </div>

                            {/* Scholarship Badge */}
                            <div data-hero="badge-float" className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20">
                                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-[#FF9257]/20 w-44 sm:w-52 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FF9257] to-[#EC651B] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                            <span className="text-white font-bold text-lg sm:text-xl">🎓</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-xs sm:text-sm text-[#002448]">Scholarship Awarded</div>
                                            <div className="text-xs text-[#64748B]">Up to 50% off</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Interactive Decorative Elements */}
                            <div className="absolute top-1/2 -left-6 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 bg-[#FF9257] rounded-full opacity-20 animate-float hover:opacity-40 hover:scale-110 transition-all duration-300 cursor-pointer" />
                            <div className="absolute bottom-1/4 -right-6 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 bg-[#EC651B] rounded-full opacity-20 animate-pulse-slow hover:opacity-40 hover:scale-110 transition-all duration-300 cursor-pointer" />

                        </div>
                    </div>
                </div>
                </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                <div className="w-6 h-10 border-2 border-[#FF9257] rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[#FF9257] rounded-full mt-2 animate-pulse"></div>
            </div>
        </div>
        </section>
    );
}
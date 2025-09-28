'use client';

import colors from '@/helpers/colors';
import ImageDisplay from './../ImageDisplay';
import ButtonDisplay from '../ButtonDisplay';
import TypewriterText from '../TypewriterText';
import { useState, useEffect } from 'react';

export default function HomePage() {
    const color = colors();
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero-section relative overflow-hidden pt-20">
            {/* Ultra-Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Interactive Mouse Following Gradient */}
                <div
                    className="absolute inset-0 opacity-8 transition-all duration-1000"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 146, 87, 0.15) 0%, transparent 60%)`
                    }}
                />

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
                    <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>

                        {/* Main Heading */}
                        <div className="space-y-5">
                            <h1 className="text-[#002448] leading-tight">
                                <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                                    Study MBBS & Nursing in
                                </span>
                                <span className="block min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] flex items-center">
                                    <span className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-bold">
                                        <TypewriterText
                                            texts={['Georgia', 'Uzbekistan', 'Russia', 'Eastern Europe']}
                                            speed={150}
                                            deleteSpeed={75}
                                            pauseTime={2500}
                                        />
                                    </span>
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-[#64748B] max-w-2xl leading-relaxed">
                                Specialized in MBBS, Nursing, and medical courses in Georgia, Uzbekistan, and Russia.
                                From application to graduation, we guide you every step of the way to
                                achieve your medical career dreams at top universities in Eastern Europe.
                            </p>
                        </div>


                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
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
                        <div className="pt-8 border-t border-[#E2E8F0]">
                            <p className="text-sm text-[#64748B] mb-4">Trusted by leading universities worldwide</p>
                            <div className="flex items-center space-x-8 opacity-60">
                                <div className="text-sm font-medium">Harvard</div>
                                <div className="text-sm font-medium">MIT</div>
                                <div className="text-sm font-medium">Oxford</div>
                                <div className="text-sm font-medium">Stanford</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Premium Image Showcase */}
                    <div className={`relative flex justify-end items-center ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-full max-w-2xl group -mr-4 sm:-mr-8 lg:-mr-12 xl:-mr-16">
                            {/* Main Image Container */}
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover:scale-105">
                                <ImageDisplay
                                    src="/Bg1.png"
                                    className="w-full h-96 sm:h-[28rem] lg:h-[32rem] object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt="International students at prestigious university"
                                    width={600}
                                    height={500}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Harvard University</h3>
                                    <p className="text-sm opacity-90">Cambridge, Massachusetts</p>
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
                            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20">
                                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-[#FF9257]/20 w-44 sm:w-52 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FF9257] to-[#EC651B] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                            <span className="text-white font-bold text-lg sm:text-xl">🎓</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-xs sm:text-sm text-[#002448]">Scholarship Awarded</div>
                                            <div className="text-xs text-[#64748B]">$50,000/year</div>
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
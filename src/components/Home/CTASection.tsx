'use client';

import { useState, useEffect } from 'react';
import ButtonDisplay from '../ButtonDisplay';

export default function CTASection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('cta');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="cta" className="section-padding bg-gradient-to-br from-[#002448] to-[#1E3A8A] relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF9257]/10 to-[#EC651B]/10"></div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF9257]/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#EC651B]/20 rounded-full blur-3xl animate-pulse-slow"></div>

                {/* Premium Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
            </div>

            <div className="container relative z-10">
                <div className={`text-center space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    {/* Premium Badge */}
                    <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-semibold text-sm">
                        <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                        Ready to Start Your Journey?
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-6">
                        <h2 className="heading-lg text-white">
                            Your Dream University{' '}
                            <span className="bg-gradient-to-r from-[#FF9257] to-[#EC651B] bg-clip-text text-transparent">
                                Awaits
                            </span>
                        </h2>

                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of successful students who have achieved their dreams
                            of studying at the world's most prestigious universities.
                            Let us guide you every step of the way.
                        </p>
                    </div>

                    {/* Premium Features */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-2xl">
                                🎯
                            </div>
                            <h3 className="text-white font-semibold">Personalized Guidance</h3>
                            <p className="text-white/80 text-sm">Tailored advice for your unique academic goals</p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-2xl">
                                🚀
                            </div>
                            <h3 className="text-white font-semibold">Fast Track Process</h3>
                            <p className="text-white/80 text-sm">Streamlined applications with 98% success rate</p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-2xl">
                                💎
                            </div>
                            <h3 className="text-white font-semibold">Premium Support</h3>
                            <p className="text-white/80 text-sm">24/7 assistance throughout your journey</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ButtonDisplay
                            text="Start Your Application"
                            px="px-8 py-4"
                            onclick="Start Application"
                            className="bg-white text-[#002448] hover:bg-white/90"
                        />
                        <ButtonDisplay
                            text="Schedule Free Consultation"
                            px="px-8 py-4"
                            onclick="Schedule Consultation"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-[#002448]"
                        />
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 border-t border-white/20">
                        <p className="text-white/70 text-sm mb-4">Trusted by students from 50+ countries</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            <div className="text-white/60 text-sm">🇺🇸 USA</div>
                            <div className="text-white/60 text-sm">🇬🇧 UK</div>
                            <div className="text-white/60 text-sm">🇨🇦 Canada</div>
                            <div className="text-white/60 text-sm">🇦🇺 Australia</div>
                            <div className="text-white/60 text-sm">🇩🇪 Germany</div>
                            <div className="text-white/60 text-sm">🇫🇷 France</div>
                            <div className="text-white/60 text-sm">🇳🇱 Netherlands</div>
                            <div className="text-white/60 text-sm">🇸🇬 Singapore</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

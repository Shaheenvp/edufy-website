'use client';

import { useEffect, useRef, useState } from 'react';
import { getGsap, getScrollTrigger } from '@/helpers/gsapClient';
import { useGsapReveal } from '@/helpers/useGsapReveal';

export default function StatsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({
        students: 0,
        countries: 0,
        universities: 0,
        successRate: 0
    });

    const sectionRef = useRef<HTMLElement>(null);
    useGsapReveal(sectionRef, { selector: '[data-reveal]', stagger: 0.08 });

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const reduce =
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
        if (reduce) return;

        const gsap = getGsap();
        const ScrollTrigger = getScrollTrigger();
        let didRun = false;

        const st = ScrollTrigger.create({
            trigger: el,
            start: 'top 75%',
            onEnter: () => {
                if (didRun) return;
                didRun = true;
                setIsVisible(true);
                animateCounters();
            },
        });

        return () => {
            st.kill();
            gsap.killTweensOf(el);
        };
    }, []);

    const animateCounters = () => {
        const targets = {
            students: 20,
            countries: 10,
            universities: 10,
            successRate: 98
        };

        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounters({
                students: Math.floor(targets.students * progress),
                countries: Math.floor(targets.countries * progress),
                universities: Math.floor(targets.universities * progress),
                successRate: Math.floor(targets.successRate * progress)
            });

            if (currentStep >= steps) {
                clearInterval(interval);
                setCounters(targets);
            }
        }, stepDuration);
    };

    const stats = [
        {
            id: 1,
            number: counters.students.toLocaleString(),
            suffix: '+',
            label: 'Medical Students Placed',
            description: 'Successfully placed in medical programs',
            icon: '🎓',
            color: 'from-[#FF9257] to-[#EC651B]'
        },
        {
            id: 2,
            number: counters.countries,
            suffix: '+',
            label: 'Focus Countries',
            description: 'Top destinations we specialize in',
            icon: '🌍',
            color: 'from-[#EC651B] to-[#002448]'
        },
        {
            id: 3,
            number: counters.universities,
            suffix: '+',
            label: 'Partner Universities',
            description: 'Trusted universities & colleges',
            icon: '🏛️',
            color: 'from-[#002448] to-[#1E3A8A]'
        },
        {
            id: 4,
            number: counters.successRate,
            suffix: '%',
            label: 'Success Rate',
            description: 'Visa and admission success rate',
            icon: '✅',
            color: 'from-[#1E3A8A] to-[#FF9257]'
        }
    ];

    return (
        <section ref={sectionRef} id="stats" className="section-padding bg-white">
            <div className="container">
                <div data-reveal className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-[#FF9257]/10 rounded-full text-[#FF9257] font-medium text-sm">
                        <span className="w-2 h-2 bg-[#FF9257] rounded-full mr-2 animate-pulse"></span>
                        Our Impact
                    </div>

                    <h2 className="heading-lg text-[#002448]">
                        Numbers That <span className="gradient-text">Speak Volumes</span>
                    </h2>

                    <p className="text-body max-w-2xl mx-auto">
                        Our results speak for themselves. In just a few years, we've helped students
                        start their medical education journey at trusted universities abroad.
                    </p>
                </div>

                {/* Premium Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            data-reveal
                            className="card-premium p-8 text-center group hover-lift"
                        >
                            <div className="space-y-6">
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mx-auto flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>

                                {/* Number */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center space-x-1">
                                        <span className="heading-lg text-[#002448] font-bold">
                                            {stat.number}
                                        </span>
                                        <span className="text-2xl text-[#FF9257] font-bold">
                                            {stat.suffix}
                                        </span>
                                    </div>
                                    <h3 className="heading-sm text-[#002448] font-semibold">
                                        {stat.label}
                                    </h3>
                                    <p className="text-sm text-[#64748B]">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-[#E2E8F0] rounded-full h-2 overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                                        style={{
                                            width: isVisible ? '100%' : '0%',
                                            transitionDelay: `${index * 0.2}s`
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Premium Content */}
                <div data-reveal className="mt-16">
                    <div className="card-premium p-8 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="text-center md:text-left">
                                <h3 className="heading-md text-[#002448] mb-2">Trusted Medical Education Partner</h3>
                                <p className="text-[#64748B]">Expert guidance for your medical career journey</p>
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center space-x-4">
                                    <div className="w-12 h-12 bg-[#FF9257] rounded-full flex items-center justify-center text-white font-bold">🏆</div>
                                    <div className="w-12 h-12 bg-[#EC651B] rounded-full flex items-center justify-center text-white font-bold">⭐</div>
                                    <div className="w-12 h-12 bg-[#002448] rounded-full flex items-center justify-center text-white font-bold">🎯</div>
                                </div>
                            </div>

                            <div className="text-center md:text-right">
                                <h3 className="heading-md text-[#002448] mb-2">24/7 Support</h3>
                                <p className="text-[#64748B]">Round-the-clock assistance for our students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState, useEffect } from 'react';
import colors from '@/helpers/colors';

export default function HomeAbout() {
    const color = colors();
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

        const element = document.getElementById('about');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: '🎓',
            title: 'Medical Education Expertise',
            description: 'Specialized guidance for MBBS, Nursing, and medical courses in Georgia, Uzbekistan, and Russia.'
        },
        {
            icon: '💰',
            title: 'Affordable Medical Education',
            description: 'Complete assistance with applications and securing affordable medical education with scholarships up to $50,000 annually.'
        },
        {
            icon: '✈️',
            title: 'Regional Visa Support',
            description: 'Expert visa assistance for Georgia, Uzbekistan, and Russia with 98% success rate.'
        },
        {
            icon: '🏠',
            title: 'Local Support Network',
            description: 'Housing assistance and ongoing local support through our established networks in Eastern Europe.'
        }
    ];

    const stats = [
        { number: '5,000+', label: 'Medical Students Placed' },
        { number: '3', label: 'Focus Countries' },
        { number: '50+', label: 'Partner Universities' },
        { number: '98%', label: 'Success Rate' }
    ];

    return (
        <section id="about" className="section-padding bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#FF9257]/20 text-[#FF9257] font-medium text-sm">
                            <span className="w-2 h-2 bg-[#FF9257] rounded-full mr-2 animate-pulse"></span>
                            About Edufy
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h2 className="heading-lg text-[#002448]">
                                Your Gateway to{' '}
                                <span className="gradient-text">Global Education</span>
                            </h2>
                            <p className="text-body max-w-lg">
                                With over a decade of experience in international education,
                                we've helped thousands of students achieve their dreams of
                                studying at the world's most prestigious universities.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                                    <div className="heading-md text-[#FF9257] font-bold">{stat.number}</div>
                                    <div className="text-sm text-[#64748B] font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn-premium">
                                Learn More About Us
                            </button>
                            <button className="btn-secondary">
                                Download Brochure
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Features Grid */}
                    <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="card-premium p-6 hover-lift"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#FF9257] to-[#EC651B] rounded-xl flex items-center justify-center text-2xl">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="heading-sm text-[#002448] mb-2">{feature.title}</h3>
                                            <p className="text-body-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
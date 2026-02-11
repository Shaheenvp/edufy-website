'use client';

import { useRef } from 'react';
import { useGsapReveal } from '@/helpers/useGsapReveal';

export default function HomeAbout() {
    const sectionRef = useRef<HTMLElement>(null);
    useGsapReveal(sectionRef, { selector: '[data-reveal]', stagger: 0.08 });

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
            description: 'Housing assistance and ongoing local support through our established networks across Eurasian countries.'
        }
    ];

    const stats = [
        { number: '20+', label: 'Medical Students Placed' },
        { number: '10+', label: 'Focus Countries' },
        { number: '50+', label: 'Partner Universities' },
        { number: '98%', label: 'Success Rate' }
    ];

    return (
        <section ref={sectionRef} id="about" className="section-padding bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div data-reveal className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#FF9257]/20 text-[#FF9257] font-medium text-sm">
                            <span className="w-2 h-2 bg-[#FF9257] rounded-full mr-2 animate-pulse"></span>
                            About Edufy
                        </div>

                        {/* Heading */}
                        <div data-reveal className="space-y-4">
                            <h2 className="heading-lg text-[#002448]">
                                Your Gateway to{' '}
                                <span className="gradient-text">Global Education</span>
                            </h2>
                            <p className="text-body max-w-lg">
                                With 3 years of experience in international education,
                                we've helped thousands of students achieve their dreams of
                                studying at the world's most prestigious universities.
                            </p>
                        </div>

                        {/* Stats */}
                        <div data-reveal className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                                    <div className="heading-md text-[#FF9257] font-bold">{stat.number}</div>
                                    <div className="text-sm text-[#64748B] font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div data-reveal className="flex flex-col sm:flex-row gap-4">
                            <button className="btn-premium">
                                Learn More About Us
                            </button>
                            <button className="btn-secondary">
                                Download Brochure
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Features Grid */}
                    <div>
                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    data-reveal
                                    className="card-premium p-6 hover-lift"
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
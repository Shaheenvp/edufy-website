'use client';

import { useRef, useState } from 'react';
import ButtonDisplay from '../ButtonDisplay';
import Link from 'next/link';
import { programs } from '@/data/programs';
import { useGsapReveal } from '@/helpers/useGsapReveal';

export default function HomeCourses() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeCountry, setActiveCountry] = useState('all');
    const sectionRef = useRef<HTMLElement>(null);
    useGsapReveal(sectionRef, { selector: '[data-reveal]', stagger: 0.06 });

    const categories = [
        { id: 'all', label: 'All Programs' },
        { id: 'mbbs', label: 'MBBS' },
        { id: 'nursing', label: 'Nursing' },
        { id: 'medical', label: 'Medical Courses' },
        { id: 'other', label: 'Other Courses' }
    ];

    const countries = [
        { id: 'all', label: 'All Countries' },
        ...Array.from(new Set(programs.map((c) => c.country)))
            .sort()
            .map((country) => ({ id: country, label: country }))
    ];

    const filteredCourses = programs.filter((course) => {
        const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
        const matchesCountry = activeCountry === 'all' || course.country === activeCountry;
        return matchesCategory && matchesCountry;
    });

    return (
        <section ref={sectionRef} id="course" className="section-padding bg-white">
            <div className="container">
                <div data-reveal className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-[#FF9257]/10 rounded-full text-[#FF9257] font-medium text-sm">
                        <span className="w-2 h-2 bg-[#FF9257] rounded-full mr-2 animate-pulse"></span>
                        Popular Programs
                    </div>

                    <h2 className="heading-lg text-[#002448]">
                        Explore Our <span className="gradient-text">Featured Programs</span>
                    </h2>

                    <p className="text-body max-w-2xl mx-auto">
                        Discover world-class education opportunities across the globe.
                        From undergraduate to PhD programs, we have the perfect match for your academic goals.
                    </p>

                    <div className="pt-2 flex justify-center">
                        <Link href="/programs" className="btn-primary inline-flex items-center gap-2">
                            View All Programs
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                {/* Category Filter */}
                <div data-reveal className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-[#FF9257] text-white shadow-lg'
                                : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#FF9257] hover:text-[#FF9257]'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Country Filter */}
                <div data-reveal className="flex flex-wrap justify-center gap-3 mb-12">
                    {countries.map((country) => (
                        <button
                            key={country.id}
                            onClick={() => setActiveCountry(country.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCountry === country.id
                                ? 'bg-[#002448] text-white shadow-lg'
                                : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#002448] hover:text-[#002448]'
                                }`}
                        >
                            {country.label}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={course.id}
                            data-reveal
                            className={`card-premium hover-lift ${
                                index >= 2 ? 'hidden md:block' : ''
                            } ${
                                index >= 4 ? 'md:hidden lg:block' : ''
                            } ${
                                index >= 6 ? 'lg:hidden' : ''
                            }`}
                        >
                            <div className="relative overflow-hidden rounded-t-xl -m-6 mb-6">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-48 object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = '/Bg1.png';
                                    }}
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                                    ⭐ {course.rating}
                                </div>
                                <div className="absolute bottom-4 left-4 bg-[#FF9257] text-white rounded-full px-3 py-1 text-sm font-medium">
                                    {course.country}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="heading-sm text-[#002448] mb-2 line-clamp-2">{course.title}</h3>
                                    <p className="text-[#64748B] font-medium line-clamp-2">{course.university}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-[#64748B]">Duration:</span>
                                        <p className="font-medium">
                                            {course.durationYears ? `${course.durationYears} Years` : 'Varies'}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-[#64748B]">Tuition:</span>
                                        <p className="font-medium">{course.tuitionDisplay}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                                    <span className="text-sm text-[#64748B]">{course.students} students</span>
                                    <ButtonDisplay
                                        text="Learn More"
                                        px="px-4 py-2"
                                        onclick="Course Details"
                                        variant="outline"
                                        size="sm"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div data-reveal className="text-center mt-16">
                    <div className="card-premium p-8 max-w-2xl mx-auto">
                        <h3 className="heading-md text-[#002448] mb-4">
                            Can't Find What You're Looking For?
                        </h3>
                        <p className="text-body mb-6">
                            Our expert counselors can help you find the perfect program
                            tailored to your academic goals and career aspirations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <ButtonDisplay
                                text="Get Personalized Recommendations"
                                px="px-8 py-4"
                                onclick="Get Recommendations"
                            />
                            <ButtonDisplay
                                text="Schedule Consultation"
                                px="px-8 py-4"
                                onclick="Schedule Consultation"
                                variant="secondary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
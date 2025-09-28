'use client';

import { useState, useEffect } from 'react';
import ButtonDisplay from '../ButtonDisplay';

export default function HomeCourses() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('course');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const categories = [
        { id: 'all', label: 'All Programs' },
        { id: 'mbbs', label: 'MBBS' },
        { id: 'nursing', label: 'Nursing' },
        { id: 'medical', label: 'Medical Courses' },
        { id: 'other', label: 'Other Courses' }
    ];

    const courses = [
        {
            id: 1,
            category: 'mbbs',
            title: 'MBBS Program',
            university: 'Tbilisi State Medical University',
            country: 'Georgia',
            duration: '6 Years',
            tuition: '$8,000/year',
            image: '/mbbs-georgia.jpg',
            rating: 4.8,
            students: 500
        },
        {
            id: 2,
            category: 'nursing',
            title: 'Bachelor of Nursing',
            university: 'Samarkand State Medical Institute',
            country: 'Uzbekistan',
            duration: '4 Years',
            tuition: '$3,500/year',
            image: '/nursing-uzbekistan.jpg',
            rating: 4.7,
            students: 300
        },
        {
            id: 3,
            category: 'mbbs',
            title: 'MBBS Program',
            university: 'Moscow Medical Academy',
            country: 'Russia',
            duration: '6 Years',
            tuition: '$12,000/year',
            image: '/mbbs-russia.jpg',
            rating: 4.9,
            students: 800
        },
        {
            id: 4,
            category: 'medical',
            title: 'Dentistry Program',
            university: 'Georgian American University',
            country: 'Georgia',
            duration: '5 Years',
            tuition: '$10,000/year',
            image: '/dentistry-georgia.jpg',
            rating: 4.6,
            students: 200
        },
        {
            id: 5,
            category: 'nursing',
            title: 'Master of Nursing',
            university: 'Tashkent Medical Academy',
            country: 'Uzbekistan',
            duration: '2 Years',
            tuition: '$4,000/year',
            image: '/nursing-masters.jpg',
            rating: 4.7,
            students: 150
        },
        {
            id: 6,
            category: 'phd',
            title: 'Environmental Science',
            university: 'Stanford University',
            country: 'USA',
            duration: '5 Years',
            tuition: 'Fully Funded',
            image: '/sustainability.jpg',
            rating: 4.9,
            students: 150
        }
    ];

    const filteredCourses = activeCategory === 'all'
        ? courses
        : courses.filter(course => course.category === activeCategory);

    return (
        <section id="course" className="section-padding bg-white">
            <div className="container">
                <div className={`text-center space-y-6 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
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
                </div>

                {/* Category Filter */}
                <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
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

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={course.id}
                            className={`card-premium hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
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
                                    <h3 className="heading-sm text-[#002448] mb-2">{course.title}</h3>
                                    <p className="text-[#64748B] font-medium">{course.university}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-[#64748B]">Duration:</span>
                                        <p className="font-medium">{course.duration}</p>
                                    </div>
                                    <div>
                                        <span className="text-[#64748B]">Tuition:</span>
                                        <p className="font-medium">{course.tuition}</p>
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
                <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
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
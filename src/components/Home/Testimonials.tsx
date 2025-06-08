'use client';

import React, { useEffect, useState } from 'react';
import Headers from './../Headers';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Mohh Jumah",
        role: "Senior Developer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultrices nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
        avatar: "https://imgs.search.brave.com/unTidX37-QLkjXuD7yiK6NDCe1kEpvvtM4dZ35paIPU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/NTA4ODA0My9mci92/ZWN0b3JpZWwvaWMl/QzMlQjRuZS1kZS1w/cm9maWwtdXRpbGlz/YXRldXItYXZhdGFy/LW91LWljJUMzJUI0/bmUtZGUtcGVyc29u/bmUtcGhvdG8tZGUt/cHJvZmlsLXN5bWJv/bGUtcG9ydHJhaXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW1vTlJaall0VnBI/LUkwbUFlLVpmalZr/dXdnQ09xSC1CUlhG/TGhRa1pvUDg9"
    },
    {
        id: 2,
        name: "John Mark",
        role: "Data Analyst",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultrices nisl amet non, quis enim velit tempus. Interdum duis imperdiet",
        avatar: "https://imgs.search.brave.com/unTidX37-QLkjXuD7yiK6NDCe1kEpvvtM4dZ35paIPU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/NTA4ODA0My9mci92/ZWN0b3JpZWwvaWMl/QzMlQjRuZS1kZS1w/cm9maWwtdXRpbGlz/YXRldXItYXZhdGFy/LW91LWljJUMzJUI0/bmUtZGUtcGVyc29u/bmUtcGhvdG8tZGUt/cHJvZmlsLXN5bWJv/bGUtcG9ydHJhaXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW1vTlJaall0VnBI/LUkwbUFlLVpmalZr/dXdnQ09xSC1CUlhG/TGhRa1pvUDg9"
    },
    {
        id: 3,
        name: "Sarah Wilson",
        role: "UX Designer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultrices nisl amet non, quis enim velit tempus.",
        avatar: "https://imgs.search.brave.com/unTidX37-QLkjXuD7yiK6NDCe1kEpvvtM4dZ35paIPU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/NTA4ODA0My9mci92/ZWN0b3JpZWwvaWMl/QzMlQjRuZS1kZS1w/cm9maWwtdXRpbGlz/YXRldXItYXZhdGFy/LW91LWljJUMzJUI0/bmUtZGUtcGVyc29u/bmUtcGhvdG8tZGUt/cHJvZmlsLXN5bWJv/bGUtcG9ydHJhaXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW1vTlJaall0VnBI/LUkwbUFlLVpmalZr/dXdnQ09xSC1CUlhG/TGhRa1pvUDg9"
    }
];

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shownTestimonials, setShownTestimonials] = useState<Set<number>>(new Set([0]));

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
            return nextIndex;
        });
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
            return nextIndex;
        });
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setShownTestimonials(prev => new Set([...prev, index]));
    };

    const getNextUniqueIndex = (currentIdx: number) => {
        // If all testimonials have been shown, reset and start over
        if (shownTestimonials.size >= testimonials.length) {
            setShownTestimonials(new Set([0]));
            return 0;
        }

        // Find next unshown testimonial
        for (let i = 1; i <= testimonials.length; i++) {
            const nextIdx = (currentIdx + i) % testimonials.length;
            if (!shownTestimonials.has(nextIdx)) {
                return nextIdx;
            }
        }

        // Fallback (shouldn't reach here)
        return (currentIdx + 1) % testimonials.length;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const nextIndex = getNextUniqueIndex(currentIndex);
            setCurrentIndex(nextIndex);
            setShownTestimonials(prev => new Set([...prev, nextIndex]));
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentIndex, shownTestimonials]);

    return (
        <section className="py-8 md:py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <Headers text='Reviews' />
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
                        What Our{' '}<span className="text-orange-500">Students</span>{' '}Say About Us
                    </h2>
                </div>

                <div className="relative">
                    {/* Desktop Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="hidden md:flex absolute top-1/2 -left-16 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl border border-gray-100 items-center justify-center hover:shadow-2xl hover:scale-105 hover:bg-orange-50 transition-all duration-300 group"
                        aria-label="Previous testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform duration-200">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08" className="text-gray-700 group-hover:text-orange-500"></path>
                        </svg>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl border border-gray-100 items-center justify-center hover:shadow-2xl hover:scale-105 hover:bg-orange-50 transition-all duration-300 group"
                        aria-label="Next testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform duration-200">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08" className="text-gray-700 group-hover:text-orange-500"></path>
                        </svg>
                    </button>

                    {/* Testimonials Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out mb-1"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                                    {/* Mobile: Single Column, Desktop: Two Columns */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                        {/* Current Testimonial */}
                                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <div className="flex items-center mb-4 md:mb-6">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-3 md:mr-4"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 text-base md:text-lg">{testimonial.name}</h3>
                                                    <p className="text-orange-500 text-xs md:text-sm font-medium">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{testimonial.content}</p>
                                        </div>

                                        {/* Second Testimonial (Desktop Only) */}
                                        <div className="hidden md:block bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <div className="flex items-center mb-6">
                                                <img
                                                    src={testimonials[(currentIndex + 1) % testimonials.length].avatar}
                                                    alt={testimonials[(currentIndex + 1) % testimonials.length].name}
                                                    className="w-14 h-14 rounded-full object-cover mr-4"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 text-lg">
                                                        {testimonials[(currentIndex + 1) % testimonials.length].name}
                                                    </h3>
                                                    <p className="text-orange-500 text-sm font-medium">
                                                        {testimonials[(currentIndex + 1) % testimonials.length].role}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {testimonials[(currentIndex + 1) % testimonials.length].content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation Buttons */}
                    <div className="flex mt-6 justify-between md:justify-center items-center px-[1em] space-x-4">
                        <div className="flex md:hidden justify-center mt-6 space-x-4">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200"
                                aria-label="Previous testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"></path>
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200"
                                aria-label="Next testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
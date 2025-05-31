'use client';

import React, { useState } from 'react';
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

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <Headers text='Reviews' />
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our{' '}<span className="text-orange-500">Students</span>{' '}Say About Us
                    </h2>
                </div>

                <div className="relative ">
                    <button onClick={prevTestimonial} className="absolute top-1/2 left-[-30] -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200 group" aria-label="Previous testimonial">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"></path></svg>
                    </button>
                    <button onClick={nextTestimonial} className="absolute right-[-30] top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200 group" aria-label="Next testimonial">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg>
                    </button>

                    {/* Testimonials */}
                    <div className="overflow-hidden h-[16em] ">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-8" >
                                    <div className="grid md:grid-cols-2 gap-8 items-start">
                                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <div className="flex items-center mb-6">
                                                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                                                    <p className="text-orange-500 text-sm font-medium">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed"> {testimonial.content}</p>
                                        </div>
                                        {testimonials[currentIndex + 1] && (
                                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                                                <div className="flex items-center mb-6">
                                                    <img src={testimonials[(currentIndex + 1) % testimonials.length].avatar} alt={testimonials[(currentIndex + 1) % testimonials.length].name} className="w-14 h-14 rounded-full object-cover mr-4" />
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 text-lg"> {testimonials[(currentIndex + 1) % testimonials.length].name} </h3>
                                                        <p className="text-orange-500 text-sm font-medium"> {testimonials[(currentIndex + 1) % testimonials.length].role} </p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed"> {testimonials[(currentIndex + 1) % testimonials.length].content}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button key={index} onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400' }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
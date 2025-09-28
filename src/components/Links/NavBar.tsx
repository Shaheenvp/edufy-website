'use client';

import colors from './../../helpers/colors';
import ImageDisplay from './../ImageDisplay';
import ButtonDisplay from './../ButtonDisplay';
import DrawerUi from '../Drawer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar() {
    const color = colors();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'course'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: any, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setActiveSection(targetId);
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'about', label: 'About Us', href: '#about' },
        { id: 'course', label: 'Courses', href: '#course' },
    ];

    return (
        <>
            <nav className={`premium-navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100'
                    : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex justify-between items-center h-16 lg:h-20 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}>
                        {/* Logo */}
                        <div className="flex-shrink-0 group">
                            <Link href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
                                <div className="relative">
                                    <ImageDisplay
                                        src="/Edufy-Icon.png"
                                        alt="Edufy - Study Abroad Consultancy"
                                        className='h-10 lg:h-12 w-auto transition-all duration-500 group-hover:scale-110'
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF9257] to-[#EC651B] opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={(e) => handleSmoothScroll(e, item.id)}
                                    className={`relative group px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${activeSection === item.id
                                            ? 'text-white bg-gradient-to-r from-[#FF9257] to-[#EC651B] shadow-lg shadow-orange-500/25'
                                            : 'text-gray-700 hover:text-[#FF9257] hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    {activeSection === item.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9257] to-[#EC651B] rounded-xl animate-pulse-slow"></div>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <ButtonDisplay
                                text="Get Started"
                                px="px-6 py-3"
                                onclick="Contact Us"
                            />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF9257] to-[#EC651B] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                aria-label="Toggle mobile menu"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center items-center">
                                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                                        }`}></span>
                                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                        }`}></span>
                                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                                        }`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl">
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={(e) => handleSmoothScroll(e, item.id)}
                                    className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeSection === item.id
                                            ? 'text-white bg-gradient-to-r from-[#FF9257] to-[#EC651B] shadow-lg'
                                            : 'text-gray-700 hover:text-[#FF9257] hover:bg-gray-50'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <ButtonDisplay
                                    text="Get Started"
                                    px="px-6 py-3 w-full"
                                    onclick="Contact Us"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Backdrop for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
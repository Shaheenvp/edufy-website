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
    };

    const navItems = [
        { id: 'about', label: 'About Us', href: '#about' },
        { id: 'course', label: 'Courses', href: '#course' },
    ];

    return (
        <nav className={`nav-premium fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'scrolled' : ''
        }`}>
            <div className="container">
                <div className={`flex justify-between items-center h-20 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}>
                    {/* Logo */}
                    <div className="hover-scale">
                        <ImageDisplay 
                            src="/Edufy-Icon.png" 
                            alt="Edufy - Study Abroad Consultancy" 
                            className='h-12 w-auto transition-all duration-300 hover:scale-105' 
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link 
                                key={item.id}
                                href={item.href} 
                                onClick={(e) => handleSmoothScroll(e, item.id)}
                                className={`relative group font-medium transition-all duration-300 ${
                                    activeSection === item.id 
                                        ? 'text-[#FF9257]' 
                                        : 'text-[#002448] hover:text-[#FF9257]'
                                }`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF9257] to-[#EC651B] transition-all duration-300 ${
                                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                            </Link>
                        ))}
                        
                        <div className="ml-4">
                            <ButtonDisplay 
                                text="Get Started" 
                                px="px-6 py-3" 
                                onclick="Contact Us" 
                            />
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <DrawerUi />
                    </div>
                </div>
            </div>
        </nav>
    );
}
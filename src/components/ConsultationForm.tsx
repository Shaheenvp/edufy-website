'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

interface FormData {
    name: string;
    email: string;
    phone: string;
    education: string;
    place: string;
}

const ConsultationForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        education: '',
        place: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // WhatsApp number (update this with your actual WhatsApp number)
    const WHATSAPP_NUMBER = '919400343442'; // Format: country code + number (no + or spaces)

    useEffect(() => {
        // Check if form has been shown before
        const formShown = localStorage.getItem('consultationFormShown');
        if (formShown === 'true') {
            setHasShown(true);
            return;
        }

        // Scroll detection logic
        const handleScroll = () => {
            if (hasShown) return;

            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Show form after scrolling 50% of viewport height
            if (scrollPosition > windowHeight * 0.5) {
                setIsVisible(true);
                setHasShown(true);
                // Mark as shown in localStorage
                localStorage.setItem('consultationFormShown', 'true');
                // Remove scroll listener after showing
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasShown]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format message for WhatsApp
        const message = `*New Consultation Request - Edufy Overseas*

📝 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🎓 *Education:* ${formData.education}
📍 *Location:* ${formData.place}

_Submitted via Edufy Website_`;

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        // Simulate brief loading
        await new Promise(resolve => setTimeout(resolve, 800));

        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');

        // Reset form and close
        setFormData({
            name: '',
            email: '',
            phone: '',
            education: '',
            place: '',
        });
        setIsSubmitting(false);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Form Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden border border-[#FF9257]/20">
                            {/* Decorative gradient overlay - Using website theme colors */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9257] to-[#EC651B]" />

                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
                                aria-label="Close"
                            >
                                <CloseIcon className="text-[#002448]" />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#002448] mb-2">
                                    Book a Free Consultation
                                </h2>
                                <p className="text-[#64748B] text-sm">
                                    Fill in your details and we'll get back to you soon!
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#002448] mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#002448] focus:ring-2 focus:ring-[#FF9257] focus:border-transparent transition-all duration-200 outline-none"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#002448] mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#002448] focus:ring-2 focus:ring-[#FF9257] focus:border-transparent transition-all duration-200 outline-none"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#002448] mb-1">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        pattern="[0-9]{10}"
                                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#002448] focus:ring-2 focus:ring-[#FF9257] focus:border-transparent transition-all duration-200 outline-none"
                                        placeholder="10-digit phone number"
                                    />
                                </div>

                                {/* Education */}
                                <div>
                                    <label htmlFor="education" className="block text-sm font-medium text-[#002448] mb-1">
                                        Education Level *
                                    </label>
                                    <select
                                        id="education"
                                        name="education"
                                        value={formData.education}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#002448] focus:ring-2 focus:ring-[#FF9257] focus:border-transparent transition-all duration-200 outline-none"
                                    >
                                        <option value="">Select your education level</option>
                                        <option value="High School">High School</option>
                                        <option value="Undergraduate">Undergraduate</option>
                                        <option value="Graduate">Graduate</option>
                                        <option value="Postgraduate">Postgraduate</option>
                                        <option value="Doctorate">Doctorate</option>
                                    </select>
                                </div>

                                {/* Place */}
                                <div>
                                    <label htmlFor="place" className="block text-sm font-medium text-[#002448] mb-1">
                                        Location *
                                    </label>
                                    <input
                                        type="text"
                                        id="place"
                                        name="place"
                                        value={formData.place}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#002448] focus:ring-2 focus:ring-[#FF9257] focus:border-transparent transition-all duration-200 outline-none"
                                        placeholder="City, State"
                                    />
                                </div>

                                {/* Submit Button - Using website theme gradient */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#FF9257] to-[#EC651B] hover:shadow-lg text-white font-semibold shadow-md hover:shadow-[#FF9257]/30 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Opening WhatsApp...
                                        </span>
                                    ) : (
                                        'Book Free Consultation'
                                    )}
                                </button>

                                {/* WhatsApp Info */}
                                <p className="text-xs text-center text-[#64748B] mt-2">
                                    You'll be redirected to WhatsApp to complete your consultation request
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ConsultationForm;

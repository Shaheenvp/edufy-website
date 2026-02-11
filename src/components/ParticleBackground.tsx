'use client';

import { useEffect, useRef } from 'react';

interface Orb {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    hue: number;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const orbsRef = useRef<Orb[]>([]);
    const animationRef = useRef<number | null>(null);
    const timeRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createOrbs = () => {
            const orbs: Orb[] = [];
            // Fewer orbs for a cleaner look
            const orbCount = 8;

            for (let i = 0; i < orbCount; i++) {
                orbs.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    // Much slower movement
                    vx: (Math.random() - 0.5) * 0.15,
                    vy: (Math.random() - 0.5) * 0.15,
                    // Larger, softer orbs
                    size: Math.random() * 150 + 100,
                    // Very subtle opacity
                    opacity: Math.random() * 0.03 + 0.02,
                    // Color variation between blue and orange theme
                    hue: Math.random() > 0.5 ? 210 : 25 // Blue or Orange
                });
            }
            orbsRef.current = orbs;
        };

        const animate = () => {
            // Subtle gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#f8fafc');
            gradient.addColorStop(0.5, '#f1f5f9');
            gradient.addColorStop(1, '#e2e8f0');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            timeRef.current += 0.005;

            orbsRef.current.forEach((orb) => {
                // Smooth, slow movement
                orb.x += orb.vx;
                orb.y += orb.vy;

                // Gentle bounce at edges
                if (orb.x < -orb.size || orb.x > canvas.width + orb.size) orb.vx *= -1;
                if (orb.y < -orb.size || orb.y > canvas.height + orb.size) orb.vy *= -1;

                // Create radial gradient for soft glow effect
                const gradient = ctx.createRadialGradient(
                    orb.x, orb.y, 0,
                    orb.x, orb.y, orb.size
                );

                // Pulsing effect using sine wave
                const pulse = Math.sin(timeRef.current + orb.x) * 0.01 + orb.opacity;

                if (orb.hue === 210) {
                    // Blue theme (matches #002448)
                    gradient.addColorStop(0, `rgba(0, 36, 72, ${pulse * 1.5})`);
                    gradient.addColorStop(0.5, `rgba(0, 36, 72, ${pulse * 0.5})`);
                    gradient.addColorStop(1, 'rgba(0, 36, 72, 0)');
                } else {
                    // Orange theme (matches #FF9257)
                    gradient.addColorStop(0, `rgba(255, 146, 87, ${pulse * 1.5})`);
                    gradient.addColorStop(0.5, `rgba(255, 146, 87, ${pulse * 0.5})`);
                    gradient.addColorStop(1, 'rgba(255, 146, 87, 0)');
                }

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        createOrbs();
        animate();

        const handleResize = () => {
            resizeCanvas();
            createOrbs();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    );
}

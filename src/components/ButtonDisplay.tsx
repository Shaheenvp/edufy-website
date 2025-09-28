'use client'
import colors from "@/helpers/colors"
import { useState } from "react"

interface ButtonDisplayProps {
  text: string;
  onclick: string;
  py?: string;
  px?: string;
  bg?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ButtonDisplay({ 
  text, 
  onclick, 
  py = "py-3", 
  px = "px-6", 
  bg = true, 
  variant = 'primary',
  size = 'md',
  className = ''
}: ButtonDisplayProps) {
    const color = colors()
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
        console.log(onclick)
        setTimeout(() => setIsClicked(false), 200)
    }

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(255, 146, 87, 0.3)'
                }
            case 'secondary':
                return {
                    background: 'transparent',
                    color: color.headerText,
                    border: `2px solid ${color.primaryColor}`,
                    boxShadow: 'none'
                }
            case 'outline':
                return {
                    background: 'transparent',
                    color: color.headerText,
                    border: `1px solid var(--border)`,
                    boxShadow: 'none'
                }
            default:
                return {
                    background: bg ? color.primaryColor : color.headerText,
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }
        }
    }

    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return 'text-sm py-2 px-4'
            case 'lg':
                return 'text-lg py-4 px-8'
            default:
                return 'text-base py-3 px-6'
        }
    }

    const baseStyles = getVariantStyles()
    const sizeStyles = getSizeStyles()

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
                ...baseStyles,
                transform: isClicked ? 'scale(0.98)' : isHovered ? 'scale(1.02)' : 'scale(1)',
                boxShadow: isHovered 
                    ? variant === 'primary' 
                        ? '0 8px 25px rgba(255, 146, 87, 0.4)' 
                        : '0 4px 15px rgba(0, 36, 72, 0.15)'
                    : baseStyles.boxShadow
            }}
            className={`
                ${sizeStyles}
                font-semibold rounded-xl
                transition-all duration-300 ease-out
                relative overflow-hidden
                focus:outline-none focus:ring-4 focus:ring-[#FF9257]/20
                ${isHovered ? 'shadow-lg' : ''}
                ${isClicked ? 'animate-bounce-slow' : ''}
                ${className}
            `}>
            
            <span className="relative z-10 flex items-center justify-center gap-2">
                {text}
                {isHovered && variant === 'primary' && (
                    <span className="animate-bounce-slow">→</span>
                )}
            </span>
            
            {/* Shimmer effect for primary buttons */}
            {variant === 'primary' && (
                <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500"
                    style={{
                        opacity: isHovered ? 0.2 : 0,
                        transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
                    }}
                />
            )}
            
            {/* Hover overlay for secondary/outline buttons */}
            {(variant === 'secondary' || variant === 'outline') && (
                <div 
                    className="absolute inset-0 bg-gradient-to-r from-[#FF9257] to-[#EC651B] opacity-0 transition-opacity duration-300"
                    style={{
                        opacity: isHovered ? 1 : 0
                    }}
                />
            )}
        </button>
    )
}
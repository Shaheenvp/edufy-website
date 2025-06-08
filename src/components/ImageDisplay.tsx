'use client'
import Image from "next/image";
import { useState } from "react";

interface ImageDisplayProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  onLoadingComplete?: () => void;
  onError?: () => void;
}

export default function ImageDisplay({src, alt, width = 500, height = 300, fill = false, className = '', quality = 75, onLoadingComplete, onError}: ImageDisplayProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    onLoadingComplete?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`} style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}>
        <span>Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ width: fill ? '100%' : "1em", height: fill ? '100%' : "1em" }}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-1 border-gray-400"></div>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        quality={quality}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} ${className} transition-opacity duration-300`}
        onLoad={handleLoadingComplete}
        onError={handleError}
        unoptimized={true}
      />
    </div>
  );
}

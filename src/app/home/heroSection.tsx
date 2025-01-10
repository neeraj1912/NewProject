"use client";

import React, { useState, useEffect, useCallback, memo } from 'react';

interface DotProps {
  active: boolean;
  onClick: () => void;
}

interface SlideProps {
  image: string;
  active: boolean;
}

const Dot = memo(({ active, onClick }: DotProps) => (
  <button
    className={`h-2 w-2 rounded-full transition-all duration-300 ${
      active ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-gray-300'
    }`}
    onClick={onClick}
    aria-label={`Navigate to slide ${onClick}`}
  />
));

Dot.displayName = 'Dot';

const Slide = memo(({ image, active }: SlideProps) => (
  <div
    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
      active ? 'opacity-100' : 'opacity-0'
    }`}
    style={{ backgroundImage: `url(${image})` }}
    role="img"
    aria-hidden={!active}
  />
));

Slide.displayName = 'Slide';

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/network-aug-desktop.jpg",
    "/images/bathroomDesktop.jpg",
    "/images/Shiny-black-fauce-Web-Bannners-oct-16.jpg",
    "/images/Rose-Gold-fauce-Web-Bannner-new.jpg",
    "/images/Pillars.jpg",
  ];

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play effect (now always running)
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevSlide();
      if (e.key === 'ArrowRight') goToNextSlide();
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {images.map((image, index) => (
        <Slide
          key={image}
          image={image}
          active={index === currentIndex}
        />
      ))}

      {/* Navigation arrows */}
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
        <button
          onClick={goToPrevSlide}
          className="rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
          aria-label="Previous slide"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
          aria-label="Next slide"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Contact Us Button */}
      <button 
        onClick={() => window.location.href = '/contact'}
        className="absolute bottom-4 left-4 bg-white/90 hover:bg-white text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
      >
        <svg 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Contact Us
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(HeroSection);
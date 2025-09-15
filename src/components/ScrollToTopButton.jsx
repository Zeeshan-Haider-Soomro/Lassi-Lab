import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollPercent(scrolled);

      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circle config
  const radius = 24;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-23 right-9 z-50 p-0 bg-transparent border-none cursor-pointer "
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform rotate-[-90deg]"
      >
        <circle
          stroke="#d1d5db" // Tailwind gray-300 for background track
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#dc2626" // Tailwind red-600 for progress
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-stroke duration-300 ease-out"
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <FaArrowUp className="text-red-600 text-xl" />
      </div>
    </button>
  );
};

export default ScrollToTopButton;

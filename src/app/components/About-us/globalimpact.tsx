'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5B1A7D] mb-2">
      {count}{suffix}
    </div>
  );
}

export default function GlobalImpact() {
  return (
    <section className="bg-[#FFF2D5] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair text-[#5B1A7D] text-center mb-6">
          Global Impact. Tangible Results.
        </h2>

        {/* Description */}
        <p className="text-center text-black/80 text-base md:text-2xl max-w-5xl mx-auto mb-16">
          We are a collective of thinkers, makers, and innovators dedicated to solving the toughest 
          challenges through artificial intelligence and machine learning.
        </p>

        {/* Top Horizontal Line */}
        <div className="w-full h-px bg-black/10 mb-12"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Stat 1 */}
          <div className="text-center">
            <AnimatedCounter end={10} suffix="+" />
            <div className="text-xs md:text-sm font-semibold text-black tracking-wider">
              SUCCESSFUL PROJECTS DELIVERED
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <AnimatedCounter end={8} suffix="+" />
            <div className="text-xs md:text-sm font-semibold text-black tracking-wider">
            ACTIVE CLIENTS ACROSS DIFFERENT INDUSTRIES
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <AnimatedCounter end={5} suffix="+" />
            <div className="text-xs md:text-sm font-semibold text-black tracking-wider">
              INDUSTRIES SERVED
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <AnimatedCounter end={1} suffix="+" />
            <div className="text-xs md:text-sm font-semibold text-black tracking-wider">
            SHIPPING SCALABLE DIGITAL SOLUTIONS
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="w-full h-px bg-black/10 mt-12"></div>
      </div>
    </section>
  );
}


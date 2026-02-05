
import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../constants';

const Counter: React.FC<{ value: string }> = ({ value }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract the numeric part and the suffix (e.g., "250" and "+")
  const numericValue = parseInt(value.replace(/[^0-9.]/g, '')) || 0;
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = numericValue;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div ref={elementRef} className="flex flex-col items-center">
      <p className="text-6xl md:text-8xl font-black gradient-text tracking-tighter tabular-nums">
        {count}{suffix}
      </p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="relative py-48 bg-black overflow-hidden border-t border-white/5">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.05)_0%,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-24">
          <span className="text-yellow-500 font-black tracking-[0.4em] uppercase text-xs mb-6 block">Proof of Excellence</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">The Number <br/><span className="gradient-text">Speaks</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="reveal flex flex-col items-center text-center space-y-4" style={{ transitionDelay: `${index * 150}ms` }}>
              <Counter value={stat.value} />
              <div className="h-px w-12 bg-yellow-500/30"></div>
              <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom divider line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Stats;

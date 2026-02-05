
import React, { useState, useEffect } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  images: string[];
  theme?: 'yellow' | 'orange' | 'blue' | 'purple';
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, images, theme = 'yellow' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const themeClasses = {
    yellow: 'from-yellow-500 via-orange-400 to-red-400',
    orange: 'from-orange-500 via-red-500 to-pink-500',
    blue: 'from-blue-500 via-cyan-400 to-emerald-400',
    purple: 'from-purple-600 via-pink-500 to-red-400',
  };

  const accentColor = {
    yellow: 'bg-yellow-500',
    orange: 'bg-orange-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-600',
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Slideshow Layer */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-all duration-[2000ms] ease-in-out ${
            index === currentIndex ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
          }`}
        >
          <img
            src={img}
            alt={`${title} background ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/0 to-black z-[1]"></div>
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-reveal">
          <span className={`font-black tracking-[0.6em] uppercase mb-4 block text-xs md:text-sm ${accentColor[theme].replace('bg-', 'text-')}`}>
            {subtitle}
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? `bg-gradient-to-r ${themeClasses[theme]} bg-clip-text text-fill-transparent -webkit-background-clip-text -webkit-text-fill-color-transparent` : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <div className="mt-10 flex justify-center">
            <div className={`w-32 h-1.5 rounded-full ${accentColor[theme]} shadow-[0_0_20px_rgba(0,0,0,0.5)]`}></div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 transition-all duration-700 rounded-full cursor-pointer ${
              i === currentIndex ? `w-12 ${accentColor[theme]}` : 'w-3 bg-white/10 hover:bg-white/30'
            }`}
            onClick={() => setCurrentIndex(i)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default PageHero;

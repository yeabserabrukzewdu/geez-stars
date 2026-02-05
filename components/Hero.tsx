
import React from 'react';
import Logo from './icons/Logo';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden py-32 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60 scale-110 transition-transform duration-[20s] ease-linear"
          poster="https://res.cloudinary.com/dlfdjcuat/image/upload/v1770216522/Screenshot_2026-02-04_174807_bg6zbq.png"
        >
          <source 
            src="https://res.cloudinary.com/dlfdjcuat/video/upload/v1770122833/VID_20221228_025231_288_rnb5h6.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          <div className="relative mb-6 md:mb-8 reveal">
            <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-10 animate-pulse"></div>
           </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 reveal">
            <span className="block mb-1 text-white opacity-90">GEEZ</span>
            <span className="gradient-text uppercase">DIGITALS</span>
          </h1>
          
          <p className="max-w-xl text-base md:text-lg text-gray-300 font-light tracking-wide mb-10 leading-relaxed reveal">
            Crafting <span className="text-white font-bold border-b border-yellow-500/40">cinematic visual narratives</span> that redefine how African brands communicate on the world stage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 reveal">
            <a href="#works" className="group relative px-10 py-4 bg-yellow-500 text-black font-black rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)] uppercase tracking-widest overflow-hidden text-xs">
              <span className="relative z-10">VIEW PORTFOLIO</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#services" className="px-10 py-4 glass text-white font-black rounded-full hover:bg-white/10 transition-all duration-300 uppercase tracking-widest border border-white/10 text-xs">
              EXPERTISE
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 right-16 flex flex-col items-end reveal-right" style={{ transitionDelay: '1s' }}>
        <span className="text-[10px] font-black tracking-[0.8em] text-gray-500 uppercase mb-6 rotate-90 origin-right translate-y-12 translate-x-4">ESTABLISHED 2018</span>
        <div className="w-1.5 h-32 bg-gradient-to-b from-yellow-500 to-transparent rounded-full shadow-[0_0_20px_rgba(234,179,8,1)]"></div>
      </div>
    </section>
  );
};

export default Hero;

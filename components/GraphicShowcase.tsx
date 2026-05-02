
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { graphicDesignWorks } from '../constants';

interface GraphicShowcaseProps {
  title?: string;
  subtitle?: string;
  isHome?: boolean;
}

const GraphicCard: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const revealClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right';
  
  return (
    <div className={`${revealClass} group relative overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-square bg-gray-900 border border-white/5 transition-all duration-700 hover:border-yellow-500/40 perspective-card shadow-2xl`}>
      <img 
        src={item.image} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>

      <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
        <span className="text-yellow-500 text-[8px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-3 px-4 py-1.5 bg-black/60 backdrop-blur-xl rounded-full w-fit border border-white/10 block">
          {item.category}
        </span>
        <h3 className="text-xl md:text-3xl font-black text-white mb-2 uppercase tracking-tighter leading-none">
          {item.title}
        </h3>
        <p className="text-gray-400 text-[10px] md:text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const StackedSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % graphicDesignWorks.length);
  const prev = () => setIndex((prev) => (prev - 1 + graphicDesignWorks.length) % graphicDesignWorks.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[700px] flex items-center justify-center pt-10">
      <div className="relative w-full max-w-lg md:max-w-3xl aspect-[4/3] px-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {graphicDesignWorks.map((item, i) => {
            const relativeIndex = (i - index + graphicDesignWorks.length) % graphicDesignWorks.length;
            
            // Render only top 3 cards for performance and visual clarity
            if (relativeIndex > 2) return null;

            return (
              <motion.div
                key={item.id}
                style={{ 
                  zIndex: graphicDesignWorks.length - relativeIndex,
                  cursor: relativeIndex === 0 ? 'grab' : 'default'
                }}
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ 
                  opacity: relativeIndex === 0 ? 1 : 1 - relativeIndex * 0.4,
                  scale: 1 - relativeIndex * 0.08,
                  y: relativeIndex * 35,
                  rotateX: -relativeIndex * 5,
                  filter: `blur(${relativeIndex * 2}px)`
                }}
                exit={{ 
                  opacity: 0, 
                  x: -300, 
                  rotate: -15,
                  transition: { duration: 0.4 }
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 150, 
                  damping: 18,
                  mass: 0.8
                }}
                className="absolute inset-0"
                drag={relativeIndex === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -100) next();
                  if (info.offset.x > 100) prev();
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] md:rounded-[5rem] bg-gray-900 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] group">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 md:bottom-16 md:left-16 md:right-16">
                    <span className="text-yellow-500 font-black tracking-[0.4em] uppercase mb-4 block text-[8px] md:text-[10px]">
                      {item.category}
                    </span>
                    <h3 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-xl font-light italic leading-relaxed line-clamp-2 max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls Overlay */}
      <div className="absolute -bottom-12 md:bottom-0 left-1/2 -translate-x-1/2 flex items-center space-x-8 z-[60]">
        <button 
          onClick={prev}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all hover:scale-110 active:scale-95"
        >
          <span className="text-xl md:text-2xl">←</span>
        </button>
        <div className="flex space-x-3">
          {graphicDesignWorks.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'bg-yellow-500 w-10 md:w-16' : 'bg-white/20 w-3 md:w-4'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={next}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all hover:scale-110 active:scale-95"
        >
          <span className="text-xl md:text-2xl">→</span>
        </button>
      </div>
    </div>
  );
};

const GraphicShowcase: React.FC<GraphicShowcaseProps> = ({ 
  title = "Visual Identities", 
  subtitle = "The Art of Design",
  isHome = false 
}) => {
  return (
    <section className={`py-24 md:py-32 ${isHome ? 'bg-[#050505]' : 'bg-black'} relative overflow-hidden`}>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-yellow-500/[0.02] blur-[150px] rounded-full pointer-events-none -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isHome ? 'items-center text-center' : 'md:flex-row justify-between items-end'} mb-16 md:mb-24 gap-8 reveal`}>
          <div className={isHome ? 'max-w-3xl' : 'max-w-2xl'}>
            <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-6 md:mb-8 block text-xs">
              {subtitle}
            </span>
            <h2 className={`text-5xl ${isHome ? 'md:text-[10rem]' : 'md:text-9xl'} font-black uppercase tracking-tighter leading-none`}>
              <span className="text-mask"><span>{title.split(' ')[0]}</span></span> <br/>
              <span className="text-mask" style={{ transitionDelay: '0.2s' }}>
                <span className="gradient-text">{title.split(' ').slice(1).join(' ')}</span>
              </span>
            </h2>
          </div>
          {!isHome && (
            <p className="max-w-md text-gray-500 text-lg md:text-xl font-light italic leading-relaxed md:text-right">
              Crafting distinct visual worlds that define local excellence on a global scale.
            </p>
          )}
        </div>

        {isHome ? (
          <StackedSlider />
        ) : (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto`}>
            {graphicDesignWorks.map((item, idx) => (
              <GraphicCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GraphicShowcase;

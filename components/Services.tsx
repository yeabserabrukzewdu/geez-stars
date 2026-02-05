
import React from 'react';
import { services } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="reveal flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-6 block text-xs">Premium Capabilities</span>
            <h2 className="text-5xl md:text-8xl font-black leading-none uppercase tracking-tighter">ELITE <br/> <span className="gradient-text">SOLUTIONS</span></h2>
          </div>
          <p className="max-w-md text-gray-500 text-xl font-light italic leading-relaxed">
            Merging Hollywood-grade production with high-velocity digital strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass p-12 rounded-[3rem] border border-white/5 hover:border-yellow-500/40 transition-all duration-700 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[80px] group-hover:bg-yellow-500/10 transition-all duration-700"></div>
              
              <div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-yellow-500 group-hover:text-black group-hover:rotate-[360deg] transition-all duration-1000 shadow-xl">
                <span className="text-2xl font-black">0{index + 1}</span>
              </div>
              
              <h3 className="text-3xl font-black mb-6 text-white group-hover:text-yellow-500 transition-colors uppercase tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-10 leading-relaxed text-lg font-light flex-grow">
                {service.description}
              </p>

              <div className="space-y-4 pt-8 border-t border-white/5">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-4 shadow-[0_0_10px_rgba(234,179,8,1)]"></span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

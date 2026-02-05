
import React from 'react';
import { clients } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-black overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-center text-[10px] tracking-[0.6em] font-black text-gray-500 uppercase">Trusted By Industry Leaders</h2>
      </div>
      
      <div className="relative">
        {/* Infinite Scroll Wrapper */}
        <div className="flex space-x-12 infinite-scroll items-center">
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[250px] flex items-center justify-center p-8  opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-32 max-w-[180px] object-contain filter "
              />
            </div>
          ))}
        </div>
        
        </div>
    </section>
  );
};

export default Clients;

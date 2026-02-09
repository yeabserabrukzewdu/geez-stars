
import React from 'react';
import { clients } from '../constants';

const Clients: React.FC = () => {
  // Split the 16 clients into two distinct groups of 8
  const row1Items = clients.slice(0, 8);
  const row2Items = clients.slice(8, 16);

  return (
    <section id="clients" className="py-24 bg-black overflow-hidden border-y border-white/5 w-full">
      <div className="container mx-auto px-6 mb-16 reveal">
        <h2 className="text-center text-[10px] tracking-[0.6em] font-black text-gray-500 uppercase">Trusted By Industry Leaders</h2>
      </div>
      
      <div className="flex flex-col space-y-4 md:space-y-8">
        {/* Row 1: Right to Left (First 8 Logos) */}
        <div className="relative w-full">
          <div className="flex space-x-8 md:space-x-12 infinite-scroll items-center">
            {[...row1Items, ...row1Items].map((client, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex-shrink-0 w-[180px] md:w-[250px] flex items-center justify-center p-6 md:p-8 opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                    className="max-h-24 md:max-h-24 max-w-[140px] md:max-w-[180px] object-contain filter "
                />
              </div>
            ))}
          </div>
          {/* Gradient Overlays for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Row 2: Left to Right (Second 8 Logos - COMPLETELY DIFFERENT) */}
        <div className="relative w-full">
          <div className="flex space-x-8 md:space-x-12 infinite-scroll-reverse items-center">
            {[...row2Items, ...row2Items].map((client, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex-shrink-0 w-[180px] md:w-[250px] flex items-center justify-center p-6 md:p-8 opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                   className="max-h-24 md:max-h-24 max-w-[140px] md:max-w-[180px] object-contain filter "
                />
              </div>
            ))}
          </div>
          {/* Gradient Overlays for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

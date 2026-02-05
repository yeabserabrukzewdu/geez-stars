
import React from 'react';

const Map: React.FC = () => {
  // Approximate coordinates for Bole KKare, Addis Ababa
  const address = "Bole KKare Building, Addis Ababa, Ethiopia";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-black border-y border-white/5">
      {/* Dark Filter Overlay for Map */}
      <div className="absolute inset-0 z-0 grayscale invert opacity-100 brightness-75 contrast-125 pointer-events-none">
        <iframe
          title="Geez Digitals Location"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.076809554452!2d38.775127087158204!3d8.993372800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b851a46288909%3A0x148a0ed2e75168fe!2sGEEZ%20STARS!5e0!3m2!1sen!2set!4v1770127133302!5m2!1sen!2set"
        ></iframe>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none"></div>

      {/* Floating Info Card */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:pl-32 pointer-events-none">
        <div className="glass p-8 rounded-[2.5rem] border border-white/10 max-w-sm reveal pointer-events-auto transform hover:scale-105 transition-transform duration-500 shadow-2xl">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white tracking-tight">VISIT OUR STUDIO</h4>
              <p className="text-yellow-500 text-xs font-black tracking-widest uppercase">Addis Ababa, HQ</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Bole KKare Building, 2nd Floor 2F-017. Come by for a coffee and let's discuss your next cinematic project.
          </p>
          
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full p-4 bg-white/5 hover:bg-yellow-500 rounded-2xl transition-all duration-300"
          >
            <span className="text-xs font-black tracking-widest uppercase text-white group-hover:text-black">Open in Google Maps</span>
            <span className="text-white group-hover:text-black group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* Pulsing Marker Decoration (Visual only) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none lg:translate-x-[20%]">
        <div className="relative">
          <div className="absolute -inset-4 bg-yellow-500/30 rounded-full animate-ping"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-black shadow-[0_0_15px_rgba(234,179,8,0.8)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Map;


import React from 'react';
import { teamMembers } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-48 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-32">
          <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs">The Visionaries</span>
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
            GEEZ <span className="gradient-text">STARS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-xl font-light italic">
            Meet the architects of light and shadow who bring every cinematic vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 reveal-stagger">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden mb-8 border border-white/5 group-hover:border-yellow-500/30 transition-all duration-700 shadow-2xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Floating Bio on Hover */}
                <div className="absolute inset-x-8 bottom-8 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                   <div className="glass p-6 rounded-[2rem] border border-white/20">
                      <p className="text-white text-xs font-medium leading-relaxed italic">
                        "{member.bio}"
                      </p>
                   </div>
                </div>
              </div>
              
              <div className="text-center group-hover:translate-y-[-10px] transition-transform duration-700">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-yellow-500 transition-colors">
                  {member.name}
                </h3>
                <span className="text-gray-500 font-black tracking-[0.3em] uppercase text-[10px]">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

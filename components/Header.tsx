
import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import Logo from './icons/Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleHash = () => setCurrentHash(window.location.hash || '#home');
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  return (
       <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 pt-4`}>
      <div className={`container mx-auto max-w-6xl rounded-2xl transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl border border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="flex items-center justify-between px-6">
          <a href="#home" className="flex items-center space-x-3 group">
             <img 
    src="/geez-stars-logo.png"  // Update this path to match your file location
    alt="My Logo"
    width="48"
    height="48"
    style={{ objectFit: 'contain' }}  // Ensures it scales nicely without distortion
  />
   
   <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">GEEZ STARS</span>
              <span className="text-[10px] tracking-[0.3em] font-bold text-yellow-500">CREATIVE STUDIO</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`text-xs font-bold tracking-widest transition-all uppercase relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-yellow-500 after:transition-all ${currentHash === link.href ? 'text-white after:w-full' : 'text-gray-400 hover:text-white after:w-0 hover:after:w-full'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
             <a href="#contact" className="hidden md:block px-6 py-2.5 bg-white text-black text-xs font-black rounded-full hover:bg-yellow-500 transition-colors uppercase">
              Let's Talk
            </a>
            
            <button 
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="space-y-1.5 overflow-hidden">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Integrated Mobile Dropdown */}
      <div className={`md:hidden absolute left-4 right-4 transition-all duration-500 ease-in-out origin-top z-[101] ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-b-[2.5rem] p-8 shadow-3xl mt-[-1rem] pt-12">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-black tracking-tighter transition-colors ${currentHash === link.href ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}`}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
            <div className="pt-6 border-t border-white/5">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full py-5 bg-yellow-500 text-black font-black text-center rounded-[2rem] text-lg uppercase tracking-widest shadow-xl">
                Start Project
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;

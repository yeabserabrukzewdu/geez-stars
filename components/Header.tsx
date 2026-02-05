
import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import Logo from './icons/Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              <span className="text-[10px] tracking-[0.3em] font-bold text-yellow-500">Film Production</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-all uppercase relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all hover:after:w-full"
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
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-4 h-0.5 bg-white ml-auto"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-[101] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button 
          className="absolute top-10 right-10 text-4xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          &times;
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-black tracking-tighter hover:text-yellow-500"
          >
            {link.label.toUpperCase()}
          </a>
        ))}
        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-10 py-4 bg-yellow-500 text-black font-black rounded-full text-xl uppercase">
          Start Project
        </a>
      </div>
    </header>
  );
};

export default Header;

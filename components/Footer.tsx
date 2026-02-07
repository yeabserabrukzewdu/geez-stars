
import React from 'react';
import { socialLinks } from '../constants';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TelegramIcon from './icons/TelegramIcon';
import TiktokIcon from './icons/TiktokIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import TwitterIcon from './icons/TwitterIcon';

const socialIconMap: { [key: string]: React.FC<{className?: string}> } = {
    Facebook: FacebookIcon,
    Instagram: InstagramIcon,
    LinkedIn: LinkedInIcon,
    Telegram: TelegramIcon,
    TikTok: TiktokIcon,
    Twitter: TwitterIcon,
    YouTube: YoutubeIcon
}

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-5">
             <a href="#home" className="flex items-center space-x-3 group">
             <img 
    src="/geez-stars-logo.png"  // Update this path to match your file location
    alt="My Logo"
    width="55"
    height="55"
    style={{ objectFit: 'contain' }}  // Ensures it scales nicely without distortion
  />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">GEEZ STARS</span>
              <span className="text-[10px] tracking-[0.3em] font-bold text-yellow-500">Film Production</span>
            </div>
          </a>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              A full-service digital marketing powerhouse in Ethiopia. We blend cinematic production with strategic growth to make your brand impossible to ignore.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => {
                  const Icon = socialIconMap[link.name];
                  return (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-white/10 transition-all border border-white/5"
                      aria-label={link.name}
                    >
                        {Icon && <Icon className="h-5 w-5" />}
                    </a>
                  )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-black tracking-widest uppercase text-white mb-8">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex flex-col">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Our Studio</span>
                <span className="text-gray-300">Bole KKare Building, 2nd Floor 2F-017, Addis Ababa</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Hotline</span>
                <span className="text-2xl font-bold text-yellow-500">+251 93-634-0034</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</span>
                <span className="text-gray-300">geezsstars@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-black tracking-widest uppercase text-white mb-8">Start Your Journey</h3>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <p className="text-gray-400 mb-6 text-sm">Ready to elevate your brand content? Message us directly on Telegram for a quick quote.</p>
              <a href="https://t.me/geezdigitals" target="_blank" className="block w-full py-4 bg-yellow-500 text-black font-black text-center rounded-2xl hover:bg-yellow-400 transition-colors uppercase tracking-widest text-xs">
                CHART WITH AN EXPERT
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500">
          <p className="text-sm font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} GEEZ DIGITALS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

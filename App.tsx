
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Works from './components/Works';
import Team from './components/Team';
import Clients from './components/Clients';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PageHero from './components/PageHero';
import Map from './components/Map';
import ChatWidget from './components/ChatWidget';
import { 
  pricingPlans, 
  pageHeroImages,
  latestImpact,
  aboutContent
} from './constants';

const HomePage = () => {
  return (
    <div className="space-y-0">
      <Hero />

      {/* GEEZ STARS GLIMPSE */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="reveal-left">
              <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs">Behind The Lens</span>
              <h2 className="text-5xl md:text-[7rem] font-black mb-8 md:mb-12 uppercase tracking-tighter leading-[0.8]">
                THE <span className="gradient-text">STARS</span> <br/> 
                BEHIND <br/> 
                THE GEEZ.
              </h2>
              <div className="max-w-lg">
                <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light mb-12 italic border-l-4 border-yellow-500/30 pl-8">
                  Meet the elite collective of visual architects. We don't just record content; we engineer cinematic legends. Every frame is a testament to our obsession with light, shadow, and digital dominance.
                </p>
                <a href="#about" className="inline-block px-12 py-5 bg-white/5 border border-white/10 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-yellow-500 hover:text-black transition-all duration-500 group">
                  EXPLORE OUR DNA <span className="inline-block ml-4 group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-8 reveal-right">
              <div className="aspect-[9/16] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group shadow-2xl">
                <img 
                  src="./home 1.webp" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  alt="Team Glimpse 1" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest block mb-2">Cinematic Dept.</span>
                  <div className="h-0.5 w-0 group-hover:w-full bg-yellow-500 transition-all duration-700"></div>
                </div>
              </div>
              
              <div className="aspect-[9/16] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group shadow-2xl mt-12 md:mt-20">
                <img 
                  src="./home 2.webp" 
                  className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 scale-110 group-hover:scale-100" 
                  alt="Team Glimpse 2" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest block mb-2">VFX Mastery</span>
                  <div className="h-0.5 w-0 group-hover:w-full bg-yellow-500 transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative min-h-[80vh] bg-black overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ clipPath: 'inset(0)', WebkitClipPath: 'inset(0)' }}>
          <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
            <img 
              src={pageHeroImages.stickyBackground} 
              className="w-full h-full object-cover opacity-30 scale-125 hover:scale-110 transition-transform duration-[5s]"
              alt="Cinematic Camera Detail"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-12">
            <div className="max-w-2xl reveal-left">
              <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs">Our Specialization</span>
              <h2 className="text-6xl md:text-9xl font-black mb-10 uppercase tracking-tighter leading-[0.8]">
                <span className="text-mask"><span>Expertise</span></span> <br/>
                <span className="text-mask"><span className="gradient-text">Spotlight</span></span>
              </h2>
              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-xl font-light reveal" style={{ transitionDelay: '0.2s' }}>
                Engineering <span className="text-white font-bold underline decoration-yellow-500/50 underline-offset-8">cinematic visual dominance</span> for high-stakes brands.
              </p>
            </div>
            
            <div className="reveal-right hidden md:block">
              <a href="#services" className="group flex flex-col items-center space-y-6 text-yellow-500 font-black tracking-widest uppercase text-xs">
                <div className="w-24 h-24 rounded-full border border-yellow-500/30 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-700 transform group-hover:rotate-180 group-hover:scale-110">
                  <span className="text-3xl">↓</span>
                </div>
                <span>SCROLL TO DISCOVER</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 reveal-stagger">
            {[
              { id: '01', title: 'Cinematic Content', desc: 'RED and ARRI grade production values tailored for global impact.' },
              { id: '02', title: 'Viral Strategy', desc: 'Platform-engineered short-form content that dominates algorithms.' },
              { id: '03', title: 'Elite Corporate', desc: 'Executive-level identity branding for market leaders.' }
            ].map((item, idx) => (
              <div key={idx} className="glass p-12 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 hover:border-yellow-500/20 transition-all duration-700 group perspective-card">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500/10 border border-yellow-500/20 rounded-[1.25rem] md:rounded-[1.5rem] flex items-center justify-center text-yellow-500 font-black text-2xl mb-8 md:mb-12 shadow-[0_0_40px_rgba(234,179,8,0.1)] group-hover:bg-yellow-500 group-hover:text-black transition-all duration-700">
                  {item.id}
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-white uppercase tracking-tighter">{item.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black space-y-24 md:space-y-32">
        <section className="container mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16 md:mb-24 reveal">
            <h2 className="text-6xl md:text-[10rem] font-black mb-8 uppercase tracking-tighter leading-none">
              <span className="text-mask"><span>LATEST</span></span> <br/>
              <span className="text-mask"><span className="gradient-text">IMPACT</span></span>
            </h2>
            <p className="text-gray-500 text-sm md:text-lg font-medium tracking-[0.4em] uppercase">The Art of Visual Storytelling.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {latestImpact.map((item, idx) => (
              <div key={idx} className={`group relative aspect-[16/10] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl transition-all duration-1000 ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                 <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" alt={item.title} />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700"></div>
                 <div className="absolute bottom-10 left-10 right-10 md:bottom-16 md:left-16 md:right-16 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                   <div>
                     <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                     <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2 md:px-8 md:py-3 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em]">{item.tag}</span>
                   </div>
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl md:text-2xl font-black shadow-2xl">↗</div>
                 </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className="space-y-0">
          <Clients />
          <Stats />
        </div>
      </div>

      <div className="bg-black">
        <FAQ />
        <Map />
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="page-enter bg-black">
    <PageHero title="OUR JOURNEY" subtitle="The Legacy of Geez Stars" images={pageHeroImages.team} theme="purple" />
    
    <section className="py-24 md:py-32 container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal-left mb-16 md:mb-24">
           <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs">The Manifesto</span>
           <h2 className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter leading-[0.8]">ARCHITECTS <br/>OF <span className="gradient-text">MOTION.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          <div className="reveal">
            <p className="text-gray-400 text-xl md:text-3xl leading-relaxed font-light italic border-l-8 border-yellow-500 pl-8 md:pl-12 mb-12">
              {aboutContent.manifesto}
            </p>
            <div className="flex items-center space-x-6">
               <div className="w-20 h-px bg-yellow-500"></div>
               <span className="text-white font-black tracking-widest uppercase text-xs">Since 2018</span>
            </div>
          </div>
          <div className="reveal-right relative">
             <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" alt="Geez Studio" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             </div>
             <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] animate-float">
                <span className="text-3xl md:text-5xl font-black gradient-text">6+</span>
                <p className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">Years of Excellence</p>
             </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-32 md:py-48 bg-[#050505] overflow-hidden">
       <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full"></div>
       </div>

       <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
             <div className="reveal-left group">
                <div className="relative aspect-video rounded-[2rem] md:rounded-[4rem] overflow-hidden mb-8 md:mb-12 border border-white/10 group-hover:border-purple-500/30 transition-all duration-700 shadow-2xl">
                   <img src={aboutContent.vision.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Vision" />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
                   <div className="absolute top-6 left-6 md:top-10 md:left-10">
                      <span className="px-6 py-2 md:px-8 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-black text-[9px] md:text-[10px] uppercase tracking-widest">FUTURE FOCUS</span>
                   </div>
                </div>
                <h3 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 text-white uppercase tracking-tighter">{aboutContent.vision.title}</h3>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors">
                   {aboutContent.vision.description}
                </p>
             </div>

             <div className="reveal-right group lg:mt-32">
                <div className="relative aspect-video rounded-[2rem] md:rounded-[4rem] overflow-hidden mb-8 md:mb-12 border border-white/10 group-hover:border-yellow-500/30 transition-all duration-700 shadow-2xl">
                   <img src={aboutContent.mission.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Mission" />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
                   <div className="absolute top-6 left-6 md:top-10 md:left-10">
                      <span className="px-6 py-2 md:px-8 md:py-3 bg-yellow-500 rounded-full text-black font-black text-[9px] md:text-[10px] uppercase tracking-widest">ACTIVE IMPACT</span>
                   </div>
                </div>
                <h3 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 text-white uppercase tracking-tighter">{aboutContent.mission.title}</h3>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors">
                   {aboutContent.mission.description}
                </p>
             </div>
          </div>
       </div>
    </section>

    <section className="py-24 md:py-32 bg-black">
       <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 reveal">
             <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">THE <span className="gradient-text">GEEZ WAY</span></h2>
             <p className="text-gray-500 text-lg md:text-xl font-light">Our uncompromising principles in digital craft.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 reveal-stagger">
             {aboutContent.philosophy.map((item, idx) => (
                <div key={idx} className="glass p-12 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 hover:border-yellow-500/20 transition-all duration-700 group perspective-card">
                   <div className="text-yellow-500 text-3xl md:text-4xl font-black mb-6 md:mb-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 origin-left transition-all">0{idx+1}</div>
                   <h4 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">{item.text}</p>
                </div>
             ))}
          </div>
       </div>
    </section>

    <Team />
  </div>
);

const ServicesPage = () => (
  <div className="page-enter">
    <PageHero title="PREMIUM SERVICES" subtitle="The Strategy" images={pageHeroImages.services} theme="yellow" />
    <Services />
  </div>
);

const PricingPage = () => (
  <div className="page-enter">
    <PageHero title="INVESTMENT PLANS" subtitle="The Commitment" images={pageHeroImages.pricing} theme="orange" />
    <Pricing />
  </div>
);

const ContactPage = () => (
  <div className="page-enter">
    <PageHero title="LET'S CONNECT" subtitle="The Beginning" images={pageHeroImages.contact} theme="purple" />
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
          <div className="reveal-left">
            <h1 className="text-6xl md:text-[11rem] font-black mb-12 md:mb-20 uppercase leading-[0.8] tracking-tighter">IGNITE <br/>YOUR <br/><span className="gradient-text">BRAND.</span></h1>
            <div className="space-y-12 md:space-y-20 reveal-stagger">
              <div className="flex items-center space-x-8 md:space-x-12 group">
                <div className="w-20 h-20 md:w-28 md:h-28 glass rounded-[2rem] md:rounded-[3rem] flex items-center justify-center text-3xl md:text-5xl group-hover:scale-110 transition-all duration-700">📍</div>
                <div>
                  <h4 className="font-black text-white text-2xl md:text-3xl uppercase tracking-widest mb-1 md:mb-2">HQ Studio</h4>
                  <p className="text-gray-500 text-lg md:text-xl">Bole KKare, Addis Ababa</p>
                </div>
              </div>
              <div className="flex items-center space-x-8 md:space-x-12 group">
                <div className="w-20 h-20 md:w-28 md:h-28 glass rounded-[2rem] md:rounded-[3rem] flex items-center justify-center text-3xl md:text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">⚡</div>
                <div>
                  <h4 className="font-black text-white text-2xl md:text-3xl uppercase tracking-widest mb-1 md:mb-2">Direct</h4>
                  <p className="text-yellow-500 font-black text-2xl md:text-4xl tracking-tighter">+251 92 298 1639</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="glass p-12 md:p-20 rounded-[3rem] md:rounded-[6rem] border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <form className="space-y-8 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4 md:space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4 md:ml-6">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white outline-none focus:border-yellow-500 focus:bg-white/10 transition-all text-lg md:text-xl" />
                </div>
                <div className="space-y-4 md:space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4 md:ml-6">Email Address</label>
                  <input type="email" placeholder="hello@brand.com" className="w-full bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white outline-none focus:border-yellow-500 focus:bg-white/10 transition-all text-lg md:text-xl" />
                </div>
                <div className="space-y-4 md:space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4 md:ml-6">The Brief</label>
                  <textarea placeholder="Describe your cinematic vision..." rows={3} className="w-full bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white outline-none focus:border-yellow-500 focus:bg-white/10 transition-all text-lg md:text-xl"></textarea>
                </div>
                <button className="w-full py-6 md:py-10 bg-yellow-500 text-black font-black rounded-[2rem] md:rounded-[3rem] hover:scale-105 transition-all uppercase tracking-[0.4em] text-lg md:text-xl shadow-2xl shadow-yellow-500/20">
                  Ignite Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Map />
  </div>
);

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#home': return <HomePage />;
      case '#about': return <AboutPage />;
      case '#services': return <ServicesPage />;
      case '#works': return (
        <div className="page-enter">
          <PageHero title="THE PORTFOLIO" subtitle="Visual Proof" images={pageHeroImages.works} theme="blue" />
          <Works />
        </div>
      );
      case '#pricing': return <PricingPage />;
      case '#contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-[#000000] min-h-screen text-gray-200 selection:bg-yellow-500/40 relative">
      <div className="fixed top-0 left-0 w-full h-1.5 z-[1000] overflow-hidden pointer-events-none">
        <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 shadow-[0_0_20px_rgba(234,179,8,1)]" 
             style={{ width: '0%', animation: 'scrollProgress linear forwards', animationTimeline: 'scroll()' }}></div>
      </div>

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[60%] h-[60%] bg-yellow-500/[0.03] rounded-full blur-[200px] animate-float"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[50%] h-[50%] bg-orange-500/[0.02] rounded-full blur-[200px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main key={currentPath}>
          {renderContent()}
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
};

export default App;

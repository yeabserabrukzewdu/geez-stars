
import React, { useState, useRef } from 'react';
import { works, movieWorks, conferenceWorks, musicWorks, documentaryWorks, eventWorks, commercialWorks } from '../constants';
import PlayIcon from './icons/PlayIcon';

const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const VideoCard: React.FC<{ 
  item: any, 
  index: number, 
  layout?: 'portrait' | 'landscape' 
}> = ({ item, index, layout = 'portrait' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const youTubeId = getYouTubeId(item.videoUrl);

  const togglePlay = () => {
    if (youTubeId) {
      setIsPlaying(true); // YouTube always starts playing when visible in this setup
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const isLandscape = layout === 'landscape';
  const aspectRatioClass = isLandscape ? 'aspect-[16/9]' : 'aspect-[9/16]';
  const revealClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right';

  // Fallback high-quality cinematic image if local path is wrong
  const displayImage = imgError 
    ? "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200" 
    : item.image;

  return (
    <div className={`${revealClass} group relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] ${aspectRatioClass} bg-black shadow-3xl border border-white/5 transition-all duration-700 hover:border-yellow-500/40 perspective-card`}>
      {/* Thumbnail Layer */}
      {!isPlaying && (
        <img 
          src={displayImage} 
          alt={item.title} 
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100 group-hover:opacity-40 z-0" 
        />
      )}
      
      {/* Video Content Layer */}
      {youTubeId ? (
        isPlaying && (
          <iframe
            src={`https://www.youtube.com/embed/${youTubeId}?autoplay=1&rel=0&modestbranding=1`}
            className="absolute inset-0 w-full h-full z-10"
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      ) : (
        <video
          ref={videoRef}
          src={item.videoUrl}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          loop
          playsInline
          onClick={togglePlay}
        />
      )}

      {/* Cinematic Gradient / Info Layer - Refined for better image visibility */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-70'}`}></div>

      <div className={`absolute inset-x-8 md:inset-x-12 bottom-8 md:bottom-12 transition-all duration-700 ${isPlaying ? 'translate-y-20 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <span className="text-yellow-500 text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-4 px-5 py-2 md:px-6 md:py-2 bg-black/60 backdrop-blur-xl rounded-full w-fit border border-white/10 block">
          {item.category}
        </span>
        <h3 className={`${isLandscape ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'} font-black text-white mb-3 uppercase tracking-tighter leading-none`}>
          {item.title}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed mb-6 line-clamp-2 max-w-lg">
          {item.description}
        </p>
      </div>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <button 
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-2xl transition-all duration-700 z-20 group-hover:scale-110"
        >
          <PlayIcon className="w-10 h-10 md:w-12 md:h-12 ml-1" />
        </button>
      )}

      {/* Direct Play Interaction Area for Mobile/Touch */}
      {!isPlaying && !youTubeId && <div onClick={togglePlay} className="absolute inset-0 z-10 cursor-pointer" />}
    </div>
  );
};

const Works: React.FC = () => {
  return (
    <section id="works" className="py-24 md:py-32 bg-[#000000] relative overflow-hidden space-y-24 md:space-y-32">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/[0.03] blur-[200px] rounded-full pointer-events-none animate-pulse"></div>

      {/* SECTION 1: SOCIAL MASTERY (Vertical) */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 reveal">
          <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs">The Viral Strategy</span>
          <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-none">
            <span className="text-mask"><span>SOCIAL</span></span> <br/>
            <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">MASTERY</span></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {works.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="portrait" />
          ))}
        </div>
      </div>

      {/* SECTION 2: CINEMATIC PRODUCTIONS (Horizontal) */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-6 md:mb-8 block text-xs">Feature Films & Short Movies</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              <span className="text-mask"><span>LOCAL</span></span> <br/>
              <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">MOVIES</span></span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-lg md:text-xl font-light italic leading-relaxed md:text-right">
            Redefining Ethiopian cinema with high-end digital workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {movieWorks.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="landscape" />
          ))}
        </div>
      </div>

      {/* SECTION 3: MUSIC CLIPS (Horizontal) */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-16 md:mb-24 gap-8 reveal">
          <div className="max-w-2xl md:text-right">
            <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-6 md:mb-8 block text-xs md:text-right">Visual Rhythms</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              <span className="text-mask"><span>MUSIC</span></span> <br/>
              <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">CLIPS</span></span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-lg md:text-xl font-light italic leading-relaxed text-left">
            Capturing the pulse of the industry through high-energy visual storytelling.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {musicWorks.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="landscape" />
          ))}
        </div>
      </div>

      {/* SECTION 4: EVENT EXCELLENCE (Horizontal) */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 reveal">
          <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs">Continental Summits & Expos</span>
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            <span className="text-mask"><span>CONFERENCE</span></span> <br/>
            <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">PROGRAMS</span></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {conferenceWorks.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="landscape" />
          ))}
        </div>
      </div>

      {/* SECTION 5: DOCUMENTARY MASTERY (Horizontal) */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-6 md:mb-8 block text-xs">Authentic Storytelling & Docu-series</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              <span className="text-mask"><span>DOCU</span></span> <br/>
              <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">MASTERY</span></span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-lg md:text-xl font-light italic leading-relaxed md:text-right">
            Preserving history and capturing current narratives with uncompromising authenticity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {documentaryWorks.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="landscape" />
          ))}
        </div>
      </div>
      

      {/* SECTION 6: EVENT MASTERY (Horizontal) - NEW SECTION */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-16 md:mb-24 gap-8 reveal">
          <div className="max-w-2xl md:text-right">
            <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-6 md:mb-8 block text-xs md:text-right">Continental Impact</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              <span className="text-mask"><span>EVENT</span></span> <br/>
              <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">MASTERY</span></span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-lg md:text-xl font-light italic leading-relaxed text-left">
            From high-energy galas to massive industry expos, we capture the atmosphere of excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {eventWorks.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="landscape" />
          ))}
        </div>
      </div>

       {/* SECTION 5: COMMERCIAL (Horizontal) */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-6 md:mb-8 block text-xs">Cinematic Branding & Visual Storytelling</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              <span className="text-mask"><span>COMMERCIAL</span></span> <br/>
              <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">CLIP</span></span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-lg md:text-xl font-light italic leading-relaxed md:text-right">
            Showcasing brands with cinematic flair and compelling narratives.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {commercialWorks.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="landscape" />
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="reveal py-16 md:py-24 text-center container mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[3rem] md:rounded-[6rem] border border-white/5 max-w-5xl mx-auto bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700">
          <p className="text-gray-400 italic text-2xl md:text-3xl leading-relaxed font-light">
            "We maintain absolute discretion for our high-profile clients. <br/>
            <span className="text-white font-black not-italic uppercase tracking-widest mt-8 md:mt-10 block underline decoration-yellow-500/30 underline-offset-8 cursor-pointer hover:text-yellow-500 transition-colors">
              Request Access to Secret Vault
            </span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;

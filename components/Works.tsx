
import React, { useState, useRef } from 'react';
import { works, movieWorks, conferenceWorks, musicWorks } from '../constants';
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

  return (
    <div className={`${revealClass} group relative overflow-hidden rounded-[4rem] ${aspectRatioClass} bg-black shadow-3xl border border-white/5 transition-all duration-700 hover:border-yellow-500/40 perspective-card`}>
      {/* Thumbnail Layer */}
      {!isPlaying && (
        <img 
          src={item.image} 
          alt={item.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-30 z-0" 
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

      {/* Cinematic Gradient / Info Layer */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent transition-opacity duration-700 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-80'}`}></div>

      <div className={`absolute inset-x-12 bottom-12 transition-all duration-700 ${isPlaying ? 'translate-y-20 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4 px-6 py-2 bg-black/60 backdrop-blur-xl rounded-full w-fit border border-white/10 block">
          {item.category}
        </span>
        <h3 className={`${isLandscape ? 'text-5xl' : 'text-4xl'} font-black text-white mb-3 uppercase tracking-tighter leading-none`}>
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 line-clamp-2 max-w-lg">
          {item.description}
        </p>
      </div>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <button 
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-2xl transition-all duration-700 z-20 group-hover:scale-110"
        >
          <PlayIcon className="w-12 h-12 ml-1" />
        </button>
      )}

      {/* Direct Play Interaction Area for Mobile/Touch */}
      {!isPlaying && !youTubeId && <div onClick={togglePlay} className="absolute inset-0 z-10 cursor-pointer" />}
    </div>
  );
};

const Works: React.FC = () => {
  return (
    <section id="works" className="py-48 bg-[#000000] relative overflow-hidden space-y-48">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/[0.03] blur-[200px] rounded-full pointer-events-none animate-pulse"></div>

      {/* SECTION 1: SOCIAL MASTERY (Vertical) */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-32 reveal">
          <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs">The Viral Strategy</span>
          <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none">
            <span className="text-mask"><span>SOCIAL</span></span> <br/>
            <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">MASTERY</span></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {works.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="portrait" />
          ))}
        </div>
      </div>

      {/* SECTION 2: CINEMATIC PRODUCTIONS (Horizontal) */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 reveal">
          <div className="max-w-2xl">
            <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs">Feature Films & Short Movies</span>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              <span className="text-mask"><span>LOCAL</span></span> <br/>
              <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">MOVIES</span></span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-xl font-light italic leading-relaxed text-right">
            Redefining Ethiopian cinema with high-end digital workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {movieWorks.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="landscape" />
          ))}
        </div>
      </div>

      {/* SECTION 3: MUSIC CLIPS (Horizontal) */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-32 gap-12 reveal">
          <div className="max-w-2xl text-right">
            <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs text-right">Visual Rhythms</span>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              <span className="text-mask"><span>MUSIC</span></span> <br/>
              <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">CLIPS</span></span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-xl font-light italic leading-relaxed text-left">
            Capturing the pulse of the industry through high-energy visual storytelling.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {musicWorks.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="landscape" />
          ))}
        </div>
      </div>

      {/* SECTION 4: EVENT EXCELLENCE (Horizontal) */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-32 reveal">
          <span className="text-yellow-500 font-black tracking-[0.5em] uppercase mb-8 block text-xs">Continental Summits & Expos</span>
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            <span className="text-mask"><span>CONFERENCE</span></span> <br/>
            <span className="text-mask" style={{ transitionDelay: '0.2s' }}><span className="gradient-text">PROGRAMS</span></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {conferenceWorks.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} layout="landscape" />
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="reveal mt-48 text-center container mx-auto px-6">
        <div className="glass p-20 rounded-[6rem] border border-white/5 max-w-5xl mx-auto bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700">
          <p className="text-gray-400 italic text-3xl leading-relaxed font-light">
            "We maintain absolute discretion for our high-profile clients. <br/>
            <span className="text-white font-black not-italic uppercase tracking-widest mt-10 block underline decoration-yellow-500/30 underline-offset-8 cursor-pointer hover:text-yellow-500 transition-colors">
              Request Access to Secret Vault
            </span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;

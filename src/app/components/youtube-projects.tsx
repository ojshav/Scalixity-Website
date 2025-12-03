'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const videoIds = [
  "EZhu3rh-LB4",
  "cMpIZsZROAc",
  "gtBVvFeRm-4",
  "JpRnWuI4aLU"
];

export function YouTubeProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const sendPlayerCommand = (
    command: 'playVideo' | 'pauseVideo' | 'unMute'
  ) => {
    if (!iframeRef.current) {
      return;
    }

    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: command, args: [] }),
      '*'
    );
  };

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playerReady) {
      return;
    }

    if (isInView) {
      sendPlayerCommand('playVideo');
      sendPlayerCommand('unMute');
    } else {
      sendPlayerCommand('pauseVideo');
    }
  }, [isInView, playerReady]);

  useEffect(() => {
    setPlayerReady(false);
  }, [currentIndex]);

  const handleNextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoIds.length);
  };

  return (
    <section ref={sectionRef} className=" sm:py-4 lg:py-24 bg-[#FFF2D5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0D0C0C] mb-4">
            Project Showcases
          </h2>
          <p className="text-[#4A0E78] text-lg md:text-xl max-w-2xl mx-auto">
            Watch our projects in action and see how we transform ideas into reality
          </p>
        </div>

        {/* Main Card */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Purple Card Container */}
          <div className="relative bg-[#4A0E78] rounded-3xl rounded-br-[8rem] md:rounded-br-[12rem] overflow-hidden aspect-video md:aspect-[16/9] shadow-xl">
            {/* Mock Video Content */}
            <div className="w-full h-full">
              <iframe
                key={videoIds[currentIndex]}
                ref={iframeRef}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoIds[currentIndex]}?autoplay=1&mute=0&enablejsapi=1&controls=0&rel=0&loop=1&playlist=${videoIds[currentIndex]}`}
                title="Project Showcase Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
                onLoad={() => setPlayerReady(true)}
              ></iframe>
            </div>
          </div>

          {/* Floating Action Button - Positioned at bottom right */}
          <div className="absolute bottom-0 right-0 z-10">
            <button
              onClick={handleNextVideo}
              className="group flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-[#4A0E78] rounded-full text-white shadow-lg transition-transform hover:scale-110 border-8 border-[#FFF2D5]"
            >
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 transition-transform group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const leadership = [
    { id: 1, name: 'Ashendra Sharma', role: 'CEO', image: '/images/team/ashendra.png' },
    { id: 2, name: 'Aryan Yadav', role: 'CTO', image: '/images/team/aryan.png' },
];

const teamMembers = [
    { id: 3, name: 'Muskan', role: 'HR', image: '/images/team/avatar1.png' },
    { id: 4, name: 'Ojshav', role: 'Tech Head', image: '/images/team/avatar2.png' },
    { id: 5, name: 'Nihal', role: 'Developer', image: '/images/team/avatar3.png' },
    { id: 6, name: 'Rishabh', role: 'Developer', image: '/images/team/avatar5.png' },
    { id: 7, name: 'Siddak', role: 'UIUX Designer', image: '/images/team/avatar4.png' },
];

export const OurTeam = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const leadershipContainerRef = useRef<HTMLDivElement>(null);
    const teamContainerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Only run animations on desktop
        if (isMobile) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=200%',
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                }
            });

            // First: 2 Leadership cards move up and fade out
            tl.to(leadershipContainerRef.current, {
                y: -400,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut'
            });

            // Then: 5 Team member cards come up from below
            tl.fromTo(
                teamContainerRef.current,
                { y: 400, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
                '-=0.3' // Slight overlap with previous animation
            );

        });

        return () => ctx.revert();
    }, [isMobile]);

    return (
        <section ref={sectionRef} className={`w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-[#FFF2D5] overflow-hidden relative ${isMobile ? 'min-h-auto' : 'min-h-screen'}`}>
            <div className="container mx-auto px-4 sm:px-6">
                <h2
                    ref={titleRef}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#4A0E4E] text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24 font-medium"
                >
                    Our Team
                </h2>

                {/* Leadership Row - CEO and CTO */}
                <div 
                    ref={leadershipContainerRef} 
                    className={`flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-end mb-8 sm:mb-12 md:mb-16 ${!isMobile ? 'absolute left-1/2 -translate-x-1/2' : 'relative'}`}
                >
                    {leadership.map((member) => (
                        <div
                            key={member.id}
                            className="group relative w-36 sm:w-44 md:w-52 lg:w-60 xl:w-64 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                        >
                            {/* Avatar Container - Positioned absolutely to sit on top of the card */}
                            <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full border-[4px] sm:border-[5px] md:border-[6px] lg:border-[7px] xl:border-[8px] border-white shadow-lg overflow-hidden bg-white mb-[-2rem] sm:mb-[-2.5rem] md:mb-[-3rem] lg:mb-[-3.5rem] xl:mb-[-4rem]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="w-full bg-[#590178] pt-9 sm:pt-11 md:pt-13 lg:pt-15 xl:pt-16 pb-3 sm:pb-4 md:pb-5 lg:pb-6 px-3 sm:px-4 md:px-5 lg:px-6 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] md:rounded-t-[4rem] lg:rounded-t-[4.5rem] xl:rounded-t-[5rem] rounded-b-lg text-center shadow-xl min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[170px] xl:min-h-[180px] flex flex-col justify-end">
                                <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{member.name}</h3>
                                <p className="text-white/80 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Members Row */}
                <div 
                    ref={teamContainerRef} 
                    className={`flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center ${!isMobile ? 'absolute left-1/2 -translate-x-1/2 top-[120px] sm:top-[180px] lg:top-[200px]' : 'relative mt-8'}`}
                >
                    {/* First Row - 2 Cards */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-end">
                        {teamMembers.slice(0, 2).map((member) => (
                            <div
                                key={member.id}
                                className="group relative w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                            >
                                {/* Avatar Container - Positioned absolutely to sit on top of the card */}
                                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 xl:w-32 xl:h-32 rounded-full border-[3px] sm:border-[4px] md:border-[5px] lg:border-[6px] border-white shadow-lg overflow-hidden bg-white mb-[-1.5rem] sm:mb-[-2rem] md:mb-[-2.5rem] lg:mb-[-3rem]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="w-full bg-[#590178] pt-7 sm:pt-9 md:pt-11 lg:pt-12 pb-2 sm:pb-3 md:pb-4 px-2 sm:px-3 md:px-4 rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[3.5rem] lg:rounded-t-[4rem] rounded-b-lg text-center shadow-xl min-h-[90px] sm:min-h-[110px] md:min-h-[130px] lg:min-h-[140px] flex flex-col justify-end">
                                    <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-0.5 sm:mb-1">{member.name}</h3>
                                    <p className="text-white/80 text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - 3 Cards */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-end">
                        {teamMembers.slice(2, 5).map((member) => (
                            <div
                                key={member.id}
                                className="group relative w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                            >
                                {/* Avatar Container - Positioned absolutely to sit on top of the card */}
                                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 xl:w-32 xl:h-32 rounded-full border-[3px] sm:border-[4px] md:border-[5px] lg:border-[6px] border-white shadow-lg overflow-hidden bg-white mb-[-1.5rem] sm:mb-[-2rem] md:mb-[-2.5rem] lg:mb-[-3rem]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="w-full bg-[#590178] pt-7 sm:pt-9 md:pt-11 lg:pt-12 pb-2 sm:pb-3 md:pb-4 px-2 sm:px-3 md:px-4 rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[3.5rem] lg:rounded-t-[4rem] rounded-b-lg text-center shadow-xl min-h-[90px] sm:min-h-[110px] md:min-h-[130px] lg:min-h-[140px] flex flex-col justify-end">
                                    <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-0.5 sm:mb-1">{member.name}</h3>
                                    <p className="text-white/80 text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

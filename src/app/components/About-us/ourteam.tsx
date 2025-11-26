"use client";

import { useRef, useEffect } from 'react';
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

    useEffect(() => {
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
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-20 bg-[#FFF2D5] overflow-hidden relative min-h-screen">
            <div className="container mx-auto px-4">
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-6xl font-serif text-[#4A0E4E] text-center mb-24 font-medium"
                >
                    Our Team
                </h2>

                {/* Leadership Row - CEO and CTO */}
                <div ref={leadershipContainerRef} className="flex flex-wrap justify-center gap-16 items-end mb-16 absolute left-1/2 -translate-x-1/2">
                    {leadership.map((member) => (
                        <div
                            key={member.id}
                            className="group relative w-64 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                        >
                            {/* Avatar Container - Positioned absolutely to sit on top of the card */}
                            <div className="relative z-10 w-44 h-44 rounded-full border-[8px] border-white shadow-lg overflow-hidden bg-white mb-[-4rem]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="w-full bg-[#590178] pt-16 pb-6 px-6 rounded-t-[5rem] rounded-b-lg text-center shadow-xl min-h-[180px] flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold mb-2">{member.name}</h3>
                                <p className="text-white/80 text-base font-medium uppercase tracking-wider">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Members Row */}
                <div ref={teamContainerRef} className="flex flex-col gap-16 items-center absolute left-1/2 -translate-x-1/2 top-[200px]">
                    {/* First Row - 2 Cards */}
                    <div className="flex justify-center gap-16 items-end">
                        {teamMembers.slice(0, 2).map((member) => (
                            <div
                                key={member.id}
                                className="group relative w-44 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                            >
                                {/* Avatar Container - Positioned absolutely to sit on top of the card */}
                                <div className="relative z-10 w-32 h-32 rounded-full border-[6px] border-white shadow-lg overflow-hidden bg-white mb-[-3rem]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="w-full bg-[#590178] pt-12 pb-4 px-4 rounded-t-[4rem] rounded-b-lg text-center shadow-xl min-h-[140px] flex flex-col justify-end">
                                    <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-white/80 text-sm font-medium uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - 3 Cards */}
                    <div className="flex justify-center gap-16 items-end">
                        {teamMembers.slice(2, 5).map((member) => (
                            <div
                                key={member.id}
                                className="group relative w-44 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                            >
                                {/* Avatar Container - Positioned absolutely to sit on top of the card */}
                                <div className="relative z-10 w-32 h-32 rounded-full border-[6px] border-white shadow-lg overflow-hidden bg-white mb-[-3rem]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="w-full bg-[#590178] pt-12 pb-4 px-4 rounded-t-[4rem] rounded-b-lg text-center shadow-xl min-h-[140px] flex flex-col justify-end">
                                    <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-white/80 text-sm font-medium uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl?: string | null;
}

interface ApiProject {
    id: number;
    title: string;
    description?: string | null;
    image: string;
    liveUrl?: string | null;
    live_url?: string | null;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export function WorkProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [showDemoModal, setShowDemoModal] = useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const imageRef = React.useRef<HTMLImageElement>(null);

    const largeProjects = [
        {
            id: 'aoin',
            title: "AOIN - ECOMMERCE PLATFORM",
            description: "We developed AOIN, a comprehensive e-commerce platform designed to empower merchants to easily enroll, list, and manage their products online. The platform was built end-to-end using React for the frontend and Python for the backend, ensuring a seamless, responsive, and secure experience for both merchants and customers.",
            image: "/images/aoin.webp",
            buttonText: "View Live Demo"
        },
        {
            id: 'nakshatra',
            title: "Scalixity-Nakshatra Gyan",
            description: "We developed AOIN, a comprehensive e-commerce platform designed to empower merchants to easily enroll, list, and manage their products online. The platform was built end-to-end using React for the frontend and Python for the backend, ensuring a seamless, responsive, and secure experience for both merchants and customers.",
            image: "https://picsum.photos/seed/nakshatra-gyan/800/600",
            buttonText: "View Live Demo"
        }
    ];

    const activeProject = largeProjects[activeProjectIndex];

    // Fetch projects from backend
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`${baseURL}/api/work/projects`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }

                const data = await response.json();
                
                // Map backend data to component format and reverse to show oldest first
                const mappedProjects: Project[] = data.map((project: ApiProject) => ({
                    id: project.id,
                    title: project.title,
                    description: project.description || '',
                    image: project.image,
                    liveUrl: project.liveUrl || project.live_url || null
                })).reverse();

                setProjects(mappedProjects);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError(err instanceof Error ? err.message : 'Failed to load projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Handle scroll when page loads with hash anchor
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash === '#aoin-project') {
            setTimeout(() => {
                const element = document.getElementById('aoin-project');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, []);

    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleArrowClick = contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Animate out
        gsap.to([contentRef.current, imageRef.current], {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                // Update state
                const nextIndex = (activeProjectIndex + 1) % largeProjects.length;
                setActiveProjectIndex(nextIndex);

                // Animate in
                gsap.fromTo([contentRef.current, imageRef.current],
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                );
            }
        });

        // Rotate arrow
        gsap.to(".arrow-icon", {
            rotation: "+=360",
            duration: 0.5,
            ease: "back.out(1.7)"
        });
    });

    return (
        <section className="w-full bg-[#FFF2D5] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {loading ? (
                    <div className="flex items-center justify-center py-12 sm:py-16 lg:py-20">
                        <p className="text-[#4A0E78] text-base sm:text-lg">Loading projects...</p>
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center py-12 sm:py-16 lg:py-20">
                        <p className="text-red-600 text-base sm:text-lg">Error: {error}</p>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="flex items-center justify-center py-12 sm:py-16 lg:py-20">
                        <p className="text-[#4A0E78] text-base sm:text-lg">No projects found</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg overflow-hidden flex flex-col"
                            >
                                {/* Image Placeholder */}
                                <div className="w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden rounded-md mb-4 sm:mb-5 md:mb-6 relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col items-center text-center py-4 sm:py-5 md:py-6 flex-grow">
                                    {/* Title */}
                                    <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-semibold text-[#0D0C0C] mb-3 sm:mb-4">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-[#0D0C0C] mb-4 sm:mb-5 md:mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Learn More Button - Only show if liveUrl exists */}
                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#590178] text-white rounded-lg font-semibold hover:bg-[#6A0188] transition-colors text-sm sm:text-base w-full md:w-auto"
                                        >
                                            Learn More
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Large Card Below All Cards */}
                <div id="aoin-project" className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 relative scroll-mt-16 sm:scroll-mt-20" ref={containerRef}>
                    <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg rounded-br-[4rem] sm:rounded-br-[6rem] md:rounded-br-[8rem] lg:rounded-br-[12rem] shadow-lg overflow-visible min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] transition-all duration-500 ease-in-out">
                        {/* Image/Iframe Placeholder */}
                        {activeProject.id === 'aoin' ? (
                            <div 
                                ref={imageRef} 
                                className="w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[450px] overflow-hidden rounded-lg mb-4 sm:mb-6 md:mb-7 lg:mb-8 relative cursor-pointer"
                                onClick={() => setShowDemoModal(true)}
                            >
                                <iframe 
                                    src="https://app.supademo.com/embed/cmielh911b27wb7b43c4nsisn?v_email=EMAIL&embed_v=2&utm_source=embed" 
                                    loading="lazy" 
                                    title="Browse Aoin and add men's wear to cart" 
                                    allow="clipboard-write" 
                                    className="w-full h-full rounded-lg border-0 pointer-events-none"
                                />
                            </div>
                        ) : (
                            <div ref={imageRef} className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-96 overflow-hidden rounded-lg mb-4 sm:mb-6 md:mb-7 lg:mb-8 relative">
                                <Image
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Content Section - Below Image */}
                        <div ref={contentRef} className="py-4 sm:py-6 md:py-7 lg:py-8 flex flex-col md:flex-row gap-6 sm:gap-7 md:gap-8">
                            {/* Left Side - Title and Button */}
                            <div className="flex flex-col md:w-1/2">
                                <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold text-[#0D0C0C] mb-4 sm:mb-5 md:mb-6">
                                    {activeProject.title}
                                </h3>
                                {activeProject.id === 'aoin' ? (
                                    <button
                                        onClick={() => setShowDemoModal(true)}
                                        className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-[#590178] text-white rounded-lg font-semibold hover:bg-[#6A0188] transition-colors text-sm sm:text-base w-full sm:w-fit"
                                    >
                                        {activeProject.buttonText}
                                    </button>
                                ) : (
                                    <Link
                                        href="/work"
                                        className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-[#590178] text-white rounded-lg font-semibold hover:bg-[#6A0188] transition-colors text-sm sm:text-base w-full sm:w-fit inline-block text-center"
                                    >
                                        {activeProject.buttonText}
                                    </Link>
                                )}
                            </div>

                            {/* Right Side - Description */}
                            <div className="md:w-1/2">
                                <p className="text-sm sm:text-base md:text-lg text-[#0D0C0C] font-playfair leading-relaxed">
                                    {activeProject.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Action Button - Positioned at bottom right */}
                    <div className="absolute bottom-0 right-0 z-10">
                        <Link
                            href="#aoin-project"
                            onClick={handleArrowClick}
                            className="group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#590178] rounded-full text-white shadow-lg transition-transform hover:scale-110 border-4 sm:border-6 md:border-8 border-[#FFF2D5] cursor-pointer"
                        >
                            <ArrowUpRight className="arrow-icon w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Demo Modal */}
            {showDemoModal && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-3 sm:p-4 overflow-y-auto"
                    onClick={() => setShowDemoModal(false)}
                >
                    <div 
                        className="relative w-full max-w-7xl bg-white rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowDemoModal(false)}
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#590178] text-white rounded-full hover:bg-[#6A0188] transition-colors"
                        >
                            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>

                        {/* Demo Title */}
                        <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-semibold text-[#0D0C0C] mb-3 sm:mb-4 text-center pr-8 sm:pr-10 md:pr-12">
                            AOIN - Live Demo
                        </h3>

                        {/* Iframe Container */}
                        <div className="relative box-content w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh]">
                            <iframe 
                                src="https://app.supademo.com/embed/cmielh911b27wb7b43c4nsisn?v_email=EMAIL&embed_v=2&utm_source=embed" 
                                loading="lazy" 
                                title="Browse Aoin and add men's wear to cart" 
                                allow="clipboard-write" 
                                className="w-full h-full rounded-lg border-0"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
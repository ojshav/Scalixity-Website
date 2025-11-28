'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl?: string | null;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export function WorkProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const imageRef = React.useRef<HTMLImageElement>(null);

    const largeProjects = [
        {
            id: 'aoin',
            title: "AOIN - ECOMMERCE PLATFORM",
            description: "We developed AOIN, a comprehensive e-commerce platform designed to empower merchants to easily enroll, list, and manage their products online. The platform was built end-to-end using React for the frontend and Python for the backend, ensuring a seamless, responsive, and secure experience for both merchants and customers.",
            image: "https://picsum.photos/seed/aoin-platform/800/600",
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
                const mappedProjects: Project[] = data.map((project: any) => ({
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
        <section className="w-full bg-[#FFF2D5] py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-[#4A0E78] text-lg">Loading projects...</p>
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-red-600 text-lg">Error: {error}</p>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-[#4A0E78] text-lg">No projects found</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white p-12 rounded-lg shadow-lg overflow-hidden flex flex-col"
                            >
                                {/* Image Placeholder */}
                                <div className="w-full h-64 overflow-hidden rounded-md mb-6 relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col items-center text-center py-6 flex-grow">
                                    {/* Title */}
                                    <h3 className="font-playfair text-xl md:text-2xl font-semibold text-[#0D0C0C] mb-4">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-[#0D0C0C] mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Learn More Button - Only show if liveUrl exists */}
                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-[#590178] text-white rounded-lg font-semibold hover:bg-[#6A0188] transition-colors text-sm md:text-base w-full md:w-auto"
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
                <div id="aoin-project" className="mt-28 relative scroll-mt-20" ref={containerRef}>
                    <div className="bg-white p-12 rounded-lg rounded-br-[8rem] md:rounded-br-[12rem] shadow-lg overflow-hidden min-h-[600px] transition-all duration-500 ease-in-out">
                        {/* Image Placeholder */}
                        <div ref={imageRef} className="w-full h-96 overflow-hidden rounded-lg mb-8 relative">
                            <Image
                                src={activeProject.image}
                                alt={activeProject.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content Section - Below Image */}
                        <div ref={contentRef} className="py-8 flex flex-col md:flex-row gap-8">
                            {/* Left Side - Title and Button */}
                            <div className="flex flex-col md:w-1/2">
                                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-[#0D0C0C] mb-6">
                                    {activeProject.title}
                                </h3>
                                <Link
                                    href="/work"
                                    className="px-4 py-3 bg-[#590178] text-white rounded-lg font-semibold hover:bg-[#6A0188] transition-colors text-sm md:text-base w-fit inline-block"
                                >
                                    {activeProject.buttonText}
                                </Link>
                            </div>

                            {/* Right Side - Description */}
                            <div className="md:w-1/2">
                                <p className="text-base md:text-lg text-[#0D0C0C] font-playfair">
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
                            className="group flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-[#590178] rounded-full text-white shadow-lg transition-transform hover:scale-110 border-8 border-[#FFF2D5] cursor-pointer"
                        >
                            <ArrowUpRight className="arrow-icon w-8 h-8 md:w-12 md:h-12 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}


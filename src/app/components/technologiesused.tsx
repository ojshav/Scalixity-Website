'use client';

import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiPython, 
  SiMysql
} from 'react-icons/si';

interface Technology {
  name: string;
  icon?: React.ElementType | string;
  description?: string;
}

interface TechnologiesUsedProps {
  technologies?: Array<{ name: string; icon?: string }>;
}

// Technology name to icon mapping
const technologyIconMap: Record<string, React.ElementType> = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Nextjs': SiNextdotjs,
  'TypeScript': SiTypescript,
  'Typescript': SiTypescript,
  'Python': SiPython,
  'MySQL': SiMysql,
  'SQL': SiMysql,
};

const defaultTechnologies: Technology[] = [
  {
    name: 'React',
    icon: SiReact,
    description: 'A JavaScript library for building user interfaces',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    description: 'The React framework for production-grade applications',
  },
  {
    name: 'Typescript',
    icon: SiTypescript,
    description: 'Typed JavaScript for better code quality',
  },
  {
    name: 'Python',
    icon: SiPython,
    description: 'Versatile language for backend and AI solutions',
  },
  {
    name: 'SQL',
    icon: SiMysql,
    description: 'Powerful database management and queries',
  }
];

export default function TechnologiesUsed({ technologies: propTechnologies }: TechnologiesUsedProps = {}) {
  // Use provided technologies or fallback to default
  const displayTechnologies: Technology[] = propTechnologies && propTechnologies.length > 0
    ? propTechnologies.map(tech => ({
        name: tech.name,
        icon: tech.icon 
          ? tech.icon // If icon is a URL string, keep it as string
          : technologyIconMap[tech.name] || technologyIconMap[tech.name.toLowerCase()] || SiReact, // Try to map to icon component
        description: `Technology: ${tech.name}`
      }))
    : defaultTechnologies;
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#590178]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-center text-white mb-12 md:mb-16">
          Technology We Used
        </h2>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {displayTechnologies.map((tech, index) => {
            const IconComponent = typeof tech.icon === 'string' ? null : tech.icon;
            const iconUrl = typeof tech.icon === 'string' ? tech.icon : null;
            
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-end transition-transform duration-300 group"
              >
                {/* Layered Card Effect */}
                <div className="relative w-32 h-36 md:w-36 md:h-40 lg:w-40 lg:h-44 rounded-xl shadow-[0px_4px_4px_0px_#00000040]">
                  {/* Hover overlay card - smaller and on top */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-[85%] h-[85%] rounded-xl bg-[#A10AC9] shadow-[0px_4px_4px_0px_#00000040] flex flex-col items-center justify-center gap-2 p-3">
                      {IconComponent ? (
                        <IconComponent className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
                      ) : iconUrl ? (
                        <img src={iconUrl} alt={tech.name} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain" />
                      ) : null}
                      <p className="text-lg md:text-xl font-semibold text-white text-center">
                        {tech.name}
                      </p>
                    </div>
                  </div>
                  
                  {/* Main card */}
                  <div className="w-full h-full rounded-2xl bg-[#8002A1] flex flex-col items-center justify-center gap-2 p-4">
                    {IconComponent ? (
                      <IconComponent className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
                    ) : iconUrl ? (
                      <img src={iconUrl} alt={tech.name} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain" />
                    ) : null}
                    {/* Technology Name */}
                    <p className="text-xl md:text-2xl font-semibold text-white text-center">
                      {tech.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


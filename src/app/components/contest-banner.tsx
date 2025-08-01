"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

// Contest banner images
const contestBanners = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dxwspucxw/image/upload/v1753698186/contest-banner-1_jgqlzt.svg",
    
    subtitle: "Showcase Your Creative Talent",
  
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dxwspucxw/image/upload/v1753700324/YouTube_Banner_-_Global_Figma_Design_Challenge_sp0jf6.svg",
    alt: "Figma Design Contest - Prizes",

    subtitle: "Win Big with Your Designs",

  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dxwspucxw/image/upload/v1753700814/_Banner_-_Global_Figma_Design_Challenge_n5hdui.svg",
    alt: "Figma Design Contest - Timeline",
    title: "Contest Timeline",
    subtitle: "Mark Your Calendar",
    description: "Submit your designs and be part of this exciting competition!"
  }
]

export function ContestBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right')

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    if (!isPlaying || isHovered) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % contestBanners.length
        // Alternate direction: even slides go right to left, odd slides go left to right
        setSlideDirection(nextSlide % 2 === 0 ? 'right' : 'left')
        return nextSlide
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, isHovered])

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = (prev + 1) % contestBanners.length
      setSlideDirection('left') // Next slide comes from right to left
      return nextSlide
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = (prev - 1 + contestBanners.length) % contestBanners.length
      setSlideDirection('right') // Previous slide comes from left to right
      return prevSlide
    })
  }

  const goToSlide = (index: number) => {
    setCurrentSlide((prev) => {
      // Determine direction based on whether we're going forward or backward
      const direction = index > prev ? 'left' : 'right'
      setSlideDirection(direction)
      return index
    })
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div 
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ 
              opacity: 0, 
              x: slideDirection === 'right' ? 300 : -300,
              scale: 1.1 
            }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: 1 
            }}
            exit={{ 
              opacity: 0, 
              x: slideDirection === 'right' ? -300 : 300,
              scale: 0.9 
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.4, 0.0, 0.2, 1],
              opacity: { duration: 0.6 },
              x: { duration: 0.8 },
              scale: { duration: 0.8 }
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${contestBanners[currentSlide].src})` }}
            >
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-white"
                  >
                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white mb-2 font-poppins">
                      {contestBanners[currentSlide].subtitle}
                    </p>

                    {/* Main Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 font-playfair tracking-tight text-white">
                      {contestBanners[currentSlide].title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 font-source-sans leading-relaxed">
                      {contestBanners[currentSlide].description}
                    </p>

                    {/* Apply Now Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/campaign"
                        className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-poppins text-sm sm:text-base md:text-lg"
                      >
                        Apply Now
                        <ChevronRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-black transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-black transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-black transition-all duration-300"
        aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 sm:h-5 sm:w-5" />
        ) : (
          <Play className="h-4 w-4 sm:h-5 sm:w-5" />
        )}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {contestBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-black scale-125"
                : "bg-black/50 hover:bg-black/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/30 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-black text-xs sm:text-sm font-medium">
        {currentSlide + 1} / {contestBanners.length}
      </div>
    </div>
  )
}

// Compact version for smaller spaces
export function ContestBannerCompact() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contestBanners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div className="relative w-full h-[250px] overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${contestBanners[currentSlide].src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>

          <div className="absolute inset-0 flex items-center p-6">
            <div className="max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-white"
              >
                <p className="text-sm font-medium text-blue-200 mb-1 font-poppins">
                  {contestBanners[currentSlide].subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-2 font-playfair">
                  {contestBanners[currentSlide].title}
                </h3>
                <p className="text-sm text-gray-200 mb-4 font-source-sans">
                  {contestBanners[currentSlide].description}
                </p>
                <Link
                  href="/campaign"
                  className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm font-poppins"
                >
                  Apply Now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Compact Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {contestBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
} 
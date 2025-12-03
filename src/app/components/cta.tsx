'use client'

import Link from 'next/link'

export function CTA() {
  return (
    <div className="w-full bg-[#FFF2D5] pb-12 pt-8 sm:pb-16 sm:pt-10 md:pb-20 md:pt-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-[#6B21A8] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-9 md:mb-10 font-medium px-2 sm:px-0">
          Let&apos;s discuss how Scalixity can help you achieve your digital transformation goals
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 px-4 sm:px-0">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 md:py-3 bg-[#590178] text-white font-semibold rounded-lg hover:bg-[#3a1678] transition-colors shadow-lg text-center"
          >
            Start Your Project
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 md:py-3 bg-transparent border-2 border-[#4A1D96] text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#590178] hover:text-white transition-colors text-center"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  )
}


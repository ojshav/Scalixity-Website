'use client'

export function CTA() {
  return (
    <div className="w-full bg-[#FFF2D5] pb-20 pt-10 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-[#6B21A8] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          Let&apos;s discuss how Scalixity can help you achieve your digital transformation goals
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-3 bg-[#590178] text-white font-semibold rounded-lg hover:bg-[#3a1678] transition-colors shadow-lg">
            Start Your Project
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-[#4A1D96] text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#4A1D96] hover:text-white transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  )
}


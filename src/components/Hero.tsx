import { useEffect, useState } from 'react'

export default function Hero() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setShowContent(true)
  }, [])

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#f0f0f0] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#f0f0f0] rounded-full blur-3xl"></div>

      <div className="container-elegant relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          {/* Main Heading */}
          <div className={`transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-sans text-sm font-semibold text-[#a8a8a8] tracking-widest uppercase mb-6">
              Artisan Craft
            </p>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl text-[#2a2a2a] mb-6 leading-tight">
              Crafted with <span className="text-[#a8a8a8]">Intention</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-[#5a5a5a]/80 max-w-2xl mx-auto leading-relaxed">
              Each piece tells a story of tradition, precision, and artistic vision. Discover handcrafted creations that bridge the gap between heritage and contemporary aesthetics.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col md:flex-row gap-6 justify-center pt-8 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="btn-primary group">
              <span>Explore Portfolio</span>
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button className="btn-secondary">View Process</button>
          </div>

          {/* Scroll Indicator */}
          <div className={`flex justify-center pt-16 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <p className="text-xs font-sans font-medium text-[#a8a8a8]/70 group-hover:text-[#2a2a2a] transition-colors">Scroll to explore</p>
              <div className="flex flex-col items-center gap-1">
                <span className="block w-0.5 h-6 bg-slate-400 group-hover:bg-[#2a2a2a] transition-colors"></span>
                <span className="block w-0.5 h-6 bg-[#d9d9d9] group-hover:bg-slate-600 transition-colors animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


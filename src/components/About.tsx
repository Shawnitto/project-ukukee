export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-elegant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <p className="font-sans text-sm font-semibold text-gold tracking-widest uppercase mb-4">
                About UKUKEE
              </p>
              <h2 className="text-terra mb-6">
                Master Craftsmanship Refined
              </h2>
            </div>

            <p className="text-elegant text-terra/75">
              UKUKEE represents the convergence of traditional craftsmanship and contemporary vision. Each creation emerges from a deep commitment to precision, material integrity, and artistic expression.
            </p>

            <p className="text-elegant text-terra/75">
              With over a decade dedicated to the craft, every piece is meticulously developed through an iterative process that honors time-tested techniques while embracing innovative approaches to design and functionality.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <p className="font-serif text-4xl font-semibold text-amber mb-2">12+</p>
                <p className="font-sans text-sm text-terra/60">Years of Experience</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-semibold text-amber mb-2">500+</p>
                <p className="font-sans text-sm text-terra/60">Pieces Created</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-semibold text-amber mb-2">40+</p>
                <p className="font-sans text-sm text-terra/60">Collections</p>
              </div>
            </div>

            <button className="btn-primary group">
              <span>Learn More</span>
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Image Column */}
          <div className="relative h-96 md:h-full min-h-96 group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-terra/10 rounded-lg"></div>
            <div className="absolute inset-4 border-2 border-terra/20 rounded-lg hover-lift"></div>
            
            {/* Placeholder for image with elegant styling */}
            <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-br from-cream to-amber/10 overflow-hidden">
              <div className="text-center space-y-4">
                <div className="font-serif text-6xl text-amber/30">✦</div>
                <p className="text-terra/40 font-sans">Featured Craft Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'Ceramic Vessels',
    category: 'Ceramics',
    description: 'Contemporary ceramic forms celebrating the beauty of natural glazes',
    year: 2024,
  },
  {
    id: 2,
    title: 'Wooden Sculptures',
    category: 'Woodcraft',
    description: 'Hand-carved pieces that reveal the inherent beauty of timber',
    year: 2024,
  },
  {
    id: 3,
    title: 'Textile Collections',
    category: 'Textiles',
    description: 'Woven designs combining traditional patterns with modern aesthetics',
    year: 2023,
  },
  {
    id: 4,
    title: 'Glass Art Series',
    category: 'Glass',
    description: 'Molded glass pieces featuring unique color compositions',
    year: 2023,
  },
  {
    id: 5,
    title: 'Metal Work',
    category: 'Metal',
    description: 'Hammered and forged pieces showcasing metalcraft mastery',
    year: 2023,
  },
  {
    id: 6,
    title: 'Mixed Media',
    category: 'Experimental',
    description: 'Boundary-pushing creations combining multiple materials',
    year: 2024,
  },
]

const categories = ['All', ...new Set(portfolioItems.map(item => item.category))]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <p className="font-sans text-sm font-semibold text-[#a8a8a8] tracking-widest uppercase">
            Portfolio
          </p>
          <h2 className="text-[#2a2a2a]">
            Featured Collections
          </h2>
          <p className="text-elegant text-[#5a5a5a]/70 max-w-2xl mx-auto">
            A curated selection of recent works spanning diverse mediums and artistic directions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 pb-12 border-b border-[#d9d9d9]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-sans text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'text-[#2a2a2a] border-b-2 border-[#2a2a2a]'
                  : 'text-[#a8a8a8]/70 hover:text-[#5a5a5a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group cursor-pointer animate-fadeIn"
            >
              {/* Portfolio Item Card */}
              <div className="space-y-5">
                {/* Image Placeholder */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-white to-slate-100 rounded-lg hover-lift">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-sans text-5xl text-[#d9d9d9] mb-2">◆</div>
                      <p className="text-[#a8a8a8]/40 font-sans text-sm">{item.category}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#f0f0f0] group-hover:bg-[#f0f0f0] transition-colors duration-500 flex items-center justify-center">
                    <p className="text-slate-50 group-hover:text-[#5a5a5a] font-sans font-medium transition-all duration-300 text-sm">
                      View Project
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <p className="text-xs font-sans font-semibold text-[#a8a8a8] uppercase tracking-wider">{item.category} • {item.year}</p>
                  <h3 className="font-sans text-xl text-[#2a2a2a] group-hover:text-[#a8a8a8] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a8a8a8]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16 pt-8">
          <button className="btn-secondary group">
            <span>View Complete Portfolio</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}


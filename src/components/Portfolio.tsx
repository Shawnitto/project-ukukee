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
          <p className="font-sans text-sm font-semibold text-slate-500 tracking-widest uppercase">
            Portfolio
          </p>
          <h2 className="text-slate-800">
            Featured Collections
          </h2>
          <p className="text-elegant text-slate-700/70 max-w-2xl mx-auto">
            A curated selection of recent works spanning diverse mediums and artistic directions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 pb-12 border-b border-slate-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-sans text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'text-slate-800 border-b-2 border-slate-800'
                  : 'text-slate-500/70 hover:text-slate-700'
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
                      <div className="font-serif text-5xl text-slate-300 mb-2">◆</div>
                      <p className="text-slate-500/40 font-sans text-sm">{item.category}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-50 group-hover:bg-slate-100 transition-colors duration-500 flex items-center justify-center">
                    <p className="text-slate-50 group-hover:text-slate-700 font-sans font-medium transition-all duration-300 text-sm">
                      View Project
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <p className="text-xs font-sans font-semibold text-slate-500 uppercase tracking-wider">{item.category} • {item.year}</p>
                  <h3 className="font-serif text-xl text-slate-800 group-hover:text-slate-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600/80 leading-relaxed">
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

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Conceptualization',
      description: 'Every creation begins with intent. We explore ideas through research, sketching, and conceptual development, ensuring each piece has a clear artistic vision.',
    },
    {
      number: '02',
      title: 'Material Selection',
      description: 'Sourcing the finest materials is paramount. We work with suppliers who share our commitment to quality, sustainability, and ethical practices.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Through iterative prototyping and refinement, we bring concepts to life. Multiple iterations ensure perfection in form, function, and finish.',
    },
    {
      number: '04',
      title: 'Handcraft Execution',
      description: 'Master techniques meet contemporary vision. Each piece is meticulously handcrafted with precision, patience, and an unwavering attention to detail.',
    },
    {
      number: '05',
      title: 'Quality Assurance',
      description: 'Rigorous inspection ensures every piece meets our exacting standards. We evaluate form, function, durability, and aesthetic coherence.',
    },
    {
      number: '06',
      title: 'Presentation',
      description: 'Careful presentation and packaging reflect the care taken in creation. Each piece is presented as a complete artistic statement.',
    },
  ]

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <p className="font-sans text-sm font-semibold text-[#a8a8a8] tracking-widest uppercase">
            The Craft
          </p>
          <h2 className="text-[#2a2a2a]">
            Our Creative Process
          </h2>
          <p className="text-elegant text-[#5a5a5a]/70 max-w-2xl mx-auto">
            A systematic approach to creation that honors tradition while embracing innovation
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fadeIn`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Even rows: Content left, visual right */}
              {index % 2 === 0 ? (
                <>
                  <div className="md:col-span-5 space-y-4">
                    <div className="flex items-start space-x-6">
                      <div>
                        <p className="font-sans text-5xl md:text-6xl font-light text-[#a8a8a8]">
                          {step.number}
                        </p>
                      </div>
                      <div className="pt-2">
                        <h3 className="text-2xl md:text-3xl text-[#2a2a2a] mb-4 font-sans">
                          {step.title}
                        </h3>
                        <p className="text-elegant text-[#5a5a5a]/70">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-px h-24 bg-gradient-to-b from-slate-300 to-transparent"></div>
                  </div>

                  <div className="md:col-span-6">
                    <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center hover-lift">
                      <div className="text-center">
                        <p className="text-6xl text-[#d9d9d9]">◆</p>
                        <p className="text-[#a8a8a8]/40 font-sans text-sm mt-4">{step.title} Image</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-span-6">
                    <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-100 rounded-lg flex items-center justify-center hover-lift">
                      <div className="text-center">
                        <p className="text-6xl text-[#d9d9d9]">◆</p>
                        <p className="text-[#a8a8a8]/40 font-sans text-sm mt-4">{step.title} Image</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1 flex justify-center">
                      <div className="w-px h-24 bg-gradient-to-b from-slate-300 to-transparent"></div>
                  </div>

                  <div className="md:col-span-5 space-y-4">
                    <div className="flex items-start space-x-6">
                      <div>
                        <p className="font-sans text-5xl md:text-6xl font-light text-[#a8a8a8]">
                          {step.number}
                        </p>
                      </div>
                      <div className="pt-2">
                        <h3 className="text-2xl md:text-3xl text-[#2a2a2a] mb-4 font-sans">
                          {step.title}
                        </h3>
                        <p className="text-elegant text-[#5a5a5a]/70">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


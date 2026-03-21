import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-cream via-amber/5 to-cream">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <p className="font-sans text-sm font-semibold text-gold tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="text-terra">
            Let's Collaborate
          </h2>
          <p className="text-elegant text-terra/70 max-w-2xl mx-auto">
            Interested in commissioning a piece or discussing a collaboration? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg text-terra mb-3">Studio Location</h3>
              <p className="text-terra/70 font-sans leading-relaxed">
                Located in the heart of the creative district, our studio welcomes visitors by appointment.
              </p>
              <p className="text-sm text-amber font-semibold mt-3">Seoul, South Korea</p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-terra mb-3">Connect</h3>
              <div className="space-y-2 font-sans text-sm">
                <p className="text-terra/70">
                  <span className="font-medium">Email:</span> hello@ukukee.com
                </p>
                <p className="text-terra/70">
                  <span className="font-medium">Phone:</span> +82 2 XXXX XXXX
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg text-terra mb-3">Follow</h3>
              <div className="flex space-x-4">
                {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm font-sans text-terra/60 hover:text-amber transition-colors duration-300 underline"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-medium text-terra mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 font-sans text-sm bg-cream border-2 border-terra/10 rounded text-terra placeholder-terra/30 focus:outline-none focus:border-amber transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-medium text-terra mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 font-sans text-sm bg-cream border-2 border-terra/10 rounded text-terra placeholder-terra/30 focus:outline-none focus:border-amber transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-sans text-sm font-medium text-terra mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 font-sans text-sm bg-cream border-2 border-terra/10 rounded text-terra placeholder-terra/30 focus:outline-none focus:border-amber transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-sans text-sm font-medium text-terra mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 font-sans text-sm bg-cream border-2 border-terra/10 rounded text-terra placeholder-terra/30 focus:outline-none focus:border-amber transition-colors duration-300 resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-4">
                {submitted && (
                  <p className="text-sm font-sans text-amber font-medium animate-slideUp">
                    ✓ Thank you! We'll be in touch soon.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn-primary group ml-auto"
                >
                  <span>Send Message</span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-12"></div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-12">
          <h3 className="font-serif text-2xl md:text-3xl text-terra">
            Ready for a custom commission?
          </h3>
          <p className="text-terra/70 font-sans max-w-xl mx-auto">
            Let's create something extraordinary together. Contact us today to discuss your vision.
          </p>
          <button className="btn-secondary group">
            <span>Schedule a Consultation</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

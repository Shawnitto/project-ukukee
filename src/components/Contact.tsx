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
    <section id="contact" className="section-padding bg-white">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <p className="font-sans text-sm font-semibold text-slate-500 tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="text-slate-800">
            Let's Collaborate
          </h2>
          <p className="text-elegant text-slate-700/70 max-w-2xl mx-auto">
            Interested in commissioning a piece or discussing a collaboration? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-lg text-slate-800 mb-3">Studio Location</h3>
              <p className="text-slate-600/70 font-sans leading-relaxed">
                Located in the heart of the creative district, our studio welcomes visitors by appointment.
              </p>
              <p className="text-sm text-slate-700 font-semibold mt-3">Seoul, South Korea</p>
            </div>

            <div>
              <h3 className="font-sans text-lg text-slate-800 mb-3">Connect</h3>
              <div className="space-y-2 font-sans text-sm">
                <p className="text-slate-600/70">
                  <span className="font-medium">Email:</span> hello@ukukee.com
                </p>
                <p className="text-slate-600/70">
                  <span className="font-medium">Phone:</span> +82 2 XXXX XXXX
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-lg text-slate-800 mb-3">Follow</h3>
              <div className="flex space-x-4">
                {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm font-sans text-slate-500/70 hover:text-slate-600 transition-colors duration-300 underline"
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
                <label htmlFor="name" className="block font-sans text-sm font-medium text-slate-800 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 font-sans text-sm bg-white border-2 border-slate-200 rounded text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-medium text-slate-800 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 font-sans text-sm bg-white border-2 border-slate-200 rounded text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-sans text-sm font-medium text-slate-800 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 font-sans text-sm bg-white border-2 border-slate-200 rounded text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-sans text-sm font-medium text-slate-800 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 font-sans text-sm bg-white border-2 border-slate-200 rounded text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-4">
                {submitted && (
                  <p className="text-sm font-sans text-slate-600 font-medium animate-slideUp">
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
          <h3 className="font-sans text-2xl md:text-3xl text-slate-800">
            Ready for a custom commission?
          </h3>
          <p className="text-slate-700/70 font-sans max-w-xl mx-auto">
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

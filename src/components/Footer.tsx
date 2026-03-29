export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-[#2a2a2a]">
      <div className="container-elegant section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#d9d9d9]">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-sans text-2xl font-semibold">SEONGUK SUH</h3>
            <p className="font-sans text-sm text-[#a8a8a8] leading-relaxed">
              Master craftsmanship refined through intention, precision, and artistic vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-6 text-[#a8a8a8]">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="#about" className="text-[#a8a8a8]/70 hover:text-[#2a2a2a] transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-[#a8a8a8]/70 hover:text-[#2a2a2a] transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="text-[#a8a8a8]/70 hover:text-[#2a2a2a] transition-colors duration-300">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#a8a8a8]/70 hover:text-[#2a2a2a] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-6 text-[#a8a8a8]">
              Services
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="#" className="text-[#a8a8a8]/70 hover:text-[#5a5a5a] transition-colors duration-300">
                  Custom Commission
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a8a8a8]/70 hover:text-[#5a5a5a] transition-colors duration-300">
                  Collaboration
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a8a8a8]/70 hover:text-[#5a5a5a] transition-colors duration-300">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a8a8a8]/70 hover:text-[#5a5a5a] transition-colors duration-300">
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-6 text-[#a8a8a8]">
              Connect
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="mailto:hello@ukukee.com" className="text-[#a8a8a8]/70 hover:text-[#5a5a5a] transition-colors duration-300">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a8a8a8]/70 hover:text-[#5a5a5a] transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a8a8a8]/70 hover:text-[#5a5a5a] transition-colors duration-300">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a8a8a8]/70 hover:text-[#5a5a5a] transition-colors duration-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12">
          <p className="font-sans text-sm text-[#a8a8a8]/50">
            © {currentYear} UKUKEE. All rights reserved.
          </p>
          
          <div className="flex gap-6 font-sans text-sm">
            <a href="#" className="text-[#a8a8a8]/50 hover:text-[#5a5a5a] transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-[#a8a8a8]/30">•</span>
            <a href="#" className="text-[#a8a8a8]/50 hover:text-[#5a5a5a] transition-colors duration-300">
              Terms of Service
            </a>
            <span className="text-[#a8a8a8]/30">•</span>
            <a href="#" className="text-[#a8a8a8]/50 hover:text-[#5a5a5a] transition-colors duration-300">
              Sitemap
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-sans text-sm text-[#a8a8a8]/50 hover:text-[#5a5a5a] transition-colors duration-300"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}


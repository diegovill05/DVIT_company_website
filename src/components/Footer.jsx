export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'How It Works' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DVIT Consulting</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Professional IT support and consulting for small businesses in San Antonio.
            </p>
            <a
              href="https://www.linkedin.com/in/diego-villarreal-940b562b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <a
                  href="tel:+12102091585"
                  className="hover:text-white transition-colors"
                >
                  (210) 209-1585
                </a>
              </div>
              <div>
                <a
                  href="mailto:dvitconsultingw@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  dvitconsultingw@gmail.com
                </a>
              </div>
              <div>
                <p>San Antonio, TX & surrounding areas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} DVIT Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const navigationLinks = [
    "Solutions",
    "Pricing",
    "Get Started",
    "Use cases",
    "Documentation"
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="17" cy="7" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a2 2 0 00-2.45-1.96l-18.27 0A2 2 0 00 0 3v18a2 2 0 002.45 1.96l18.27 0A2 2 0 0023 21V3zM9 15l6-6-6-6v12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      name: "X",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span 
              className="text-2xl font-bold text-gray-900"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              VETRIC
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          
          {/* Copyright */}
          <div 
            className="text-sm text-gray-600"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            VETRIC - 2024
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span 
              className="text-sm text-gray-700"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Operating System
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default function Companies() {
  const companies = [
    {
      icon: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20Z" fill="#333"/>
          <path d="M16 20L20 20M20 20L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="16" r="1.5" fill="white"/>
          <text x="36" y="26" fontSize="16" fill="#333" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="500">Logoipsum</text>
        </svg>
      )
    },
    {
      icon: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="14" width="18" height="12" rx="1" fill="#333" opacity="0.8"/>
          <circle cx="14" cy="18" r="0.8" fill="white"/>
          <circle cx="18" cy="18" r="0.8" fill="white"/>
          <circle cx="22" cy="18" r="0.8" fill="white"/>
          <text x="30" y="25" fontSize="13" fill="#666" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">logoipsum<tspan fontSize="9">®</tspan></text>
        </svg>
      )
    },
    {
      icon: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="20" r="6" fill="#333" opacity="0.8"/>
          <circle cx="16" cy="18" r="1" fill="white"/>
          <circle cx="20" cy="18" r="1" fill="white"/>
          <path d="M15 21Q18 23 21 21" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <text x="28" y="24" fontSize="13" fill="#666" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">logo ipsum<tspan fontSize="9">®</tspan></text>
        </svg>
      )
    },
    {
      icon: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="20" r="6" fill="#333" opacity="0.8"/>
          <circle cx="18" cy="16" r="0.8" fill="white"/>
          <circle cx="14" cy="20" r="0.8" fill="white"/>
          <circle cx="22" cy="20" r="0.8" fill="white"/>
          <text x="28" y="24" fontSize="13" fill="#666" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">logo ipsum<tspan fontSize="9">®</tspan></text>
        </svg>
      )
    },
    {
      icon: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15L18 25L26 15" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <text x="32" y="24" fontSize="11" fill="#333" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" letterSpacing="0.8">LOGOIPSUM</text>
        </svg>
      )
    },
    {
      icon: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="14" width="12" height="12" rx="2" fill="#333" opacity="0.8"/>
          <circle cx="17" cy="18" r="1" fill="white"/>
          <circle cx="19" cy="18" r="1" fill="white"/>
          <path d="M15 21Q17 22 19 21" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <text x="26" y="24" fontSize="16" fill="#333" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="500">Logoipsum</text>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 
          className="text-center text-lg sm:text-xl font-medium text-black mb-12 sm:mb-16"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          Trusted by the world leaders
        </h2>

        {/* Logos Container */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              style={{ minWidth: '110px', maxWidth: '130px' }}
            >
              {company.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

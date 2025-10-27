export default function Perks() {
  const perks = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="2" transform="translate(4 8)" fill="#4CAF50" opacity="0.2"/>
          <rect x="6" y="10" width="20" height="20" rx="2" fill="#4CAF50" opacity="0.2"/>
          <path d="M12 16L16 20M16 20L12 24M16 20L20 16M20 16L24 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Cross-Chain Access",
      description: "Seamlessly interact with diverse blockchain networks."
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="8" width="20" height="24" rx="2" fill="#4CAF50" opacity="0.2"/>
          <path d="M15 12L25 12M15 16L22 16M15 20L25 20" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
          <path d="M28 8L30 6L28 8L26 6" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#4CAF50" opacity="0.2"/>
        </svg>
      ),
      title: "Decentralized Identity",
      description: "Securely manage your digital identity across applications."
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="18" r="8" fill="#4CAF50" opacity="0.2"/>
          <circle cx="20" cy="18" r="5" fill="#4CAF50" opacity="0.2"/>
          <circle cx="20" cy="18" r="2" fill="#4CAF50" opacity="0.2"/>
          <path d="M20 10V8M20 28V26M10 18H8M26 18H28M14 14L13 13M26 22L27 21M14 22L13 23M26 14L27 15" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Smart Contract Automation",
      description: "Streamline operations with automated smart contracts."
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="20" r="4" fill="#4CAF50" opacity="0.2"/>
          <circle cx="25" cy="20" r="4" fill="#4CAF50" opacity="0.2"/>
          <path d="M18 20H22M20 18V16M20 24V22" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
          <path d="M13 12L15 14M27 28L25 26M13 28L15 26M27 12L25 14" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Community Governance",
      description: "Participate in decentralized decision-making through voting."
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" fill="#4CAF50" opacity="0.2"/>
          <path d="M16 20L19 23L24 17M20 14V10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="1.5" fill="#4CAF50"/>
        </svg>
      ),
      title: "Asset Tokenization",
      description: "Digitally tokenize real-world assets for efficient management."
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="12" height="16" rx="2" fill="#4CAF50" opacity="0.2"/>
          <rect x="20" y="10" width="12" height="18" rx="2" fill="#4CAF50" opacity="0.2"/>
          <path d="M14 16L18 20M22 14L26 18M16 22L20 26M24 18L26 16" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Interoperable Data Exchange",
      description: "Exchange data seamlessly between applications for collaboration."
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="flex flex-col items-start space-y-4"
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 flex items-center justify-center rounded-xl"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                <div className="w-10 h-10">
                  {perk.icon}
                </div>
              </div>

              {/* Title */}
              <h3 
                className="text-xl font-bold text-black"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                {perk.title}
              </h3>

              {/* Description */}
              <p 
                className="text-base text-black leading-relaxed"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

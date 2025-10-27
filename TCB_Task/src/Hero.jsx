export default function Hero() {
  return (
    <section 
      className="w-full min-h-[500px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{
        background: 'linear-gradient(to bottom, #F0F8F0 0%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          Build the Future<br className="block sm:hidden" />{' '}
          <span className="hidden sm:inline"> </span>
          <span className="whitespace-nowrap">with Web</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 px-4 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          Discover how we can help you connect with the next generation of the internet.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          {/* Sign up Button - Primary CTA */}
          <button 
            className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-black bg-lime-400 hover:bg-lime-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Sign up
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>

          {/* Contact sales Button - Secondary CTA */}
          <button 
            className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
}

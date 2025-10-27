export default function Bento() {
  const serviceTags = [
    { text: "Powerful APIs", icon: "</>" },
    { text: "For Design", icon: "⚙️" },
    { text: "Cybersecurity", icon: "🛡️" },
    { text: "Collaborative teams", icon: "👥" },
    { text: "Safe Space", icon: "🔒" },
    { text: "Revolution", icon: "🚀" },
    { text: "For Teams", icon: "👨‍👩‍👧‍👦" },
    { text: "Decentralized", icon: "🌐" }
  ];

  const web3Tags = [
    "Web 3.0 development",
    "Growth",
    "APIs",
    "Go-to-Market Solutions",
    "Easy-to-use interface",
    "Scalable",
    "Fast Integrations",
    "Accessibility"
  ];

  const blockchains = [
    { name: "Bitcoin", color: "bg-orange-500", icon: "B" },
    { name: "Ethereum", color: "bg-purple-500", icon: "⟠" },
    { name: "Avalanche", color: "bg-red-500", icon: "A" },
    { name: "Binance", color: "bg-yellow-500", icon: "B" },
    { name: "Solana", color: "bg-green-500", icon: "S" },
    { name: "Polygon", color: "bg-pink-500", icon: "P" }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Explore Our Feature
          </h2>
          <p 
            className="text-lg text-gray-600"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Discover the powerful features that make our platform stand out
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Ready to go services (Large - spans 2 columns) */}
          <div 
            className="lg:col-span-2 rounded-2xl p-8 shadow-sm border border-gray-100"
            style={{ background: 'linear-gradient(to bottom right, #F0F8F0 0%, #FFFFFF 100%)' }}
          >
            <h3 
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Ready to go services
            </h3>
            <p 
              className="text-gray-600 mb-6"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Streamlining solutions for swift success
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full font-medium inline-flex items-center gap-1.5"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  <span>{tag.icon}</span>
                  {tag.text}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: For growing teams */}
          <div className="rounded-2xl p-8 shadow-sm border border-gray-100 bg-white">
            <h3 
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              For growing teams
            </h3>
            <p 
              className="text-gray-600 mb-6"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Tailored support to give you progress
            </p>
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full"></div>
              </div>
              <div className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-3 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Invite user to this team</span>
              </div>
            </div>
          </div>

          {/* Card 3: Powerful APIs for developers */}
          <div className="rounded-2xl p-8 shadow-sm border border-gray-100 bg-white">
            <h3 
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Powerful APIs for developers
            </h3>
            <p 
              className="text-gray-600 mb-6"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Seamless Integration for your company
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono">
                <span className="text-gray-500">// MyToken.sol</span>{'\n'}
                <span className="text-purple-400">pragma</span> solidity ^0.8.0;{'\n'}
                <span className="text-purple-400">import</span> "@openzeppelin/contracts";{'\n\n'}
                <span className="text-blue-400">contract</span> <span className="text-yellow-400">MyToken</span> <span className="text-purple-400">is</span> IERC20 {'{'}
                {`\n  string public name = "MyToken";`}
                {`\n  string public symbol = "MTK";`}
                {`\n  uint256 public override totalSupply;`}
              </pre>
            </div>
          </div>

          {/* Card 4: The best blockchains out there */}
          <div className="rounded-2xl p-8 shadow-sm border border-gray-100 bg-white">
            <h3 
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              The best blockchains out there
            </h3>
            <p 
              className="text-gray-600 mb-6"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Pioneering paths in decentralized solutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {blockchains.map((chain, idx) => (
                <div
                  key={idx}
                  className={`w-12 h-12 ${chain.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                >
                  {chain.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Web 3.0 development */}
          <div className="rounded-2xl p-8 shadow-sm border border-gray-100 bg-white">
            <h3 
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Web 3.0 development
            </h3>
            <p 
              className="text-gray-600 mb-6"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Crafting tomorrow's digital landscape today
            </p>
            <div className="flex flex-wrap gap-2">
              {web3Tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full font-medium"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

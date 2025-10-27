import { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Basic",
      priceMonthly: "9.99",
      priceYearly: "79.99",
      description: "Essential features for beginners.",
      buttonText: "Get Started with Basic",
      buttonStyle: "secondary",
      features: [
        "Basic Platform Access",
        "Email Support",
        "Limited Data Storage"
      ]
    },
    {
      name: "Pro",
      priceMonthly: "19.99",
      priceYearly: "159.99",
      description: "Advanced tools for growth.",
      buttonText: "Get Started with Pro",
      buttonStyle: "primary",
      isPopular: true,
      features: [
        "Full Platform Access",
        "Email and Chat Support",
        "Unlimited Data Storage"
      ]
    },
    {
      name: "Premium",
      priceMonthly: "29.99",
      priceYearly: "239.99",
      description: "Top-tier support and customization.",
      buttonText: "Get Started with Premium",
      buttonStyle: "secondary",
      features: [
        "Advanced Platform Access",
        "24/7 Support via Chat, and Phone",
        "Customized Features"
      ]
    }
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
            Pricing
          </h2>
          <p 
            className="text-lg text-gray-600 mb-8"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Explore our pricing plans tailored to fit your needs.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white border border-gray-300 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Yearly • 20% off
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
            const savings = billingCycle === 'yearly' ? '20%' : '';
            
            return (
              <div
                key={index}
                className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all"
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-lime-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}

                {/* Plan Name */}
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">${price}</span>
                  <span className="text-gray-600 text-lg"> /month</span>
                </div>

                {/* Description */}
                <p 
                  className="text-gray-600 mb-6"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span 
                        className="text-gray-700 text-sm"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    plan.buttonStyle === 'primary'
                      ? 'bg-lime-400 hover:bg-lime-500 text-black'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  {plan.buttonText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl p-8 sm:p-12 text-center border-2 border-green-100">
          <h3 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 inline-flex items-center gap-2"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Unlock the Power of Web3 Today!
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </h3>
          <p 
            className="text-lg text-gray-600 mb-6"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Join us on the journey to the decentralized future.
          </p>
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium py-3 px-8 rounded-lg transition-all inline-flex items-center gap-2">
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

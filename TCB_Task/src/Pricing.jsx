export default function Pricing() {
  const plans = [
    { name: "Basic", price: "9.99", features: ["1 user", "Email support"] },
    { name: "Fit", price: "19.99", features: ["3 users", "Priority support"], highlight: true },
    { name: "Pro", price: "29.99", features: ["10 users", "24/7 support"] },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl border ${
              p.highlight
                ? "border-green-600 bg-green-50 dark:bg-green-900/20"
                : "border-gray-300 dark:border-gray-700"
            }`}
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-4xl font-bold mt-2">${p.price}</p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              {p.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

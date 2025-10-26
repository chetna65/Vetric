export default function Hero() {
  return (
    <section className="text-center py-20 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
        Build the Future <br /> with Web
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        Discover new ways to easily connect with the internet’s greatest potential.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Get Started
        </button>
        <button className="border border-gray-400 dark:border-gray-600 px-6 py-3 rounded-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}

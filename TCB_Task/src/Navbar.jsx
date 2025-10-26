import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-sm">
      <h1 className="text-2xl font-bold text-green-600">Vetric</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md text-sm"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

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
      <img src="/vetric-logo.png"></img>
      <h1 className="text-2xl font-bold text-black dark:text-white ">Vetric</h1>
      <a href="#">Home</a>
      <a href="#">Pricing</a>
      <a href="#">Features</a>
      <a href="#">Contact</a>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md text-sm"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
        <button className="bg-lime-500 text-white px-4 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

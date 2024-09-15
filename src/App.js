import './App.css';
import logoLight from './assets/logo1.png';  // Import light mode logo
import logoDark from './assets/logo2.png';   // Import dark mode logo
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Force dark mode only
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
      <div className="App">
        {/* Navbar */}
        <nav className="bg-gray-900 border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                  src={logoDark}  // Use dark mode logo only
                  className="h-16"
                  alt="Dark Mode Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Crescenta Valley Mountain Biking
            </span>
            </a>
            <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                aria-controls="navbar-dropdown"
                aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900">
                <li>
                  <a href="#"
                     className="block py-2 px-3 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-500 md:p-0">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#"
                     className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">
                    How to Join
                  </a>
                </li>
                <li>
                  <a href="#"
                     className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">
                    Coaches
                  </a>
                </li>
                <li>
                  <a href="#"
                     className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="bg-gray-800 text-white py-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to CV Mountain Biking</h1>
            <p className="text-lg mb-6">
              Join one of the most quality mountain biking teams in SoCal, with a focus on camaraderie, growth, and
              competition. Learn about our practices, races, and how to get involved below.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/register" className="bg-blue-600 px-4 py-2 rounded text-white">How to Join</a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 rounded-lg shadow m-4">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">© 2024 Crescenta Valley Mountain Biking. All Rights Reserved.
          </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
              <li><a href="#" className="hover:underline me-4 md:me-6">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </footer>
      </div>
  );
}

export default App;

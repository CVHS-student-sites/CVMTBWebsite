// src/App.js

import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import the page components
import HomePage from './pages/HomePage';
import JoiningPage from './pages/JoiningPage';
import CostsPage from './pages/CostsPage';
import ContactPage from './pages/ContactPage';
import SponsorsPage from './pages/SponsorsPage';
import EquipmentChecklistPage from './pages/EquipmentChecklistPage';

function App() {
  useEffect(() => {
    // Force dark mode only
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
      <Router>
        <div className="App">
          {/* Navbar */}
          <nav className="bg-gray-900 border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                    src='/assets/images/logo2.png'
                    className="h-16"
                    alt="Dark Mode Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Crescenta Valley Mountain Biking
              </span>
              </Link>
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
                    <Link to="/" className="block py-2 px-3 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-500 md:p-0">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/join" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                      How to Join
                    </Link>
                  </li>
                  <li>
                    <Link to="/costs" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                      Costs
                    </Link>
                  </li>
                  <li>
                    <Link to="/equipment" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                      Equipment
                    </Link>
                  </li>
                  <li>
                    <Link to="/sponsors" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                      Sponsors
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/join" element={<JoiningPage />} />
            <Route path="/costs" element={<CostsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/equipment" element={<EquipmentChecklistPage />} />
          </Routes>

          {/* Footer */}
          <footer className="bg-gray-800 rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-400 sm:text-center">© 2024 Crescenta Valley Mountain Biking. All Rights Reserved.
            </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </footer>
        </div>
      </Router>
  );
}

export default App;

import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { Footer } from "flowbite-react";

import HomePage from './pages/HomePage';
import JoiningPage from './pages/JoiningPage';
import CostsPage from './pages/CostsPage';
import ContactPage from './pages/ContactPage';
import SponsorsPage from './pages/SponsorsPage';
import EquipmentChecklistPage from './pages/EquipmentChecklistPage';

function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Determine if the current path matches the given path
  const isActive = (path) => location.pathname === path ? 'text-blue-500' : 'text-gray-400';

  return (
      <nav className="bg-gray-900 border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
                src="/assets/images/logo2.png"
                className="h-16"
                alt="Dark Mode Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            {/* Responsive text based on screen size */}
              <span className="block md:hidden">Crescenta Valley MTB</span>
            <span className="hidden md:block">Crescenta Valley Mountain Biking</span>
          </span>
          </Link>
          <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
              <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
              className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
              id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900">
              <li>
                <Link
                    to="/"
                    className={`block py-2 px-3 rounded md:bg-transparent hover:text-blue-500 md:p-0 ${isActive(
                        '/'
                    )}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                    to="/join"
                    className={`block py-2 px-3 rounded md:bg-transparent hover:text-blue-500 md:p-0 ${isActive(
                        '/join'
                    )}`}
                >
                  How to Join
                </Link>
              </li>
              <li>
                <Link
                    to="/costs"
                    className={`block py-2 px-3 rounded md:bg-transparent hover:text-blue-500 md:p-0 ${isActive(
                        '/costs'
                    )}`}
                >
                  Costs
                </Link>
              </li>
              <li>
                <Link
                    to="/equipment"
                    className={`block py-2 px-3 rounded md:bg-transparent hover:text-blue-500 md:p-0 ${isActive(
                        '/equipment'
                    )}`}
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                    to="/sponsors"
                    className={`block py-2 px-3 rounded md:bg-transparent hover:text-blue-500 md:p-0 ${isActive(
                        '/sponsors'
                    )}`}
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                    to="/contact"
                    className={`block py-2 px-3 rounded md:bg-transparent hover:text-blue-500 md:p-0 ${isActive(
                        '/contact'
                    )}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

function App() {
  useEffect(() => {
    // Force dark mode only; people don't need to get flash banged by a light theme
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
      <Router>
        <div className="App">
          {/* Navbar */}
          <Navbar/>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/join" element={<JoiningPage/>}/>
            <Route path="/costs" element={<CostsPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/sponsors" element={<SponsorsPage/>}/>
            <Route path="/equipment" element={<EquipmentChecklistPage/>}/>
          </Routes>

          {/* Footer */}
          <footer className="bg-gray-800 rounded-lg shadow m-4">
            <div
                className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center sm:flex-row sm:justify-between">
              <Footer.Copyright
                  by="Crescenta Valley Mountain Biking"
                  year={2024}
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center sm:content-center">
                <ul className="flex flex-wrap items-center text-sm font-medium text-gray-400 sm:mt-0">
                  <li>
                    <Link to="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
                <Footer.Icon
                    href="https://www.instagram.com/cvcycling/"
                    icon={BsInstagram}
                />
              </div>
            </div>
          </footer>
        </div>
      </Router>
  );
}

export default App;

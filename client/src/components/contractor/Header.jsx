import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/hamburger.svg" // Replace with your logo path
            alt="E-Tender Logo"
            className="h-10 w-auto"
          />
          <span className="ml-2 text-xl font-semibold text-gray-800">
            Contractor Dashboard
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/contractor" className="text-gray-700 hover:text-blue-600">
            Dashboard
          </a>
          <a href="/contractor/tenders" className="text-gray-700 hover:text-blue-600">
            Tenders
          </a>
          <a href="/contractor/bids" className="text-gray-700 hover:text-blue-600">
            My Bids
          </a>
          <a href="/contractor/profile" className="text-gray-700 hover:text-blue-600">
            Profile
          </a>
        </nav>

        {/* User Profile Dropdown */}
        <div className="flex items-center">
          <div className="relative">
            <button className="flex items-center focus:outline-none">
              <img
                src="/assets/user.svg" // Replace with user avatar path
                alt="User Avatar"
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-gray-700">John Doe</span> {/* Replace with dynamic user name */}
              <svg
                className="ml-2 h-4 w-4 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden">
              <a
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
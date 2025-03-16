import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-teal-500">
          Manfaa
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/businesses" className="text-gray-600 hover:text-gray-900">
            Businesses
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/ui-testing" className="text-gray-600 hover:text-gray-900">
            UI Testing
          </Link>
          <Link href="/debug" className="text-gray-600 hover:text-gray-900">
            Debug
          </Link>
        </div>

        {/* Auth and Language */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <span className="mr-1">🌐</span>
            <span>العربية</span>
          </button>
          <Link href="/signin" className="text-gray-600 hover:text-gray-900">
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
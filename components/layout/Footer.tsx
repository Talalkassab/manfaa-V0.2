import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-8 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-teal-500 font-bold text-xl mb-4">Manfaa</h3>
            <p className="text-gray-600 max-w-xs">
              Manfaa Business Marketplace - Buy and sell businesses in Saudi Arabia.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                <li><Link href="/businesses" className="text-gray-600 hover:text-gray-900">Businesses</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Account</h4>
              <ul className="space-y-2">
                <li><Link href="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link></li>
                <li><Link href="/signup" className="text-gray-600 hover:text-gray-900">Sign Up</Link></li>
                <li><Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Email: info@manfaa.com</li>
                <li className="text-gray-600">Phone: +966 123 456 7890</li>
                <li className="text-gray-600">Saudi Arabia</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {currentYear} Manfaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
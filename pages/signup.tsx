import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function SignUpPage() {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-12">
          <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="First name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                placeholder="••••••••"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 8 characters long and include a number and a special character.
              </p>
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                  required
                />
              </div>
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to the{' '}
                <Link href="/terms" className="text-teal-500 hover:text-teal-600">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-teal-500 hover:text-teal-600">
                  Privacy Policy
                </Link>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition duration-300"
            >
              Create Account
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/signin" className="text-teal-500 hover:text-teal-600 font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 
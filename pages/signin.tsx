import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function SignInPage() {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-12">
          <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
          
          <form className="space-y-6">
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
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Link href="/forgot-password" className="text-sm text-teal-500 hover:text-teal-600">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition duration-300"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="text-teal-500 hover:text-teal-600 font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 
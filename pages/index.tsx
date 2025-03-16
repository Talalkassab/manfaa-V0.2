import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Welcome to Manfaa</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your marketplace for businesses in Saudi Arabia
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-teal-700 mb-3">Explore Businesses -&gt;</h2>
            <p className="text-gray-600 mb-4">Explore businesses for sale in Saudi Arabia.</p>
            <Link href="/businesses" className="text-teal-600 hover:underline font-medium">
              Browse listings
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-teal-700 mb-3">Sign In-&gt;</h2>
            <p className="text-gray-600 mb-4">Sign in to your account to manage your businesses.</p>
            <Link href="/signin" className="text-teal-600 hover:underline font-medium">
              Log in now
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-teal-700 mb-3">Sign Up-&gt;</h2>
            <p className="text-gray-600 mb-4">Create a new account to buy or sell businesses.</p>
            <Link href="/signup" className="text-teal-600 hover:underline font-medium">
              Register now
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-teal-700 mb-3">About-&gt;</h2>
            <p className="text-gray-600 mb-4">Learn more about Manfaa Business Marketplace.</p>
            <Link href="/about" className="text-teal-600 hover:underline font-medium">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
} 
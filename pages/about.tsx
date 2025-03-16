import React from 'react';
import Layout from '../components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">About Manfaa</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Welcome to Manfaa, Saudi Arabia's premier business marketplace where entrepreneurs can buy, sell, and discover 
            business opportunities in a secure and transparent environment.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-4">
            Our mission is to facilitate the exchange of business assets, create opportunities for entrepreneurs, 
            and contribute to the economic growth of Saudi Arabia in line with Vision 2030.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
          <p className="mb-4">
            Manfaa provides a platform where sellers can list their businesses, and buyers can browse
            and connect with sellers directly. Our platform includes tools for valuation, secure communications,
            and verified business listings.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <p className="mb-4">
            Founded by experienced entrepreneurs and business consultants, our team is dedicated to 
            helping businesses change hands seamlessly and confidently.
          </p>
        </div>
      </div>
    </Layout>
  );
} 
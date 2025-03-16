import React from 'react';
import Layout from '../components/layout/Layout';

export default function BusinessesPage() {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Businesses</h1>
        <p className="mb-4">Browse businesses for sale in Saudi Arabia.</p>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600">No businesses listed yet. Check back soon!</p>
        </div>
      </div>
    </Layout>
  );
} 
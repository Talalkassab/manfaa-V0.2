import React from 'react';
import Layout from '../components/Layout';

export default function TestPage() {
  return (
    <Layout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-teal-700 mb-4">Test Page</h1>
        <p className="text-gray-600">This is a simple test page to check if styling works.</p>
      </div>
    </Layout>
  );
} 
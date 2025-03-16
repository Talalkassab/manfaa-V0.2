'use client'

import React from 'react'

export default function SimpleDebugPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Simple Debug Page</h1>
      <p>This is a simple debug page without localization.</p>
      <div className="bg-white rounded-lg shadow p-6 mt-4">
        <h2 className="text-xl font-semibold mb-4">Component Status</h2>
        <div className="p-4 bg-gray-100 rounded mb-4">
          <p>React version: <span className="font-mono">{React.version || 'Unknown'}</span></p>
        </div>
      </div>
    </div>
  )
} 
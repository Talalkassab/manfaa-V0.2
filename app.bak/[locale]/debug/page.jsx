'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function DebugPage() {
  const t = typeof useTranslations === 'function' ? useTranslations('common') : (key) => key;
  const [debugInfo, setDebugInfo] = React.useState({
    localization: 'Loading...',
    components: 'Loading...',
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Debug Page</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Localization Status</h2>
        <div className="p-4 bg-gray-100 rounded">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify({ 
              translations: t('debugInfo') || 'Translation key not found',
            }, null, 2)}
          </pre>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Component Status</h2>
        <div className="p-4 bg-gray-100 rounded mb-4">
          <p>React version: <span className="font-mono">{React.version || 'Unknown'}</span></p>
          <p>next-intl loaded: <span className="font-mono">{typeof useTranslations === 'function' ? 'Yes' : 'No'}</span></p>
        </div>
      </div>
    </div>
  );
} 
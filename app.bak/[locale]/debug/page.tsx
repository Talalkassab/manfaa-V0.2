'use client'

import { useTranslations } from 'next-intl'
import * as React from 'react'

export default function DebugPage() {
  const t = typeof useTranslations === 'function' ? useTranslations('common') : (key: string) => key
  const [debugInfo, setDebugInfo] = React.useState({
    localization: 'Loading...',
    components: 'Loading...',
  })

  return React.createElement('div', { className: 'container mx-auto p-6' },
    React.createElement('h1', { className: 'text-3xl font-bold mb-6' }, 'Debug Page'),
    React.createElement('div', { className: 'bg-white rounded-lg shadow p-6 mb-6' },
      React.createElement('h2', { className: 'text-xl font-semibold mb-4' }, 'Localization Status'),
      React.createElement('div', { className: 'p-4 bg-gray-100 rounded' },
        React.createElement('pre', { className: 'whitespace-pre-wrap' }, 
          JSON.stringify({ 
            translations: t('debugInfo') || 'Translation key not found',
          }, null, 2)
        )
      )
    ),
    React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' },
      React.createElement('h2', { className: 'text-xl font-semibold mb-4' }, 'Component Status'),
      React.createElement('div', { className: 'p-4 bg-gray-100 rounded mb-4' },
        React.createElement('p', null, 'React version: ', 
          React.createElement('span', { className: 'font-mono' }, React.version || 'Unknown')
        ),
        React.createElement('p', null, 'next-intl loaded: ',
          React.createElement('span', { className: 'font-mono' }, typeof useTranslations === 'function' ? 'Yes' : 'No')
        )
      )
    )
  )
} 
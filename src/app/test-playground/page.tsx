'use client'

import React, { useState } from 'react'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function TestPlayground() {
  const [radioValue, setRadioValue] = useState('option1')
  const [textareaValue, setTextareaValue] = useState('')
  const [loading, setLoading] = useState(false)

  const simulateLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">UI Component Manual Testing Playground</h1>
      
      <div className="space-y-16">
        {/* Spinner Component */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Spinner Component</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-8">
              <div className="space-y-2">
                <p className="text-sm font-medium">Small Size</p>
                <Spinner size="small" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Medium Size (Default)</p>
                <Spinner />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Large Size</p>
                <Spinner size="large" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Custom Class</p>
                <Spinner className="text-blue-500" />
              </div>
            </div>
            <div className="pt-4">
              <Button onClick={simulateLoading} disabled={loading}>
                {loading ? (
                  <>
                    <Spinner size="small" className="mr-2" />
                    Loading...
                  </>
                ) : 'Simulate Loading'}
              </Button>
            </div>
          </div>
        </section>
        
        {/* Textarea Component */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Textarea Component</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Default Textarea</label>
                <Textarea 
                  placeholder="Enter text here..." 
                  value={textareaValue} 
                  onChange={(e) => setTextareaValue(e.target.value)}
                />
                <p className="text-xs text-gray-500">Characters: {textareaValue.length}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Disabled Textarea</label>
                <Textarea 
                  placeholder="This textarea is disabled" 
                  disabled
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* RadioGroup Component */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">RadioGroup Component</h2>
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Horizontal Layout</h3>
              <RadioGroup 
                value={radioValue} 
                onValueChange={setRadioValue}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1-h" />
                  <label htmlFor="option1-h">Option 1</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2-h" />
                  <label htmlFor="option2-h">Option 2</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="option3-h" />
                  <label htmlFor="option3-h">Option 3</label>
                </div>
              </RadioGroup>
              <p className="text-sm text-gray-500">Selected value: {radioValue}</p>
            </div>
          </div>
        </section>
        
        {/* Input Component */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Input Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Default Input</label>
              <Input placeholder="Default input" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Disabled Input</label>
              <Input placeholder="Disabled input" disabled />
            </div>
          </div>
        </section>
        
        {/* Button Component */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Button Component</h2>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 
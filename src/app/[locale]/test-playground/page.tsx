'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function TestPlayground() {
  const t = useTranslations('common')
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
      
      {/* Component Sections */}
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
          <div className="mt-4 pt-4 border-t">
            <h3 className="text-lg font-medium mb-2">Test Cases:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Confirm spinner displays in all three sizes (small, medium, large)</li>
              <li>Verify custom color class is applied</li>
              <li>Confirm spinner appears when button is clicked</li>
              <li>Verify button is disabled while loading</li>
              <li>Check that spinner disappears after 2 seconds</li>
            </ul>
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
              <div className="space-y-2">
                <label className="text-sm font-medium">Custom Rows</label>
                <Textarea 
                  placeholder="This textarea has 6 rows" 
                  rows={6}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">With Custom Class</label>
                <Textarea 
                  placeholder="This textarea has a custom border" 
                  className="border-blue-500 focus:border-blue-700"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <h3 className="text-lg font-medium mb-2">Test Cases:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Type in the default textarea and confirm text appears</li>
              <li>Verify character count updates correctly</li>
              <li>Try to interact with disabled textarea (should not be possible)</li>
              <li>Confirm textarea with custom rows is taller</li>
              <li>Verify custom border color is applied</li>
              <li>Check that resizing works as expected</li>
            </ul>
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
            
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Vertical Layout</h3>
              <RadioGroup 
                value={radioValue} 
                onValueChange={setRadioValue}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1-v" />
                  <label htmlFor="option1-v">Option 1</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2-v" />
                  <label htmlFor="option2-v">Option 2</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="option3-v" />
                  <label htmlFor="option3-v">Option 3</label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-medium">With Disabled Option</h3>
              <RadioGroup className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1-d" />
                  <label htmlFor="option1-d">Option 1</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2-d" disabled />
                  <label htmlFor="option2-d" className="text-gray-400">Option 2 (Disabled)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="option3-d" />
                  <label htmlFor="option3-d">Option 3</label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <h3 className="text-lg font-medium mb-2">Test Cases:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Select different radio options and verify selection visually</li>
              <li>Confirm the selected value text updates correctly</li>
              <li>Verify both horizontal and vertical layouts display correctly</li>
              <li>Try to select the disabled option (should not be possible)</li>
              <li>Tab through options to test keyboard navigation</li>
            </ul>
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
            <div className="space-y-2">
              <label className="text-sm font-medium">With Error State</label>
              <Input 
                placeholder="Input with error" 
                className="border-red-500 focus:border-red-700" 
              />
              <p className="text-sm text-red-500">This field is required</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Number Input</label>
              <Input type="number" placeholder="Enter a number" min={0} max={100} />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <h3 className="text-lg font-medium mb-2">Test Cases:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Type in the default input and verify text appears</li>
              <li>Try to interact with disabled input (should not be possible)</li>
              <li>Verify error state styling is applied correctly</li>
              <li>For number input, try typing letters (should not be possible)</li>
              <li>Test min/max constraints on number input</li>
            </ul>
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
            
            <div className="flex flex-wrap gap-4">
              <Button size="default">Default Size</Button>
              <Button size="sm">Small Size</Button>
              <Button size="lg">Large Size</Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled Button</Button>
              <Button className="w-full md:w-auto">Full Width on Mobile</Button>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <h3 className="text-lg font-medium mb-2">Test Cases:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Click each button variant and confirm hover/active states</li>
              <li>Verify each size renders correctly</li>
              <li>Try to click disabled button (should not trigger any action)</li>
              <li>Resize browser window to test responsive full-width button</li>
              <li>Test keyboard focus and activation (using Tab and Enter)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
} 
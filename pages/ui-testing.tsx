import React from 'react';
import Layout from '../components/layout/Layout';
import LoadingIndicator from '../components/ui/LoadingIndicator';

export default function UITestingPage() {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">UI Testing</h1>
        <p className="mb-8">This page showcases various UI components used throughout the application.</p>
        
        <div className="space-y-12">
          {/* Typography */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Typography</h2>
            
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold">H1 Heading</h1>
                <p className="text-gray-600 text-sm">text-4xl font-bold</p>
              </div>
              
              <div>
                <h2 className="text-3xl font-semibold">H2 Heading</h2>
                <p className="text-gray-600 text-sm">text-3xl font-semibold</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium">H3 Heading</h3>
                <p className="text-gray-600 text-sm">text-2xl font-medium</p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium">H4 Heading</h4>
                <p className="text-gray-600 text-sm">text-xl font-medium</p>
              </div>
              
              <div>
                <p className="text-base">Regular paragraph text</p>
                <p className="text-gray-600 text-sm">text-base</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Small text</p>
                <p className="text-gray-600 text-sm">text-sm text-gray-600</p>
              </div>
            </div>
          </section>
          
          {/* Colors */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Colors</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-teal-500 rounded"></div>
                <p className="text-sm font-medium">Primary (Teal 500)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 bg-teal-600 rounded"></div>
                <p className="text-sm font-medium">Primary Dark (Teal 600)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 bg-gray-800 rounded"></div>
                <p className="text-sm font-medium">Text Dark (Gray 800)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 bg-gray-600 rounded"></div>
                <p className="text-sm font-medium">Text Medium (Gray 600)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 bg-gray-200 rounded"></div>
                <p className="text-sm font-medium">Border (Gray 200)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 bg-gray-100 rounded"></div>
                <p className="text-sm font-medium">Background Light (Gray 100)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 bg-gray-50 rounded"></div>
                <p className="text-sm font-medium">Background Lightest (Gray 50)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 bg-white rounded border border-gray-200"></div>
                <p className="text-sm font-medium">White</p>
              </div>
            </div>
          </section>
          
          {/* Buttons */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Primary Buttons</h3>
                
                <div className="space-y-3">
                  <button className="px-4 py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition duration-300">
                    Primary Button
                  </button>
                  
                  <button className="px-4 py-2 bg-teal-500 text-white font-medium rounded-md opacity-70 cursor-not-allowed">
                    Disabled Button
                  </button>
                  
                  <button className="px-4 py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition duration-300 flex items-center">
                    <span className="mr-2">Icon Button</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Secondary Buttons</h3>
                
                <div className="space-y-3">
                  <button className="px-4 py-2 bg-white text-teal-500 font-medium rounded-md border border-teal-500 hover:bg-teal-50 transition duration-300">
                    Secondary Button
                  </button>
                  
                  <button className="px-4 py-2 bg-white text-gray-400 font-medium rounded-md border border-gray-300 cursor-not-allowed">
                    Disabled Secondary
                  </button>
                  
                  <button className="px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition duration-300">
                    Tertiary Button
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Form Elements */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Form Elements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-700">Default Input</label>
                  <input
                    type="text"
                    id="default-input"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Enter text here"
                  />
                </div>
                
                <div>
                  <label htmlFor="disabled-input" className="block mb-2 text-sm font-medium text-gray-700">Disabled Input</label>
                  <input
                    type="text"
                    id="disabled-input"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                    placeholder="Disabled input"
                    disabled
                  />
                </div>
                
                <div>
                  <label htmlFor="textarea" className="block mb-2 text-sm font-medium text-gray-700">Textarea</label>
                  <textarea
                    id="textarea"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Enter multiple lines of text"
                  ></textarea>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Checkbox</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-1"
                        type="checkbox"
                        className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <label htmlFor="checkbox-1" className="ml-2 text-sm text-gray-700">Option 1</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="checkbox-2"
                        type="checkbox"
                        className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <label htmlFor="checkbox-2" className="ml-2 text-sm text-gray-700">Option 2</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Radio Buttons</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="radio-1"
                        type="radio"
                        name="radio-group"
                        className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500"
                      />
                      <label htmlFor="radio-1" className="ml-2 text-sm text-gray-700">Option A</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="radio-2"
                        type="radio"
                        name="radio-group"
                        className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500"
                      />
                      <label htmlFor="radio-2" className="ml-2 text-sm text-gray-700">Option B</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="select" className="block mb-2 text-sm font-medium text-gray-700">Select</label>
                  <select
                    id="select"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">Select an option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
          
          {/* Loading Indicators */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Loading Indicators</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Default Loading Indicator</h3>
                <LoadingIndicator />
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Custom Text Loading Indicator</h3>
                <LoadingIndicator text="Processing..." />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
} 
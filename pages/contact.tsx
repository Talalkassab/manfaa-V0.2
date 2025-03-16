import React from 'react';
import Layout from '../components/layout/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-8">Have questions? We're here to help! Fill out the form below and we'll get back to you shortly.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Email</h3>
                <p className="text-gray-600">info@manfaa.com</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700">Phone</h3>
                <p className="text-gray-600">+966 123 456 7890</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700">Address</h3>
                <p className="text-gray-600">
                  Manfaa Offices<br />
                  Riyadh, Saudi Arabia
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700">Business Hours</h3>
                <p className="text-gray-600">
                  Sunday - Thursday: 9:00 AM - 5:00 PM<br />
                  Friday - Saturday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 
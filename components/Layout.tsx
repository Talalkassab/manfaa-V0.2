import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-teal-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Manfaa
          </Link>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/businesses" className="hover:underline">Businesses</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        {children}
      </main>

      <footer className="bg-teal-800 text-white p-4">
        <div className="container mx-auto">
          <p className="text-center">© 2025 Manfaa Business Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 
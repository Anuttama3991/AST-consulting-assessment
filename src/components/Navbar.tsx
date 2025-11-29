'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sections } from '@/data/news';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const todayDate = new Date().toLocaleDateString('hi-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
      setSearchVisible(false);
      setSearchText('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Strip */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white py-1.5 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <time dateTime={new Date().toISOString()}>{todayDate}</time>
          <nav className="hidden md:flex items-center space-x-5">
            <Link href="#" className="hover:text-red-200 transition-colors">ई-पेपर</Link>
            <Link href="#" className="hover:text-red-200 transition-colors">वीडियो</Link>
            <Link href="#" className="hover:text-red-200 transition-colors">फोटो गैलरी</Link>
          </nav>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Hamburger Menu */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="मेनू खोलें"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-red-600 group-hover:text-red-700 transition-colors">हिंदुस्तान</span>
              <span className="text-gray-800">लाइव</span>
            </div>
          </Link>

          {/* Search Icon */}
          <button
            onClick={() => setSearchVisible(!searchVisible)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="खोजें"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Expandable Search */}
        {searchVisible && (
          <form onSubmit={handleSearchSubmit} className="mt-4 animate-slideDown">
            <div className="relative max-w-xl mx-auto">
              <input
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="समाचार खोजें..."
                className="w-full px-5 py-3 border-2 border-red-200 rounded-full focus:outline-none focus:border-red-500 transition-colors"
                autoFocus
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-red-600 hover:text-red-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1 py-2 overflow-x-auto">
            <li>
              <Link
                href="/"
                className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
              >
                मुख्य पृष्ठ
              </Link>
            </li>
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`/section/${section.slug}`}
                  className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-all whitespace-nowrap"
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="lg:hidden py-3 space-y-1 animate-slideDown">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  मुख्य पृष्ठ
                </Link>
              </li>
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`/section/${section.slug}`}
                    className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

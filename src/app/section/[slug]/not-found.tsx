import Link from 'next/link';
import { sections } from '@/data/news';

export default function SectionNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">श्रेणी नहीं मिली</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          यह समाचार श्रेणी उपलब्ध नहीं है। कृपया नीचे दी गई श्रेणियों में से चुनें।
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {sections.map((section) => (
            <Link 
              key={section.id}
              href={`/section/${section.slug}`}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-red-100 hover:text-red-700 transition-colors font-medium"
            >
              {section.title}
            </Link>
          ))}
        </div>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
        >
          मुख्य पृष्ठ पर जाएं
        </Link>
      </div>
    </div>
  );
}

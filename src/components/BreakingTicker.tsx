'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NewsArticle } from '@/types';

interface BreakingTickerProps {
  news: NewsArticle[];
}

export default function BreakingTicker({ news }: BreakingTickerProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (news.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [news.length]);

  if (news.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-2">
          {/* Label */}
          <div className="shrink-0 flex items-center gap-2 pr-4 border-r border-red-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-bold text-sm whitespace-nowrap">तेज़ खबर</span>
          </div>

          {/* News Ticker */}
          <div className="flex-1 overflow-hidden ml-4">
            <div className="relative h-6">
              {news.map((item, idx) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className={`absolute inset-0 flex items-center transition-all duration-500 ${
                    idx === currentIdx 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="truncate hover:underline text-sm">
                    {item.headline}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          {news.length > 1 && (
            <div className="hidden sm:flex items-center gap-1 ml-4">
              {news.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIdx ? 'bg-white' : 'bg-red-400'
                  }`}
                  aria-label={`खबर ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

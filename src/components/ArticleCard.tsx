import Image from 'next/image';
import Link from 'next/link';
import { NewsArticle } from '@/types';
import { getRelativeTime } from '@/lib/helpers';

interface ArticleCardProps {
  article: NewsArticle;
  variant?: 'default' | 'compact' | 'featured';
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  if (variant === 'compact') {
    return (
      <article className="group flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
        {/* Thumbnail */}
        <Link href={`/news/${article.slug}`} className="shrink-0">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
            {article.imageUrl ? (
              <Image
                src={article.imageUrl}
                alt={article.headline}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="96px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <Link href={`/news/${article.slug}`}>
            <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors leading-snug">
              {article.headline}
            </h3>
          </Link>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span>{getRelativeTime(article.datePublished)}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article className="group relative rounded-xl overflow-hidden bg-gray-900 h-[400px] md:h-[500px]">
        {/* Background Image */}
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.headline}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800" />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {article.isUrgent && (
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded mb-3 animate-pulse">
              ब्रेकिंग
            </span>
          )}
          <Link href={`/section/${article.sectionSlug}`}>
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded mb-3">
              {article.section}
            </span>
          </Link>
          <Link href={`/news/${article.slug}`}>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 line-clamp-3 group-hover:text-red-300 transition-colors">
              {article.headline}
            </h2>
          </Link>
          <p className="text-gray-300 text-sm md:text-base line-clamp-2 mb-4 hidden md:block">
            {article.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{article.writer}</span>
            <span>•</span>
            <span>{getRelativeTime(article.datePublished)}</span>
            <span>•</span>
            <span>{article.minutesToRead} मिनट</span>
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Image */}
      <Link href={`/news/${article.slug}`} className="block relative h-48 overflow-hidden bg-gray-200">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.headline}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
            <svg className="w-16 h-16 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
        {article.isUrgent && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded animate-pulse">
            ब्रेकिंग
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link href={`/section/${article.sectionSlug}`}>
          <span className="inline-block text-xs font-semibold text-red-600 uppercase tracking-wide mb-2 hover:text-red-800">
            {article.section}
          </span>
        </Link>
        <Link href={`/news/${article.slug}`}>
          <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2 group-hover:text-red-600 transition-colors mb-2">
            {article.headline}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {article.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{article.writer}</span>
          <span>{getRelativeTime(article.datePublished)}</span>
        </div>
      </div>
    </article>
  );
}

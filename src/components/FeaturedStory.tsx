import Image from 'next/image';
import Link from 'next/link';
import { NewsArticle } from '@/types';
import { getRelativeTime } from '@/lib/helpers';

interface FeaturedStoryProps {
  primary: NewsArticle;
  secondary: NewsArticle[];
}

export default function FeaturedStory({ primary, secondary }: FeaturedStoryProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <article className="group relative rounded-2xl overflow-hidden h-[350px] md:h-[450px] bg-gray-900">
              {primary.imageUrl ? (
                <Image
                  src={primary.imageUrl}
                  alt={primary.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-red-700 to-indigo-900" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                {primary.isUrgent && (
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3 animate-pulse">
                    ताज़ा खबर
                  </span>
                )}
                <Link href={`/section/${primary.sectionSlug}`}>
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full mb-3 ml-2">
                    {primary.section}
                  </span>
                </Link>
                
                <Link href={`/news/${primary.slug}`}>
                  <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight line-clamp-3 group-hover:text-red-300 transition-colors mb-4">
                    {primary.headline}
                  </h1>
                </Link>
                
                <p className="text-gray-300 line-clamp-2 mb-4 hidden md:block">
                  {primary.description}
                </p>
                
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="font-medium text-white">{primary.writer}</span>
                  <span>•</span>
                  <time>{getRelativeTime(primary.datePublished)}</time>
                </div>
              </div>
            </article>
          </div>

          {/* Secondary Stories */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {secondary.slice(0, 3).map((article, index) => (
              <article 
                key={article.id} 
                className={`group flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-md transition-all ${
                  index === 0 ? 'flex-col' : ''
                }`}
              >
                {index === 0 && article.imageUrl && (
                  <Link href={`/news/${article.slug}`} className="block relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src={article.imageUrl}
                      alt={article.headline}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </Link>
                )}
                
                {index !== 0 && (
                  <Link href={`/news/${article.slug}`} className="shrink-0">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                      {article.imageUrl ? (
                        <Image
                          src={article.imageUrl}
                          alt={article.headline}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                          <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </Link>
                )}
                
                <div className="flex-1">
                  <Link href={`/section/${article.sectionSlug}`}>
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                      {article.section}
                    </span>
                  </Link>
                  <Link href={`/news/${article.slug}`}>
                    <h3 className={`font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mt-1 ${
                      index === 0 ? 'text-lg' : 'text-sm'
                    }`}>
                      {article.headline}
                    </h3>
                  </Link>
                  <time className="text-xs text-gray-500 mt-2 block">
                    {getRelativeTime(article.datePublished)}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

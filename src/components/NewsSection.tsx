import Link from 'next/link';
import { NewsArticle } from '@/types';
import ArticleCard from './ArticleCard';

interface NewsSectionProps {
  title: string;
  slug: string;
  articles: NewsArticle[];
  showViewAll?: boolean;
}

export default function NewsSection({ title, slug, articles, showViewAll = true }: NewsSectionProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-red-600 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>
          {showViewAll && (
            <Link 
              href={`/section/${slug}`}
              className="text-red-600 hover:text-red-800 font-medium text-sm flex items-center gap-1 transition-colors"
            >
              सभी देखें
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.slice(0, 4).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

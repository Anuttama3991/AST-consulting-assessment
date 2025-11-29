import Link from 'next/link';
import { sections } from '@/data/news';
import { NewsArticle } from '@/types';
import { getRelativeTime } from '@/lib/helpers';

interface SideWidgetProps {
  latestNews: NewsArticle[];
}

export default function SideWidget({ latestNews }: SideWidgetProps) {
  return (
    <aside className="space-y-8">
      {/* Latest News */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-5 py-4">
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ताज़ा समाचार
          </h3>
        </div>
        <div className="divide-y divide-gray-100">
          {latestNews.slice(0, 6).map((article, idx) => (
            <Link 
              key={article.id}
              href={`/news/${article.slug}`}
              className="flex gap-4 p-4 hover:bg-red-50 transition-colors group"
            >
              <span className="shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                {idx + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {article.headline}
                </h4>
                <time className="text-xs text-gray-500 mt-1 block">
                  {getRelativeTime(article.datePublished)}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-4">
          <h3 className="text-white font-bold text-lg">समाचार श्रेणियाँ</h3>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`/section/${section.slug}`}
                className="px-4 py-2 text-sm font-medium rounded-full border-2 border-gray-200 text-gray-700 hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-red-600 to-indigo-700 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-xl mb-2">न्यूज़लेटर</h3>
        <p className="text-red-100 text-sm mb-4">
          दैनिक समाचार अपने इनबॉक्स में पाएं
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="ईमेल दर्ज करें"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors"
          >
            सब्सक्राइब करें
          </button>
        </form>
      </div>
    </aside>
  );
}

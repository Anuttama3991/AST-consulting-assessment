import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { newsArticles, getArticleBySlug, getArticlesBySection } from '@/data/news';
import { formatHindiDate, getRelativeTime } from '@/lib/helpers';
import { ArticleCard } from '@/components';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all articles
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'समाचार नहीं मिला' };
  }

  return {
    title: article.headline,
    description: article.description,
    openGraph: {
      title: article.headline,
      description: article.description,
      type: 'article',
      publishedTime: article.datePublished,
      authors: [article.writer],
      images: article.imageUrl ? [{ url: article.imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.headline,
      description: article.description,
    },
  };
}

// Revalidate every 5 minutes
export const revalidate = 300;

export default async function NewsPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getArticlesBySection(article.sectionSlug)
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.headline,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.datePublished,
    author: {
      '@type': 'Person',
      name: article.writer,
    },
    publisher: {
      '@type': 'Organization',
      name: 'हिंदुस्तान लाइव',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-500">
              <li>
                <Link href="/" className="hover:text-red-600 transition-colors">
                  मुख्य पृष्ठ
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link 
                  href={`/section/${article.sectionSlug}`} 
                  className="hover:text-red-600 transition-colors"
                >
                  {article.section}
                </Link>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Link href={`/section/${article.sectionSlug}`}>
                    <span className="px-4 py-1.5 bg-red-600 text-white text-sm font-semibold rounded-full">
                      {article.section}
                    </span>
                  </Link>
                  {article.isUrgent && (
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                      ब्रेकिंग
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  {article.headline}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {article.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-y border-gray-200 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{article.writer}</p>
                      <p className="text-xs">लेखक</p>
                    </div>
                  </div>
                  <span className="hidden sm:block text-gray-300">|</span>
                  <div>
                    <time dateTime={article.datePublished} className="font-medium text-gray-700">
                      {formatHindiDate(article.datePublished)}
                    </time>
                    <p className="text-xs">{getRelativeTime(article.datePublished)}</p>
                  </div>
                  <span className="hidden sm:block text-gray-300">|</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{article.minutesToRead} मिनट में पढ़ें</span>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              {article.imageUrl && (
                <figure className="mb-8 rounded-xl overflow-hidden">
                  <div className="relative aspect-video bg-gray-200">
                    <Image
                      src={article.imageUrl}
                      alt={article.headline}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      priority
                    />
                  </div>
                </figure>
              )}

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {article.body.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-4">इस खबर को शेयर करें</h3>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#1877f2] text-white rounded-lg hover:bg-[#166fe5] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
                    Facebook
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.2-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14Z"/></svg>
                    Twitter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar - Related News */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 px-5 py-4">
                    <h3 className="text-white font-bold text-lg">संबंधित समाचार</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    {relatedArticles.length > 0 ? (
                      relatedArticles.map((relArticle) => (
                        <ArticleCard 
                          key={relArticle.id} 
                          article={relArticle} 
                          variant="compact" 
                        />
                      ))
                    ) : (
                      <p className="text-gray-500 text-center py-4">
                        कोई संबंधित समाचार नहीं
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

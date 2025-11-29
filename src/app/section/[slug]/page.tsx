import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sections, getArticlesBySection, getSectionBySlug } from '@/data/news';
import { ArticleCard } from '@/components';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sections.map((section) => ({
    slug: section.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = getSectionBySlug(slug);

  if (!section) {
    return { title: 'श्रेणी नहीं मिली' };
  }

  return {
    title: `${section.title} समाचार`,
    description: `${section.title} की ताज़ा खबरें और समाचार पढ़ें। हिंदुस्तान लाइव पर ${section.title} से जुड़ी सभी खबरें।`,
  };
}

export const revalidate = 120;

export default async function SectionPage({ params }: PageProps) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);

  if (!section) {
    notFound();
  }

  const articles = getArticlesBySection(slug);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-2 h-12 rounded-full" 
              style={{ backgroundColor: section.themeColor }}
            />
            <h1 className="text-4xl font-bold text-gray-900">{section.title}</h1>
          </div>
          <p className="text-gray-600 text-lg">
            {section.title} से जुड़ी सभी ताज़ा खबरें और समाचार
          </p>
        </header>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              कोई समाचार नहीं
            </h2>
            <p className="text-gray-500">
              इस श्रेणी में अभी कोई समाचार उपलब्ध नहीं है
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

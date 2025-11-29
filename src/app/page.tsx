import { Metadata } from 'next';
import { 
  newsArticles, 
  getPrimaryArticles, 
  getUrgentNews, 
  getArticlesBySection 
} from '@/data/news';
import { 
  BreakingTicker, 
  FeaturedStory, 
  NewsSection, 
  SideWidget 
} from '@/components';

export const metadata: Metadata = {
  title: 'हिंदुस्तान लाइव - ताज़ा हिंदी समाचार | भारत का विश्वसनीय न्यूज़ पोर्टल',
  description: 'भारत की ताज़ा खबरें पढ़ें। राष्ट्रीय, अंतर्राष्ट्रीय, खेल, व्यापार, मनोरंजन, तकनीक की सभी खबरें एक जगह।',
};

// ISR - Revalidate every 2 minutes
export const revalidate = 120;

export default function HomePage() {
  const urgentNews = getUrgentNews();
  const primaryArticles = getPrimaryArticles();
  const mainStory = primaryArticles[0] || newsArticles[0];
  const sideStories = primaryArticles.slice(1, 4).length > 0 
    ? primaryArticles.slice(1, 4) 
    : newsArticles.slice(1, 4);

  return (
    <>
      {/* Breaking News Ticker */}
      {urgentNews.length > 0 && <BreakingTicker news={urgentNews} />}

      {/* Featured Story Section */}
      <FeaturedStory primary={mainStory} secondary={sideStories} />

      {/* Main Content + Sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* National News */}
            <NewsSection 
              title="राष्ट्रीय" 
              slug="national" 
              articles={getArticlesBySection('national')} 
            />

            {/* Sports News */}
            <NewsSection 
              title="क्रीड़ा" 
              slug="sports" 
              articles={getArticlesBySection('sports')} 
            />

            {/* Technology News */}
            <NewsSection 
              title="तकनीक" 
              slug="tech" 
              articles={getArticlesBySection('tech')} 
            />

            {/* Business News */}
            <NewsSection 
              title="व्यापार" 
              slug="business" 
              articles={getArticlesBySection('business')} 
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SideWidget latestNews={newsArticles} />
          </div>
        </div>
      </div>

      {/* More Sections */}
      <div className="bg-white py-8">
        <NewsSection 
          title="मनोरंजन" 
          slug="entertainment" 
          articles={getArticlesBySection('entertainment')} 
        />
        
        <NewsSection 
          title="प्रदेश" 
          slug="state" 
          articles={getArticlesBySection('state')} 
        />
      </div>
    </>
  );
}

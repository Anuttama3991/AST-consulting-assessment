// Type definitions for the news portal

export interface NewsArticle {
  id: string;
  headline: string;
  description: string;
  body: string;
  imageUrl: string | null;
  section: string;
  sectionSlug: string;
  writer: string;
  datePublished: string;
  minutesToRead: number;
  slug: string;
  isPrimary: boolean;
  isUrgent: boolean;
}

export interface Section {
  id: string;
  title: string;
  slug: string;
  themeColor: string;
}

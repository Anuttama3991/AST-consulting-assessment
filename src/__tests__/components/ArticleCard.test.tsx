/**
 * Unit Tests for ArticleCard Component
 * 
 * Tests the news article card component rendering and variants
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleCard from '@/components/ArticleCard';
import { NewsArticle } from '@/types';

// Mock article data
const mockArticle: NewsArticle = {
  id: 'test-1',
  headline: 'टेस्ट समाचार शीर्षक',
  description: 'यह एक परीक्षण विवरण है',
  body: 'यह लेख का मुख्य भाग है।',
  imageUrl: 'https://picsum.photos/800/600',
  section: 'राष्ट्रीय',
  sectionSlug: 'national',
  writer: 'टेस्ट लेखक',
  datePublished: '2024-01-15',
  minutesToRead: 5,
  slug: 'test-news-article',
  isPrimary: false,
  isUrgent: false,
};

describe('ArticleCard Component', () => {
  test('renders article headline', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('टेस्ट समाचार शीर्षक')).toBeInTheDocument();
  });

  test('renders article section', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('राष्ट्रीय')).toBeInTheDocument();
  });

  test('renders links to article page', () => {
    render(<ArticleCard article={mockArticle} />);
    const links = screen.getAllByRole('link');
    const articleLinks = links.filter(link => 
      link.getAttribute('href') === '/news/test-news-article'
    );
    expect(articleLinks.length).toBeGreaterThan(0);
  });

  test('renders image with correct alt text', () => {
    render(<ArticleCard article={mockArticle} />);
    const image = screen.getByAltText('टेस्ट समाचार शीर्षक');
    expect(image).toBeInTheDocument();
  });

  test('renders compact variant correctly', () => {
    render(<ArticleCard article={mockArticle} variant="compact" />);
    expect(screen.getByText('टेस्ट समाचार शीर्षक')).toBeInTheDocument();
  });

  test('shows breaking badge for urgent articles', () => {
    const urgentArticle = { ...mockArticle, isUrgent: true };
    render(<ArticleCard article={urgentArticle} />);
    // Should show breaking indicator
    expect(screen.getByText(/ब्रेकिंग/i)).toBeInTheDocument();
  });

  test('renders author name', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('टेस्ट लेखक')).toBeInTheDocument();
  });

  test('renders description', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('यह एक परीक्षण विवरण है')).toBeInTheDocument();
  });
});

describe('ArticleCard Accessibility', () => {
  test('has multiple accessible links', () => {
    render(<ArticleCard article={mockArticle} />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  test('image has alt attribute', () => {
    render(<ArticleCard article={mockArticle} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt');
  });
});

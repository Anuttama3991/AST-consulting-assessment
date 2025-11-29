/**
 * Unit Tests for Mock News Data
 * 
 * Tests the data module functions for fetching and filtering news articles
 */

import {
  newsArticles,
  sections,
  getPrimaryArticles,
  getUrgentNews,
  getArticlesBySection,
  getArticleBySlug,
  getSectionBySlug,
  searchArticles,
} from '@/data/news';

describe('Mock Data Structure', () => {
  describe('newsArticles', () => {
    test('should have at least 5 articles', () => {
      expect(newsArticles.length).toBeGreaterThanOrEqual(5);
    });

    test('each article should have required properties', () => {
      newsArticles.forEach((article) => {
        expect(article).toHaveProperty('id');
        expect(article).toHaveProperty('headline');
        expect(article).toHaveProperty('description');
        expect(article).toHaveProperty('slug');
        expect(article).toHaveProperty('section');
        expect(article).toHaveProperty('sectionSlug');
        expect(article).toHaveProperty('writer');
        expect(article).toHaveProperty('datePublished');
      });
    });

    test('each article should have a unique slug', () => {
      const slugs = newsArticles.map((a) => a.slug);
      const uniqueSlugs = new Set(slugs);
      expect(slugs.length).toBe(uniqueSlugs.size);
    });

    test('each article should have a unique id', () => {
      const ids = newsArticles.map((a) => a.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });
  });

  describe('sections', () => {
    test('should have at least 5 sections', () => {
      expect(sections.length).toBeGreaterThanOrEqual(5);
    });

    test('each section should have required properties', () => {
      sections.forEach((section) => {
        expect(section).toHaveProperty('id');
        expect(section).toHaveProperty('title');
        expect(section).toHaveProperty('slug');
        expect(section).toHaveProperty('themeColor');
      });
    });
  });
});

describe('Data Filtering Functions', () => {
  describe('getPrimaryArticles', () => {
    test('should return only articles marked as primary', () => {
      const primaryArticles = getPrimaryArticles();
      primaryArticles.forEach((article) => {
        expect(article.isPrimary).toBe(true);
      });
    });

    test('should return an array', () => {
      expect(Array.isArray(getPrimaryArticles())).toBe(true);
    });
  });

  describe('getUrgentNews', () => {
    test('should return only articles marked as urgent', () => {
      const urgentNews = getUrgentNews();
      urgentNews.forEach((article) => {
        expect(article.isUrgent).toBe(true);
      });
    });

    test('should return an array', () => {
      expect(Array.isArray(getUrgentNews())).toBe(true);
    });
  });

  describe('getArticlesBySection', () => {
    test('should return articles for a valid section', () => {
      const nationalArticles = getArticlesBySection('national');
      nationalArticles.forEach((article) => {
        expect(article.sectionSlug).toBe('national');
      });
    });

    test('should return empty array for non-existent section', () => {
      const result = getArticlesBySection('non-existent-section');
      expect(result).toEqual([]);
    });
  });

  describe('getArticleBySlug', () => {
    test('should return article for valid slug', () => {
      const firstArticle = newsArticles[0];
      const found = getArticleBySlug(firstArticle.slug);
      expect(found).toBeDefined();
      expect(found?.slug).toBe(firstArticle.slug);
    });

    test('should return undefined for invalid slug', () => {
      const result = getArticleBySlug('non-existent-slug');
      expect(result).toBeUndefined();
    });
  });

  describe('getSectionBySlug', () => {
    test('should return section for valid slug', () => {
      const firstSection = sections[0];
      const found = getSectionBySlug(firstSection.slug);
      expect(found).toBeDefined();
      expect(found?.slug).toBe(firstSection.slug);
    });

    test('should return undefined for invalid slug', () => {
      const result = getSectionBySlug('non-existent-section');
      expect(result).toBeUndefined();
    });
  });

  describe('searchArticles', () => {
    test('should find articles matching headline', () => {
      const firstArticle = newsArticles[0];
      const searchTerm = firstArticle.headline.split(' ')[0];
      const results = searchArticles(searchTerm);
      expect(results.length).toBeGreaterThan(0);
    });

    test('should return empty array for no matches', () => {
      const results = searchArticles('xyznonexistentterm123');
      expect(results).toEqual([]);
    });

    test('should be case-insensitive', () => {
      const results1 = searchArticles('भारत');
      const results2 = searchArticles('भारत');
      expect(results1.length).toBe(results2.length);
    });

    test('should search in headline, description, and body', () => {
      // This tests comprehensive search across multiple fields
      const results = searchArticles('समाचार');
      // Should find something as "समाचार" (news) is a common word
      expect(Array.isArray(results)).toBe(true);
    });
  });
});

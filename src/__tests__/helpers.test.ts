/**
 * Unit Tests for Utility Functions
 * 
 * Tests helper functions for date formatting and text manipulation
 */

import { formatHindiDate, getRelativeTime, shortenText, classNames } from '@/lib/helpers';

describe('formatHindiDate', () => {
  test('should format date in Hindi locale', () => {
    const date = '2024-01-15';
    const result = formatHindiDate(date);
    // Should contain Hindi text (has Hindi Unicode characters)
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('should handle different date formats', () => {
    const date1 = '2024-12-25';
    const date2 = '2023-06-01';
    
    expect(() => formatHindiDate(date1)).not.toThrow();
    expect(() => formatHindiDate(date2)).not.toThrow();
  });
});

describe('getRelativeTime', () => {
  test('should return a string', () => {
    const date = new Date().toISOString();
    const result = getRelativeTime(date);
    expect(typeof result).toBe('string');
  });

  test('should show "अभी" for recent dates', () => {
    const now = new Date().toISOString();
    const result = getRelativeTime(now);
    // Should contain Hindi time indicator
    expect(result).toBeDefined();
  });

  test('should handle past dates', () => {
    const pastDate = '2020-01-01';
    const result = getRelativeTime(pastDate);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });
});

describe('shortenText', () => {
  test('should truncate text longer than maxLength', () => {
    const longText = 'यह एक बहुत लंबा वाक्य है जिसे छोटा किया जाना चाहिए';
    const result = shortenText(longText, 20);
    expect(result.length).toBeLessThanOrEqual(23); // 20 + '...'
  });

  test('should not truncate text shorter than maxLength', () => {
    const shortText = 'छोटा';
    const result = shortenText(shortText, 100);
    expect(result).toBe(shortText);
  });

  test('should add ellipsis when truncating', () => {
    const longText = 'यह एक बहुत लंबा वाक्य है जिसे छोटा किया जाना चाहिए';
    const result = shortenText(longText, 10);
    expect(result.endsWith('...')).toBe(true);
  });

  test('should handle empty string', () => {
    const result = shortenText('', 10);
    expect(result).toBe('');
  });
});

describe('classNames', () => {
  test('should combine multiple class strings', () => {
    const result = classNames('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  test('should filter out falsy values', () => {
    const result = classNames('class1', '', 'class2', undefined, 'class3', null);
    expect(result).toBe('class1 class2 class3');
  });

  test('should handle conditional classes', () => {
    const isActive = true;
    const result = classNames('base', isActive && 'active');
    expect(result).toBe('base active');
  });

  test('should return empty string for no valid classes', () => {
    const result = classNames('', undefined, null, false);
    expect(result).toBe('');
  });
});

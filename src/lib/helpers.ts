// Utility helper functions

/**
 * Format date to relative time in Hindi
 */
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'अभी';
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} मिनट पूर्व`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} घंटे पूर्व`;
  
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} दिन पूर्व`;
  
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} सप्ताह पूर्व`;
  
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} माह पूर्व`;
  
  const years = Math.floor(days / 365);
  return `${years} वर्ष पूर्व`;
}

/**
 * Format date in Hindi locale
 */
export function formatHindiDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('hi-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format date with time
 */
export function formatDateWithTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('hi-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Shorten text with ellipsis
 */
export function shortenText(text: string, limit: number): string {
  if (text.length <= limit) return text;
  return text.substring(0, limit).trim() + '...';
}

/**
 * Create URL-friendly slug
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Combine class names conditionally
 */
export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

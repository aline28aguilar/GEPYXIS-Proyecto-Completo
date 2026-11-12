export interface FilterInput {
    key: string;
    operation: 'eq' | 'neq' | 'gt' | 'gteq' | 'lt' | 'lteq' | 'like' | 'nlike' | 'in' | 'nin';
    value: string;
}
/**
 * Build filter inputs from URL parameters
 *
 * Supports both complete URLs and relative URL paths (like request.originalUrl).
 * For relative URLs, a dummy domain is added to make them valid for URL parsing.
 *
 * @param url - Complete URL, relative URL path, or URL object
 * @returns Array of FilterInput objects
 *
 * @example
 * // Complete URL
 * buildFilterFromUrl('https://example.com/products?color=red&size=large')
 *
 * // Relative URL (from request.originalUrl)
 * buildFilterFromUrl('/products?color=red&size=large')
 *
 * // Multi-value filters
 * buildFilterFromUrl('/products?color=red&color=blue') // Creates 'in' operation
 *
 * // Complex filters
 * buildFilterFromUrl('/products?price[operation]=range&price[value]=10,100')
 */
export declare const buildFilterFromUrl: (url: string | URL) => FilterInput[];

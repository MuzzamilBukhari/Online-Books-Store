import useSWR from 'swr';

// Interface matching the existing Book structure
export interface Book {
  id: number;
  title: string;
  description: string;
  imageId: string;
  rating: number;
  authors?: string[]; // Additional field from Gutendex
  download_count?: number; // Additional field from Gutendex
}

// Gutendex API response structure
interface GutendexBook {
  id: number;
  title: string;
  authors: Array<{ name: string; birth_year?: number; death_year?: number }>;
  formats: Record<string, string>;
  download_count: number;
  subjects?: string[];
  bookshelves?: string[];
}

interface GutendexResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: GutendexBook[];
}

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Placeholder image for books without covers
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/300x450?text=No+Cover';

/**
 * Maps Gutendex book data to our existing Book interface
 * @param b - Gutendex book object
 * @returns Book object matching the app's interface
 */
function mapGutendexBook(b: GutendexBook): Book {
  // Extract cover image from formats (prefer jpeg)
  const cover = b.formats['image/jpeg'] || b.formats['image/jpg'] || PLACEHOLDER_IMAGE;
  
  // Extract author names
  const authors = (b.authors || []).map((a) => a.name);
  
  // Calculate a mock rating based on download count (normalize to 1-5 scale)
  // Higher downloads = higher rating, capped at 5.0
  const rating = Math.min(5.0, Math.max(1.0, (b.download_count / 5000) + 3.5));
  
  // Create a brief description from subjects if available
  const description = b.subjects?.[0] || 'A classic work of literature from Project Gutenberg';

  return {
    id: b.id,
    title: b.title,
    description,
    imageId: cover, // Map cover to imageId to match existing interface
    rating: parseFloat(rating.toFixed(1)),
    authors,
    download_count: b.download_count,
  };
}

/**
 * Custom hook to fetch books from Gutendex API with caching
 * @param initialUrl - The initial API URL (defaults to page 1)
 * @returns Object containing books array, loading state, error, and next page URL
 */
export function useBooks(initialUrl: string = 'https://gutendex.com/books/?page=1') {
  const { data, error, mutate } = useSWR<GutendexResponse>(
    initialUrl,
    fetcher,
    {
      revalidateOnFocus: false, // Don't refetch on window focus
      revalidateOnReconnect: false, // Don't refetch on reconnect
      dedupingInterval: 60000, // Cache for 1 minute
    }
  );

  const loading = !error && !data;
  const nextPageUrl = data?.next || null;

  // Map Gutendex results to our Book interface
  const books: Book[] = (data?.results || []).map(mapGutendexBook);

  return {
    books,
    loading,
    error,
    nextPageUrl,
    mutate, // Expose mutate for manual cache updates
  };
}

export default useBooks;

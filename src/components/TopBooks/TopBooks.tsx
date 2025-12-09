import { Button, SectionHeader, TopBookCard } from "../";
import useBookInfo from "../../hooks/useBookInfo";
import { useState } from "react";
import { Book } from "../../hooks/useBooks";

const TopBooks = () => {
  // Fetch initial books from Gutendex API
  const { books: initialBooks, loading, error, nextPageUrl } = useBookInfo();
  
  // State to manage all books (initial + loaded more)
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [currentNextUrl, setCurrentNextUrl] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);

  // Sync initial books when they arrive
  useState(() => {
    if (initialBooks && initialBooks.length > 0 && allBooks.length === 0) {
      setAllBooks(initialBooks);
      setCurrentNextUrl(nextPageUrl);
    }
  });

  // Update when initial data changes
  if (initialBooks && initialBooks.length > 0 && allBooks.length === 0) {
    setAllBooks(initialBooks);
    setCurrentNextUrl(nextPageUrl);
  }

  // Load more books from next page
  const handleLoadMore = async () => {
    if (!currentNextUrl || loadingMore) return;

    setLoadingMore(true);
    try {
      const response = await fetch(currentNextUrl);
      const data = await response.json();
      
      // Map new books to our format
      const newBooks: Book[] = (data.results || []).map((b: any) => ({
        id: b.id,
        title: b.title,
        description: b.subjects?.[0] || 'A classic work of literature from Project Gutenberg',
        imageId: b.formats['image/jpeg'] || b.formats['image/jpg'] || 'https://via.placeholder.com/300x450?text=No+Cover',
        rating: Math.min(5.0, Math.max(1.0, (b.download_count / 5000) + 3.5)),
        authors: (b.authors || []).map((a: any) => a.name),
        download_count: b.download_count,
      }));

      // Append new books to existing ones
      setAllBooks((prev) => [...prev, ...newBooks]);
      setCurrentNextUrl(data.next || null);
    } catch (err) {
      console.error('Failed to load more books:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <section className="min-h-[400px] flex flex-col justify-center items-center bg-white text-black dark:bg-gray-900 dark:text-white py-10 duration-200 gap-[50px]">
      <SectionHeader
        first="Best Books"
        heading="Top Books"
        tagline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          corrupti nihil sint met."
      />

      {/* Loading state */}
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-lg">Loading books...</div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-lg text-red-500">Failed to load books. Please try again later.</div>
        </div>
      )}

      {/* Books display */}
      {!loading && !error && (
        <>
          <div className="flex justify-center items-center flex-wrap gap-8 mt-4">
            {/* Display all books (initial + loaded more) */}
            {allBooks?.map((book) => (
              <div key={`top-${book.id}`}>
                <TopBookCard book={book} />
              </div>
            ))}
          </div>

          {/* Load More button - only show if there's a next page */}
          {currentNextUrl && (
            <Button 
              type="button" 
              onClick={handleLoadMore}
              disabled={loadingMore}
            >
              {loadingMore ? 'Loading...' : 'Load More Books'}
            </Button>
          )}
        </>
      )}
    </section>
  );
};

export default TopBooks;

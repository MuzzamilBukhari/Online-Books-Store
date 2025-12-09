import useBooksInfo from "../../hooks/useBookInfo";
import { BestBookCard, SectionHeader } from "../";

const BestBooks = () => {
  // Fetch books from Gutendex API with loading and error states
  const { books, loading, error } = useBooksInfo();

  return (
    <>
      <section className="min-h-[400px] flex flex-col justify-center items-center bg-white text-black dark:bg-gray-900 dark:text-white py-10 duration-200 gap-[90px]">
        <SectionHeader
          first="Trending Books"
          heading="Best Books"
          tagline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          corrupti nihil "
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
          <div className="flex mt-15 items-center gap-20 flex-wrap justify-center">
            {books?.map((book) => (
              <div
                key={book.id}
                className="flex flex-col justify-center items-center rounded-2xl max-w-[300px] group"
              >
                <BestBookCard
                  title={book.title}
                  description={book.description}
                  imageId={book.imageId}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default BestBooks;

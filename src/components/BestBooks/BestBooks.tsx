import { useState, useEffect } from "react";
import useBooksInfo, { Book } from "../../hooks/useBookInfo";
import { BestBookCard, SectionHeader } from "../";

const BestBooks = () => {
  const [books, setBooks] = useState<Book[] | undefined>();

  useEffect(() => {
    setBooks(useBooksInfo());
  }, [books]);

  return (
    <>
      <section className="min-h-[400px] flex flex-col justify-center items-center bg-white text-black dark:bg-gray-900 dark:text-white py-10 duration-200 gap-[90px]">
        <SectionHeader
          first="Trending Books"
          heading="Best Books"
          tagline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          corrupti nihil "
        />
        <div className="flex mt-15 items-center gap-20 flex-wrap justify-center">
          {books?.map((book) => (
            <div
              key={book.id}
              className="flex flex-col justify-center items-center rounded-2xl max-w-[300px] group"
            >
              <BestBookCard
                key={book.id}
                title={book.title}
                description={book.description}
                imageId={book.imageId}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BestBooks;

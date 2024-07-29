import { Button } from "../";
import SectionHeader from "../SectionHeader";
import useBookInfo, { Book } from "../../hooks/useBookInfo";
import { useEffect, useState } from "react";
import TopBookCard from "./TopBookCard";

const TopBooks = () => {
  const [books, setBooks] = useState<Book[] | undefined>();

  useEffect(() => {
    setBooks(useBookInfo());
  }, []);
  return (
    <section className="min-h-[400px] flex flex-col justify-center items-center bg-white text-black dark:bg-gray-900 dark:text-white py-10 duration-200 gap-[50px]">
      <SectionHeader
        first="Best Books"
        heading="Top Books"
        tagline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          corrupti nihil sint met."
      />
      {/* cards section */}
      <div className="flex justify-center items-center flex-wrap gap-8 mt-4">
        {/* all cards */}
        {books?.map((book) => (
          <div key={book.id}>
            <TopBookCard book={book} />
          </div>
        ))}
        {books?.map((book) => (
          <div key={book.id}>
            <TopBookCard book={book} />
          </div>
        ))}
      </div>
      <Button type="button">View All Books</Button>
    </section>
  );
};

export default TopBooks;

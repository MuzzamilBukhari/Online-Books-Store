import Button from "../Button";
import useBooksInfo, { Book } from "../../hooks/useBookInfo";
import Vector from "../../assets/website/blue-pattern.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [books, setBooks] = useState<Book[] | undefined>();
  const [book, setBook] = useState<Book | undefined>();

  useEffect(() => {
    setBooks(useBooksInfo());
    if (books) setBook(books[0]);
  }, [books]);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <>
      <div
        className="flex justify-center items-center p-6 min-h-[550px] sm:min-h-[650] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text section */}
            <div className="flex flex-col justify-center px-5 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ">
              <h1 className="text-5xl sm:text-6xl font-bold lg:text-7xl">
                {book?.title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  By anonymous
                </p>
              </h1>
              <p>{book?.description}</p>
              <div>
                <Button type="button" className="mt-5">
                  Order Now
                </Button>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center flex-col lg:flex-row items-center min-h-[450px] order-1 sm:order-2">
              {/* main image */}
              <div className="min-h-72 flex justify-center items-center">
                <img
                  src={book?.imageId}
                  alt=""
                  className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] hover:scale-105 duration-300 object-contain mx-auto"
                />
              </div>
              {/* other images list */}
              <div className="flex gap-3 items-center justify-center bg-white rounded-full relative top-4 sm:bottom-4 lg:flex-col">
                {books?.map((book) => (
                  <img
                    src={book.imageId}
                    key={book.id}
                    className="max-w-[100px] h-[100px] object-contain hover:scale-110 duration-200 inline-block"
                    onClick={() => {
                      setBook(book);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

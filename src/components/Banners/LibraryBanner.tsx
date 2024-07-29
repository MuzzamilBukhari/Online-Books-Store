import { GrSecure } from "react-icons/gr";
import LibraryImg from "../../assets/website/library.jpg";

const LibraryBanner = () => {
  return (
    <section className="min-h-[400px] flex justify-center flex-wrap items-center w-full bg-white text-black dark:bg-gray-900 dark:text-white py-10 px-7 sm:px-0 duration-200 gap-16">
      {/* image col */}
      <div>
        <img
          src={LibraryImg}
          className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-2xl object-cover"
        />
      </div>
      {/* text col */}
      <div className="max-w-[450px] flex flex-col gap-3">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Library at your fingertips
        </h1>
        <p className="text-md text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          cupiditate illo fuga accusantium dolores quis, perspiciatis porro
        </p>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex items-center gap-4">
            <GrSecure className="text-4xl h-12 w-12 p-4 rounded-full bg-violet-200 dark:bg-violet-400" />
            Quality Books
          </div>
          <div className="flex items-center gap-4">
            <GrSecure className="text-4xl h-12 w-12 p-4 rounded-full bg-orange-200 dark:bg-orange-400" />
            Fast Delivery
          </div>
          <div className="flex items-center gap-4">
            <GrSecure className="text-4xl h-12 w-12 p-4 rounded-full bg-green-200 dark:bg-green-400" />
            Easy Payment Methods
          </div>
          <div className="flex items-center gap-4">
            <GrSecure className="text-4xl h-12 w-12 p-4 rounded-full bg-yellow-200 dark:bg-yellow-400" />
            Get Offers on Books
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryBanner;

import { FaStar } from "react-icons/fa";
import { Book } from "../../hooks/useBookInfo";

const TopBookCard = ({ book }: { book: Book }) => {
  return (
    <div
      className="flex justify-center gap-1/2 flex-col"
      data-aos="slide-up"
      data-aos-duration="800"
    >
      <img
        src={book.imageId}
        alt="image"
        className="w-[150px] h-[220px] object-cover rounded-md"
      />
      <h1 className="mt-2 font-semibold">{book.title}</h1>
      <p className="text-gray-500">Writer</p>
      <div className="flex items-center gap-1">
        <FaStar className="text-yellow-500" />
        {book.rating}
      </div>
    </div>
  );
};

export default TopBookCard;

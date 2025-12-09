import { FaStar } from "react-icons/fa";
import { Book } from "../../hooks/useBookInfo";

const TopBookCard = ({ book }: { book: Book }) => {
  return (
    <div
      className="flex justify-start gap-1/2 flex-col w-[150px]"
      data-aos="slide-up"
      data-aos-duration="800"
    >
      <img
        src={book.imageId}
        alt={book.title}
        className="w-[150px] h-[220px] object-cover rounded-md"
      />
      <h1 className="mt-2 font-semibold line-clamp-2 min-h-[48px]">{book.title}</h1>
      <p className="text-gray-500 text-sm truncate">{book.authors?.[0] || 'Unknown'}</p>
      <div className="flex items-center gap-1">
        <FaStar className="text-yellow-500" />
        <span>{book.rating}</span>
      </div>
    </div>
  );
};

export default TopBookCard;

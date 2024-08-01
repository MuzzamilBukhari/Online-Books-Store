import { useDispatch } from "react-redux";
import { Button } from "../";
import { FaStar } from "react-icons/fa";
import { openPopup } from "../../store/popupSlice";

const BestBookCard = ({
  title,
  description,
  imageId,
}: {
  title: string;
  description: string;
  imageId: string;
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center justify-center flex-col group rounded-2xl  bg-white dark:bg-gray-800 group-hover:bg-primary duration-200"
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <div className="relative bottom-12">
        <img src={imageId} className="w-[130px] h-[130px] object-contain " />
      </div>
      <div className="flex flex-col justify-center items-center relative bottom-7 px-3">
        <div className="flex mb-1 top-12">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-center text-xs text-gray-400 group-hover:text-white">
          {description.slice(0, 100)}...
        </p>
        <Button
          type="button"
          className="mt-3 group-hover:text-primary group-hover:bg-white"
          onClick={() => dispatch(openPopup())}
        >
          Order now
        </Button>
      </div>
    </div>
  );
};

export default BestBookCard;

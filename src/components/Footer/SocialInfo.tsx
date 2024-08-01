import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const SocialInfo = () => {
  return (
    <div className="flex justify-center flex-col gap-4  max-w-[500px]">
      <h1 className="text-xl sm:text-3xl font-bold sm:text-left">
        Books Store
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vero
        maiores eos?
      </p>
      <div className="flex items-center gap-3">
        <FaLocationArrow />
        Karachi, Pakistan
      </div>
      <div className="flex items-center gap-3">
        <FaMobileAlt />
        +92 312 4356787
      </div>
      <div className="flex mt-2 items-center gap-4">
        <FaInstagram className="w-7 h-7 cursor-pointer" />
        <FaFacebook className="w-7 h-7 cursor-pointer" />
        <FaLinkedin className="w-7 h-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default SocialInfo;

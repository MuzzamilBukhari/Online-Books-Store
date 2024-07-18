import { Link } from "react-router-dom";
import Logo from "../../assets/website/logo.png";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const navItems = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "Best seller",
    slug: "/best-seller",
  },
];

const dropdownItems = [
  {
    id: 1,
    name: "Trending Books",
    slug: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    slug: "/#",
  },
  {
    id: 3,
    name: "Authors",
    slug: "/#",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="container w-full sticky top-0 flex justify-between bg-white shadow-lg">
      <div className="py-3">
        <Link to="/" className="flex justify-between items-center gap-2">
          <img src={Logo} alt="books" className="w-12 inline-block" />
          <span className="font-bold text-2xl sm:text-3xl">Books</span>
        </Link>
      </div>
      <div className="flex items-center p-3 gap-8">
        <div>
          <DarkMode />
        </div>
        <ul className="flex justify-center list-none gap-8">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-primary duration-200 cursor-pointer"
              onClick={() => navigate(item.slug)}
            >
              {item.name}
            </li>
          ))}
          {/* Dropdown section */}
          <li className="group relative cursor-pointer">
            <Link to="#" className="flex gap-2 justify-center items-center">
              Quick Links
              <span>
                <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
              </span>
            </Link>
            {/* Dropdown link section */}
            <div className="absolute hidden group-hover:block text-black bg-white p-2 shadow-md">
              <ul className="flex flex-col w-max">
                {dropdownItems.map((item) => (
                  <li
                    key={item.id}
                    className="p-2 inline-block rounded-md hover:bg-primary/20 cursor-pointer "
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-full text-white flex items-center gap-2 cursor-pointer hover:scale-105 duration-300 ">
          Order
          <span>
            <FaCartShopping />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

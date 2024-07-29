import { Link } from "react-router-dom";
import Logo from "../../assets/website/logo.png";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import Button from "../Button";

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
    <header className="container flex justify-between items-center py-4 bg-white shadow-lg dark:bg-gray-900 dark:text-white duration-300">
      <div className="ml-3">
        <Link to="/" className="flex justify-between items-center gap-2">
          <img src={Logo} alt="books" className="w-12 inline-block" />
          <span className="font-bold text-2xl sm:text-3xl">Books</span>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div>
          <DarkMode />
        </div>
        <ul className="hidden sm:flex justify-center list-none gap-8">
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
            <div className="absolute hidden group-hover:block text-black bg-white dark:text-white dark:bg-gray-900 p-2 shadow-md rounded-2xl">
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
        <Button
          type="button"
          className="flex items-center justify-center gap-2"
        >
          Order
          <span>
            <FaCartShopping />
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

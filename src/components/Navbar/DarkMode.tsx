import { useEffect, useState } from "react";
import DarkPng from "../../assets/website/dark-mode-button.png";
import LightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={theme == "dark" ? DarkPng : LightPng}
        alt=""
        className="w-12 cursor-pointer transition-all duration-300 drop-shadow"
        onClick={() => setTheme((prev) => (prev == "dark" ? "light" : "dark"))}
      />
    </div>
  );
};

export default DarkMode;

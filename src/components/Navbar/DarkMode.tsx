import React, { useState } from "react";
import DarkPng from "../../assets/website/dark-mode-button.png";
import LightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="relative">
      <img src={DarkPng} alt="" className="absolute top-5" />
      <img src={LightPng} alt="" className="absolute top-2" />
    </div>
  );
};

export default DarkMode;

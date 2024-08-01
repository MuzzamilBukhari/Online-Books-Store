import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components/";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Layout() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

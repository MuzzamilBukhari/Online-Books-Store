import { LibraryBanner } from "../components";
import AppStoreBanner from "../components/Banners/AppStoreBanner";
import TestimonialsBanner from "../components/Banners/TestimonialsBanner";
import BestBooks from "../components/BestBooks/BestBooks";
import Hero from "../components/Hero/Hero";
import TopBooks from "../components/TopBooks/TopBooks";

const Home = () => {
  return (
    <div>
      <Hero />
      <BestBooks />
      <LibraryBanner />
      <AppStoreBanner />
      <TopBooks />
      <TestimonialsBanner />
    </div>
  );
};

export default Home;

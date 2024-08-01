import { LibraryBanner } from "../components";
import {
  AppStoreBanner,
  TestimonialsBanner,
  BestBooks,
  Hero,
  TopBooks,
} from "../components/";
import Popup from "../components/Popups/Popup";

const Home = () => {
  return (
    <div>
      <Hero />
      <BestBooks />
      <LibraryBanner />
      <AppStoreBanner />
      <TopBooks />
      <TestimonialsBanner />
      <Popup />
    </div>
  );
};

export default Home;

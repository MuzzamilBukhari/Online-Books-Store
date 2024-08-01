import Banner from "../../assets/website/board.png";
import { playstore, appStore } from "../../assets/";

const bgImage = {
  backgroundImage: `url(${Banner})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const AppStoreBanner = () => {
  return (
    <section
      className=" flex justify-center items-center flex-col w-full text-white gap-6 py-12"
      style={bgImage}
    >
      <h1
        className="text-2xl lg:text-4xl sm:text-3xl font-bold"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Read Books at your fingertips
      </h1>
      <div
        className="flex justify-center items-center gap-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={playstore}
          alt="play store"
          className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
        />
        <img
          src={appStore}
          alt="app store"
          className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
        />
      </div>
    </section>
  );
};

export default AppStoreBanner;

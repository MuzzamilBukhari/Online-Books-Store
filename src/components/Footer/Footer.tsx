import { QuickLinks, SocialInfo } from "../";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black dark:bg-gray-950 dark:text-white">
      <div className="flex justify-center gap-8 py-10 px-7 sm:px-0 duration-200 flex-wrap ">
        <div className="">
          <SocialInfo />
        </div>
        <div className="flex flex-wrap gap-12 ">
          <div>
            <QuickLinks />
          </div>
          <div>
            <QuickLinks />
          </div>
          <div>
            <QuickLinks />
          </div>
        </div>
      </div>
      <div className="max-h-[100px] border-t-2 shadow-lg mx-16 p-8 text-center border-gray-500">
        Copyright &copy; 2024. All rights reserved || Made by Muzzi
      </div>
    </div>
  );
};

export default Footer;

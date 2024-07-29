import { SectionHeader } from "../";

const TestimonialsBanner = () => {
  return (
    <section className="min-h-[400px] flex justify-center flex-wrap items-center w-full bg-white text-black dark:bg-gray-900 dark:text-white py-10 px-7 sm:px-0 duration-200 gap-16">
      <div>
        <SectionHeader
          first="What our customers says"
          heading="Testimonials"
          tagline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          corrupti nihil sint met."
        />
      </div>
    </section>
  );
};

export default TestimonialsBanner;

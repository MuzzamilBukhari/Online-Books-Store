import { useEffect, useState } from "react";
import { SectionHeader, TestimonialCard } from "../";
import Slider from "react-slick";
import useTestimonialsInfo, {
  Testimonial,
} from "../../hooks/useTestimonialsInfo";

const TestimonialsBanner = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[] | undefined>();

  useEffect(() => {
    setTestimonials(useTestimonialsInfo());
    console.log(testimonials);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="flex justify-center items-center flex-col gap-16 px-6 py-10 sm:px-12 bg-white text-black dark:bg-gray-900 dark:text-white ">
      <div className="block mx-auto">
        <SectionHeader
          first="What our customers says"
          heading="Testimonials"
          tagline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          corrupti nihil sint met."
          transition="slide-up"
        />
      </div>
      <div className="w-full p-4">
        <Slider {...settings}>
          {testimonials?.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsBanner;

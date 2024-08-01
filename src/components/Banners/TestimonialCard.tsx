import { Testimonial } from "../../hooks/useTestimonialsInfo";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div
      className="flex justify-center items-center px-6 py-8 gap-4 mx-6 text-black bg-primary/10 dark:bg-gray-800 dark:text-white rounded-2xl shadow-lg"
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <div className="flex justify-center flex-col gap-2">
        <div>
          <img
            src={testimonial.image}
            alt="img"
            className="rounded-full w-20 h-20"
          />
        </div>
        <div>
          <p className="text-sm text-gray-500">{testimonial.text}</p>
          <h1 className="font-bold text-xl">{testimonial.name}</h1>
        </div>
      </div>
      <div className="text-9xl font-serif text-black/20">,,</div>
    </div>
  );
};

export default TestimonialCard;

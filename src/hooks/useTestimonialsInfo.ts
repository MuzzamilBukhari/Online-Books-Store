export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
}

const useTestimonialsInfo = (): Testimonial[] => {
  const testimonialsData: Testimonial[] = [
    {
      id: 1,
      name: "Ali Raza",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium iure aperiam dolorem nostrum harum velit ipsa! Id accusantium ea eos dicta labore!",
      image: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Umer Kamal",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium iure aperiam dolorem nostrum harum velit ipsa! Id accusantium ea eos dicta labore!",
      image: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Usman Qadir",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium iure aperiam dolorem nostrum harum velit ipsa! Id accusantium ea eos dicta labore!",
      image: "https://picsum.photos/103/103",
    },
  ];
  return testimonialsData;
};

export default useTestimonialsInfo;

import { book1, book2, book3 } from "../assets/books";

export interface Book {
  id: number;
  title: string;
  description: string;
  imageId: string;
  rating: number;
}

const books: Book[] = [
  {
    id: 1,
    title: "Who's there",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. cumque dolores temporibus quis perspiciatis provident vitae exercitationem ducimus unde. Nemo fugit atque officia?",
    imageId: book1,
    rating: 4.3,
  },
  {
    id: 2,
    title: "His life",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus dignissimos exercitationem incidunt consequuntur totam? Qui, corporis necessitatibus. Assumenda officia exercitationem ducimus odio eaque!",
    imageId: book2,
    rating: 4.7,
  },
  {
    id: 3,
    title: "Lost boy!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima quis dignissimos! Nobis, cum voluptas!",
    imageId: book3,
    rating: 4.9,
  },
];
const useBookInfo = (): Book[] => {
  return books;
};

export default useBookInfo;

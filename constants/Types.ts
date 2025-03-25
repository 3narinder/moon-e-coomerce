export type Product = {
  id: number;
  name: string;
  price: number;
  sold: number;
  dateOfArrival: string;
  category: string;
  color: string;
  tag: string[];
  categories: string[];
  image: string;
  description: string;
};

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

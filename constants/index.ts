import {
  product1,
  product2,
  product3,
  product4,
  product5,
  teamMember1,
  teamMember2,
  teamMember3,
  teamMember4,
} from "./Images";

export const NAV_LINKS = [
  { name: "Home", href: "/", icon: "/icons/home_fill.png" },
  { name: "Shop", href: "/shop", icon: "/icons/shop_fill.png" },
  { name: "About", href: "/about", icon: "/icons/about_fill.png" },
  { name: "Contact", href: "/contact", icon: "/icons/Phone.png" },
];

export const NAV_ICONS = [
  { src: "/icons/Search.png", alt: "Search" },
  { src: "/icons/Avatar.png", alt: "Profile" },
  { src: "/icons/Heart.png", alt: "Wishlist" },
  { src: "/icons/Shopping_cart.png", alt: "Cart" },
];

export const FOOTER_LINKS = [
  {
    title: "About Us",
    links: [
      { name: "Mission", href: "/mission" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Privacy Policy", href: "/policy" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/web-development" },
      { name: "UI/UX Design", href: "/ui-ux-design" },
      { name: "Consulting", href: "/consulting" },
      { name: "Mobile Design", href: "/mobile-design" },
      { name: "Branding", href: "/branding" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { name: "E-Commerce", href: "/e-commerce" },
      { name: "SaaS Solutions", href: "/saas" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "UI/UX Design", href: "/ui-ux-design" },
      { name: "Landing pages", href: "/landing" },
    ],
  },
];

export const products = [
  {
    id: 1,
    name: "Handcrafted Ceramic Dinner Set",
    price: 129.99,
    sold: 80,
    dateOfArrival: "2024-03-10",
    category: "Dinnerware",
    color: "White & Blue",
    tag: ["dinner set", "handmade", "ceramic"],
    categories: ["Dinnerware", "Tableware"],
    image: product1,
    description:
      "A beautifully handcrafted ceramic dinner set featuring a classic white and blue design. Perfect for elegant dining experiences.",
  },
  {
    id: 2,
    name: "Rustic Clay Tea Cups",
    price: 39.99,
    sold: 120,
    dateOfArrival: "2024-02-20",
    category: "Drinkware",
    color: "Brown",
    tag: ["tea cups", "rustic", "handmade"],
    categories: ["Drinkware", "Tableware"],
    image: product2,
    description:
      "Enjoy your tea in these rustic, handcrafted clay tea cups. A perfect blend of tradition and elegance.",
  },
  {
    id: 3,
    name: "Glazed Ceramic Flower Pot",
    price: 24.99,
    sold: 95,
    dateOfArrival: "2024-03-05",
    category: "Decor",
    color: "Green",
    tag: ["flower pot", "glazed", "ceramic"],
    categories: ["Decor", "Gardening"],
    image: product3,
    description:
      "A stunning glazed ceramic flower pot, ideal for both indoor and outdoor plants. Adds charm to any space.",
  },
  {
    id: 4,
    name: "Vintage Ceramic Soup Bowls",
    price: 49.99,
    sold: 60,
    dateOfArrival: "2024-01-30",
    category: "Bowls",
    color: "Beige",
    tag: ["soup bowls", "vintage", "ceramic"],
    categories: ["Bowls", "Tableware"],
    image: product4,
    description:
      "Set of 4 vintage-style ceramic soup bowls, perfect for serving warm and hearty meals in style.",
  },
  {
    id: 5,
    name: "Matte Finish Coffee Mug",
    price: 14.99,
    sold: 150,
    dateOfArrival: "2024-02-15",
    category: "Drinkware",
    color: "Black",
    tag: ["coffee mug", "matte", "ceramic"],
    categories: ["Drinkware", "Kitchen"],
    image: product5,
    description:
      "A sleek matte finish ceramic coffee mug designed for comfort and a stylish drinking experience.",
  },
  {
    id: 6,
    name: "Handmade Ceramic Vase",
    price: 34.99,
    sold: 70,
    dateOfArrival: "2024-03-08",
    category: "Decor",
    color: "White",
    tag: ["vase", "handmade", "ceramic"],
    categories: ["Decor", "Home Accessories"],
    image: product1,
    description:
      "A handmade ceramic vase with an elegant white finish. A timeless decor piece for any home.",
  },
  {
    id: 7,
    name: "Ceramic Serving Platter",
    price: 59.99,
    sold: 85,
    dateOfArrival: "2024-02-25",
    category: "Tableware",
    color: "Blue",
    tag: ["serving platter", "glazed", "ceramic"],
    categories: ["Tableware", "Kitchen"],
    image: product2,
    description:
      "A high-quality ceramic serving platter with a beautiful glazed finish. Perfect for showcasing your favorite dishes.",
  },
  {
    id: 8,
    name: "Speckled Ceramic Mixing Bowls",
    price: 69.99,
    sold: 55,
    dateOfArrival: "2024-01-20",
    category: "Bowls",
    color: "Speckled White",
    tag: ["mixing bowls", "ceramic", "kitchen"],
    categories: ["Bowls", "Kitchen"],
    image: product3,
    description:
      "A set of three speckled ceramic mixing bowls, ideal for cooking, baking, and serving meals.",
  },
  {
    id: 9,
    name: "Minimalist Ceramic Pasta Plates",
    price: 39.99,
    sold: 90,
    dateOfArrival: "2024-02-10",
    category: "Dinnerware",
    color: "Gray",
    tag: ["pasta plates", "minimalist", "ceramic"],
    categories: ["Dinnerware", "Tableware"],
    image: product4,
    description:
      "Minimalist ceramic pasta plates designed for modern dining. Comes in a set of two elegant gray plates.",
  },
  {
    id: 10,
    name: "Traditional Clay Water Jug",
    price: 44.99,
    sold: 100,
    dateOfArrival: "2024-03-01",
    category: "Drinkware",
    color: "Terracotta",
    tag: ["water jug", "traditional", "clay"],
    categories: ["Drinkware", "Kitchen"],
    image: product5,
    description:
      "A traditional handcrafted clay water jug that keeps water naturally cool and fresh.",
  },
];

export const team = [
  {
    id: 1,
    name: "Brandon Johnson",
    position: "Team Lead",
    image: teamMember1,
  },
  {
    id: 2,
    name: "Alice Johnson",
    position: "Frontend Developer",
    image: teamMember2,
  },
  {
    id: 3,
    name: "Charlie Brown",
    position: "Backend Developer",
    image: teamMember3,
  },
  {
    id: 4,
    name: "Diana Prince",
    position: "UI/UX Designer",
    image: teamMember4,
  },
];

console.log(team);

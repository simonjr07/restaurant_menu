import bruschettaImg from "../assets/images/image.jpg";
import soupImg from "../assets/images/soup.jpg";
import calamariImg from "../assets/images/calamari.jpg";
import salmonImg from "../assets/images/salmon.jpg";
import steakImg from "../assets/images/steak.jpg";
import pastaImg from "../assets/images/pasta.jpg";
import cheesecakeImg from "../assets/images/cheesecake.jpg";
import tiramisuImg from "../assets/images/tiramisu.jpg";
import puddingImg from "../assets/images/pudding.jpg";
import suyaImg from "../assets/images/suyaskewer.webp";
import goatImg from "../assets/images/goatmeat.jpeg";
import moimoiiImg from "../assets/images/moimoi.webp";
import jollofImg from "../assets/images/jollof.jpg";
import poundedImg from "../assets/images/pounded.jpeg";
import catfishImg from "../assets/images/catfish.jpg";
import fufuImg from "../assets/images/Okra-Fufu-11.jpeg";
import puffpuffImg from "../assets/images/puffpuff.jpg";
import chinchinImg from "../assets/images/chinchin.jpg";
import zoboImg from "../assets/images/zobo.jpg";
import lemonadeImg from "../assets/images/lemonade.jpeg";
import icedcoffeeImg from "../assets/images/iced-coffee.webp";
import gingerImg from "../assets/images/ginger.jpg";
import palwineImg from "../assets/images/palmwine.jpeg";

export const menuData = [
  // CONTINENTAL - STARTERS
  {
    id: 1,
    cuisine: "Continental",
    type: "Starters",
    name: "Classic Bruschetta",
    description:
      "Toasted sourdough topped with fresh tomatoes, basil and a drizzle of olive oil.",
    price: "₦4,800",
    image: bruschettaImg,
  },
  {
    id: 2,
    cuisine: "Continental",
    type: "Starters",
    name: "Roasted Tomato Soup",
    description: "Creamy tomato soup served with warm crusty bread.",
    price: "₦5,500",
    image: soupImg,
  },
  {
    id: 3,
    cuisine: "Continental",
    type: "Starters",
    name: "Crispy Calamari",
    description: "Lightly fried calamari served with garlic aioli and lemon.",
    price: "₦6,200",
    image: calamariImg,
  },
  // CONTINENTAL - MAINS
  {
    id: 4,
    cuisine: "Continental",
    type: "Mains",
    name: "Grilled Atlantic Salmon",
    description:
      "Salmon fillet grilled with herbs and served with seasonal greens.",
    price: "₦8,700",
    image: salmonImg,
  },
  {
    id: 5,
    cuisine: "Continental",
    type: "Mains",
    name: "Premium Ribeye Steak",
    description:
      "300g ribeye grilled to perfection with garlic butter and hand-cut fries.",
    price: "₦9,500",
    image: steakImg,
  },
  {
    id: 6,
    cuisine: "Continental",
    type: "Mains",
    name: "Truffle Pasta Carbonara",
    description:
      "House-made pasta tossed in creamy sauce with shaved truffle and parmesan.",
    price: "₦7,200",
    image: pastaImg,
  },
  // CONTINENTAL - DESSERTS
  {
    id: 7,
    cuisine: "Continental",
    type: "Desserts",
    name: "Classic Tiramisu",
    description:
      "Layers of coffee-soaked ladyfingers and mascarpone cream dusted with cocoa.",
    price: "₦3,500",
    image: tiramisuImg,
  },
  {
    id: 8,
    cuisine: "Continental",
    type: "Desserts",
    name: "New York Cheesecake",
    description:
      "Creamy baked cheesecake on a buttery graham cracker base with berry compote.",
    price: "₦3,800",
    image: cheesecakeImg,
  },
  {
    id: 9,
    cuisine: "Continental",
    type: "Desserts",
    name: "Chocolate Pudding",
    description:
      "Warm dark chocolate pudding served with vanilla bean ice cream.",
    price: "₦2,800",
    image: puddingImg,
  },
  // NIGERIAN - STARTERS
  {
    id: 10,
    cuisine: "Nigerian",
    type: "Starters",
    name: "Spicy Suya Skewers",
    description: "Flame-grilled beef skewers coated in crunchy peanut spice.",
    price: "₦4,500",
    image: suyaImg,
  },
  {
    id: 11,
    cuisine: "Nigerian",
    type: "Starters",
    name: "Peppered Goat Meat Soup",
    description:
      "Rich pepper soup with tender goat meat and warming local spices.",
    price: "₦5,200",
    image: goatImg,
  },
  {
    id: 12,
    cuisine: "Nigerian",
    type: "Starters",
    name: "Moi Moi",
    description:
      "Steamed bean pudding flavoured with peppers, onions and palm oil.",
    price: "₦3,800",
    image: moimoiiImg,
  },
  // NIGERIAN - MAINS
  {
    id: 13,
    cuisine: "Nigerian",
    type: "Mains",
    name: "Jollof Rice with Chicken",
    description: "Smoky tomato rice cooked with spices and grilled chicken.",
    price: "₦6,500",
    image: jollofImg,
  },
  {
    id: 14,
    cuisine: "Nigerian",
    type: "Mains",
    name: "Pounded Yam & Egusi",
    description: "Smooth pounded yam served with rich egusi stew and spinach.",
    price: "₦7,800",
    image: poundedImg,
  },
  {
    id: 15,
    cuisine: "Nigerian",
    type: "Mains",
    name: "Grilled Catfish Pepper Soup",
    description: "Spicy catfish pepper soup with fresh herbs and sliced yams.",
    price: "₦6,800",
    image: catfishImg,
  },
  {
    id: 16,
    cuisine: "Nigerian",
    type: "Mains",
    name: "Fufu & Okra Soup",
    description: "Pounded cassava fufu served in aromatic okra soup with beef.",
    price: "₦6,200",
    image: fufuImg,
  },
  // NIGERIAN - DESSERTS
  {
    id: 17,
    cuisine: "Nigerian",
    type: "Desserts",
    name: "Puff Puff Bites",
    description: "Sweet fried dough balls dusted with sugar and cinnamon.",
    price: "₦2,500",
    image: puffpuffImg,
  },
  {
    id: 18,
    cuisine: "Nigerian",
    type: "Desserts",
    name: "Coconut Chin Chin",
    description: "Crunchy coconut-spiced snack with a sweet finish.",
    price: "₦2,200",
    image: chinchinImg,
  },
  {
    id: 19,
    cuisine: "Nigerian",
    type: "Desserts",
    name: "Zobo",
    description: "Chilled hibiscus drink infused with ginger and citrus.",
    price: "₦2,000",
    image: zoboImg,
  },
  // BEVERAGES
  {
    id: 20,
    cuisine: "Continental",
    type: "Beverages",
    name: "Fresh Lemonade",
    description: "Freshly squeezed lemon juice with ice and mint.",
    price: "₦1,800",
    image: lemonadeImg,
  },
  {
    id: 21,
    cuisine: "Continental",
    type: "Beverages",
    name: "Iced Coffee",
    description: "Chilled premium espresso with cream and ice.",
    price: "₦2,200",
    image: icedcoffeeImg,
  },
  {
    id: 22,
    cuisine: "Nigerian",
    type: "Beverages",
    name: "Ginger Drink",
    description: "Homemade spiced ginger drink served chilled.",
    price: "₦1,500",
    image: gingerImg,
  },
  {
    id: 23,
    cuisine: "Nigerian",
    type: "Beverages",
    name: "Palm Wine",
    description: "Traditional fermented palm wine served chilled.",
    price: "₦2,500",
    image: palwineImg,
  },
];

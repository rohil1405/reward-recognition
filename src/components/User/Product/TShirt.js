import "./Product.css";
import tshirtTwo from "../../../assets/php-tshirt.jpg";
import tshirt from "../../../assets/tshirt.jpg";
import tshirtSix from "../../../assets/tshirtmain.webp";
import tshirtFour from "../../../assets/hubspot-tshirt.jpg";
import tshirtFive from "../../../assets/html-tshirt.jpg";
import tshirtThree from "../../../assets/laravel-tshirt.webp";
import tshirtSeven from "../../../assets/wordpress-tshirt.jpg";
import tshirtEight from "../../../assets/node-tshirt.jpg";
import ProductList from "./ProductList";

export const TShirtCategory = [
  {
    id: 21,
    image: tshirt,
    name: "React-TShirt",
    points: "100 Points",
  },
  {
    id: 22,
    image: tshirtTwo,
    name: "PHP-TShirt",
    points: "100 Points",
  },
  {
    id: 23,
    image: tshirtThree,
    name: "Laravel-TShirt",
    points: "100 Points",
  },
  {
    id: 24,
    image: tshirtFour,
    name: "HubSpot-TShirt",
    points: "100 Points",
  },
  {
    id: 25,
    image: tshirtFive,
    name: "HTML-TShirt",
    points: "100 Points",
  },
  {
    id: 26,
    image: tshirtSix,
    name: "CSS-TShirt",
    points: "100 Points",
  },
  {
    id: 27,
    image: tshirtSeven,
    name: "WordPress-TShirt",
    points: "100 Points",
  },
  {
    id: 28,
    image: tshirtEight,
    name: "Node-TShirt",
    points: "100 Points",
  },
];

const TShirt = () => {
  return (
    <ProductList products={TShirtCategory}/>
  );
};

export default TShirt;

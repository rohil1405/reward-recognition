import "./Product.css";
import board from "../../../assets/boardOne.jpg";
import boardThree from "../../../assets/boardThree.jpg";
import capFive from "../../../assets/capFive.jpg";
import capTwo from "../../../assets/capTwo.jpg";
import laptopThree from "../../../assets/laptopThree.jpg";
import laptopFour from "../../../assets/laptopFour.webp";
import mouseSeven from "../../../assets/mouseSeven.png";
import mouseFive from "../../../assets/mouseFive.webp";
import tshirtEight from "../../../assets/node-tshirt.jpg";
import tshirt from "../../../assets/tshirt.jpg";
import ProductList from "./ProductList";

export const AllCategory = [
  {
    id: 1,
    image: tshirt,
    name: "React-TShirt",
    points: "100 Points",
  },
  {
    id: 2,
    image: capTwo,
    name: "Angular-Cap",
    points: "50 Points",
  },
  {
    id: 3,
    image: mouseSeven,
    name: "PC Mouse",
    points: "90 Points",
  },
  {
    id: 4,
    image: tshirtEight,
    name: "Node-TShirt",
    points: "100 Points",
  },
  {
    id: 5,
    image: laptopFour,
    name: "Apple MacBook",
    points: "1800 Points",
  },
  {
    id: 6,
    image: boardThree,
    name: "Wired Small RGB",
    points: "150 Points",
  },
  {
    id: 7,
    image: mouseFive,
    name: "Entwino Wired USB Mouse",
    points: "575 Points",
  },
  {
    id: 8,
    image: laptopThree,
    name: "8 GB RAM HP Laptop",
    points: "1575 Points",
  },
  {
    id: 9,
    image: capFive,
    name: "HubSpot-Cap",
    points: "50 points",
  },
  {
    id: 10,
    image: board,
    name: "Euro Gaming Keyboard",
    points: "230 Points",
  },
];

const ProductAll = () => {
  return <ProductList products={AllCategory} />;
};

export default ProductAll;

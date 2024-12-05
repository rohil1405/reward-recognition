import "./Product.css";
import mouse from "../../../assets/mouse.jpg";
import mouseTwo from "../../../assets/mouse-two.jpg";
import mouseFour from "../../../assets/mouse-four.jpg";
import mouseFive from "../../../assets/mouseFive.webp";
import mouseSix from "../../../assets/mouseSix.webp";
import mouseSeven from "../../../assets/mouseSeven.png";
import mouseEight from "../../../assets/mouseEight.jpg";
import mousemain from "../../../assets/mousemai.webp";
import ProductList from "./ProductList";

export const MouseCategory = [
  {
    id: 31,
    image: mouse,
    name: "Rapique Wireless Mouse",
    points: "400 Points",
  },
  {
    id: 32,
    image: mouseSeven,
    name: "PC Mouse",
    points: "90 Points",
  },
  {
    id: 33,
    image: mouseTwo,
    name: "Kool Wireless Mouse",
    points: "600 Points",
  },
  {
    id: 34,
    image: mouseFour,
    name: "Slient Ergonomic LED Mouse",
    points: "500 Points",
  },
  {
    id: 35,
    image: mouseFive,
    name: "Entwino Wired USB Mouse",
    points: "575 Points",
  },
  {
    id: 36,
    image: mouseSix,
    name: "Plastic Optical Mouse",
    points: "135 Points",
  },
  {
    id: 37,
    image: mouseEight,
    name: "Optical Quiet RGB",
    points: "215 Points",
  },
  {
    id: 38,
    image: mousemain,
    name: "Zebronics Zeb-Marine Optical",
    points: "535 Points",
  },
];
const Mouse = () => {
  return (
    <ProductList products={MouseCategory} />
  );
};

export default Mouse;

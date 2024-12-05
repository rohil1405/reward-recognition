import "./Product.css";
import ProductList from "./ProductList";
import pen from "../../../assets/pen.jpg";
import penOne from "../../../assets/penOne.jpg";
import penTwo from "../../../assets/penTwo.png";
import penThree from "../../../assets/penThree.jpg";
import penFour from "../../../assets/penFour.jpg";

export const PenCategory = [
  {
    id: 61,
    image: pen,
    name: "Pen",
    points: "20 Points",
  },
  {
    id: 62,
    image: penOne,
    name: "Pen",
    points: "30 Points",
  },
  {
    id: 63,
    image: penTwo,
    name: "Pen",
    points: "40 Points",
  },
  {
    id: 64,
    image: penThree,
    name: "Pen",
    points: "5 Points",
  },
  {
    id: 65,
    image: penFour,
    name: "Pen",
    points: "8 Points",
  },
];

const Pen = () => {
  return <ProductList products={PenCategory} />;
};

export default Pen;

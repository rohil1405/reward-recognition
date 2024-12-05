import "./Product.css";
import board from "../../../assets/board.webp";
import boardOne from "../../../assets/boardOne.jpg";
import boardThree from "../../../assets/boardThree.jpg";
import boardFour from "../../../assets/boardFour.jpg";
import ProductList from "./ProductList";

export const BoardCategory = [
  {
    id: 51,
    image: board,
    name: "Euro Gaming Keyboard",
    points: "230 Points",
  },
  {
    id: 52,
    image: boardOne,
    name: "Wired Keyboard",
    points: "120 Points",
  },
  {
    id: 53,
    image: boardThree,
    name: "Wired Small RGB",
    points: "150 Points",
  },
  {
    id: 54,
    image: boardFour,
    name: "Mini Keyboard",
    points: "132 Points",
  },
];

const Board = () => {
  return <ProductList products={BoardCategory} />;
};

export default Board;

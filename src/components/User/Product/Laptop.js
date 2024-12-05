import React from "react";
import "./Product.css";
import laptop from "../../../assets/laptop.jpg";
import laptopTwo from "../../../assets/laptopTwo.webp";
import laptopThree from "../../../assets/laptopThree.jpg";
import laptopFour from "../../../assets/laptopFour.webp";
import laptopFive from "../../../assets/laptopFive.avif";
import ProductList from "./ProductList";

export const LaptopCategory = [
  {
    id: 41,
    image: laptop,
    name: "Lenovo ideaPad",
    points: "1095 Points",
  },
  {
    id: 42,
    image: laptopTwo,
    name: "16 GB RAM Dell Laptop",
    points: "1360 Points",
  },
  {
    id: 43,
    image: laptopThree,
    name: "8 GB RAM HP Laptop",
    points: "1575 Points",
  },
  {
    id: 44,
    image: laptopFour,
    name: "Apple MacBook",
    points: "1800 Points",
  },
  {
    id: 45,
    image: laptopFive,
    name: "Samsung Galaxy Book",
    points: "1465 Points",
  },
];
const Laptop = () => {
  return <ProductList products={LaptopCategory} />;
};

export default Laptop;

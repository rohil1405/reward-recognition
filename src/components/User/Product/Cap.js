import React from "react";
import "./Product.css";
import cap from "../../../assets/cap.jpg";
import capTwo from "../../../assets/capTwo.jpg";
import capThree from "../../../assets/capThree.jpg";
import capFour from "../../../assets/imageFour.jpg";
import capFive from "../../../assets/capFive.jpg";
import capSix from "../../../assets/capSix.jpg";
import capSeven from "../../../assets/capSeven.jpg";
import capEight from "../../../assets/capEight.webp";
import ProductList from "./ProductList";

export const CapCategory = [
  {
    id: 11,
    image: cap,
    name: "React-Cap",
    points: "50 Points",
    description: "A stylish cap for React enthusiasts.",
    modal: "React Cap Modal",
    size: "One Size",
    type: "Tech Cap",
    bigDescription:
      "Show your love for React with this premium quality cap. Perfect for developers and fans of React.js.",
  },
  {
    id: 12,
    image: capTwo,
    name: "Angular-Cap",
    points: "50 Points",
    description: "A must-have cap for Angular developers.",
    modal: "Angular Cap Modal",
    size: "One Size",
    type: "Tech Cap",
    bigDescription:
      "This Angular cap is a great addition to your wardrobe. Represent your skills in Angular while staying stylish.",
  },
  {
    id: 13,
    image: capThree,
    name: "HTML-Cap",
    points: "50 Points",
    description: "A cap for HTML lovers and web developers.",
    modal: "HTML Cap Modal",
    size: "One Size",
    type: "Tech Cap",
    bigDescription:
      "HTML is the backbone of web development, and now you can showcase your passion with this HTML cap.",
  },
  {
    id: 14,
    image: capFour,
    name: "PHP-Cap",
    points: "50 points",
    description: "For PHP developers who like to stay cool and stylish.",
    modal: "PHP Cap Modal",
    size: "One Size",
    type: "Tech Cap",
    bigDescription:
      "Embrace the power of PHP with this sleek cap. A must-have for any PHP developer's collection.",
  },
  {
    id: 15,
    image: capFive,
    name: "HubSpot-Cap",
    points: "50 points",
    description: "A cap for marketers and HubSpot users.",
    modal: "HubSpot Cap Modal",
    size: "One Size",
    type: "Marketing Cap",
    bigDescription:
      "Whether you're into inbound marketing or HubSpot, this cap is perfect for showing off your expertise.",
  },
  {
    id: 16,
    image: capSix,
    name: "Laravel-Cap",
    points: "50 points",
    description:
      "For Laravel developers who want to showcase their framework of choice.",
    modal: "Laravel Cap Modal",
    size: "One Size",
    type: "Tech Cap",
    bigDescription:
      "Laravel developers will love this stylish cap that celebrates the PHP framework. Great for dev meetups and casual wear.",
  },
  {
    id: 17,
    image: capSeven,
    name: "Javascript-Cap",
    points: "50 points",
    description: "For the JavaScript enthusiasts and developers.",
    modal: "JavaScript Cap Modal",
    size: "One Size",
    type: "Tech Cap",
    bigDescription:
      "Show off your love for JavaScript with this trendy cap. Perfect for those who work or play with JavaScript.",
  },
  {
    id: 18,
    image: capEight,
    name: "SCSS-Cap",
    points: "50 points",
    description: "A cap for front-end developers who love styling with SCSS.",
    modal: "SCSS Cap Modal",
    size: "One Size",
    type: "Tech Cap",
    bigDescription:
      "Whether you're styling components or building a responsive design, this SCSS cap is the perfect accessory for any front-end developer.",
  },
];

const Cap = () => {
  return <ProductList products={CapCategory} />;
};

export default Cap;

import React from "react";
import "./Product.css";
import laptop from "../../../assets/laptop.jpg";
import laptopTwo from "../../../assets/laptopTwo.webp";
import laptopThree from "../../../assets/laptopThree.jpg";
import laptopFour from "../../../assets/laptopFour.webp";
import laptopFive from "../../../assets/laptopFive.avif";

const Laptop = () => {
  const LaptopCategory = [
    {
      id: 1,
      image: laptop,
      name: "Lenovo ideaPad",
      points: "1095 Points",
    },
    {
      id: 2,
      image: laptopTwo,
      name: "16 GB RAM Dell Laptop",
      points: "1360 Points",
    },
    {
      id: 3,
      image: laptopThree,
      name: "8 GB RAM HP Laptop",
      points: "1575 Points",
    },
    {
      id: 4,
      image: laptopFour,
      name: "Apple MacBook",
      points: "1800 Points",
    },
    {
      id: 5,
      image: laptopFive,
      name: "Samsung Galaxy Book",
      points: "1465 Points",
    },
  ];
  return (
    <div className="product-tabs">
      <div className="product-tab-content">
        <ul className="product-listing">
          {LaptopCategory.map((product) => (
            <li key={product.id} className="product-item">
              <div className="product-img">
                <img src={product.image} alt="product-name" />
              </div>
              <div className="product-content">
                <div className="product-left">
                  <a href="#" className="product-name">
                    {product.name}
                  </a>
                  <div className="product-points">{product.points}</div>
                </div>
                <div className="product-right">
                  <a href="#" className="product-cart">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.52083 2.97916L4.4275 3.30916L5.31025 13.8261C5.34416 14.2399 5.53286 14.6258 5.83869 14.9066C6.14453 15.1875 6.54502 15.3427 6.96025 15.3413H16.9611C17.3587 15.3418 17.743 15.1986 18.0435 14.9383C18.344 14.6779 18.5403 14.3178 18.5964 13.9242L19.4672 7.91266C19.4905 7.75278 19.4819 7.5899 19.4422 7.43332C19.4024 7.27674 19.3321 7.12954 19.2354 7.00014C19.1387 6.87073 19.0174 6.76166 18.8785 6.67916C18.7396 6.59666 18.5858 6.54234 18.4259 6.51932C18.3672 6.51291 4.73367 6.50832 4.73367 6.50832"
                        stroke="#272343"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.9479 9.89539H15.4898"
                        stroke="#272343"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.55783 18.5194C6.62506 18.5165 6.69217 18.5273 6.75513 18.551C6.81809 18.5748 6.87559 18.611 6.92418 18.6575C6.97277 18.7041 7.01143 18.76 7.03785 18.8219C7.06426 18.8837 7.07788 18.9503 7.07788 19.0176C7.07788 19.0849 7.06426 19.1515 7.03785 19.2134C7.01143 19.2753 6.97277 19.3312 6.92418 19.3777C6.87559 19.4243 6.81809 19.4605 6.75513 19.4842C6.69217 19.508 6.62506 19.5187 6.55783 19.5158C6.4294 19.5103 6.30805 19.4554 6.21912 19.3626C6.13019 19.2698 6.08054 19.1462 6.08054 19.0176C6.08054 18.8891 6.13019 18.7655 6.21912 18.6726C6.30805 18.5798 6.4294 18.5249 6.55783 18.5194Z"
                        fill="#272343"
                        stroke="#272343"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.8987 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8987 19.5186C16.7662 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7662 18.5194 16.8987 18.5194Z"
                        fill="#272343"
                        stroke="#272343"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Laptop;

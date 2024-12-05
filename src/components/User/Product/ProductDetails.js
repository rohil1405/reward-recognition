import React from "react";
import { useParams } from "react-router-dom";
import SlideBar from "../../SlideBar/SlideBar";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.id === parseInt(id));

  const backToHome = () => {
    navigate("/redemption-point");
  };

  return (
    <div className="product-details-wrap">
      <Header />
      <SlideBar />

      {product ? (
        <div className="product-details">
          <div className="product-details-top">
            <div className="product-details-left">
              <div className="product-main-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-multi-img">
                <div className="product-img-slide">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-img-slide">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-img-slide">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-img-slide">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-img-slide">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
            </div>
            <div className="product-details-right">
              <div className="category-name">{product.name}</div>
              <ul className="category-listing">
                <li>
                  <div className="category-property">Text:</div>
                  <div className="category-value">{product.description}</div>
                </li>
                <li>
                  <div className="category-property">Description:</div>
                  <div className="category-value">{product.bigDescription}</div>
                </li>
                <li>
                  <div className="category-property">Modal:</div>
                  <div className="category-value">{product.modal}</div>
                </li>
                <li>
                  <div className="category-property">Type:</div>
                  <div className="category-value">{product.type}</div>
                </li>
                <li>
                  <div className="category-property">Size:</div>
                  <div className="category-value">{product.size}</div>
                </li>
                <li>
                  <div className="category-property category-points">
                    Points:
                  </div>
                  <div className="category-value category-points">
                    {product.points}
                  </div>
                </li>
              </ul>

              <div className="cta-btn">
                <a href="#" target="_self">
                  Redeem Now
                </a>
              </div>

              
            </div>
          </div>
          <div className="product-details-bottom">
            <button onClick={backToHome}>Back To Product</button>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;

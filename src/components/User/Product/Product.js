import SlideBar from "../../SlideBar/SlideBar";
import "./Product.css";
import Header from "../../Header/Header";

const Product = () => {
  return (
    <div className="product-wrap">
      <Header />
      <SlideBar />
      <div className="product">
        <div>Product</div>
      </div>
    </div>
  );
};

export default Product;

import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/User/Home/Home";
import Recognize from "./components/User/Recognize/Recognize";
import Profile from "./components/User/Profile/Profile";
import Product from "./components/User/Product/Product";
import ProductDetails from "./components/User/Product/ProductDetails";
import { CapCategory } from "./components/User/Product/Cap";
import { BoardCategory } from "./components/User/Product/Board";
import { PenCategory } from "./components/User/Product/Pen";
import { TShirtCategory } from "./components/User/Product/TShirt";
import { MouseCategory } from "./components/User/Product/Mouse";
import { AllCategory } from "./components/User/Product/ProductAll";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-recognitions" element={<Recognize />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/redemption-point" element={<Product />} />
      <Route
        path="/redemption-point/products/:id"
        element={
          <ProductDetails
            products={[
              ...AllCategory,
              ...MouseCategory,
              ...TShirtCategory,
              ...PenCategory,
              ...CapCategory,
              ...BoardCategory,
            ]}
          />
        }
      />
    </Routes>
  );
}

export default App;

import React, { lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setActiveTab } from "../../../slices/ProductTabsSlice.js";
import Header from "../../Header/Header";
import SlideBar from "../../SlideBar/SlideBar";
import "./Product.css";

const All = lazy(() => import("./ProductAll.js"));
const Laptop = lazy(() => import("./Laptop"));
const Cap = lazy(() => import("./Cap"));
const Mouse = lazy(() => import("./Mouse"));
const TShirt = lazy(() => import("./TShirt.js"));
const Board = lazy(() => import("./Board.js"));
const Pen = lazy(() => import("./Pen.js"));

const ProductTab = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.productTab.activeTab);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "All":
        return <All />;
      case "Mouse":
        return <Mouse />;
      case "Laptop":
        return <Laptop />;
      case "Cap":
        return <Cap />;
      case "T-Shirt":
        return <TShirt />;
      case "Key-board":
        return <Board />;
      case "Pen":
        return <Pen />;
      default:
        return <All />;
    }
  };

  return (
    <div className="product-wrap">
      <Header />
      <SlideBar />
      <div className="product">
        <h1 className="h2">Product</h1>
        <div className="product-tabs">
          <div className="tabs">
            {[
              "All",
              "Cap",
              "T-Shirt",
              "Mouse",
              "Laptop",
              "Key-board",
              "Pen",
            ].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "tab active" : "tab"}
                onClick={() => dispatch(setActiveTab(tab))}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <Suspense fallback={<div>Loading...</div>}>
              {renderActiveTab()}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;

import React, { useState, lazy, Suspense } from "react";
import Header from "../../Header/Header";
import SlideBar from "../../SlideBar/SlideBar";
import "./Product.css";

const All = lazy(() => import("./ProductAll.js"));
const Laptop = lazy(() => import("./Laptop"));
const Cap = lazy(() => import("./Cap"));
const Mouse = lazy(() => import("./Mouse"));
const TShirt = lazy(() => import("./TShirt.js"));

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("Mouse");

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
      case "TShirt":
        return <TShirt />;
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
              "TShirt",
              "Mouse",
              "Laptop",
              "Key-board",
            ].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "tab active" : "tab"}
                onClick={() => setActiveTab(tab)}
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

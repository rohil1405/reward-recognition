import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/User/Home/Home";
import Recognize from "./components/User/Recognize/Recognize";
import Profile from "./components/User/Profile/Profile";
import Product from "./components/User/Product/Product";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-recognitions" element={<Recognize />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/redemption-point" element={<Product />} />
    </Routes>
  );
}

export default App;

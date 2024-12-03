import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/User/Home/Home";
import Recognize from "./components/User/Recognize/Recognize";
import Profile from "./components/User/Profile/Profile";
import Reward from "./components/User/Reward/Reward";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-recognitions" element={<Recognize />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/reward" element={<Reward />} />
    </Routes>
  );
}

export default App;

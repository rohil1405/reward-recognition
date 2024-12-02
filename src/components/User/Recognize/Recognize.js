import SlideBar from "../../SlideBar/SlideBar";
import "./Recognize.css";
import Header from "../Header/Header";

const Recognize = () => {
  return (
    <div className="recognize-wrap">
      <Header />
      <SlideBar />
      <div className="container">
        <div className="recognize">
          <div className="recognize"></div>
        </div>
      </div>
    </div>
  );
};

export default Recognize;

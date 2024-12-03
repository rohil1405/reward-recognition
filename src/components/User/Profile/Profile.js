import SlideBar from "../../SlideBar/SlideBar";
import "./Profile.css";
import Header from "../../Header/Header";

const Profile = () => {
  return (
    <div className="profile-wrap">
      <Header />
      <SlideBar />

      <div className="container">
        <div className="profile">
          <div>profile</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

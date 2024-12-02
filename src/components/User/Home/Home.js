import React, { useState } from "react";
import Header from "../../Header/Header";
import SlideBar from "../../SlideBar/SlideBar";
import "./Home.css";
import rewardImg from "../../../assets/reward-img.jpg";
import awardIcon from "../../../assets/award.png";
import badgesIcon from "../../../assets/badge.png";
import gold from "../../../assets/gold.png";
import sliver from "../../../assets/sliver.png";
import logo from "../../../assets/intro-person.png";
import medal from "../../../assets/medal.png";
import double from "../../../assets/double.png";
import Swal from "sweetalert2";

const Home = () => {
  const [category, setCategory] = useState("Category");
  const [subCategory, setSubCategory] = useState("Sub Category");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSubCategoryDropdownOpen, setIsSubCategoryDropdownOpen] =
    useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const toggleCategoryDropdown = () =>
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  const toggleSubCategoryDropdown = () =>
    setIsSubCategoryDropdownOpen(!isSubCategoryDropdownOpen);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsCategoryDropdownOpen(false);
  };

  const handleSubCategorySelect = (selectedSubCategory) => {
    setSubCategory(selectedSubCategory);
    setIsSubCategoryDropdownOpen(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMemberSelect = (member) => {
    setUser(`@${member}`);
  };

  const handleSubmit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `User: ${user}, Message: "${message}", SubCateogry: ${subCategory}, Category: ${category}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, create it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        setSubmitMessage(
          `User: ${user}, Message: "${message}", SubCateogry: ${subCategory}, Category: ${category}`
        );
        Swal.fire("Created!", "Your recognition has been created.", "success");
      } else {
        Swal.fire(
          "Cancelled",
          "Your recognition has not been created.",
          "error"
        );
      }
    });
  };

  return (
    <div className="home-wrap">
      <Header />
      <SlideBar />
      <div className="home">
        <div className="home-content">
          <div className="home-left">
            <div className="select-form">
              <h1 className="h3">Recognize Someone</h1>
              <p>Select a team member to recognize</p>
              <select
                onChange={(e) => handleMemberSelect(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Member
                </option>
                <option value="rohil">rohil</option>
                <option value="xyz">xyz</option>
                <option value="abc">abc</option>
              </select>
            </div>
            <div className="shoutout-form">
              <h2>Recognize Now</h2>
              <div className="user-info">
                <div className="avatar">
                  <img src={logo} alt="User Avatar" />
                </div>
                <div className="username">{user}</div>
              </div>

              <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Write your text here..."
              />

              <div className="points-values">
                <div className="points-selection">
                  <button onClick={toggleCategoryDropdown}>
                    {category}
                    <span>▼</span>
                  </button>
                  {isCategoryDropdownOpen && (
                    <ul className="points-dropdown">
                      {["abc", "xyz", "pqr"].map((category) => (
                        <li
                          key={category}
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="values-selection">
                  <button onClick={toggleSubCategoryDropdown}>
                    {subCategory} <span>▼</span>
                  </button>
                  {isSubCategoryDropdownOpen && (
                    <ul className="points-dropdown">
                      {["xyz", "pqr", "abc"].map((subCategory) => (
                        <li
                          key={subCategory}
                          onClick={() => handleSubCategorySelect(subCategory)}
                        >
                          {subCategory}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <button className="create" onClick={handleSubmit}>
                Create
              </button>
            </div>
          </div>
          <div className="home-right">
            <div className="reward-item">
              <div className="reward-img">
                <img src={rewardImg} alt="Reward" />
              </div>
            </div>

            <div className="reward-item">
              <div className="my-reward">My Recognitions</div>
              <div className="recognitions-list">
                <div className="award">
                  <div className="award-icon">
                    <img src={awardIcon} alt="Award Icon" />
                  </div>
                  <div className="reward-text">Awards</div>
                  <div className="reward-count">10</div>
                </div>
                <div className="award">
                  <div className="award-icon">
                    <img src={badgesIcon} alt="Badge Icon" />
                  </div>
                  <div className="reward-text">Badges</div>
                  <div className="reward-count">45</div>
                </div>
              </div>
            </div>

            <div className="reward-item">
              <div className="leaderboard">LeaderBoard-Monthly</div>
              <div className="reward-you">
                <div className="reward-content">
                  <div className="reward-logo">
                    <img src={double} alt="Double Icon" />
                  </div>
                  <div className="reward-number">12</div>
                </div>
                <div className="reward-logo">
                  <img src={logo} alt="User Logo" />
                </div>
                <div className="reward-you-content">
                  <div className="reward-name">XYZ</div>
                  <div className="you">You</div>
                </div>
              </div>
              <ul className="reward-listing">
                <li>
                  <div className="reward-logo">
                    <img src={logo} alt="User Logo" />
                  </div>
                  <div className="reward-content">
                    <div className="reward-logo">
                      <img src={gold} alt="Gold Medal" />
                    </div>
                    <div className="reward-number">1</div>
                  </div>
                  <div className="reward-name">Rohil</div>
                </li>
                <li>
                  <div className="reward-logo">
                    <img src={logo} alt="User Logo" />
                  </div>
                  <div className="reward-content">
                    <div className="reward-logo">
                      <img src={sliver} alt="Silver Medal" />
                    </div>
                    <div className="reward-number">2</div>
                  </div>
                  <div className="reward-name">ABC</div>
                </li>
                <li>
                  <div className="reward-logo">
                    <img src={logo} alt="User Logo" />
                  </div>
                  <div className="reward-content">
                    <div className="reward-logo">
                      <img src={medal} alt="Medal" />
                    </div>
                    <div className="reward-number">3</div>
                  </div>
                  <div className="reward-name">PQR</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

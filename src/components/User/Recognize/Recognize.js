import React, { useState } from "react";
import SlideBar from "../../SlideBar/SlideBar";
import "./Recognize.css";
import Header from "../../Header/Header";
import award from "../../../assets/reward-points.png";
import badges from "../../../assets/redemption.png";
import view from "../../../assets/show.png";

const Recognize = () => {
  const points = [
    {
      number: 1,
      name: "abc",
      category: "xyz",
      subcategory: "pqr",
      points: 12,
    },
    {
      number: 2,
      name: "pqr",
      category: "abc",
      subcategory: "xyz",
      points: 15,
    },
    {
      number: 3,
      name: "xyz",
      category: "pqr",
      subcategory: "abc",
      points: 14,
    },
    {
      number: 4,
      name: "lmn",
      category: "def",
      subcategory: "ghi",
      points: 20,
    },
    {
      number: 5,
      name: "ghi",
      category: "lmn",
      subcategory: "def",
      points: 25,
    },
    {
      number: 6,
      name: "def",
      category: "ghi",
      subcategory: "lmn",
      points: 40,
    },
    {
      number: 7,
      name: "lmn",
      category: "xyz",
      subcategory: "pqr",
      points: 11,
    },
    {
      number: 8,
      name: "pqr",
      category: "lmn",
      subcategory: "xyz",
      points: 16,
    },
    {
      number: 9,
      name: "xyz",
      category: "pqr",
      subcategory: "lmn",
      points: 18,
    },
    {
      number: 10,
      name: "abc",
      category: "def",
      subcategory: "xyz",
      points: 9,
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = points.slice(startIndex, endIndex);

  const totalPages = Math.ceil(points.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleViewClick = (itemId) => {
    console.log("Viewing details for item:", itemId);
  };

  return (
    <div className="redeemption-reward-wrap">
      <Header />
      <SlideBar />
      <div className="redeemption-reward">
        <div className="redeemption-reward-row">
          <div className="redeemption-reward-item">
            <h1 className="h2">Your Reward Points</h1>
            <div className="redeemption-reward-content">
              <div className="redeemption-reward-icon">
                <img src={award} alt="award" />
              </div>
              <div className="redeemption-reward-points">10</div>
            </div>
          </div>

          <div className="redeemption-reward-item">
            <h2 className="h2">Your Recognition Points</h2>
            <div className="redeemption-reward-content">
              <div className="redeemption-reward-icon">
                <img src={badges} alt="badges" />
              </div>
              <div className="redeemption-reward-points">45</div>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table border="1" cellpadding="5" cellspacing="0">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Reward Category</th>
                <th>Reward Subcategory</th>
                <th>Reward Points</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.number}>
                  <td>{item.number}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.subcategory}</td>
                  <td className="points">{item.points}</td>
                  <td>
                    <img
                      src={view}
                      className="view"
                      onClick={() => handleViewClick(item.number)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognize;

import React, { useState, useEffect } from "react";
import SlideBar from "../../SlideBar/SlideBar";
import "./Recognize.css";
import Header from "../../Header/Header";
import award from "../../../assets/reward-points.png";
import badges from "../../../assets/redemption.png";
import view from "../../../assets/show.png";
import profile from "../../../assets/intro-person.png";
import { Link } from "react-router-dom";

const Recognize = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalRecognizeCount, setTotalRecognizeCount] = useState(0);
  const [redemptionPoints, setRedemptionPoints] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem("recognize");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
      console.log(parsedData);
      setTotalRecognizeCount(parsedData.length);

      const totalPoints = parsedData.reduce(
        (acc, item) => acc + item.points || 0,
        0
      );
      setRedemptionPoints(totalPoints);
    }
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleViewClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
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
                <img src={badges} alt="award" />
              </div>
              <div className="redeemption-reward-points">900</div>
            </div>
          </div>

          <div className="redeemption-reward-item point">
            <div className="redemption-icon">
              <img src={award} />
            </div>
            <div className="point-list">
              <div className="point-title">Total Recognition Count</div>
              <div className="point-count">{totalRecognizeCount}</div>
            </div>
            <div className="point-list">
              <Link to="/redemption-point">
                <div className="point-title">Your Redemption Point</div>
              </Link>

              <div className="point-count">{redemptionPoints}</div>
            </div>
            <div className="point-list">
              <div className="point-title">History of Redemption</div>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table border="1" cellPadding="5" cellSpacing="0">
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
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{startIndex + index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.subcategory}</td>
                  <td className="points">{item.points}</td>
                  <td>
                    <img
                      src={view}
                      className="view"
                      onClick={() => handleViewClick(item)}
                      alt="View"
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

      {isModalOpen && selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="h2">{selectedItem.name}</h2>
            </div>

            <div className="modal-body">
              <ul>
                <li>
                  <img src={profile} alt="Profile" />
                </li>
                <li>
                  <strong>Description: </strong> {selectedItem.description}
                </li>
                <li>
                  <strong>Category:</strong> {selectedItem.category}
                </li>
                <li>
                  <strong>Subcategory:</strong> {selectedItem.subcategory}
                </li>
                <li>
                  <strong>Points:</strong> {selectedItem.points}
                </li>
              </ul>
            </div>

            <div className="modal-footer">
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recognize;

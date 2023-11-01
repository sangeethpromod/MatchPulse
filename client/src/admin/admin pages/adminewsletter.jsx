import React, { useState } from "react";
import "../admincss/newsletter.css";
import Header from "../../components/adminNavbar";
import Footer from "../../components/footor.jsx"

function Adminewsletter() {
  const dataPerPage = 6;
  const totalData = 36; // 7 columns x 6 rows
  const totalPages = Math.ceil(totalData / dataPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [subscriptionStatus, setSubscriptionStatus] = useState(
    new Array(totalData).fill(true)
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleButtonClick = (index) => {
    const newStatus = [...subscriptionStatus];
    newStatus[index] = !newStatus[index];
    setSubscriptionStatus(newStatus);
  };

  const renderTableData = () => {
    const start = (currentPage - 1) * dataPerPage;
    const end = start + dataPerPage;
    const tableData = [];

    for (let i = start; i < end; i++) {
      tableData.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>email@example.com</td>
          <td>
            <button
              className={`unsubButton ${
                subscriptionStatus[i] ? "subscribed" : "unsubscribed"
              }`}
              onClick={() => handleButtonClick(i)}
            >
              {subscriptionStatus[i] ? "SUBSCRIBED" : "UNSUBSCRIBED"}
            </button>
          </td>
        </tr>
      );
    }

    return tableData;
  };
  return (
    <div className="admin-newsletter-main-container">
      <div>
        <Header />
      </div>
      <div className="first-newsletter-row">
        <h1>
          CURRENT <span style={{ color: "#bd0000" }}>NEWSLETTER</span> SUBSCRIPTIONS
        </h1>
        <div className="subscription-table">
          <table className="subscrip-table">
            <thead>
              <tr>
                <th>SNO</th>
                <th>EMAIL ID</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
          <div className="page-change-button">
            <button onClick={handlePrevious} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
      <div>< Footer/></div>
    </div>
  );
}

export default Adminewsletter;

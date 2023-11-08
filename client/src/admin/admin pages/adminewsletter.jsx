import React, { useState, useEffect } from "react";
import "../admincss/newsletter.css";
import Header from "../../components/adminNavbar";
import Footer from "../../components/footor.jsx";

function Adminewsletter() {
  const dataPerPage = 6;
  const [totalData, setTotalData] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("http://localhost:3000/auth/subscriptions") // Replace with the correct backend API URL
      .then((response) => response.json())
      .then((data) => {
        setTotalData(data.length);
        setTotalPages(Math.ceil(data.length / dataPerPage));
        setSubscriptionData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
        setIsLoading(false);
      });
  }, []);

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

  const handleUnsubscribe = (emailId) => {
    // Send a DELETE request to the backend API to unsubscribe the email
    fetch(`http://localhost:3000/auth/subscriptions/${emailId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          // Successfully unsubscribed, update the UI
          const updatedData = subscriptionData.filter(
            (subscription) => subscription._id !== emailId
          );
          setSubscriptionData(updatedData);
        } else {
          console.error("Error unsubscribing");
        }
      })
      .catch((error) => {
        console.error("Error unsubscribing: " + error);
      });
  };

const renderTableData = () => {
  const start = (currentPage - 1) * dataPerPage;
  const end = Math.min(start + dataPerPage, totalData);
  const tableData = [];

  for (let i = start; i < end; i++) {
    const subscription = subscriptionData[i];
    if (subscription && subscription.email) {
      tableData.push(
        <tr key={subscription._id}>
          <td>{i + 1}</td>
          <td>{subscription.email}</td>
          <td>
            <button
              className={`unsubButton ${
                subscription.subscribed ? "subscribed" : "unsubscribed"
              }`}
              onClick={() => handleUnsubscribe(subscription._id)}
            >
              {subscription.subscribed ? "SUBSCRIBED" : "UNSUBSCRIBED"}
            </button>
          </td>
        </tr>
      );
    }
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
          CURRENT <span style={{ color: "#bd0000" }}>NEWSLETTER</span>{" "}
          SUBSCRIPTIONS
        </h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
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
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Adminewsletter;

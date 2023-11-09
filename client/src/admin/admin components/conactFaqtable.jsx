import React, { useState, useEffect } from "react";
import "./contactFaq.css";

function Admincontact() {
  const statuses = ["PENDING", "DONE", "ONGOING"];
  const dataPerPage = 6;
  const totalPages = 7;

  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [statusStorage, setStatusStorage] = useState({});

  useEffect(() => {
    // Fetch contact data
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/auth/getcontacts");
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data:", data);
          setTableData(data);
        } else {
          console.error(
            "API request failed:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("API request error:", error);
      }
    }

    fetchData();
  }, []);

useEffect(() => {
  // Save status to storage whenever it changes
  localStorage.setItem("statusStorage", JSON.stringify(statusStorage));

  // Save the status of all contacts to local storage, not just the status of the contacts on the current page
  for (let i = 0; i < tableData.length; i++) {
    const contact = tableData[i];
    const storedStatus = statusStorage[i] || contact.status;
    localStorage.setItem(`contactStatus-${i}`, storedStatus);
  }
}, [statusStorage]);

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

  const handleStatusChange = (rowIndex, newStatus) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex].status = newStatus;
    setTableData(updatedTableData);
    setStatusStorage({ ...statusStorage, [rowIndex]: newStatus });
  };

  const renderTableData = () => {
    const start = (currentPage - 1) * dataPerPage;
    const end = start + dataPerPage;
    const tableRows = [];

    for (let i = start; i < end; i++) {
      const contact = tableData[i];
      if (contact) {
        const storedStatus = statusStorage[i] || contact.status;
        const statusClassName = storedStatus ? storedStatus.toLowerCase() : "";
        tableRows.push(
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{contact.firstName || ""}</td>
            <td>{contact.lastName || ""}</td>
            <td>{contact.email || ""}</td>
            <td>{contact.mobileNum || ""}</td>
            <td>{contact.message || ""}</td>
            <td>
              <select
                className={`inside-select ${statusClassName}`}
                value={storedStatus}
                onChange={(e) => handleStatusChange(i, e.target.value)}
              >
                {statuses.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        );
      }
    }

    return tableRows;
  };

  return (
    <div className="admin-contacttable-main-container">
      <div>
        <div className="admin-contacttable-row">
          <table className="data-table">
            <thead>
              <tr>
                <th>SNO</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL ID</th>
                <th>PHONE NUMBER</th>
                <th>COMMENT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
          <div className="pagination">
            <button onClick={handlePrevious} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admincontact;

import React from "react";
import "./contactFaq.css";

function Admincontact() {
  const dataPerPage = 6;
  const totalData = 42; // 7 columns x 6 rows
  const totalPages = Math.ceil(totalData / dataPerPage);

  const [currentPage, setCurrentPage] = React.useState(1);

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

  const renderTableData = () => {
    const start = (currentPage - 1) * dataPerPage;
    const end = start + dataPerPage;
    const tableData = [];
    const statuses = ["done", "ongoing", "unopened"];

    for (let i = start; i < end; i++) {
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];
      tableData.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>First Name {i + 1}</td>
          <td>Last Name {i + 1}</td>
          <td>email@example.com</td>
          <td>+1 555-555-555{i % 10}</td>
          <td>Comment {i + 1}</td>
          <td>{randomStatus}</td>
        </tr>
      );
    }

    return tableData;
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

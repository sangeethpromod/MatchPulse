import React from "react";
import "../admincss/admincontact.css";
import AdminNavbar from "../../components/adminNavbar";
import ContactFAQTable from "../admin components/conactFaqtable"
import Footer from "../../components/footor"

function Admincontact() {
  return (
    <div className="admin-contactFaq-main-container">
      <div>
        <AdminNavbar />
      </div>
      <div className="conctfaq">
        <h1>CONTACTS OR FAQ QUERIES</h1>
      </div>
      <div className="admin-contactfaq-row-1">
        <ContactFAQTable />
      </div>
      <div className="sent-response">
        <h1>SENT RESPONSE TO USER OR CONNECT</h1>
        <div className="response-card">
          <div className="enter-email-to-sent">
            <h1>Enter Email ID:</h1>
            <input className="enter-email-to-sent-input" type="text" />
          </div>
          <div className="enter-subject-to-sent">
            <h1>Enter Subject:</h1>
            <input className="enter-subject-to-sent-input" type="text" />
          </div>
          <div className="enter-content-to-sent">
            <input className="enter-content-to-sent-input" type="text" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Admincontact;

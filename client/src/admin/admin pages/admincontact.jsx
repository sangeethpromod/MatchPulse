import React, { useState } from "react";
import "../admincss/admincontact.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import AdminNavbar from "../../components/adminNavbar";
import ContactFAQTable from "../admin components/conactFaqtable";
import Footer from "../../components/footor";
import axios from "axios";

function Admincontact() {
  const [emailData, setEmailData] = useState({
    recipient: "",
    subject: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

const sendEmail = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/sendemail",
      emailData
    );
    console.log("Email sent successfully", response.data);
    Swal.fire({
      title: "Success",
      text: "Email sent successfully",
      icon: "success",
    });
    // You can add a success message or reset the input fields here
  } catch (error) {
    console.error("Error sending email", error);

    // Log the entire error object to the console
    console.error("Axios error details:", error);

    Swal.fire({
      title: "Error",
      text: "Error sending email",
      icon: "error",
    });

    // Handle error and show a message if needed
  }
};


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
            <input
              className="enter-email-to-sent-input"
              type="text"
              name="recipient"
              value={emailData.recipient}
              onChange={handleInputChange}
            />
          </div>
          <div className="enter-subject-to-sent">
            <h1>Enter Subject:</h1>
            <input
              className="enter-subject-to-sent-input"
              type="text"
              name="subject"
              value={emailData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="enter-content-to-sent">
            <textarea
              className="enter-content-to-sent-input"
              name="content"
              placeholder="Write your Content Here"
              rows="4"
              value={emailData.content}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button className="send-the-mail-admin" onClick={sendEmail}>
            SEND EMAIL
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Admincontact;

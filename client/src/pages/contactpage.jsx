import React, { useState } from "react";
import "../css/contact.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.css";
import contactbg from "../images/leauge/6222618.jpg";
import Footer from "../components/footor";
import Navbar from "../components/navbar";

function ContactPage() {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNum: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Phone number validation regex (up to 11 digits)
    const phonePattern = /^\d{1,11}$/;

    if (
      !contactInfo.firstName ||
      !contactInfo.lastName ||
      !contactInfo.email ||
      !contactInfo.mobileNum ||
      !contactInfo.message
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are mandatory!",
      });
    } else if (!emailPattern.test(contactInfo.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address",
      });
    } else if (!phonePattern.test(contactInfo.mobileNum)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a valid phone number (up to 11 digits).",
      });
    } else {
      // All validations passed, send the data to the server
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/contacts",
          contactInfo
        );

        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Contact Created Successfully",
          });
           navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error creating contact",
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while creating the contact.",
        });
      }
    }
  };

  return (
    <div className="contactpage-Container">
      <div>
        <Navbar />
      </div>

      {/* container 1--------------------------------------------------- */}
      <div className="contact-container-1">
        <img className="contact-bg" src={contactbg} />
        <div className="contact-card">
          <h1>
            GET <br /> IN TOUCH
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="contact-line1">
              <input
                className="contact-first-name"
                type="text"
                name="firstName"
                placeholder="ENTER FIRST NAME"
                value={contactInfo.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="contact-last-name"
                type="text"
                name="lastName"
                placeholder="ENTER LAST NAME"
                value={contactInfo.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-line2">
              <input
                className="contact-emailid"
                type="text"
                name="email"
                placeholder="ENTER EMAIL ID"
                value={contactInfo.email}
                onChange={handleChange}
                required
              />
              <input
                className="contact-mobileNum"
                type="text"
                name="mobileNum"
                inputMode="numeric"
                maxLength="11"
                pattern="[0-9]*"
                placeholder="ENTER MOBILE NUM"
                value={contactInfo.mobileNum}
                onChange={handleChange}
                required
                onKeyPress={(e) => {
                  const pattern = /[0-9]/;
                  if (!pattern.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
            <div className="contact-line3">
              <input
                className="contact-message"
                type="text"
                name="message"
                placeholder="ENTER MESSAGE"
                value={contactInfo.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-button">
              <button className="contactpage-button" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* footer-------------------- */}
      <div className="contactfooter">
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

import React, { useState } from "react";
import Section from "./Section";

const Contect = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://cdn.rentechdigital.com/common_files/rentech/common-images/home-hero-shap-left.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const [showAlert, setShowAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
      setShowDangerAlert(true);
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
    setShowDangerAlert(false);
  };

  return (
    <div className="  pt-5 mt-5 " style={containerStyle}>
      <div className="container mt-5 animate__animated animate__zoomIn">
        {showAlert && (
          <div className="alert alert-success mt-3" role="alert">
            <i className="fas fa-check-circle me-2"></i>
            Form submitted successfully!
          </div>
        )}
        {showDangerAlert && (
          <div className="alert alert-danger mt-3" role="alert">
            <i className="fas fa-exclamation-circle me-2"></i>
            Please fill out all the fields.
          </div>
        )}
        <h1 className="text-center">Contact Us</h1>
        <h6 className="text-center">
          Please fill out the form below to get in touch with us.
        </h6>
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleButtonClick}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Section />
    </div>
  );
};

export default Contect;

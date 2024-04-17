import React from "react";
import Section from "./Section";

const Contect = () => {
  const containerStyle = {
    backgroundImage: "url('https://cdn.rentechdigital.com/common_files/rentech/common-images/home-hero-shap-left.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div className="  pt-5 mt-5 " style={containerStyle}>
      <div className="container mt-5 animate__animated animate__zoomIn">
        <h1 className="text-center">Contact Us</h1>
        <h6 className="text-center">
          Please fill out the form below to get in touch with us.
        </h6>
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
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
                <label for="email" className="form-label">
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
                <label for="subject" className="form-label">
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
                <label for="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
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
import React from "react";
import Section from "./Section";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const containerStyle = {
    backgroundImage: "url('https://cdn.rentechdigital.com/common_files/rentech/common-images/home-hero-shap-left.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div className="container-fluid animate__animated animate__fadeIn" style={containerStyle}>
      <div className="container my-5 pt-5 text-center fw-bold r" >
        <h1
          className="animate__animated animate__rotateIn fw-bold py-4 display-4"
          style={{ fontSize: "3rem" }}
        >
          Your Global Technology Solutions Partner.
        </h1>
        <p className="container text-center wow animate__fadeInUp">
          Savaliya Infotech specializes in enterprise solutions for all
          businesses across the globe. We harness advanced technology and
          resources to build and deliver exceptional products that anticipate
          your needs, solve complex challenges, and improve your business
          outcomes. Our knowledgeable & experienced staff can assist you in
          implementing a reliable digital solution for your business.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://cdn.rentechdigital.com/common_files/rentech/common-images/enterprises-image.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <div className="my-5">
              <h1>Digital Solutions for Enterprises</h1>
              <p className="pt-5">
                Change your business dynamics with Savaliya Infotech powerful
                business solutions- Swipecart and Smart Scrapers. Our solutions
                are aimed to help businesses of all sizes meet customer demands
                proactively. Experience consistent and robust professional
                services and support from Savaliya Infotech to streamline
                complex processes and drive growth to your business.
              </p>
              <p>
                Benefit from our modern business solutions and react to trends
                as well as opportunities much faster. Our strong support system
                facilitates increased productivity and sales. Choose a new way
                to run your business, build strong relationships with customers,
                and increase revenues with Savaliya Infotech enterprise
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="container">Trusted by 1000+ businesses</p>
      </div>
      <div>
        <ul className="pt-4 d-flex mx-5 list-inline container">
          <li className="list-inline-item ">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/unilever-logo.svg"
              className="img-fluid"
              alt="unilever"
            />
          </li>
          <li className="list-inline-item mx-2">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/uber-logo.svg"
              className="img-fluid"
              alt="uber"
            />
          </li>
          <li className="list-inline-item mx-4">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/stanford-logo.svg"
              className="img-fluid"
              alt="stanford"
            />
          </li>
          <li className="list-inline-item mx-2">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/Google_logo.svg"
              className="img-fluid"
              alt="google"
            />
          </li>
        </ul>
      </div>
      <div className=" container-fluid text-center pt-5 my-5 bg-dark text-white">
        <h1>Powerful Solutions To Meet Your Business Need</h1>
        <h6 className="pt-5">
          SAVALIYA INFOTECH delivers user-focused results that are efficient in
          cost & performance, and future-proof. We work to ensure that our
          solutions meet the demands of your growing business, for today and
          tomorrow.
        </h6>
        <ul className="row bg-gradient-inr-text-main list-unstyled pt-5 justify-content-center">
          <li className="col-md-4 col-6 py-4 border-end">
            <div className="bg-gradient-inr-text py-4">
              <h3>1500+</h3>
              <h5>Customers Served</h5>
            </div>
          </li>
          <li className="col-md-4 col-6 py-4 border-end">
            <div className="bg-gradient-inr-text py-4">
              <h3>90+</h3>
              <h5>Expert Team</h5>
            </div>
          </li>
          <li className="col-md-4 col-6 py-4 border-end">
            <div className="bg-gradient-inr-text py-4">
              <h3>2014</h3>
              <h5>Founded</h5>
            </div>
          </li>
          <li className="col-md-4 col-6 py-4 border-end">
            <div className="bg-gradient-inr-text py-4">
              <h3>98%</h3>
              <h5>Customer Satisfaction</h5>
            </div>
          </li>
          <li className="col-md-4 col-6 py-4 border-end">
            <div className="bg-gradient-inr-text py-4">
              <h3>155+</h3>
              <h5>Countries Covered</h5>
            </div>
          </li>
          <li className="col-md-4 col-6 py-4">
            <div className="bg-gradient-inr-text py-4">
              <h3>100%</h3>
              <h5>Customer Support</h5>
            </div>
          </li>
        </ul>
      </div>
      <div className=" text-center py-5">
        <h1>Why Choose SAVALIYA INFOTECH?</h1>
        <h6 className="py-4">
          SAVALIYA INFOTECH is dedicated to empowering your business
          exponentially. We do this with the perfect mix of the latest
          technologies, innovation, expertise, and processes to help you boost
          your brand’s market success.
        </h6>
      </div>
      <section className=" text-center text-white pt-5 bg-dark">
        <h1>Advanced Solutions</h1>
        <p>
          We channel our efforts through advanced solutions designed to make
          your business succeed
        </p>
        <ul className="pt-4 d-flex flex-wrap justify-content-center">
          <li className="list-inline-item my-3 mx-3">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/rentech/shap-pos-fix-7.png "
              className="img-fluid"
              alt=""
            />
          </li>
          <li className="list-inline-item my-5 mx-4 ">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/rentech/shap-pos-fix-8.png "
              className="img-fluid"
              alt=""
            />
          </li>
          <li className="list-inline-item mx-4 my=4">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/rentech/shap-pos-fix-9.png"
              className="img-fluid"
              alt=""
            />
          </li>
          <li className="list-inline-item mx-3 my-1">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/rentech/shap-pos-fix-6.png"
              className="img-fluid"
              alt=""
            />
          </li>
          <li className="list-inline-item mx-4 my-5">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/rentech/shap-pos-fix-5.png"
              className="img-fluid"
              alt=""
            />
          </li>
          <li className="list-inline-item mx-3">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/rentech/shap-pos-fix-2.png"
              className="img-fluid"
              alt=""
            />
          </li>
          <li className="list-inline-item mx-4 my-5">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/rentech/shap-pos-fix-3.png "
              className="img-fluid"
              alt=""
            />
          </li>
          <li className="list-inline-item mx-2 my-1">
            <img
              loading="lazy"
              src="https://cdn.rentechdigital.com/common_files/rentech/shap-pos-fix-4.png"
              className="img-fluid"
              alt=""
            />
          </li>
        </ul>
      </section>
      <Section />
    </div>
  );
};

export default Home;

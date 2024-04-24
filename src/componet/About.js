import React from "react";
import Section from "./Section";

const About = () => {
  const containerStyle = {
    backgroundImage: "url('https://cdn.rentechdigital.com/common_files/rentech/common-images/home-hero-shap-left.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div className=" animate__animated animate__fadeIn" style={containerStyle}>
      <div className="col-xl-9 mx-auto">
        <div className="comn-hero-section-main text-center pt-5 mt-5">
          <h1 className=" fw-bold py-4 " style={{ fontSize: "3rem" }}>
            {" "}
            Pushing the boundaries, one step at a time
          </h1>
          <h6 className="mt-0 pb-5">
            SAVALIYA INFOTECH believes in building and nurturing relationships
            with our customers. We strive to innovate and help organizations
            implement ideas in the process. We endeavor to satisfy all of our
            clients and partners by solving their concerns honestly and to the
            best of our ability.
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn.rentechdigital.com/common_files/rentech/grid-about-5.png"
            className="img-fluid rounded"
            alt=""
            style={{maxHeight: "410px", width: "100%" }}
          />
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn.rentechdigital.com/common_files/rentech/grid-about-1.png"
            className="img-fluid rounded"
            alt=""
            style={{maxHeight: "410px", width: "100%" }}
          />
        </div>
        <div className="col-md-4 ">
          <img
            src="https://media.istockphoto.com/id/185255095/photo/group-of-business-people-having-meeting-around-tablet-computer.jpg?s=612x612&w=0&k=20&c=h9wy4Byt6BFgtcds6u1ny4izNy5f7Lby72OPSK3Ck10="
            className="img-fluid rounded"
            alt=""
            style={{ maxHeight: "410px", width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <img
            src="https://cdn.rentechdigital.com/common_files/rentech/grid-about-4.png"
            className="img-fluid rounded pt-4"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <img
            src="https://cdn.rentechdigital.com/common_files/rentech/grid-about-2.png"
            className="img-fluid rounded pt-4"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <img
            src="https://cdn.rentechdigital.com/common_files/rentech/grid-about-3.png"
            className="img-fluid rounded pt-4"
            alt=""
            style={{ maxHeight: "330px", width: "100%" }}
          />
        </div>
      </div>

      <section className="row-inr-space-class">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 order-lg-2">
              <div className="text-center pb-5 pb-lg-0 pt-5 mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.rentechdigital.com/common_files/common/enterprises-image.png"
                  className="img-fluid"
                  alt="solve business problems"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 ms-lg-auto">
              <div className="comn-hero-section-main d-block text-lg-start text-center pt-5 mt-5">
                <h2>
                  Helping solve business problems, discover new opportunities
                </h2>
                <h6>
                  We assist customers in the most practical, suitable, and
                  cost-effective manner possible, and we are delighted to have
                  solved some of their most challenging problems. Thousands of
                  companies have benefited from our solutions and have faith in
                  our ability to get the necessary results. We continue to
                  cultivate customer connections and are engaged in their
                  success.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center pt-5 my-5 bg-dark text-white">
        <h1>A new method, a new beginning</h1>
        <h6 className="pt-5">
          When you choose our products, you get much more to grow your business.
          With about a decade of technology expertise and effort, our team has
          built products that fit almost all your business needs. We work to
          ensure that our solutions meet the demands of your growing business,
          for today and tomorrow.
        </h6>
        <ul className="row bg-gradt-inr-text-main list-inline pt-5 ">
          <li className="col-lg-4 col-md-6 col-sm-12 p-0 mb-4">
            <div className="text-center bg-gradt-inr-text py-4">
              <h3>1500+</h3>
              <h5>Customers Served</h5>
            </div>
          </li>
          <li className="col-lg-4 col-md-6 col-sm-12 p-0 mb-4">
            <div className="text-center bg-gradt-inr-text py-4">
              <h3 className="d-block">90+</h3>
              <h5 className="d-block">Expert Team</h5>
            </div>
          </li>
          <li className="col-lg-4 col-md-6 col-sm-12 p-0 mb-4">
            <div className="text-center bg-gradt-inr-text py-4">
              <h3 className="d-block">2014</h3>
              <h5 className="d-block">Founded</h5>
            </div>
          </li>
          <li className="col-lg-4 col-md-6 col-sm-12 p-0 mb-4">
            <div className="text-center bg-gradt-inr-text py-4">
              <h3 className="d-block">98%</h3>
              <h5 className="d-block">Customer Satisfaction</h5>
            </div>
          </li>
          <li className="col-lg-4 col-md-6 col-sm-12 p-0 mb-4">
            <div className="text-center bg-gradt-inr-text py-4">
              <h3 className="d-block">155+</h3>
              <h5 className="d-block">Countries Covered</h5>
            </div>
          </li>
          <li className="col-lg-4 col-md-6 col-sm-12 p-0 mb-4">
            <div className="text-center bg-gradt-inr-text py-4">
              <h3 className="d-block">100%</h3>
              <h5 className="d-block">Customer Support</h5>
            </div>
          </li>
        </ul>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="text-start py-4 col-lg-6 col-md-12 order-2 order-md-1">
          <h2 className="pt-3 fw-bold">
            SAVALIYA INFOTECH’s customer-first approach
          </h2>
          <h6>
            At SAVALIYA INFOTECH, we have built an ecosystem combining skills,
            resources, technology, and community to help businesses grow and get
            better every day. We believe what’s beneficial for our bottom line
            is likewise excellent for our customers. We grow with integrity and
            flourish with a soul- we do it to focus on our customers and empower
            their businesses.
          </h6>
          <h6>We help you rise above the ordinary to achieve your goal,</h6>
        </div>
        <div className="card shadow-lg m-5 bg-body rounded text-center mt-5 col-lg-4 col-md-6 col-sm-12 order-1 order-md-2">
          <div className="card-body">
            <h1 className="card-title fw-bold" style={{ color: "#eb5a95" }}>
              save people time{" "}
            </h1>{" "}
            <h1>by making the world more</h1>{" "}
            <h1>
              <span style={{ color: "#08bd7c" }}>productive.</span>
            </h1>
          </div>
        </div>
      </div>

      <div className=" text-center">
        <div className="card shadow-lg p-3 mb-5 bg-body rounded col-lg-6">
          <div className="card-body">
            <h1 className="card-title">Cut boundaries with a</h1>
            <h1>customer-centric approach</h1>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-start">
          <h1
            className="pt-5 mt-4 col-lg-6 col-md-10"
            style={{ color: "#eb5a95" }}
          >
            Serve with integrity
          </h1>
          <div className="comn-hero-section-main d-block text-start pb-5 col-lg-6 col-md-10">
            <h1>Committed to our core values</h1>
            <h6>
              We want our business partnerships to last for a long time so that
              everyone benefits. We are firm believers in intelligent solutions
              that automate and expand our clients' business operations and
              procedures. To meet our client’s different needs, we adhere to the
              essential principle of "End to End Solutions."
            </h6>
          </div>
        </div>

        <div className="card shadow-lg p-3 mb-5 bg-body rounded col-lg-6">
          <div className="card-body">
            <h1 className="card-title">
              Derive maximum potential of our resources
            </h1>
          </div>
        </div>
      </div>
      <section className="row-inr-space-class about-box-bg-image bg-dark text-white p-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="swipe-left-right-image text-lg-start text-center">
                <img
                  loading="lazy"
                  src="https://cdn.rentechdigital.com/common_files/rentech/Online-shopping-shopify2.png"
                  className="img-fluid"
                  alt="shopping shopify"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-6 ps-lg-5">
              <div className="btm-banner-info">
                <h2 className="mb-0">
                  <bdi>“</bdi>SAVALIYA INFOTECH’s Swipecart was all that I
                  needed to boost my online sales. The conversion from the
                  website to a world-class mobile app was completed in a few
                  days. I can assure you that their product is amazing
                  <bdi>”</bdi>
                </h2>
                <div className="pt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.rentechdigital.com/common_files/rentech/shopify-partner.svg"
                    className="img-fluid"
                    alt="shopify partner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row justify-content-center">
        <div className="col-xl-9 col-md-10 col-sm-12 mx-auto">
          <div className="text-center sl-fstr-text py-5">
            <h2>Differentiate Your Brand, Dominate Your Marketplace</h2>
            <h6>
              We have the ideal solutions to meet your specific company
              requirements. Are you ready to do your best work? We're here to
              help you.
            </h6>
          </div>
        </div>
      </div>

      <Section />
    </div>
  );
};

export default About;

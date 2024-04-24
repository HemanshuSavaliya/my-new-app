import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Row, Col } from "react-bootstrap";
import my from "./image/my.png";
import pathu from "./image/pathu bhai.png";
import parth from "./image/parth bhai.png";
import rutvik from "./image/Rutvik.png";
import ravi from "./image/ravi bhai.png";
import raju from "./image/raju bhai.png";
import jaydeep from "./image/jaydeep bhai.png";
import akash from "./image/aakash.png";
import bhadresh from "./image/bhadresh bhai.png";
import dhaval from "./image/dhaval bhai.png";
import nirmal from "./image/nirmal bhai.png";
import aashish from "./image/aashish bhai.png";
import Section from "./Section";

const Team = () => {

  const containerStyle = {
    backgroundImage: "url('https://cdn.rentechdigital.com/common_files/rentech/common-images/home-hero-shap-left.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="mt-5 animate__animated animate__zoomIn" style={containerStyle}>
      <h1 className="text-center my-5 py-5">TEAM Leader</h1>
      <Carousel interval={2000}>
        <Carousel.Item>
          <Row>
            <Col md={4}>
              <img
                className="d-block rounded shadow "
                src={pathu}
                alt="Second slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Parth Kalsariya</h3>
              </div>
            </Col>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={my}
                alt="First slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Owner</h5>
                <h3>HEMANSHU SAVALIYA</h3>
              </div>
            </Col>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={nirmal}
                alt="Fifth slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Nirmal Dhameliya</h3>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={parth}
                alt="Third slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Chandu Kaka</h3>
              </div>
            </Col>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={rutvik}
                alt="First slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Rutvik Pather</h3>
              </div>
            </Col>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={ravi}
                alt="Fifth slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Ravi Chodavadiya</h3>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={bhadresh}
                alt="Third slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Bhadresh Babariya</h3>
              </div>
            </Col>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={dhaval}
                alt="First slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Dhaval Italiya</h3>
              </div>
            </Col>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={akash}
                alt="Fifth slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>HR(Human Resources)</h5>
                <h3>Akash Hirapara</h3>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={raju}
                alt="Third slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Raju Kanani</h3>
              </div>
            </Col>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={jaydeep}
                alt="First slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Jaydeep Lathiya</h3>
              </div>
            </Col>
            <Col md={4}>
              <img
                className="d-block rounded shadow"
                src={aashish}
                alt="Fifth slide"
                style={{ height: "450px", width: "350px" }}
              />
              <div className="text-center my-4">
                <h5>Project Manger</h5>
                <h3>Aashish Punjab</h3>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      <h1 className="text-center my-5 bg-dark text-white">OUR TEAM</h1>
      <section className="container">
        <div>
          <Row>
            <Col md={3}>
              <img
                src="https://scontent.famd5-2.fna.fbcdn.net/v/t1.6435-9/42251804_144067753205638_5312154579784171520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vxNpFuO4_34Ab6Tfb_g&_nc_ht=scontent.famd5-2.fna&oh=00_AfA8XUJ47SJvaANeEB7uKoJQjcG5eD0AmPefpirNgF5FCA&oe=664FFF02"
                alt=""
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>Chandu Kaka</h5>
                <h6>Data-Entry Operatar</h6>
              </div>
            </Col>
            <Col md={3}>
              <img
                className="d-block "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUsTlLsG1OFq7wImoJXN3U2sBtPSlyonE4w&s"
                alt="First slide"
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>sundar pichai(Goggle CEO)</h5>
                <h6>UI/UX Desiner</h6>
              </div>
            </Col>
            <Col md={3}>
              <img
                className="d-block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLvXvVzmEWWB4sHE0tvFJU39SXeDytGM9Rg&s"
                alt="Fifth slide"
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>Mark Zuckerberg</h5>
                <h6>MERN stack</h6>
              </div>
            </Col>
            <Col md={3}>
              <img
                className="d-block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ658M3x7bRG6th6xPozERW7z-Y7gwThc_MA&s"
                alt="Fifth slide"
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>Elon Musk</h5>
                <h6>Full stack</h6>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vGV_ub8LZPO9Kfes-OuLY69bOI7B2x9bbw&s "
                alt=""
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
              <h5>Bill Gates</h5>
                <h6>Data-Entry Operatar</h6>
              </div>
            </Col>
            <Col md={3}>
              <img
                className="d-block "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXCI_3-xrJPNEZYgVaRILUf6Mbk_-yonYnA&s"
                alt="First slide"
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>Adani Group</h5>
                <h6>UI/UX Desiner</h6>
              </div>
            </Col>
            <Col md={3}>
              <img
                className="d-block"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtuU0IrErOw_aMFxIksA0K5QxTfkAQ9BGeX3sW7Jmutu8QiCRk"
                alt="Fifth slide"
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>Warren Buffett</h5>
                <h6> MERN stack </h6>
              </div>
            </Col>
            <Col md={3}>
              <img
                className="d-block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKhbrScB1TOLe14eqFEHszoJ_bDknfZfgXw&s"
                alt="Fifth slide"
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>Mota Bhai</h5>
                <h6>Full stack</h6>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4eM34t6txq1GlZXGUYsjxSvQ7Uy4mFD2gA&s"
                alt=""
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>ShahRukh Khan</h5>
                <h6>Data-Entry Operatar</h6>
              </div>
            </Col>
            <Col md={3}>
              <img
                className="d-block "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS033QkEqTOYjoGC06DNBdpPkpy84VKRXbTw&s"
                alt="First slide"
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>Akshay Kumar</h5>
                <h6>UI/UX Desiner</h6>
              </div>
            </Col>
            <Col md={3}>
              <img
                className="d-block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZumL49zVcYWl8dHskdATxRfcLe_6hqHvmdg&s "
                alt="Fifth slide"
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>Rahul Gandhi</h5>
                <h6> MERN stack </h6>
              </div>
            </Col>
            <Col md={3}>
              <img
                className="d-block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutqbj2nCyZ6Gz0GGsCFP0-cGU_jztoK0U_A&s"
                alt="Fifth slide"
                style={{ height: "280px", width: "230px" }}
              />
              <div className="text-center my-4">
                <h5>Amitabh Bachchan</h5>
                <h6>Full stack</h6>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Section />
    </div>
  );
};

export default Team;

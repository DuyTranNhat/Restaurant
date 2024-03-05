import React from "react";
import "./Home.css";
import Menubtn from "../Components/Menubtn";
import { Link } from "react-router-dom";
import ImageGallery from "../Components/ImageGallery";
import ContactInfo from "../Components/ContactInfo";

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row justify-content-center justify-content-sm-start">
            <div className="col-12 text-center text-sm-start col-sm-6">
              <h2 className="text-black fw-bold">Welcome To</h2>
              <h1 className="display-2 text-black fw-bold mb-5">
                Yudtahn Restaurant
              </h1>
              <Menubtn />
            </div>
          </div>
        </div>
      </header>

      <div className="about-section py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <img
                className="img-fluid w-50"
                src="https://im.whatshot.in/img/2018/Apr/tarsh-2-cropped-1523963430.jpg?q=90"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-between">
              <h2 className="fw-bold fs-1 text-uppercase mb-5">About Us</h2>
              <div className="text-black mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis quis eos consequatur incidunt fugiat maxime distinctio
                at quasi praesentium deleniti?
              </div>
              <div className="text-black mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                atque maxime corporis nostrum alias aliquid magni sint
                temporibus accusantium asperiores!
              </div>
              <Link to="./menu">
                <button className="btn btn-outline-success btn-lg">
                  More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-section h-100 min-vh-100 text-light shadow">
        <div className="bg-dec-menu-section pt-5">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="display-3 pt-5 fw-bold text-center text-uppercase mb-5">
              Our Flavorites
            </h1>
            <div className="row w-100 mb-5">
              <div className="col-lg-6 d-flex flex-column align-items-center">
                <h3 className="display-6 fw-bold mb-4">Food</h3>
                <div className="">
                  <div className="d-flex justify-content-between my-2">
                    <span className="fs-3 mx-4">English Breakfast</span>
                    <span className="fs-3 text-success">£2 - £4</span>
                  </div>
                  <div className="d-flex justify-content-between my-2">
                    <span className="fs-3 mx-4">Spicy Beef</span>
                    <span className="fs-3 text-success">£20 - £24</span>
                  </div>
                  <div className="d-flex justify-content-between my-2">
                    <span className="fs-3 mx-4">Saghetti Bolognese</span>
                    <span className="fs-3 text-success">£22 - £24</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 d-flex flex-column align-items-center">
                <h3 className="display-6 fw-bold mb-4">Drink</h3>
                <div className="">
                  <div className="d-flex justify-content-between my-2">
                    <span className="fs-3 mx-4">Coffee</span>
                    <span className="fs-3 text-success">£2 - £4</span>
                  </div>
                  <div className="d-flex justify-content-between my-2">
                    <span className="fs-3 mx-4">Juice</span>
                    <span className="fs-3 text-success">£1 - £3</span>
                  </div>
                  <div className="d-flex justify-content-between my-2">
                    <span className="fs-3 mx-4">Spirits</span>
                    <span className="fs-3 text-success">£4 - £5</span>
                  </div>
                </div>
              </div>
            </div>
            <Menubtn />
          </div>
        </div>
      </div>

      <ImageGallery />

      <div className="contact-section py-5 bg-dark">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <ContactInfo textColor="text-light" className="mb-5 mb-lg-0" />
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img
                className="b-white img-fluid w-50"
                src="https://images.unsplash.com/photo-1504718855392-c0f33b372e72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

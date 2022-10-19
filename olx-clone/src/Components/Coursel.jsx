import React from "react";
import image from "../images/olxSlide.jpeg";
import adImage from "../images/olxSlide.jpeg";

const Coursel = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        s
        className="carousel slide hover:cursor-pointer"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner px-8 py-4 ">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={image} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={image} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image} className="d-block w-100" alt="1000" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="ads">
        <img src={adImage} alt="Ads Placement" />
      </div>
    </div>
  );
};

export default Coursel;

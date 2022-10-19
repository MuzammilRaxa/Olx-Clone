import React from "react";
import image from "../images/olxSlide.jpeg";
import adImage from "../images/amazon-advertising.png";
import adImage2 from "../images/adImages.png";

const Coursel = () => {
  return (
    <div className="hidden md:block">
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
      <div className="ads w-[100%] h-28 mx-auto my-6 flex justify-center hover:cursor-pointer">
        <img
          src={adImage}
          alt="Ads Placement"
          className="w-[40%] h-[100%] object-cover"
        />
        <img src={adImage2} alt="Ads Placement" className="w-[40%] h-[100%]" />
      </div>
    </div>
  );
};

export default Coursel;

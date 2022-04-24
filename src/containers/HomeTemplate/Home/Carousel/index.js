import React, { useState } from "react";
import "./_carousel.scss";
import { Link } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import BackToTop from "../BackToTop";

export default function Carousel() {
  const listLocation = useSelector(
    (state) => state.fetchListLocationReducer.listLocation
  );
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };
  
  return (
    <>
      <div className="ukraine">
        <div className="container">
          <div className="ukraine-content">
            <h2>
              Giúp đỡ chỗ ở cho 100.000 người tị nạn đang chạy trốn khỏi Ukraine
            </h2>
          </div>
        </div>
      </div>

      <div className="container camping-container">
        <div className="camping">
          <div className="camping-content">
            <p>Hãy để trí tò mò của bạn dẫn lối</p>
          </div>
        </div>
        <hr />
      </div>

      <div className="inspiration">
        <div className="container">
          <div className="inspiration-container">
            <h3>Inspiration of the next trip</h3>
            <div className="controls">
              <button onClick={sliderRef?.slickPrev}>
                <FaChevronLeft />
              </button>
              <button onClick={sliderRef?.slickNext}>
                <FaChevronRight />
              </button>
            </div>
          </div>

          <Slider ref={setSliderRef} {...sliderSettings}>
            {listLocation?.map((idLocation, index) => (
              <div className="card" key={index}>
                <img
                  classname="card-img-top"
                  src={idLocation.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <Link
                    to={`/detail-location/${idLocation._id}`}
                    sx={{
                      color: "rgb(255, 56, 92)",
                      textDecoration: "auto",
                      cursor: "pointer"
                    }}
                    className="card-title"
                  >
                    {idLocation.name}
                  </Link>
                  <p className="card-text">
                    {idLocation.province}-{idLocation.country}
                  </p>
                  <p className="card-text">
                    Valueate: {idLocation.valueate}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* backToTop */}
      <div>
        <BackToTop />
      </div>
    </>
  );
}

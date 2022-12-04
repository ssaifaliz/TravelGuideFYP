import React from "react";
import "./testimonials.scss";
import slidepeople2 from "../../assets/slidepeople2.jpg";
import Carousel from "react-bootstrap/Carousel";

const testimonials = () => (
  <div className="testimonialsSection">
    <div className="container">
      <div className="mainHeading">CUSTOMER TESTIMONIALS</div>
      <Carousel>
        <Carousel.Item>
          <div className="row w-80">
            <div className="col-md-2 align-center-item">
              <img src={slidepeople2} alt="" />
            </div>

            <div className="txtReviews col-md-10">
              “We have used The Explorer many times over the past 3 years; we
              now use them exclusively because we know the tour guide will be
              top notch and provide a high level of service. The guides will
              custom tailor your excursions so you see what you want, when you
              want, how you want, at a price you want to pay. We give our
              highest endorsement to The Explorer.”
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row w-80">
            <div className="col-md-2 align-center-item">
              <img src={slidepeople2} alt="" />
            </div>

            <div className="txtReviews col-md-10">
              “We have used The Explorer many times over the past 3 years; we
              now use them exclusively because we know the tour guide will be
              top notch and provide a high level of service. The guides will
              custom tailor your excursions so you see what you want, when you
              want, how you want, at a price you want to pay. We give our
              highest endorsement to The Explorer.”
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row w-80">
            <div className="col-md-2 align-center-item">
              <img src={slidepeople2} alt="" />
            </div>

            <div className="txtReviews col-md-10">
              “We have used The Explorer many times over the past 3 years; we
              now use them exclusively because we know the tour guide will be
              top notch and provide a high level of service. The guides will
              custom tailor your excursions so you see what you want, when you
              want, how you want, at a price you want to pay. We give our
              highest endorsement to The Explorer.”
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default testimonials;

import React from "react";
import "./tour-details.scss";

const TourDetails = (props) => (
  <div className="container tourDetails">
    <div className="heading">
      <h1>{props.heading}</h1>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="Header">
          <p data-translatekey="SEAPageContent.general.subtitle.Tours_Walkingtour">
            Discover the city at your own pace on a walking tour in your next
            destination. Walk your way through the city's districts and main
            streets with a local by your side. Absorb the city's vibes, and
            explore the local spots of your next destination by foot.
          </p>
        </div>
        <a className="Link">
          Why Withlocals{" "}
          <svg className="Icon-3XyV9" width="15" height="9" viewBox="0 0 9 15">
            <path d="M5.48684777,7.50397408 L0.404874119,12.5450213 C-0.163670797,13.1089875 -0.167382519,14.0270692 0.396583755,14.5956142 C0.960550029,15.1641591 1.87863175,15.1678708 2.44717666,14.6039045 L8.57095596,8.52944164 C9.1443064,7.96070854 9.14251955,7.03315161 8.56698216,6.46663173 L2.44320287,0.438799698 C1.87248933,-0.12297191 0.954428727,-0.115723044 0.39265712,0.454990493 C-0.169114488,1.02570403 -0.161865622,1.94376463 0.408847915,2.50553624 L5.48684777,7.50397408 Z"></path>
          </svg>
        </a>
      </div>
      <div className="col-md-6">
        <div className="ImageContainer">
          <img
            alt="All Walking Tours worldwide"
            src={props.img}
            data-translatekey="SEAPageContent.general.headerImage.Tours_Walkingtour"
            width="600"
            height="336"
          />
        </div>
      </div>
    </div>
  </div>
);

export default TourDetails;

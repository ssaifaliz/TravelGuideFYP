import React from "react";
import "./destination.scss";

const destination = () => (
  <div className="destinationSection">
    <div className="container">
      <div className="mainHeading">SPOTLIGHT DESTINATIONS</div>
      <div className="txt">
        Looking for your next great adventure? We can help. Here is a sampling
        of our most popular destinations. Experience private tours with
        authentic local flavour.
      </div>
      
    </div>
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-3 destinationImage1">
          <div className="txtCountryCity">Paris, France</div>
        </div>
        <div className="col-md-3 destinationImage2">
        <div className="txtCountryCity">London, England</div>
        </div>
        <div className="col-md-3 destinationImage3">
        <div className="txtCountryCity">Tokyo, Japan</div>
        </div>
        <div className="col-md-3 destinationImage4">
        <div className="txtCountryCity">Rome, Italy</div>
        </div>
      </div>
    </div>
  </div>
);

export default destination;

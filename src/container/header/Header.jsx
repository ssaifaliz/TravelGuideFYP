import React from "react";
import "./header.scss";
import hpBoat from "../../assets/hpBoat.png";

const Header = () => (
  <div className="mainHeader">
    <div className="bg-img"></div>
    <div className="searchSection">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3">
            <div className="heading">Where are you going?</div>
            <div className="searchCityInput">
              <input type="text" placeholder="Type city, country" />
            </div>
          </div>
          <div className="col-md-12 col-lg-2">
            <div className="smallHeading">(select on map)</div>
            <input type="date" className="dateInput" />
          </div>
          <div className="col-md-12 col-lg-2">
            <div className="paddingTop"></div>
            <input type="date" className="dateInput" />
          </div>
          <div className="col-md-12 col-lg-2 center-align">
            <div className="paddingTop"></div>
            <button className="btnTour">Find A Tour</button>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="boatSection">
              <div>
                <img src={hpBoat} alt="" />
              </div>
              <div className="txtPlanner">Shore Excursion Planner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="viewTour">
      <div className="container">
        <div className="details row">
          <div className="txtTour col-md-8">
            Take a <span>Live Virtual Tour</span> and explore the world from
            your home!
          </div>
          <div className="btnTour col-md-4">
            <button>View Tours</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;

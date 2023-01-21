import React from "react";
import "./tourPackages.scss";
import { Navbar, Footer, Contactus } from "../../container";
import privateImage1 from "../../assets/packages/private1.png";
import privateImage2 from "../../assets/packages/private2.png";
import privateImage3 from "../../assets/packages/private3.png";
import privateImage4 from "../../assets/packages/private4.png";
import privateImage5 from "../../assets/packages/private5.png";
import privateImage6 from "../../assets/packages/private6.png";
import group1 from "../../assets/packages/group3.png";
import group2 from "../../assets/packages/group4.png";
import group3 from "../../assets/packages/group5.png";
import family1 from "../../assets/packages/family1.png";
import family2 from "../../assets/packages/family2.png";
import family3 from "../../assets/packages/family3.png";
import family4 from "../../assets/packages/group1.png";
import family5 from "../../assets/packages/group2.png";

const familyTour = [
  {
    image: privateImage1,
    text: "Shandur & Hunza (7 Days)",
  },
  {
    image: privateImage2,
    text: "Kaplu & Skardu (7 Days)",
  },
  {
    image: privateImage3,
    text: " Skardu & Kaplu (7 Days)",
  },
  {
    image: privateImage4,
    text: "Hunza, Giltgit & Naltar (7 Days)",
  },
  {
    image: privateImage5,
    text: "Skardu Valley (5 Days)",
  },
  {
    image: privateImage6,
    text: "Kashmir, Neelam & Arengkel (5 Days)",
  },
];
const group = [
  {
    image: group1,
    text: "Quetta zarat (Weekly)",
  },
  {
    image: group2,
    text: "Ormara Beach (Weekly)",
  },
  {
    image: group3,
    text: "Gorakh Hills (Weekly)",
  },
];
const family = [
  {
    image: family1,
    text: "Astore Valley & Skardu (7 Days)",
  },
  {
    image: family2,
    text: "Gilgit, Hunza & Astore  (7 Days)",
  },
  {
    image: family3,
    text: "Kalash Valley (7 Days)",
  },
  {
    image: family4,
    text: "Hunza, Nalter Valley(10 Days)",
  },
  {
    image: family5,
    text: "Swat, Kalam, Malam Jabba, Shogran (10 Days)",
  },
];

const TourPackages = () => (
  <div>
    <Navbar />
    <div className="tourPackages">
      <div className="mainBanner"></div>
      <div className="heading">Pakistan Tour Packages</div>
      <div className="packages">
        <div className="container">
          <div className="title">Private Honeymoon & Family Tours</div>
          <div className="row">
            {familyTour.map((item,index) => (
              <div className="col-md-4" key={index}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <h6>{item.text}</h6>
              </div>
            ))}
          </div>
          <div className="title">Southern Pakistan (Group)</div>
          <div className="row">
            {group.map((item,index) => (
              <div className="col-md-4" key={index}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <h6>{item.text}</h6>
              </div>
            ))}
          </div>
          <div className="title">Family Tours</div>
          <div className="row">
            {family.map((item,index) => (
              <div className="col-md-4" key={index}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <h6>{item.text}</h6>
              </div>
            ))}
          </div>
          <div className="title">Package Price Includes</div>
          <div className="points">
            <ul>
              <li> Hotel Stay with BreakFast</li>
              <li>Transportation & Sightseeing</li>
              <li>Guidance throughout trip</li>
            </ul>
            <p>Terms & Conditions:</p>
            <ul>
              <li>100% Advance payment at the time of confirmation</li>
            </ul>
          </div>
          <div className="title">We Provide Complete Range of Pakistan Tour</div>
          <div className="points">
            <ul>
              <li> Group Departures</li>
              <li>Economy and Budget Packages</li>
              <li>Private Packages with short or long stay</li>
              <li>Luxury Packages</li>
              <li>Family Packages travel on your selected date and plan.</li>
              <li>Packages with and without Airline Tickets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Contactus />
    <Footer />
  </div>
);

export default TourPackages;

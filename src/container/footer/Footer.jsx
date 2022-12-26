import React from "react";
import logo from "../../assets/logo.png";
import "./footer.scss";
import creditcards from "../../assets/creditcards.png";
import { Link } from "react-router-dom";


const Footer = () => (
  <div className="Footer">
    <div className="siteFooter">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={logo} alt="" className="logImage" />
          </div>
          <div className="col-md-3">
            <Link to="/find-tour"><p>Find A Tour</p></Link>
            <p>FIND A GUIDE</p>
            <p>E-GIFT CARDS</p>
          </div>
          <div className="col-md-3">
            <h6>BECOME A PARTNER</h6>
            <p> TRAVEL AGENT</p>
            <p> TOUR GUIDE</p>
            <p> AFFILIATE</p>
            <h6>GOT QUESTIONS?</h6>
            <p>HOW IT WORKS</p>
            <p>FAQS</p>
            <p>LOCAL GUIDES</p>
            <p>CANCELLATION POLICY</p>
          </div>

          <div className="col-md-3">
            <p>ABOUT US</p>
            <p>BLOG</p>
            <p>CONTACT US</p>
            <p>CAREERS</p>

            <p>TERMS AND CONDITIONS</p>
            <p>PRIVACY POLICY</p>
            <img src={creditcards} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="copyRights">
      <div className="container">
        <div className="text-center">
          <p>© THE EXPLORER, 2022. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

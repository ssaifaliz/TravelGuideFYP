import React from "react";
import "./contactus.scss";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const ContactUs = () => (
  <div className="contactSection">
    <div className="container">
      <div className="followUs">
        <h4>FOLLOW US</h4>
        <div className="socialIcons">
          <div className="icons">
            <FaFacebookSquare />
          </div>
          <div className="icons">
            <FaInstagramSquare />
          </div>
          <div className="icons">
            <FaTwitter />
          </div>
        </div>
        <h3>HOW CAN WE HELP?</h3>
        <p>
          The guides on The Explorer provide private tours tailored to your
          needs. Questions? Contact any guide directly, or reach out to our
          customer support team at any time.
        </p>
        <div className="followUsBtn">
          <button>Contact US</button>
          <button className="marginLeft">Find A Tour</button>

        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;

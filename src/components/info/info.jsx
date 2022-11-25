import React from "react";
import "./info.scss";

const Info = () => (
  <div className="container">
    <div className="mainInfoSection">
      <div class="number-counter">
        <span>1</span>
        <span>8</span>
        <span>5</span>
        <span>1</span>
        <span>2</span>
        <span>0</span>
        <span>4</span>
      </div>

      <div className="txtTraveler">TRAVELERS SERVED</div>
      <div className="txtGuide">4548 Guides in 188 Countries</div>
      <div className="txtSub">
        Discover the world with The Explorer! Our private tours offer you a
        unique and personalized experience in any destination.
      </div>
    </div>
  </div>
);

export default Info;

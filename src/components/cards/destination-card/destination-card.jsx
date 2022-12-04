import React from "react";
import "./destination-card.scss";

const DestinationCard = (props) => {
  console.log(props.imgLink);
  return (
    <div className="destinationCard">
      <div className="TopSearchCard">
        <div className="Details">
          <h3 className="Title">1 | Jewish Berlin: Unique Walking Tour</h3>
          <div className="Footer">
            {props.showImage ===2?<img
              alt=""
              src="https://withlocals-com-res.cloudinary.com/image/upload/w_48,h_48,c_fill,g_auto,q_auto,dpr_1.0,f_auto/869846256028dd78b9d2a32048b36734"
              width="48"
              height="48"
            />:''}
            <div className="TopSearchCardDetails">
              <div>
                <span>with Miha</span>
                <div>
                  <span>
                    <span data-translatekey="Common.Pricing.pp">€52.94 pp</span>
                  </span>
                  <span className="Bullet">•</span>
                  <span>3 hours</span>
                  <span className="Bullet">•</span>
                  <span>
                    <span>Off the beaten track tours</span>
                  </span>
                </div>
              </div>
            </div>
            <span className="ExploreButton">Explore</span>
          </div>
        </div>
        <div className="ImageContainer">
          <img alt="" src={props.imgLink} height="300" />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

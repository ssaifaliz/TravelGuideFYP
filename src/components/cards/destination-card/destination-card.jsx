import React from "react";
import Card from "react-bootstrap/Card";
import "./destination-card.scss";

const DestinationCard = (props) => {
  console.log(props.imgLink);
  return (
    <div className="destinationCard">
      <Card className="bg-dark text-white">
        <Card.Img src={props.imgLink} alt="Card image" height={350} />
        <Card.ImgOverlay>
          <div className="CardDetails">
            <div className="cardHeading">
              <h1>1 | The Ultimate Personalized Dutch Food Tour</h1>
            </div>
            <div className="cardTxt">
             {props.showImage===2? <img
                alt=""
                src="https://withlocals-com-res.cloudinary.com/image/upload/w_48,h_48,c_fill,g_auto,q_auto,dpr_1.0,f_auto/869846256028dd78b9d2a32048b36734"
                
              />:''}
              <p>Home Dinners • Local Delicacies • Food Markets</p>
              <span className="ExploreButton">Explore</span>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default DestinationCard;

import React from "react";
import Card from "react-bootstrap/Card";

import "./profile-card.scss";

const ProfileCard = (props) => {
  console.log(props.imgLink);
  return (
    <div className="ProfileCard">
      <Card className="bg-dark text-white">
        <Card.Img src={props.imgLink} alt="Card image" height={350} />
        <Card.ImgOverlay>
          <div className="CardDetails">
            <div className="cardHeading">
              <p>{props.seeMore?'Hello I am':'Withlocals for'}</p>
              <h1>{props.heading}</h1>
            </div>
            <div className="cardTxt">
              <p>Home Dinners • Local Delicacies • Food Markets</p>
              <span className="ExploreButton">{props.seeMore?'See more':'Explore'}</span>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default ProfileCard;

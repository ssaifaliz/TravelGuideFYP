import React from "react";
import Card from "react-bootstrap/Card";
import "./profile-large-card.scss";
import { FaStar } from "react-icons/fa";
// import { fa-solid fa-star } from 'react-icons/fa';
// import  FontAwesomeIcon  from "react-icons/fa";

const ProfileLargeCard = (props) => {
  console.log(props.imgLink);
  // "/experience/jewish-berlin-unique-walking-tour-e8614954/?adults=4&amp;children=0&amp;backUrl=%2Fexperiences%2Ftours%2Fwalking%2F"
  // <img alt="Jewish Berlin: Unique Walking Tour in Berlin - 818c031f15dae0b81b5458b8b120e86e" src="https://withlocals-com-res.cloudinary.com/image/upload/w_830,h_467,c_fill,g_auto,q_auto,dpr_1.0,f_auto/818c031f15dae0b81b5458b8b120e86e" width="830" height="830" className="Child-2wejq Image-2LnKr">
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src="https://withlocals-com-res.cloudinary.com/image/upload/w_830,h_467,c_fill,g_auto,q_auto,dpr_1.0,f_auto/818c031f15dae0b81b5458b8b120e86e"
      />
      <Card.Body>
        <img
          alt="sdfgh"
          src="https://withlocals-com-res.cloudinary.com/image/upload/w_830,h_467,c_fill,g_auto,q_auto,dpr_1.0,f_auto/818c031f15dae0b81b5458b8b120e86e"
          style={{
            borderRadius: "100%",
            border: "3px solid #fff",
            background: "#fff",
            width: "4rem",
            height: "4rem",
            display: "inline-block",
            position: "relative",
            zIndex: 1,
            marginTop: '-20%'
          }}
        />
        <Card.Text
          style={{
            whiteSpace: "nowrap",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: ".6875rem",
            lineHeight: "1rem",
            fontWeight: 700,
            display: "block",
          }}
        >
          Enjoy Berlin with Miha
        </Card.Text>
        <Card.Title
          style={{
            fontSize: "1rem",
            lineHeight: "1rem",
            height: "2rem",
            overflow: "hidden",
            marginTop: "0.5rem",
            fontWeight: 700,
            whiteSpace: "pre-line",
          }}
        >
          Jewish Berlin: Unique Walking Tour
        </Card.Title>
        <p
          style={{
            fontSize: ".6875rem",
            lineHeight: "1.5rem",
            marginTop: "0.5rem",
            // height: '1.5rem',
            marginBottom: 0,
          }}
        >
          Rs52.324pp&nbsp;•&nbsp;Kids for free&nbsp;•&nbsp;3
          hours&nbsp;•&nbsp;Off the beaten track tours
        </p>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
      </Card.Body>
    </Card>
  );
};

export default ProfileLargeCard;

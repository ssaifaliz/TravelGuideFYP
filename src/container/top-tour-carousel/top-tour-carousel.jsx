import React from "react";
import "./top-tour-carousel.scss";
import Carousel from "react-multi-carousel";
import { DestinationCard } from "../../components/cards";
import "react-multi-carousel/lib/styles.css";

const AllTourCarousel = (props) => {
  console.log(props)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: props.noOfCards,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container allTourCarousel">
      <div className="Header">
        {props.noOfCards===2?<h1>
          Top 5 Walking Tours worldwide
        </h1>:
        <h1>
         {props.noOfCards===3? 'Popular Destination'
           :'Experiences for every interest'}
        </h1>}
      </div>
      <div className="carousel">
        <Carousel responsive={responsive} autoPlay="true" infinite="true">
          <div style={{ width: "90%" }}>
            <DestinationCard showImage = {props.noOfCards} imgLink ='https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/cbd123c5b59d595c251c55dec26db0f8'/>
          </div>
          <div style={{ width: "90%" }}>
            <DestinationCard showImage = {props.noOfCards} imgLink = 'https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/260debd1b7f887703f4d7779f7668437'/>
          </div>

          <div style={{ width: "90%" }}>
            <DestinationCard showImage = {props.noOfCards} imgLink = "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/2966ef4d20b2a9bfafd3fda3a35cbdde"/>
          </div>
          <div style={{ width: "90%" }}>
            <DestinationCard showImage = {props.noOfCards} imgLink ='https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/f5213c4f0f00fd3510ea7881bffdf7da'/>
          </div>
          <div style={{ width: "90%" }}>
            <DestinationCard showImage = {props.noOfCards} imgLink = 'https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/cbd123c5b59d595c251c55dec26db0f8'/>
          </div>
          <div style={{ width: "90%" }}>
            <DestinationCard showImage = {props.noOfCards} imgLink = 'https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/2966ef4d20b2a9bfafd3fda3a35cbdde'/>
          </div>
          <div style={{ width: "90%" }}>
            <DestinationCard showImage = {props.noOfCards} imgLink = 'https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/f5213c4f0f00fd3510ea7881bffdf7da'/>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AllTourCarousel;

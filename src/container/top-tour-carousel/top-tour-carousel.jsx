import React from "react";
import "./top-tour-carousel.scss";
import Carousel from "react-multi-carousel";
import { DestinationCard, ProfileCard } from "../../components/cards";
import "react-multi-carousel/lib/styles.css";

const AllTourCarousel = (props) => {
  console.log(props);
  const allTourCards = [
    {
      id: 1,
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_352,c_fill,g_auto,q_auto,dpr_1.0,f_auto/website/passions/slider/Foodies-optimized",
      heading: "foodies",
    },
    {
      id: 1,
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/260debd1b7f887703f4d7779f7668437",
      heading: "Families",
    },
    {
      id: 1,
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_352,c_fill,g_auto,q_auto,dpr_1.0,f_auto/website/passions/slider/Night_owls-optimized",
      heading: "Night Owls",
    },
    {
      id: 1,
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_352,c_fill,g_auto,q_auto,dpr_1.0,f_auto/website/passions/slider/History_Buffs-optimized",
      heading: "History Buffs",
    },
    {
      id: 1,
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_352,c_fill,g_auto,q_auto,dpr_1.0,f_auto/website/passions/slider/Newbies-optimized",
      heading: "Newbies",
    },
    {
      id: 1,
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/260debd1b7f887703f4d7779f7668437",
      heading: "Families",
    },
    {
      id: 1,
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_352,c_fill,g_auto,q_auto,dpr_1.0,f_auto/website/passions/slider/Foodies-optimized",
      heading: "foodies",
    },
    {
      id: 1,
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_352,c_fill,g_auto,q_auto,dpr_1.0,f_auto/website/passions/slider/Newbies-optimized",
      heading: "Newbies",
    },
  ];
  const popularDestination = [
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_376,h_280,c_fill,g_auto,q_auto,dpr_1.0,f_auto/destinations/portugal/Lisbon",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_376,h_280,c_fill,g_auto,q_auto,dpr_1.0,f_auto/3cd4a790944dbfb2fb9970a79a61be72",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_376,h_280,c_fill,g_auto,q_auto,dpr_1.0,f_auto/destinations/thailand/Chang_Mai",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_376,h_280,c_fill,g_auto,q_auto,dpr_1.0,f_auto/destinations/italy/Florence",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_376,h_280,c_fill,g_auto,q_auto,dpr_1.0,f_auto/destinations/spain/Barcelona",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_376,h_280,c_fill,g_auto,q_auto,dpr_1.0,f_auto/destinations/spain/Javea/Javea9",
      heading: "foodies",
    },
  ];
  const topTour = [
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/cbd123c5b59d595c251c55dec26db0f8",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/260debd1b7f887703f4d7779f7668437",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/2966ef4d20b2a9bfafd3fda3a35cbdde",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/f5213c4f0f00fd3510ea7881bffdf7da",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/cbd123c5b59d595c251c55dec26db0f8",
      heading: "foodies",
    },
    {
      imgLink:
        "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/f5213c4f0f00fd3510ea7881bffdf7da",
      heading: "foodies",
    },
  ];
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
        {props.noOfCards === 2 ? (
          <h1>Top 5 Walking Tours worldwide</h1>
        ) : (
          <h1>
            {props.noOfCards === 3
              ? "Popular Destination"
              : "Experiences for every interest"}
          </h1>
        )}
      </div>
      <div className="carousel">
        <Carousel responsive={responsive} infinite="true">
          {props.noOfCards === 5 &&
            allTourCards.map((each, index) => (
              <div key={index} style={{ padding: "10px" }}>
                {props.noOfCards === 5 && (
                  <ProfileCard
                    showImage={props.noOfCards}
                    imgLink={each.imgLink}
                    heading={each.heading}
                    seeMore={false}
                  />
                )}
              </div>
            ))}
          {props.noOfCards === 2 &&
            topTour.map((each, index) => (
              <div key={index} style={{ padding: "10px" }}>
                <DestinationCard
                  showImage={props.noOfCards}
                  imgLink={each.imgLink}
                />
              </div>
            ))}
          {props.noOfCards === 3 &&
            popularDestination.map((each, index) => (
              <div key={index} style={{ padding: "10px" }}>
                <DestinationCard
                  showImage={props.noOfCards}
                  imgLink={each.imgLink}
                />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AllTourCarousel;

import React from "react";
import "./top-tour-carousel.scss";
import Carousel from "react-multi-carousel";
import { DestinationCard, ProfileCard } from "../../components/cards";
import "react-multi-carousel/lib/styles.css";

const AllTourCarousel = (props) => {
  console.log(props);
  
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
          <h1>Top 5 {props.tourName} Tours worldwide</h1>
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
            props.allTourCards.map((each, index) => (
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
            props.topTour.map((each, index) => (
              <div key={index} style={{ padding: "10px" }}>
                <DestinationCard
                  showImage={props.noOfCards}
                  imgLink={each.imgLink}
                />
              </div>
            ))}
          {props.noOfCards === 3 &&
           props.popularDestination.map((each, index) => (
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

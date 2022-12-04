import React from "react";
import { Navbar, Footer, Contactus, TourDetails ,AllTourCarousel } from "../../container";
import "./walking-tour.scss";

const WalkingTour = () => (
  <div>
    <Navbar />
    <div className="walkingTour">
      <TourDetails />
      <AllTourCarousel noOfCards={2}/>
      <AllTourCarousel noOfCards={3} />
      <AllTourCarousel noOfCards={5} />
      
    </div>
    <Contactus />
    <Footer />
  </div>
);

export default WalkingTour;

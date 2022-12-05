import React from "react";
import {
  Navbar,
  Footer,
  Contactus,
  TourDetails,
  AllTourCarousel,
} from "../../container";
import Carousel from "react-multi-carousel";
import "./walking-tour.scss";
import { ProfileCard } from "../../components/cards";
import WalkingTourWorldWide from "./components/walkingTourWorldWide";
import ReviewSection from "./components/reviewSection";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
const LocalsChoice = [
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/e0aa62e2837c060f8d14f02022c6678f",
    heading: "foodies",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/fdb93352a030f220eb9b002118cc0bc1",
    heading: "foodies",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/ca4074a0fc435902e421d12fb6f8fbf5",
    heading: "foodies",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/51f3653be43a1898d6712d6573026202",
    heading: "foodies",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/51f3653be43a1898d6712d6573026202",
    heading: "foodies",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/260debd1b7f887703f4d7779f7668437",
    heading: "foodies",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/fdb93352a030f220eb9b002118cc0bc1",
    heading: "foodies",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/65d79d49eb63b3490fe82eedcd85146a",
    heading: "foodies",
  },
];

const WalkingTour = () => (
  <div>
    <Navbar />
    <div className="walkingTour">
      <TourDetails />
      <AllTourCarousel noOfCards={2} />
      <AllTourCarousel noOfCards={3} />
      <AllTourCarousel noOfCards={5} />
      <WalkingTourWorldWide />
      <div>
        <div className="container allTourCarousel">
          <div className="Header">
            <h1>Explore with a local of your choice</h1>
            <p>
              Learn about their personal stories, and find out how you can
              explore together
            </p>
          </div>
          <div className="carousel">
            <Carousel responsive={responsive} infinite="true">
              {LocalsChoice.map((each, index) => (
                <div key={index} style={{ padding: "10px" }}>
                  <ProfileCard imgLink={each.imgLink} heading={each.heading} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
      <WalkingTourWorldWide />
      <ReviewSection />
    <Contactus />
    <Footer />
  </div>
);

export default WalkingTour;

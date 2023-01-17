import React from "react";
import {
  Navbar,
  Footer,
  Contactus,
  TourDetails,
  AllTourCarousel,
} from "../../container";
import Carousel from "react-multi-carousel";
import "./bike-tour.scss";
import { ProfileCard } from "../../components/cards";
import WalkingTourWorldWide from "./components/walkingTourWorldWide";
import ReviewSection from "./components/reviewSection";
import foodBanner from "../../assets/food_tour/bike-banner.webp"


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
    heading: "Anna",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/fdb93352a030f220eb9b002118cc0bc1",
    heading: "Fusina",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/ca4074a0fc435902e421d12fb6f8fbf5",
    heading: "Ian",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/65d79d49eb63b3490fe82eedcd85146a",
    heading: "Annet",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/51f3653be43a1898d6712d6573026202",
    heading: "Otto",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/260debd1b7f887703f4d7779f7668437",
    heading: "Christa",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/fdb93352a030f220eb9b002118cc0bc1",
    heading: "Fusina",
  },
  {
    id: 1,
    imgLink:
      "https://withlocals-com-res.cloudinary.com/image/upload/w_216,h_344,c_fill,g_auto,q_auto,dpr_1.0,f_auto/e0aa62e2837c060f8d14f02022c6678f",
    heading: "Anna",
  },
];
const allTourCards = [
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
];
const popularDestination = [
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
      "https://withlocals-com-res.cloudinary.com/image/upload/w_376,h_280,c_fill,g_auto,q_auto,dpr_1.0,f_auto/destinations/spain/Javea/Javea9",
    heading: "foodies",
  },
];
const topTour = [
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
      "https://withlocals-com-res.cloudinary.com/image/upload/w_533,h_300,c_fill,g_auto,q_auto,dpr_1.0,f_auto/f5213c4f0f00fd3510ea7881bffdf7da",
    heading: "foodies",
  },
];

const BikeTour = () => (
  <div>
    <Navbar />
    <div className="bikeTour">
      <div className="Section1">
        <TourDetails  heading='All Bike Tours worldwide' img={foodBanner}/>
      </div>
      <div className="Section2">
        <AllTourCarousel noOfCards={2} topTour={topTour} tourName="Bike"/>
      </div>
      <div className="Section3">
        <AllTourCarousel noOfCards={3} popularDestination={popularDestination}/>
      </div>
      <div className="Section4">
        <AllTourCarousel noOfCards={5} allTourCards={allTourCards}/>
      </div>
      <div className="Section5">
        <WalkingTourWorldWide />
      </div>

      <div className="section6">
        <div className="container ExploreLocals">
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
                  <ProfileCard
                    imgLink={each.imgLink}
                    heading={each.heading}
                    seeMore={true}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    {/* <WalkingTourWorldWide /> */}
    <ReviewSection />
    <Contactus />
    <Footer />
  </div>
);

export default BikeTour;

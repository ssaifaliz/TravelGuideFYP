import React from "react";
import {
  Navbar,
  Header,
  Info,
  Testimonials,
  Destination,
  Explore,
  Blog,
  Contactus,
  Footer,
} from "../../container";
import FloatBtn from "../../components/floatBtn/floatBtn";
import "./home.scss";
import group1 from "../../assets/packages/group3.png";
import group2 from "../../assets/packages/group4.png";
import group3 from "../../assets/packages/group5.png";
import { Link } from "react-router-dom";
const group = [
  {
    id: 7,
    image: group1,
    text: "Quetta zarat (Weekly)",
  },
  {
    id: 8,
    image: group2,
    text: "Ormara Beach (Weekly)",
  },
  {
    id: 9,
    image: group3,
    text: "Gorakh Hills (Weekly)",
  },
];

const Home = () => (
  <div>
    <FloatBtn />
    <Navbar />
    <Header />
    <Info />
    <Testimonials />
    <Destination />
    <Explore />
    <div className="HomePackages">
      <div className="container">
        <div className="heading">Tour Packages</div>
        <div className="row">
          {group.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Link to={{ pathname: `/package-detail/${item.id}` }}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <h6>{item.text}</h6>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/tour-packages">
          <p>See More Packages</p>
        </Link>
      </div>
    </div>
    <Blog />
    <Contactus />
    <Footer />
  </div>
);

export default Home;

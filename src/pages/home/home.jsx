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
import "./home.scss";

const Home = () => (
  <div>
    <Navbar />
    <Header />
    <Info />
    <Testimonials />
    <Destination />
    <Explore />
    <Blog />
    <Contactus />
    <Footer />
  </div>
);

export default Home;

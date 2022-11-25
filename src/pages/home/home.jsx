import React from "react";
import {
  Navbar,
  Header,
  Info,
  Testimonials,
  Destination,
  Blog,
  Contactus,
  Footer,
} from "../../components";
import "./home.scss";

const Home = () => (
  <div>
    <Navbar />
    <Header />
    <Info />
    <Testimonials />
    <Destination />
    <Blog />
    <Contactus />
    <Footer />
  </div>
);

export default Home;

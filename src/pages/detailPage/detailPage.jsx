import React from "react";
import { Container } from "react-bootstrap";
import { Contactus as ContactUs, Footer, Navbar } from "../../container";
import FormSection from "./components/formSection";
import LeftSection from "./components/leftSection";
import Tours from "./components/tours";
import VideoSection from "./components/videoSection";
import style from "./detailPage.module.scss";

const DetailPage = () => (
  <div style={{}}>
    <Navbar />
    <Container>
      <VideoSection />
      <div className="d-flex" style={{}}>
        <LeftSection />
        <div className="" style={{ flex: 1 }}>
          <FormSection />
          <Tours />
          <Tours />
          <Tours />
        </div>
      </div>
    </Container>
    <ContactUs />
    <Footer />
  </div>
);

export default DetailPage;

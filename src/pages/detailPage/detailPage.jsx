import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Contactus as ContactUs, Footer, Navbar } from "../../container";
import FormSection from "./components/formSection";
import LeftSection from "./components/leftSection";
import Tours from "./components/tours";
// import VideoSection from "./components/videoSection";
import { useParams } from "react-router-dom";
import Banner from "./components/banner";
import skrduImage from "../../assets/skardu.png";
import islamabadImage from "../../assets/islamabad.webp";
import swatImage from "../../assets/visit-lake-in-swat.jpg";
import malamJabbaImage from "../../assets/Malam-Jabba2.webp";
import "./detailPage.module.scss";

const cities = [
  { id: 1, name: "Skardu", bannerImage: skrduImage },
  { id: 2, name: "Malam Jabba", bannerImage: malamJabbaImage },
  { id: 3, name: "Swat", bannerImage: swatImage },
  {
    id: 4,
    name: "Islamabad",
    bannerImage: islamabadImage,
  },
];

const DetailPage = () => {
  const params = useParams();
  console.log(params.destinationId);
  const [cityDetails, setCityDetails] = useState();

  useEffect(() => {
    console.log("hehehehehh");
    console.log(params.destinationId, "destinationId");
    setCityDetails(
      cities.find((fin) => fin.id === Number(params.destinationId))
    );
  }, []);
  return (
    <div style={{}}>
      <Navbar />
      <Container>
        <Banner banner={cityDetails} />
        <div className="d-flex" style={{}}>
          <LeftSection detail={cityDetails} />
          <div className="" style={{ flex: 1 }}>
            <FormSection detail={cityDetails} />
            <Tours detail={cityDetails} />
            <Tours detail={cityDetails} />
            <Tours detail={cityDetails} />
          </div>
        </div>
      </Container>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default DetailPage;

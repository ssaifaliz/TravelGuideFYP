import React, { useEffect, useState } from "react";
import "./packagesDetails.scss";
import privateImage1 from "../../assets/packages/private1.png";
import { Navbar, Footer, Contactus } from "../../container";
import paymentCards from "../../assets/creditcards.png";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import privateImage2 from "../../assets/packages/private2.png";
import privateImage3 from "../../assets/packages/private3.png";
import privateImage4 from "../../assets/packages/private4.png";
import privateImage5 from "../../assets/packages/private5.png";
import privateImage6 from "../../assets/packages/private6.png";
import group1 from "../../assets/packages/group3.png";
import group2 from "../../assets/packages/group4.png";
import group3 from "../../assets/packages/group5.png";
import family1 from "../../assets/packages/family1.png";
import family2 from "../../assets/packages/family2.png";
import family3 from "../../assets/packages/family3.png";
import family4 from "../../assets/packages/group1.png";
import family5 from "../../assets/packages/group2.png";

const packagesArray = [
  {
    id: 1,
    image: privateImage1,
    text: "Shandur & Hunza (7 Days)",
  },
  {
    id: 2,
    image: privateImage2,
    text: "Kaplu & Skardu (7 Days)",
  },
  {
    id: 3,
    image: privateImage3,
    text: " Skardu & Kaplu (7 Days)",
  },
  {
    id: 4,
    image: privateImage4,
    text: "Hunza, Giltgit & Naltar (7 Days)",
  },
  {
    id: 5,
    image: privateImage5,
    text: "Skardu Valley (5 Days)",
  },
  {
    id: 6,
    image: privateImage6,
    text: "Kashmir, Neelam & Arengkel (5 Days)",
  },
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
  {
    id: 10,
    image: family1,
    text: "Astore Valley & Skardu (7 Days)",
  },
  {
    id: 11,
    image: family2,
    text: "Gilgit, Hunza & Astore  (7 Days)",
  },
  {
    id: 12,
    image: family3,
    text: "Kalash Valley (7 Days)",
  },
  {
    id: 13,
    image: family4,
    text: "Hunza, Nalter Valley(10 Days)",
  },
  {
    id: 14,
    image: family5,
    text: "Swat, Kalam, Malam Jabba, Shogran (10 Days)",
  },
];

const PackagesDetails = () => {
  const params = useParams();
  
  const [packageData, setPackageData] = useState();

  const getPackagesById = () => {
    
    const data = packagesArray.find((item) => item.id === Number(params.packageId));
    setPackageData(data);
  };

  useEffect(() => {
    getPackagesById();
  }, []);

  return (
    <>
      <Navbar />
      {packageData && (
        <div className="packagesDetails">
          <div className="detailSection">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <img src={packageData.image} alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h1>{packageData.text}</h1>
                  <p className="price">₨ 190,000.00</p>
                  <p>
                    Karachi to Kamrat Valley Tour. The purpose of starting this
                    tour is to visit some of the special travelers who live in
                    or near Karachi. He wants to tour Kumrat Valley and with
                    less time and more engagements he can tour Kumrat Valley in
                    less time. The tour will include a two-way flight from
                    Karachi to Islamabad. The journey will take about an hour.
                    The journey from Islamabad to Upper Dir will be by motor car
                    and beyond that the tour of Kumrat Valley will be by jeep.
                    Provide the best transport, accommodation in this tour
                    InshaAllah
                  </p>
                  <div className="dateInput">
                    <h5>Start</h5>
                    <input type="date" />
                  </div>
                  <button>Add to cart</button>
                  <div className="paymentCards">
                    <img src={paymentCards} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tabsSection">
            <div className="container">
              <Tabs
                defaultActiveKey="description"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="description" title="Description">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                    <Row>
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="1">
                              Day No 1 of departure
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="2">Day No 2</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="3">Day No 3</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="4">Day No 4</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={9}>
                        <Tab.Content>
                          <Tab.Pane eventKey="1">
                            <h6>Departure time</h6>
                            <p>6 am to 9 am</p>
                            <h6>Departure points</h6>
                            <p>Islamabad and Peshawar</p>
                            <h6>Reach the destination</h6>
                            <p>
                              Peshawar motorway, swat motorway , Checkdara
                              Interchange, Dir Chitral Road, Dir Valley, Lowari
                              Tunnel, Drosh , ayon Valley and Chitral City
                            </p>
                            <h6>Vehicles used in transport</h6>
                            <p>
                              A motor car will be used for Islamabad or Peshawar
                              above Dir Upper and Toyota Rav4 Jeep will be used
                              for all the tour thereafter.
                            </p>
                            <h6>Night stay</h6>
                            <p>
                              Pamir Hotel Shahi Fort Chitral City Banks of river
                              Chitral
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="2">
                            <h6>Departure time</h6>
                            <p>6 am to 9 am</p>
                            <h6>Departure points</h6>
                            <p>Islamabad and Peshawar</p>
                            <h6>Reach the destination</h6>
                            <p>
                              Peshawar motorway, swat motorway , Checkdara
                              Interchange, Dir Chitral Road, Dir Valley, Lowari
                              Tunnel, Drosh , ayon Valley and Chitral City
                            </p>
                            <h6>Vehicles used in transport</h6>
                            <p>
                              A motor car will be used for Islamabad or Peshawar
                              above Dir Upper and Toyota Rav4 Jeep will be used
                              for all the tour thereafter.
                            </p>
                            <h6>Night stay</h6>
                            <p>
                              Pamir Hotel Shahi Fort Chitral City Banks of river
                              Chitral
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="3">
                            <h6>Departure time</h6>
                            <p>6 am to 9 am</p>
                            <h6>Departure points</h6>
                            <p>Islamabad and Peshawar</p>
                            <h6>Reach the destination</h6>
                            <p>
                              Peshawar motorway, swat motorway , Checkdara
                              Interchange, Dir Chitral Road, Dir Valley, Lowari
                              Tunnel, Drosh , ayon Valley and Chitral City
                            </p>
                            <h6>Vehicles used in transport</h6>
                            <p>
                              A motor car will be used for Islamabad or Peshawar
                              above Dir Upper and Toyota Rav4 Jeep will be used
                              for all the tour thereafter.
                            </p>
                            <h6>Night stay</h6>
                            <p>
                              Pamir Hotel Shahi Fort Chitral City Banks of river
                              Chitral
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="4">
                            <h6>Departure time</h6>
                            <p>6 am to 9 am</p>
                            <h6>Departure points</h6>
                            <p>Islamabad and Peshawar</p>
                            <h6>Reach the destination</h6>
                            <p>
                              Peshawar motorway, swat motorway , Checkdara
                              Interchange, Dir Chitral Road, Dir Valley, Lowari
                              Tunnel, Drosh , ayon Valley and Chitral City
                            </p>
                            <h6>Vehicles used in transport</h6>
                            <p>
                              A motor car will be used for Islamabad or Peshawar
                              above Dir Upper and Toyota Rav4 Jeep will be used
                              for all the tour thereafter.
                            </p>
                            <h6>Night stay</h6>
                            <p>
                              Pamir Hotel Shahi Fort Chitral City Banks of river
                              Chitral
                            </p>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Tab>
                <Tab eventKey="additionalInformation" title="Additional">
                  <Table bordered>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: "bold" }}>Transports</td>
                        <td>The tour will use a jeep And Car</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold" }}>Accommodation</td>
                        <td>Stay in a good and popular hotel or guest house</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )}
      <Contactus />
      <Footer />
    </>
  );
};

export default PackagesDetails;

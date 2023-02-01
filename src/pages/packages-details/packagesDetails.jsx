import React from "react";
import "./packagesDetails.scss";
import privateImage1 from "../../assets/packages/private1.png";
import { Navbar, Footer, Contactus } from "../../container";
import paymentCards from "../../assets/creditcards.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";

const PackagesDetails = () => {
  return (
    <>
      <Navbar />
      <div className="packagesDetails">
        <div className="detailSection">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img src={privateImage1} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <h1>Karachi To Kumrat Valley Tour</h1>
                <p className="price">₨ 190,000.00</p>
                <p>
                  Karachi to Kamrat Valley Tour. The purpose of starting this
                  tour is to visit some of the special travelers who live in or
                  near Karachi. He wants to tour Kumrat Valley and with less
                  time and more engagements he can tour Kumrat Valley in less
                  time. The tour will include a two-way flight from Karachi to
                  Islamabad. The journey will take about an hour. The journey
                  from Islamabad to Upper Dir will be by motor car and beyond
                  that the tour of Kumrat Valley will be by jeep. Provide the
                  best transport, accommodation in this tour InshaAllah
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
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              description
            </Tab>
            <Tab eventKey="additionalInformation" title="Additional">
              <Table bordered>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="faqs" title="faqs">
              description
            </Tab>
          </Tabs>
        </div>
      </div>
      <Contactus />
      <Footer />
    </>
  );
};

export default PackagesDetails;

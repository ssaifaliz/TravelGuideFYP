import React from "react";
import {
  Navbar,
  Footer,
  Contactus
} from "../../container";
import "./bike-tour.scss";
import Form from "react-bootstrap/Form";
import ellipse1 from "../../assets/food_tour/ellipse1.png";
import ellipse2 from "../../assets/food_tour/ellipse2.png";
import ellipse3 from "../../assets/food_tour/ellipse3.png";
import ellipse4 from "../../assets/food_tour/ellipse4.png";
import ellipse5 from "../../assets/food_tour/ellipse5.png";
import ellipse6 from "../../assets/food_tour/ellipse6.png";
import ellipse7 from "../../assets/food_tour/ellipse7.png";
import ellipse8 from "../../assets/food_tour/ellipse8.png";
import ellipse9 from "../../assets/food_tour/ellipse9.png";
import cardImage1 from "../../assets/food_tour/bikeImage1.png";
import cardImage2 from "../../assets/food_tour/bikeImage2.png";
import cardImage3 from "../../assets/food_tour/bikeImage3.png";
import cardImage4 from "../../assets/food_tour/bikeImage4.png";
import cardImage5 from "../../assets/food_tour/bikeImage5.png";
import { FaRegClock, FaCheck } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

const widget = [
  {
    img: ellipse1,
    text: "Bike Tours",
  },
  {
    img: ellipse9,
    text: "Deosai Bike Tours",
  },
  {
    img: ellipse5,
    text: "Naran Hunza Nalter Valley Tour",
  },
  {
    img: ellipse6,
    text: "Baltistan Tour",
  },
  {
    img: ellipse3,
    text: "2 Hours Desert Tour",
  },
  {
    img: ellipse2,
    text: "China Bike Trip",
  },
  {
    img: ellipse4,
    text: "Crossing Deosai Plateau",
  },
  {
    img: ellipse8,
    text: "KKH Hunza Valley ",
  },
  {
    img: ellipse7,
    text: "Heli Safari To Concordia (4750m)",
  },
];
const cards = [
  {
    image: cardImage1,
    title: "Crossing Deosai Plateau",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "3 to 4 hours",
    price: "80.00",
  },
  {
    image: cardImage2,
    title: "Migrino Desert & Beach Off Road Tour",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "3 to 30 minutes",
    price: "20.52",
  },
  {
    image: cardImage3,
    title: "Hindu Kush Bike",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "4 to 5 hours",
    price: "150.00",
  },
  {
    image: cardImage4,
    title: "Deosai Bike",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "3 to 4 hours",
    price: "100.00",
  },
  {
    image: cardImage5,
    title: "KKH Hunza Valley – China Bike Trip",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "6 hours",
    price: "90.00",
  },
];
const BikeTour = () => (
  <div>
    <Navbar />
    <div className="bikeTour">
      <div className="mainBanner"></div>

      <div className="Header">
        <div className="heading">Top Pakistan Bike Tour</div>
        <div className="container widgetContainer">
          {widget.map((item, index) => (
            <div className="widget" key={index}>
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className="txt">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="container body">
        <div className="row">
          <div className="col-md-3 filters">
            <div className="date">
              <div className="title">When Are you travelling</div>
              <div className="dateInput">
                <input type="date" />
              </div>
            </div>
            <div className="filterChecks">
              <div className="title">Popular</div>
              <div className="checkBoxes">
                <Form>
                  {[
                    "Good for avoiding crowds",
                    "Taking safety measures",
                    "Virtual experiences",
                    "Kid friendly",
                  ].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>
          </div>
          <div className="col-md-9 cardsSection">
            <div className="tourCards">
              {cards.map((item , index) => (
                <div className="tourCardsContainer" style={{backgroundColor:index===0?"#70ab37":"#e3dfce"}}>
                  <div className="Image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="title" style={{color:index===0?"#fff":"#000"}}>{item.title}</div>
                    <div className="txt" style={{color:index===0?"#fff":"#000"}}>{item.text}</div>
                    <div className="time" style={{color:index===0?"#fff":"#000"}}>
                      <FaRegClock /> {item.time}
                    </div>
                    <div className="cancellation" style={{color:index===0?"#fff":"#000"}}>
                      <FaCheck /> Free Cancellation
                    </div>
                  </div>
                  <div className="price" style={{color:index===0?"#fff":"#000"}}>
                    from <br />
                    <div className="PriceMention" style={{color:index===0?"#fff":"#000"}}>${item.price}</div>
                    Price varies by group size
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="faqsSection">
        <div className="container">
          <div className="faqs">
            <div className="heading">Frequently Asked Questions</div>
            <div className="subHeading">
              The answers provided below are based on answers previously given
              by the tour provider to customers’ questions.
            </div>
            <div className="accordionPanelFaqs">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>Q:</span> What are the best Street Food Tours in
                    Pakistan?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="body_Ans">
                      <span>A:</span> The best Street Food Tours in Pakistan
                      according to Viator travelers are:
                    </div>
                    <ul>
                      <li>Street Food Tour of Lahore's Walled City</li>
                      <li>Jalebi Khaana Peena Tour</li>
                      <li>Visit Mohatta Palace Zainab market & Burns road</li>
                      <li>
                        Half-Day Karachi Burns Road Private Victoria Ride with
                        Dinner
                      </li>
                      <li>
                        Ladies Special: Lahore Half day Guided Shopping Tour
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span>Q:</span> What Street Food Tours in Pakistan are
                    taking additional safety precautions?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="body_Ans">
                      <span>A:</span> The best Street Food Tours in Pakistan
                      according to Viator travelers are:
                    </div>
                    <ul>
                      <li>Street Food Tour of Lahore's Walled City</li>
                      <li>Jalebi Khaana Peena Tour</li>
                      <li>Visit Mohatta Palace Zainab market & Burns road</li>
                      <li>
                        Half-Day Karachi Burns Road Private Victoria Ride with
                        Dinner
                      </li>
                      <li>
                        Ladies Special: Lahore Half day Guided Shopping Tour
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span>Q:</span> What Street Food Tours in Pakistan are good
                    for avoiding crowds?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="body_Ans">
                      <span>A:</span> The best Street Food Tours in Pakistan
                      according to Viator travelers are:
                    </div>
                    <ul>
                      <li>Street Food Tour of Lahore's Walled City</li>
                      <li>Jalebi Khaana Peena Tour</li>
                      <li>Visit Mohatta Palace Zainab market & Burns road</li>
                      <li>
                        Half-Day Karachi Burns Road Private Victoria Ride with
                        Dinner
                      </li>
                      <li>
                        Ladies Special: Lahore Half day Guided Shopping Tour
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="container">
            <div className="sectionsDescription">
              <div className="heading">More Tours in Pakistan</div>
              <div className="text">
                The answers provided below are based on answers previously given
                by the tour provider to customers’ questions.
              </div>
            </div>
            <div className="sectionsDescription">
              <div className="heading">Things to do near Pakistan</div>
              <div className="text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </div>
            </div>
            <div className="sectionsDescription">
              <div className="heading">Trending attractions</div>
              <div className="text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </div>
            </div>
            <div className="sectionsDescription">
              <div className="heading">Popular on Viator</div>
              <div className="text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Contactus />
    <Footer />
  </div>
);

export default BikeTour;

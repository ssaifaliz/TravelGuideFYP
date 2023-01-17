import React from "react";
import { Navbar, Footer, Contactus } from "../../container";
import "./food-tour.scss";
import ellipseImage from "../../assets/food_tour/ellipse1.png";
import Form from "react-bootstrap/Form";
import cardImage1 from "../../assets/food_tour/image1.png";
import cardImage2 from "../../assets/food_tour/image2.png";
import cardImage3 from "../../assets/food_tour/image3.png";
import cardImage4 from "../../assets/food_tour/image4.png";
import { FaRegClock, FaCheck } from "react-icons/fa";

const widget = [
  {
    img: ellipseImage,
    text: "Street Food Tours",
  },
  {
    img: ellipseImage,
    text: "Food Tours",
  },
  {
    img: ellipseImage,
    text: "Private Sightseeing Tours",
  },
  {
    img: ellipseImage,
    text: "Food & Drink",
  },
  {
    img: ellipseImage,
    text: "Tours, Sightseeing & Cruises",
  },
  {
    img: ellipseImage,
    text: "Food Tours",
  },
  {
    img: ellipseImage,
    text: "Private Sightseeing Tours",
  },
  {
    img: ellipseImage,
    text: "Food & Drink",
  },
  {
    img: ellipseImage,
    text: "Tours, Sightseeing & Cruises",
  },
];
const cards = [
  {
    image: cardImage1,
    title: "Street Food Tour of Lahore's Walled City",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "3 to 4 hours",
    price: "80.00",
  },
  {
    image: cardImage2,
    title: "Jalebi Khaana Peena Tour",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "3 to 30 minutes",
    price: "20.52",
  },
  {
    image: cardImage3,
    title: "Street Food Tour of Lahore's Walled City",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "4 to 5 hours",
    price: "150.00",
  },
  {
    image: cardImage4,
    title: "Street Food Tour of Lahore's Walled City",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "3 to 4 hours",
    price: "100.00",
  },
  {
    image: cardImage2,
    title: "Street Food Tour of Lahore's Walled City",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. more.....",
    time: "6 hours",
    price: "90.00",
  },
];

const FoodTour = () => (
  <div>
    <Navbar />
    <div className="foodTour">
      <div className="mainBanner"></div>

      <div className="Header">
        <div className="heading">Top Pakistan Street Food Tour</div>
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
          <div className="col-3 filters">
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
          <div className="col-9 cardsSection">
            <div className="tourCards">
              {cards.map((item) => (
                <div className="tourCardsContainer">
                  <div className="Image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="title">{item.title}</div>
                    <div className="txt">{item.text}</div>
                    <div className="time">
                      <FaRegClock /> {item.time}
                    </div>
                    <div className="cancellation">
                      <FaCheck /> Free Cancellation
                    </div>
                  </div>
                  <div className="price">
                    from <br />
                    <div className="PriceMention">${item.price}</div>
                    Price varies by group size
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <Contactus />
    <Footer />
  </div>
);

export default FoodTour;

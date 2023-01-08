import React from "react";
import videoIcon from "../../assets/video-icon.png";
import "./explore.scss";

const arrObj = [
  { name: 'Trips', img: videoIcon },
  { name: 'Guides', img: videoIcon },
  { name: 'Trip Operators', img: videoIcon },
  { name: 'Travel Agencies', img: videoIcon },
  { name: 'Visa Consultants', img: videoIcon },
  { name: 'Restuarants', img: videoIcon },
  { name: 'Home Chefs', img: videoIcon },
  { name: 'Photographers', img: videoIcon },
  { name: 'Videographers', img: videoIcon },
]

const EachCard = ({ each }) => (
  <div style={{
    paddingRight: '6px',
    paddingLeft: '6px',
    cursor: 'pointer',
    minWidth: '130px',
    maxWidth: '130px',
    height: '140px'
  }} class="col">
    <a href="/trips" class="">
      <div style={{
        boxShadow: '0 2px 8px 0 rgb(99 99 99 / 20%)',
        borderRadius: '20px',
        padding: '20px 8px',
        textAlign: 'center',
        color: '#2d2d2d',
        position: 'relative',
        transition: 'all .3s ease-in-out',
        fontSize: '13px',
      }} class="service-icon-item">
        <span style={{
          display: 'flex',
          height: '36px',
          verticalAlign: 'middle',
          textAlign: 'center',
          margin: '0 0 10px',
        }} class="service-icon">
          <img style={{
            width: '32px',
            height: '32px',
            display: 'block',
            margin: '0 auto',
          }} src={each?.img} alt="icons" />
        </span>
        {each?.name}
      </div>
    </a>
  </div>
)

const Explore = () => (
  <div className="blogSection">
    <div className="container">
      <div className="mainHeading">Explore other services</div>
      <div className="row mt-5" style={{display:'flex',flexWrap:'flex-wrap',justifyContent:'space-around'}}>
      {arrObj?.map((each, index) => <EachCard key={index} each={each} />)}
      </div>
    </div>
  </div>
);

export default Explore;

import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import gilgit from "../../assets/gilgit.webp";
import hunza from "../../assets/hunza.webp";
import skardu from "../../assets/skardu.webp";
import swat from "../../assets/swat.webp";
import kashmir from "../../assets/kashmir.webp";
import muree from "../../assets/muree.webp";
import nathiagali from "../../assets/nathiagali.webp";
import karachi from "../../assets/karachi.jpg";
import lahore from "../../assets/lahore.webp";
import islamabad from "../../assets/islamabad.webp";
import "./destination.scss";

const designations = [
  { city: "Gilgit", listen: 200, img: gilgit },
  { city: "Hunza", listen: 300, img: hunza },
  { city: "Skardu", listen: 250, img: skardu },
  { city: "Swat", listen: 100, img: swat },
  { city: "Azad Kashmir", listen: 500, img: kashmir },
  { city: "Murree", listen: 50, img: muree },
  { city: "Nathiagali", listen: 50, img: nathiagali },
  { city: "Karachi", listen: 1000, img: karachi },
  { city: "Lahore", listen: 250, img: lahore },
  { city: "Islamabad", listen: 250, img: islamabad },
];

const DestCard = ({ city, listen, img }) => (
  <div className="col m-2">
    <div style={{
      maxHeight: '230px',
      height: '100%',
      minWidth: '200px',
      maxWidth: '250px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px 0 rgb(99 99 99 / 20%)',
      cursor: 'pointer',
      position: 'relative',
    }}>
      <a style={{ color: '#2d2d2d', transition: 'all .3s ease' }} href="" className="" target="_blank">
        <div style={{ height: '130px' }}>
          <img style={{ width: '100%', height: '100%', objectFit: "cover", borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} src={img} alt="" />
        </div>
        <div style={{
          adding: '3px',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}>
          <h1 style={{
            fontSize: '15px',
            marginTop: '3px',
            marginBottom: '3px',
            fontWeight: '600',
            color: '#2d2d2d',
            textAlign: 'center',
          }}> {city} </h1>
          <h6 style={{
            fontSize: '12px',
            fontWeight: '400',
            textAlign: 'center',
            color: '#2d2d2d',
          }}>{`${listen}+ Listings`}</h6>
        </div>
      </a>
    </div>
  </div>
)

const destination = () => {
  // const router = useRouter
  return (
    <div className="destinationSection">
      <div className="container">
        <div className="mainHeading">SPOTLIGHT DESTINATIONS</div>
        <div className="txt">
          Looking for your next great adventure? We can help. Here is a sampling
          of our most popular destinations. Experience private tours with
          authentic local flavour.
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mx-5">
          {designations?.map((each, index) => <DestCard key={index} city={each?.city} listen={each?.listen} img={each?.img} />)}
          {/* <div className="col m-2">
            <div style={{
              maxHeight: '230px',
              height: '100%',
              minWidth: '200px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px 0 rgb(99 99 99 / 20%)',
              cursor: 'pointer',
              position: 'relative',
            }}>
              <a style={{ color: '#2d2d2d', transition: 'all .3s ease' }} href="" className="" target="_blank">
                <div style={{ height: '130px' }}>
                  <img style={{ width: '100%', height: '100%', objectFit: "cover", borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} src={gilgit} alt="" />
                </div>
                <div style={{
                  adding: '3px',
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                }}>
                  <h1 style={{
                    fontSize: '15px',
                    marginTop: '3px',
                    marginBottom: '3px',
                    fontWeight: '600',
                    color: '#2d2d2d',
                    textAlign: 'center',
                  }}> Gilgit </h1>
                  <h6 style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    textAlign: 'center',
                    color: '#2d2d2d',
                  }}>300+ Listings</h6>
                </div>
              </a>
            </div>
          </div> */}

          {/* {designations?.map((each, index) => (
            <div
              key={index}
              className={`col-md-3 destinationImage${(index += 1)}`}
              onClick={() => {}}
            >
              <Link to={{pathname:`/detailPage/${each.id}`}}>
                <div className="txtCountryCity">{each?.city}</div>
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default destination;

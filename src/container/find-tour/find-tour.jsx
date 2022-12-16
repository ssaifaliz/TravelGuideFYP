import React from "react";
import "./find-tour.scss";
import { FaMedkit, FaThumbsUp, FaRegMap } from "react-icons/fa";
import worldMap from "../../assets/worldmap.gif";

const FindTours = () => (
  <div className="FindTour">
    <div className="container">
      <div class="page-title">
        <h1>Find A Tour</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="widget">
            <div className="closing">
              <div className="icon-holder">
                <FaMedkit />
              </div>
              <div className="widget-title">
                <h3>Health and Safety Guidelines</h3>
              </div>
              <p className="healthTxt">
                At The Explorer, we will always put health and safety first.
              </p>
            </div>

            <div className="closing">
              <div className="icon-holder">
                <FaThumbsUp />
              </div>
              <div className="widget-title">
                <h3>Testimonials</h3>
              </div>
              <div>
                <p>
                  Tour in Cebu City, Philippines:
                  <i>
                    "Alfredo was extremely flexible and patient through my last
                    minute changes. We still accomplished the highlights of
                    Cebu,..."
                  </i>
                  &nbsp; <span className="links">[more]</span>
                </p>
                <p>
                  Chris Nguyen - Dec, 2017 &nbsp;{" "}
                  <span className="links">[view tour]</span>
                </p>
              </div>
              <div>
                <p>
                  Tour in Cebu City, Philippines:
                  <i>
                    "Alfredo was extremely flexible and patient through my last
                    minute changes. We still accomplished the highlights of
                    Cebu,..."
                  </i>
                  &nbsp; <span className="links">[more]</span>
                </p>
                <p>
                  Chris Nguyen - Dec, 2017 &nbsp;{" "}
                  <span className="links">[view tour]</span>
                </p>
              </div>
            </div>
            <div className="closing">
              <div className="icon-holder">
                <FaRegMap />
              </div>
              <div className="widget-title">
                <h3>About The Explorer</h3>
              </div>
              <div className="floatLeft">
                <img
                  border="0"
                  alt="check"
                  width="15"
                  height="15"
                  src="https://www.toursbylocals.com/images/green-tick_15x15.jpg"
                />
                <b>4,551</b> Guides in <b>188</b> Countries!
                <span>
                  <img
                    border="0"
                    alt="check"
                    width="15"
                    height="15"
                    src="https://www.toursbylocals.com/images/green-tick_15x15.jpg"
                  />
                  <b>1,853,399</b> Travelers Served!
                </span>
              </div>

              <p className="learnMore">
                Learn More about how The Explorer works
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div class="search-map">
            <div className="search-column">
              <h4>Where are you going?</h4>
              <div class="inputSearch">
                <input placeholder="Type City, Country or Tour...." />
                <div class="goBtn">
                  <button>GO</button>
                </div>
              </div>
            </div>
            <div className="mapSection">
              <p>
                Or click a map location* and find your next travel adventure!
              </p>
              <div className="text-align">
                <img src={worldMap} alt="" />
              </div>
            </div>
            <div className="regionsName">
              <p>Find The Explorer guides in the following regions:</p>
              <div className="regions">
                Africa (north) <span>|</span> Africa (south) <span>|</span>{" "}
                Alaska <span>|</span> Asia (central) <span>|</span> Asia (east){" "}
                <span>|</span> Asia (south east) <span>|</span> Asia (south){" "}
                <span>|</span> Australia <span>|</span> Azores, Madeira and
                Canary Islands <span>|</span> Bermuda <span>|</span> Brazil{" "}
                <span>|</span> Britain & Ireland <span>|</span> Canada
                (Atlantic) <span>|</span> Canada (central) <span>|</span> Canada
                (north)
                <span>|</span> Canada (west) <span>|</span> Caribbean{" "}
                <span>|</span> Central America <span>|</span> Eastern
                Mediterranean <span>|</span> Europe (east) <span>|</span> Europe
                (south) <span>|</span> Europe (west) <span>|</span>
                Greenland <span>|</span> Hawaii <span>|</span> Japan and Korea{" "}
                <span>|</span> Mexico <span>|</span> Middle East <span>|</span>
                Mongolia <span>|</span> New Zealand <span>|</span> Russia{" "}
                <span>|</span> Saint-Helena <span>|</span> Scandinavia{" "}
                <span>|</span>
                S. America (north) <span>|</span> S. America (south){" "}
                <span>|</span> S. America (west central) <span>|</span> South
                Pacific (east) <span>|</span> South Pacific (west){" "}
                <span>|</span> Spain & Portugal <span>|</span> Svalbard{" "}
                <span>|</span> Turkey and Cyprus <span>|</span> USA
                (continental) <span>|</span>
              </div>
              <p>
                *Can't select the region that interests you? ToursByLocals may
                be partnering with guides in that region, but they have not yet
                completed our application process or fully published their
                tours. Please <span className="links">contact us</span> and we
                may be able to help.
              </p>
              <p>
                If you have an idea for a great tour and want to become a tour
                guide, we invite you to <span className="links">apply</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FindTours;

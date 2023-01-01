import React from "react";
import { Link } from "react-router-dom";
import "./destination.scss";

const designations = [
  {id:1, city: "Skardu" },
  {id:2, city: "Malam Jabba" },
  {id:3, city: "Sawat" },
  {id:4, city: "Islamabad" },
];

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
        <div className="row">
          {designations?.map((each, index) => (
            <div
              key={index}
              className={`col-md-3 destinationImage${(index += 1)}`}
              onClick={() => {}}
            >
              <Link to={{pathname:`/detailPage/${each.id}`}}>
                <div className="txtCountryCity">{each?.city}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default destination;

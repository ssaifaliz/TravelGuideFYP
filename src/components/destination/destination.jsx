import React from "react";
import "./destination.scss";

const designations = [
  { city: "Paris", country: "France" },
  { city: "London", country: "England" },
  { city: "Tokyo", country: "Japan" },
  { city: "Rome", country: "Italy" },
];

const destination = () => {
  // const router = useRouter
  return(
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
            // onClick={()=>console.log('sadfghjk')}
            onClick={()=>{}}
          >
            <div className="txtCountryCity">{`${each?.city}, ${each?.country}`}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)};

export default destination;
